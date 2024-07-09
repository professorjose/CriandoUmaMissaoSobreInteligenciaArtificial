const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enuciado: "Texto da pergunta 1",
        alternativas: [
            {
                texto: "Alternativa 1 da pergunta 1",
                afirmacao: "Afirmação 1 da pergunta 1"
            },
            {
                texto: "Alternativa 2 da pergunta 1",
                afirmacao: "Afirmação 2 da pergunta 1"
            }
        ]
    },
    {
        enuciado: "Texto da pergunta 2",
        alternativas: [
            {
                texto: "Alternativa 1 da pergunta 2",
                afirmacao: "Afirmação 1 da pergunta 2"
            },
            {
                texto: "Alternativa 2 da pergunta 2",
                afirmacao: "Afirmação 2 da pergunta 2"
            }
        ]
    },
    {
        enuciado: "Texto da pergunta 3",
        alternativas: [
            {
                texto: "Alternativa 1 da pergunta 3",
                afirmacao: "Afirmação 1 da pergunta 3"
            },
            {
                texto: "Alternativa 2 da pergunta 3",
                afirmacao: "Afirmação 2 da pergunta 3"
            }
        ]
    },
    {
        enuciado: "Texto da pergunta 4",
        alternativas: [
            {
                texto: "Alternativa 1 da pergunta 4",
                afirmacao: "Afirmação 1 da pergunta 4"
            },
            {
                texto: "Alternativa 2 da pergunta 4",
                afirmacao: "Afirmação 2 da pergunta 4"
            }
        ]
    },
    {
        enuciado: "Texto da pergunta 5",
        alternativas: [
            {
                texto: "Alternativa 1 da pergunta 5",
                afirmacao: "Afirmação 1 da pergunta 5"
            },
            {
                texto: "Alternativa 2 da pergunta 5",
                afirmacao: "Afirmação 2 da pergunta 5"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enuciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();