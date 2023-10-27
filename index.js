const comecarjogo = document.querySelector(".iniciar")
const perguntasjogo = document.querySelector(".respostas")
const quiz = document.querySelector(".card-questao")
const tituloinicio = document.querySelector(".titulo")
const botaoproxima = document.querySelector(".botao-proxima")
const respostas = document.querySelector(".respostas")
const questao = document.querySelector(".pergunta-card")
const botaoresposta = document.querySelector(".botao-resposta")
const textofinal = document.querySelector(".texto-final")
const quantidadeacertos = document.querySelector(".quantidade-acertos")

let indicequestao = 0
let corretas = 0

comecarjogo.addEventListener("click", comecar)
botaoproxima.addEventListener("click", proximaquestao)

function comecar() {
    comecarjogo.classList.add("hide")
    quiz.classList.remove("hide")
    tituloinicio.classList.add("hide")
    perguntasjogo.classList.remove("hide")
    proximaquestao()
}

function responder(event) {
    botaoproxima.classList.remove("hide")
    const respostaclicada = event.target

    if (respostaclicada.dataset.correto) {
        corretas++
    }

    document.querySelectorAll(".resposta").forEach(button => {
        if (button.dataset.correto) {
            button.classList.add("correto")
        } else {
            button.classList.add("errado")
        }

        button.disabled = true
    })
    indicequestao++
}

function proximaquestao() {
    while (respostas.firstChild) {
        respostas.removeChild(respostas.firstChild)
    }

    botaoproxima.classList.add("hide")

    questao.textContent = questoes[indicequestao].questao
    questoes[indicequestao].respostas.forEach(resposta => {
        const novaquestao = document.createElement("button")
        novaquestao.classList.add("botao", "resposta")
        novaquestao.textContent = resposta.texto
        if (resposta.correto) {
            novaquestao.dataset.correto = resposta.correto
        }
        respostas.appendChild(novaquestao)

        novaquestao.addEventListener("click", responder)
    })

    if (indicequestao === questoes.length - 1) {
        textofinal.classList.remove("hide")
        quantidadeacertos.classList.remove("hide")
        quiz.classList.add("hide")
        perguntasjogo.classList.add("hide")
        botaoproxima.classList.add("hide")
        quantidadeacertos.textContent = corretas + "/" + questoes.length
    }

    console.log(indicequestao)
    console.log(corretas)
}

const questoes = [
    {
        questao: 'Quais são as franquias com mais títulos?',
        respostas: [
            { texto: 'Golden State Warriors e Celtics', correto: false },
            { texto: 'Chicago Bulls e Golden State Warriors', correto: false },
            { texto: 'Chicago Bulls e LA Lakers', correto: false },
            { texto: 'LA Lakers e Celtics', correto: true }
        ]
    },
    {
        questao: 'Qual a franquia que mais venceu jogos?',
        respostas: [
            { texto: 'Celtics', correto: true }, 
            { texto: 'LA Lakers', correto: false }, 
            { texto: 'Denver Nuggets', correto: false }, 
            { texto: 'Golden State Warriors', correto: false }, 
        ]
    },
    {
        questao: 'Qual a franquia com mais aparições em finais?',
        respostas: [
            { texto: 'Chicago Bulls', correto: false }, 
            { texto: 'LA Lakers', correto: true }, 
            { texto: 'Denver Nuggets', correto: false }, 
            { texto: 'Philadelphia 76ers', correto: false }, 
        ]
    },
    {
        questao: 'Qual a franquia com mais vitórias em uma temporada regular?',
        respostas: [
            { texto: 'Chicago Bulls', correto: false }, 
            { texto: 'Sacramento Kings', correto: false }, 
            { texto: 'Golden State Warriors', correto: true }, 
            { texto: 'Philadelphia 76ers', correto: false }, 
        ]
    },
    {
        questao: 'Qual a franquia com mais derrotas em uma temporada regular?',
        respostas: [
            { texto: 'Indiana Pacers', correto: false }, 
            { texto: 'Charlotte Hornets', correto: false }, 
            { texto: 'Philadelphia 76ers', correto: true }, 
            { texto: 'Detroit Pistons', correto: false }, 
        ]
    },
    {
        questao: 'Jogador com mais títulos',
        respostas: [
            { texto: 'Bill Russel', correto: true }, 
            { texto: 'Michael Jordan', correto: false }, 
            { texto: 'LeBron James', correto: false }, 
            { texto: 'Larry Bird', correto: false }, 
        ]
    },
    {
        questao: 'Jogador com mais jogos disputados em temporadas regulares',
        respostas: [
            { texto: 'Bill Russel', correto: false }, 
            { texto: 'Robert Parish', correto: true }, 
            { texto: 'Derrick Rose', correto: false }, 
            { texto: 'LeBron James', correto: false }, 
        ]
    },
    {
        questao: 'Maior cestinha da temporada regular da NBA',
        respostas: [
            { texto: 'Stephen Curry', correto: false }, 
            { texto: 'Kevin Durant', correto: false }, 
            { texto: 'LeBron James', correto: true }, 
            { texto: 'Kobe Bryant', correto: false }, 
        ]
    },
    {
        questao: 'Maior média de pontuação individual da NBA',
        respostas: [
            { texto: 'Michael Jordan', correto: true }, 
            { texto: 'Kareem Abdul-Jabbar', correto: false }, 
            { texto: 'LeBron James', correto: false }, 
            { texto: 'Wilt Chamberlain', correto: false }, 
        ]
    },
    {
        questao: 'Mais cestas de 3 pontos convertidas nos playoffs (na história)',
        respostas: [
            { texto: 'Ray Allen', correto: false }, 
            { texto: 'Klay Thompson', correto: false }, 
            { texto: 'James Harden', correto: false }, 
            { texto: 'Stephen Curry', correto: true }, 
        ]
    },
]