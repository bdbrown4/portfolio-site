import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { Landing } from "~/components/landing.component";
import { getRecentBlogPosts } from "~/server/blog-feed";
import type { BlogFeedItem } from "~/server/blog-feed";

interface HomeProps {
  recentPosts: BlogFeedItem[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const recentPosts = await getRecentBlogPosts(3);

  return {
    props: {
      recentPosts,
    },
    revalidate: 3600,
  };
};

export default function Home({ recentPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Ben Brown</title>
        <meta name="description" content="Ben Brown's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing recentPosts={recentPosts} />
    </>
  );
}
