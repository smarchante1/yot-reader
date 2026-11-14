import { useState, useEffect, ComponentType } from 'react';
import { NewsPost, NewsPostWithComponent } from '@/types';

export function usePosts() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const postModules = import.meta.glob<
          true,
          string,
          {
            frontmatter: Omit<NewsPost, 'id' | 'content'>;
            default: ComponentType;
          }
        >('./posts/*.{md,mdx}', {
          eager: true,
        });

        const fetchedPosts = Object.entries(postModules).map(
          ([path, module]) => {
            const { frontmatter, default: ContentComponent } = module;
            const id = path.split('/').pop()?.replace('.md', '') || '';

            return {
              id,
              ...frontmatter,
              content: ContentComponent,
              date: new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
            } as NewsPostWithComponent;
          },
        );

        setPosts(
          fetchedPosts.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          ),
        );
      } catch (e) {
        console.error('Failed to fetch posts:', e);
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { posts, loading, error };
}
