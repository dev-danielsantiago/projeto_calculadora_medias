const form = document.getElementById('form-atividade')
let linhas = ''
const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji celebrando />"'
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji decepecionado />"'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("digite a nota mínima:"))

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizarTabela()
    atualizarMediaFinal()
})

function adicionaLinha (){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    


    if (atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
        
        let linha = '<tr>'
        linha += `<td> ${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado :  imgReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizarTabela(){
    const corpoTabela  = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}

function atualizarMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

}

function calculaMediaFinal(){
    let somaDasNotas = 0

    for (let i =0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }
    const media = somaDasNotas / notas.length
    return media.toFixed(1)
}
