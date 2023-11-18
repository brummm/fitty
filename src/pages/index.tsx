import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { type Treino as TreinoType, treinos } from "~/server/api/services/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fitty</title>
        <meta
          name="description"
          content="Experimental fitness app to track training sessions and cicles"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>
      <div className="m-auto max-w-xl p-5">
        <header>
          <Link href="/" className="flex items-center gap-6">
            <figure>
              <Image
                src={"/brand.svg"}
                width={120}
                height={120}
                alt="Simbolo Fitty"
              />
            </figure>
            <h1 className="text-9xl font-extrabold tracking-tighter text-pink-500">
              Fitty
            </h1>
          </Link>
        </header>
        <main className="pt-6">
          {treinos && (
            <div className="flex flex-col gap-6">
              {treinos.map((treino) => (
                <div key={treino.nome}>
                  <Treino treino={treino} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

const Treino: React.FC<{ treino: TreinoType }> = ({
  treino: { nome, exercicios },
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">{nome}</h2>
      <div className="flex items-end justify-between">
        <ul>
          {exercicios?.map((exercicio, idx) => (
            <li key={idx}>
              {exercicio.exercicio.nome}: {exercicio.series}
            </li>
          ))}
        </ul>
        <section role="info">
          <TotalSeries exercicios={exercicios} />
        </section>
      </div>
    </div>
  );
};

const TotalSeries: React.FC<{ exercicios: TreinoType["exercicios"] }> = ({
  exercicios,
}) => {
  const totalSeries = exercicios.reduce((prev, curr) => prev + curr.series, 0);
  return (
    <div className="text-xl">
      <span className="font-extrabold">{totalSeries}</span> séries
    </div>
  );
};
