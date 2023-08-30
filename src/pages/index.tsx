import Head from "next/head";
import { Landing } from "~/components/landing.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Brown</title>
        <meta name="description" content="Ben Brown's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}
