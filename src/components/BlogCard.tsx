import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/types';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, className }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={cn("group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", className)}>
      <Link href={`/blog/${post.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </div>
        </div>

        <div className="p-6">
          {/* Meta Information */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="flex items-center justify-between">
            <span className="text-green-600 font-medium group-hover:text-green-700 transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;