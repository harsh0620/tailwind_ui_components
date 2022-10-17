import Head from "next/head";

import Navbar from "../components/navbar";
import Homebanner from "../components/homebanner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Bootstrap</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-slate-100 min-h-screen">
        <Navbar />
        <Homebanner />
      </div>
    </div>
  );
}