function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* =========================
   ALGEBRA
========================= */

function gerarAlgebra() {
  const tipos = [algebraSimplificar, algebraEquacao, algebraFatoracao];
  return tipos[rand(0, tipos.length - 1)]();
}

function algebraSimplificar() {
  const a = rand(1, 5);
  const b = rand(1, 5);
  const c = rand(1, 5);

  return {
    pergunta: `Simplifique: ${a}x + ${b} + ${c}x − ${b}`,
    resposta: `${a + c}x`,
    ajuda: [
      "Separe os termos com x dos termos numéricos.",
      "Some apenas os coeficientes de x.",
      "Observe que os termos constantes se anulam."
    ]
  };
}

function algebraEquacao() {
  const a = rand(2, 5);
  const b = rand(1, 6);
  const x = rand(1, 5);

  return {
    pergunta: `Resolva: ${a}x + ${b} = x + ${b + a * x}`,
    resposta: `${x}`,
    ajuda: [
      "Leve todos os termos com x para um lado.",
      "Isole o x.",
      "Resolva a equação."
    ]
  };
}

function algebraFatoracao() {
  const a = rand(2, 5);
  const b = rand(2, 6);

  return {
    pergunta: `Fatore: ${a * b}x + ${b * 2}`,
    resposta: `${b}(${a}x + 2)`,
    ajuda: [
      "Identifique o fator comum.",
      "Coloque o fator em evidência.",
      "Confira multiplicando novamente."
    ]
  };
}

/* =========================
   LÓGICA
========================= */

function gerarLogica() {
  const p = Math.random() < 0.5;
  const q = Math.random() < 0.5;

  const resultado = (p || q) && !q;

  return {
    pergunta: `Se p = ${p ? "V" : "F"} e q = ${q ? "V" : "F"}, determine o valor lógico de (p ∨ q) ∧ ¬q.`,
    resposta: resultado ? "verdadeiro" : "falso",
    ajuda: [
      "Resolva primeiro o que está dentro dos parênteses.",
      "Calcule a negação de q.",
      "Aplique a conjunção final."
    ]
  };
}

/* =========================
   CONJUNTOS
========================= */

function gerarConjuntos() {
  const A = gerarConjunto();
  const B = gerarConjunto();
  const tipo = ["∪", "∩", "−"][rand(0, 2)];

  if (tipo === "∪") {
    const uniao = [...new Set([...A, ...B])];
    return {
      pergunta: `Calcule A ∪ B, onde A = {${A}} e B = {${B}}.`,
      resposta: `{${uniao}}`,
      ajuda: [
        "A união contém todos os elementos de A e B.",
        "Não repita elementos iguais."
      ]
    };
  }

  if (tipo === "∩") {
    const inter = A.filter(x => B.includes(x));
    return {
      pergunta: `Calcule A ∩ B, onde A = {${A}} e B = {${B}}.`,
      resposta: `{${inter}}`,
      ajuda: [
        "Pegue apenas os elementos comuns aos dois conjuntos."
      ]
    };
  }

  const diff = A.filter(x => !B.includes(x));
  return {
    pergunta: `Calcule A − B, onde A = {${A}} e B = {${B}}.`,
    resposta: `{${diff}}`,
    ajuda: [
      "Pegue os elementos de A que não estão em B."
    ]
  };
}

function gerarConjunto() {
  const tamanho = rand(3, 5);
  const set = new Set();

  while (set.size < tamanho) {
    set.add(rand(1, 9));
  }

  return [...set];
}

/* =========================
   FUNÇÕES
========================= */

function gerarFuncoes() {
  const a = rand(1, 4);
  const b = rand(-3, 3);
  const x1 = rand(-2, 3);
  const x2 = rand(-2, 3);

  return {
    pergunta: `Dada f(x) = ${a}x ${b >= 0 ? "+" : ""}${b}, calcule f(${x1}) e f(${x2}).`,
    resposta: `${a * x1 + b}, ${a * x2 + b}`,
    ajuda: [
      "Substitua cada valor de x na função.",
      "Resolva cada conta separadamente."
    ]
  };
}

/* =========================
   GERADOR UNIFICADO
========================= */

function gerarExercicio(area) {
  switch (area) {
    case "algebra":
      return gerarAlgebra();
    case "logica":
      return gerarLogica();
    case "conjuntos":
      return gerarConjuntos();
    case "funcoes":
      return gerarFuncoes();
    default:
      return null;
  }
}