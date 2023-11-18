import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { Treino as TreinoType, treinos } from "~/server/api/services/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fitty</title>
        <meta
          name="description"
          content="Experimental fitness app to track training sessions and cicles"
        />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>
      <div className="m-auto max-w-3xl p-5">
        <header>
          <h1 className="text-9xl font-extrabold tracking-tighter text-pink-500">
            Fitty
          </h1>
        </header>
        <main className="pt-3">
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
      <ul>
        {exercicios?.map((exercicio, idx) => (
          <li key={idx}>
            {exercicio.exercicio.nome}: {exercicio.series}
          </li>
        ))}
      </ul>
    </div>
  );
};
