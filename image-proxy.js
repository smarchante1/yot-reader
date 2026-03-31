// server/image-proxy.js
import sharp from 'sharp';
import fetch from 'node-fetch'; // You might already have a way to fetch, replace if needed

/**
 * Middleware-like function for an Express.js-compatible server
 * to handle on-the-fly image optimization to WebP.
 *
 * @param {import('express').Request} req The request object. Expects `req.query.url` to be the original image URL.
 * @param {import('express').Response} res The response object.
 * @param {import('express').NextFunction} [next] The next middleware function (optional).
 */
export async function imageProxy(req, res) {
  const imageUrl = req.query.url;
  // Parse blur and saturate from query params
  const blur = req.query.blur ? parseInt(req.query.blur, 10) : null;
  const saturate = req.query.saturate ? parseFloat(req.query.saturate) : null;

  if (!imageUrl || typeof imageUrl !== 'string') {
    return res
      .status(400)
      .send('Image URL (query parameter "url") is required');
  }

  try {
    // Fetch the original image from the source URL
    const response = await fetch(imageUrl);
    if (!response.ok) {
      // If the original image fetch fails, propagate the error or respond with 404/500
      console.warn(
        `Failed to fetch original image from ${imageUrl}: ${response.status} ${response.statusText}`,
      );
      return res.status(response.status).send(response.statusText);
    }

    const imageBuffer = await response.arrayBuffer();

    let imageProcessor = sharp(Buffer.from(imageBuffer));

    // Apply blur if requested. A sigma of (radius / 2) is a good approximation.
    if (blur && blur > 0) {
      // Cap the blur sigma to a reasonable value to prevent abuse
      const sigma = Math.max(0.3, Math.min(blur, 20));
      imageProcessor = imageProcessor.blur(sigma);
    }

    // Apply saturation if requested
    if (saturate !== null) {
      imageProcessor = imageProcessor.modulate({ saturation: saturate });
    }

    const outputImage = await imageProcessor.webp({ quality: 80 }).toBuffer();

    res.setHeader('Content-Type', 'image/webp');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // Cache for 1 year
    res.send(outputImage);
  } catch (error) {
    console.error(`Error processing image ${imageUrl}:`, error);
    res.status(500).send('Error processing image');
  }
}
