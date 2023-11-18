enum GrupoMuscular {
  DELTOIDE_POSTERIOR = "DELTOIDE_POSTERIOR",
  DELTOIDE_LATERAL = "DELTOIDE_LATERAL",
  DELTOIDE_ANTERIOR = "DELTOIDE_ANTERIOR",
  TRICEPS = "TRICEPS",
  PEITORAL = "PEITORAL",
  DORSAL = "DORSAL",
  MEIO_COSTAS = "MEIO_COSTAS",
  BICEPS = "BICEPS",
  ANTEBRACO = "ANTEBRACO",
  QUADRICEPS = "QUADRICEPS",
  BICEPS_FEMURAL = "BICEPS_FEMURAL",
  GLUTEO = "GLUTEO",
  CORE = "CORE",
  PANTURRILHA = "PANTURRILHA",
}

export type Exercicio = {
  nome: string;
  grupos: {
    nome: GrupoMuscular;
    fator: number;
  }[];
};

export type Treino = {
  nome: string;
  exercicios: { exercicio: Exercicio; series: number }[];
};

export const exercicios: Record<string, Exercicio> = {
  supino: {
    nome: "supino",
    grupos: [
      {
        nome: GrupoMuscular.PEITORAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.TRICEPS,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.DELTOIDE_ANTERIOR,
        fator: 0.5,
      },
    ],
  },
  flexao: {
    nome: "flexao",
    grupos: [
      {
        nome: GrupoMuscular.PEITORAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.TRICEPS,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.DELTOIDE_ANTERIOR,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.25,
      },
    ],
  },
  desenvolvimentoEmPe: {
    nome: "desenvolvimentoEmPe",
    grupos: [
      {
        nome: GrupoMuscular.TRICEPS,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.DELTOIDE_ANTERIOR,
        fator: 1,
      },
      {
        nome: GrupoMuscular.DELTOIDE_LATERAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.DELTOIDE_POSTERIOR,
        fator: 0.25,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.25,
      },
    ],
  },
  cableFly: {
    nome: "cableFly",
    grupos: [
      {
        nome: GrupoMuscular.PEITORAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.DELTOIDE_ANTERIOR,
        fator: 0.25,
      },
    ],
  },
  elevacaoLateral: {
    nome: "elevacaoLateral",
    grupos: [
      {
        nome: GrupoMuscular.DELTOIDE_LATERAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.25,
      },
    ],
  },
  tricepsCorda: {
    nome: "tricepsCorda",
    grupos: [
      {
        nome: GrupoMuscular.TRICEPS,
        fator: 1,
      },
    ],
  },
  //
  agachamento: {
    nome: "agachamento",
    grupos: [
      {
        nome: GrupoMuscular.QUADRICEPS,
        fator: 1,
      },
      {
        nome: GrupoMuscular.BICEPS_FEMURAL,
        fator: 0.25,
      },
      {
        nome: GrupoMuscular.GLUTEO,
        fator: 0.75,
      },
      {
        nome: GrupoMuscular.PANTURRILHA,
        fator: 0.25,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.5,
      },
    ],
  },
  stiff: {
    nome: "stiff",
    grupos: [
      {
        nome: GrupoMuscular.BICEPS_FEMURAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.GLUTEO,
        fator: 1,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.5,
      },
    ],
  },
  legPress: {
    nome: "legPress",
    grupos: [
      {
        nome: GrupoMuscular.BICEPS_FEMURAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.QUADRICEPS,
        fator: 1,
      },
      {
        nome: GrupoMuscular.GLUTEO,
        fator: 0.25,
      },
    ],
  },
  abdutora: {
    nome: "abdutora",
    grupos: [
      {
        nome: GrupoMuscular.GLUTEO,
        fator: 1,
      },
    ],
  },
  cadeiraExtensora: {
    nome: "cadeiraExtensora",
    grupos: [
      {
        nome: GrupoMuscular.QUADRICEPS,
        fator: 1,
      },
    ],
  },
  cadeiraFlexora: {
    nome: "cadeiraFlexora",
    grupos: [
      {
        nome: GrupoMuscular.BICEPS_FEMURAL,
        fator: 1,
      },
    ],
  },
  //
  pullUp: {
    nome: "pullUp",
    grupos: [
      {
        nome: GrupoMuscular.DORSAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.MEIO_COSTAS,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.BICEPS,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.ANTEBRACO,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.5,
      },
    ],
  },
  puxadorCostas: {
    nome: "puxadorCostas",
    grupos: [
      {
        nome: GrupoMuscular.DORSAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.MEIO_COSTAS,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.BICEPS,
        fator: 0.5,
      },
      {
        nome: GrupoMuscular.ANTEBRACO,
        fator: 0.5,
      },
    ],
  },
  puxadorCostasTriangulo: {
    nome: "puxadorCostasTriangulo",
    grupos: [
      {
        nome: GrupoMuscular.DORSAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.MEIO_COSTAS,
        fator: 0.75,
      },
      {
        nome: GrupoMuscular.DELTOIDE_POSTERIOR,
        fator: 0.25,
      },
      {
        nome: GrupoMuscular.BICEPS,
        fator: 0.75,
      },
      {
        nome: GrupoMuscular.ANTEBRACO,
        fator: 0.25,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.25,
      },
    ],
  },
  remadaTriangulo: {
    nome: "remadaTriangulo",
    grupos: [
      {
        nome: GrupoMuscular.DORSAL,
        fator: 1,
      },
      {
        nome: GrupoMuscular.MEIO_COSTAS,
        fator: 0.75,
      },
      {
        nome: GrupoMuscular.DELTOIDE_POSTERIOR,
        fator: 0.25,
      },
      {
        nome: GrupoMuscular.BICEPS,
        fator: 0.75,
      },
      {
        nome: GrupoMuscular.ANTEBRACO,
        fator: 0.25,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.25,
      },
    ],
  },
  roscaDiretaEmPe: {
    nome: "roscaDiretaEmPe",
    grupos: [
      {
        nome: GrupoMuscular.BICEPS,
        fator: 1,
      },
      {
        nome: GrupoMuscular.ANTEBRACO,
        fator: 0.25,
      },
      {
        nome: GrupoMuscular.CORE,
        fator: 0.25,
      },
    ],
  },
  reverseFly: {
    nome: "reverseFly",
    grupos: [
      {
        nome: GrupoMuscular.DELTOIDE_POSTERIOR,
        fator: 1,
      },
      {
        nome: GrupoMuscular.MEIO_COSTAS,
        fator: 1,
      },
    ],
  },
  panturrilha: {
    nome: "panturrilha",
    grupos: [
      {
        nome: GrupoMuscular.PANTURRILHA,
        fator: 1,
      },
    ],
  },
};

export const treinos: Treino[] = [
  {
    nome: "Superior Empurrar",
    exercicios: [
      { exercicio: exercicios.supino!, series: 5 },
      { exercicio: exercicios.desenvolvimentoEmPe!, series: 4 },
      { exercicio: exercicios.cableFly!, series: 5 },
      { exercicio: exercicios.elevacaoLateral!, series: 3 },
      { exercicio: exercicios.tricepsCorda!, series: 3 },
    ],
  },
  {
    nome: "Superior Puxar",
    exercicios: [
      { exercicio: exercicios.pullUp!, series: 3 },
      { exercicio: exercicios.puxadorCostas!, series: 4 },
      { exercicio: exercicios.puxadorCostasTriangulo!, series: 3 },
      { exercicio: exercicios.roscaDiretaEmPe!, series: 4 },
      { exercicio: exercicios.reverseFly!, series: 4 },
      { exercicio: exercicios.panturrilha!, series: 3 },
    ],
  },
  {
    nome: "Inferiores",
    exercicios: [
      { exercicio: exercicios.agachamento!, series: 4 },
      { exercicio: exercicios.stiff!, series: 4 },
      { exercicio: exercicios.legPress!, series: 4 },
      { exercicio: exercicios.cadeiraExtensora!, series: 4 },
      { exercicio: exercicios.cadeiraFlexora!, series: 3 },
      { exercicio: exercicios.abdutora!, series: 3 },
    ],
  },
  {
    nome: "Misto",
    exercicios: [
      { exercicio: exercicios.flexao!, series: 2 },
      { exercicio: exercicios.supino!, series: 3 },
      { exercicio: exercicios.desenvolvimentoEmPe!, series: 4 },
      { exercicio: exercicios.remadaTriangulo!, series: 3 },
      { exercicio: exercicios.tricepsCorda!, series: 3 },
      { exercicio: exercicios.elevacaoLateral!, series: 3 },
      { exercicio: exercicios.panturrilha!, series: 3 },
    ],
  },
];

export const gruposMusculares: { [grupo in GrupoMuscular]?: number } = {};

export const LIMITE_SERIES = 20;

treinos.forEach(({ nome, exercicios }) => {
  let totalSeries = 0;
  exercicios.forEach(({ exercicio, series }) => {
    totalSeries += series;
    exercicio.grupos.forEach(({ nome, fator }) => {
      if (!gruposMusculares[nome]) {
        gruposMusculares[nome] = 0;
      }
      gruposMusculares[nome]! += series * fator;
    });
  });
  //   const mensagem = `${nome} tem ${totalSeries} series.`;
  //   if (totalSeries > LIMITE_SERIES) {
  //     console.warn(mensagem);
  //   } else {
  //     console.log(mensagem);
  //   }
});

export const gruposMuscularesOrdenados = Object.entries(gruposMusculares)
  .sort((a, b) => b[1] - a[1])
  .reduce(
    (prev, curr) => {
      prev[curr[0] as GrupoMuscular] = curr[1];
      return prev;
    },
    {} as typeof gruposMusculares,
  );
