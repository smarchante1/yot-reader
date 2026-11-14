import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePosts } from '../usePosts';
import { ArrowLeft, Calendar } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { posts, loading } = usePosts();

  if (loading) {
    return <div>Loading post...</div>;
  }

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  const ContentComponent = post.content;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#016F93] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Community Hub
          </Link>
        </div>
        <article>
          <div className="mb-8 border-b pb-8">
            <h1 className="text-4xl md:text-5xl font-black font-cinzel text-[#016F93] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {post.date}
              </span>
              <span>by {post.author}</span>
            </div>
          </div>
          <div className="prose lg:prose-xl max-w-none">
            <ContentComponent />
          </div>
        </article>
      </div>
    </div>
  );
};
