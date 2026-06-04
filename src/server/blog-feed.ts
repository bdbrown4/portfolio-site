export interface BlogFeedItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
}

const BLOG_HOME_URL = "https://bdbrown4.github.io/bens-blog/";
const BLOG_RSS_URL = `${BLOG_HOME_URL}rss.xml`;

function decodeXml(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .trim();
}

function extractTag(source: string, tagName: string): string {
  const match = source.match(new RegExp(`<${tagName}>([\\s\\S]*?)</${tagName}>`, "i"));
  return decodeXml(match?.[1] ?? "");
}

function normalizeBlogLink(link: string): string {
  return link
    .replace("https://bdbrown4.github.io/bens-blogblog/", "https://bdbrown4.github.io/bens-blog/blog/")
    .replace("/bens-blogblog/", "/bens-blog/blog/");
}

function parseFeed(xml: string): BlogFeedItem[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];

  return items
    .map((match) => {
      const item = match[1] ?? "";
      return {
        title: extractTag(item, "title"),
        description: extractTag(item, "description"),
        link: normalizeBlogLink(extractTag(item, "link")),
        pubDate: extractTag(item, "pubDate"),
      };
    })
    .filter((item) => item.title && item.link);
}

export async function getRecentBlogPosts(limit = 5): Promise<BlogFeedItem[]> {
  try {
    const response = await fetch(BLOG_RSS_URL);
    if (!response.ok) {
      throw new Error(`RSS fetch failed with status ${response.status}`);
    }

    const xml = await response.text();
    return parseFeed(xml)
      .sort((left, right) => new Date(right.pubDate).getTime() - new Date(left.pubDate).getTime())
      .slice(0, limit);
  } catch {
    return [];
  }
}

export { BLOG_HOME_URL };