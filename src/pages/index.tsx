import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>Fitty</title>
        <meta name="description" content="Experimental fitness app to track training sessions and cicles" />
      </Head>
      <main>
        Fitty
      </main>
    </>
  );
}
