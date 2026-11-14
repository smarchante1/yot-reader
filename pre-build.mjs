import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'content', 'news');
const outputDir = path.join(process.cwd(), 'public');
const outputFile = path.join(outputDir, 'news-posts.json');

export async function generateNewsCache() {
  try {
    const files = await fs.readdir(contentDir);
    const posts = [];

    for (const file of files) {
      if (path.extname(file) === '.md') {
        const id = file.replace('.md', '');
        const filePath = path.join(contentDir, file);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        posts.push({ id, ...data, content });
      }
    }

    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputFile, JSON.stringify(posts, null, 2));
    console.log('✅ News posts cache generated successfully.');
  } catch (error) {
    console.error('Error generating news cache:', error);
  }
}
