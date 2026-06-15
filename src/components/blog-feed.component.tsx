import type { FC } from "react";
import type { BlogFeedItem } from "~/server/blog-feed";
import { BLOG_HOME_URL } from "~/server/blog-feed";

interface BlogFeedProps {
  posts: BlogFeedItem[];
}

function formatPostDate(pubDate: string): string {
  const parsed = new Date(pubDate);
  if (Number.isNaN(parsed.getTime())) {
    return "Recent post";
  }

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export const BlogFeed: FC<BlogFeedProps> = ({ posts }) => {
  return (
    <section className="w-full max-w-4xl px-4">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
          Recent Writing
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
          New notes on AI, software, and the ideas I&apos;m working through in public.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map((post) => (
              <a
                key={`${post.link}-${post.pubDate}`}
                href={post.link}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  {formatPostDate(post.pubDate)}
                </p>
                <h3 className="mb-3 text-lg font-semibold text-slate-900 transition-colors group-hover:text-slate-700 dark:text-white dark:group-hover:text-slate-200">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {truncate(post.description, 180)}
                </p>
                <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Read post
                  <span aria-hidden="true">-&gt;</span>
                </span>
              </a>
            ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            The live blog feed is temporarily unavailable, but the latest writing is still on the blog.
          </p>
        </div>
      )}

      <div className="mt-6 text-center">
        <a
          href={BLOG_HOME_URL}
          className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-700 hover:text-slate-900 dark:border-slate-500 dark:text-slate-200 dark:hover:border-slate-200 dark:hover:text-white"
        >
          See more on the blog
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </section>
  );
};