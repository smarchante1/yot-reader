// src/components/OptimizedImage.jsx
import React from 'react';

/**
 * Renders an `<img>` tag that fetches an image from the
 * backend optimization service and includes attributes for lazy loading.
 *
 * @param {{
 *   src: string; // The original source URL of the image
 *   alt: string; // Alt text for accessibility
 *   className?: string; // Optional CSS classes
 *   [key: string]: any; // Allows any other standard img attributes
 * }} props
 */
export const OptimizedImage = ({
  src,
  alt,
  className,
  loading,
  decoding,
  ...rest
}) => {
  // Construct the URL to our new image optimization endpoint.
  // We encode the original URL to ensure it's passed correctly as a query parameter.
  const optimizedSrc = `/api/image-proxy?url=${encodeURIComponent(src)}`;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={className}
      loading="lazy" // Defer loading of off-screen images until they're near the viewport
      decoding="async" // Decode the image asynchronously to prevent blocking the main thread
      {...rest} // Pass any other props (e.g., width, height, onClick)
    />
  );
};
