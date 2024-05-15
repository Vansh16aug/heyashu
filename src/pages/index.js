import Head from "next/head";
import Intro from "@/components/Home/Intro";
import Banner from "@/components/Home/Banner";
import Navbar from "@/components/base/Navbar";
import MainPage from "@/components/Home/MainPage";
import Layout from "@/components/base/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashutosh Anand Tiwari</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <MainPage />
      </main>
    </>
  );
}
