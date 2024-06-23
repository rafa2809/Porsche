const paletaCores = document.querySelectorAll('.paleta-de-cores li span')
const carroSelecionado = document.querySelector('.imagem-carro img')
const colecaoRodas = document.querySelectorAll('.colecao-de-rodas li span')
let corSelecionada = 'br'
let rodaSelecionada = 'r1'


paletaCores.forEach(li => {
    li.addEventListener('click', () => {
        paletaCores.forEach(span =>{
            span.classList.remove('selecionado')
        })

       li.classList.add('selecionado')

       corSelecionada = li.classList[0]
       atualizaCarro()

    })
})

colecaoRodas.forEach(li => {
    li.addEventListener('click', () => {
        colecaoRodas.forEach(span => {
            span.classList.remove('selecionado')
        })

        li.classList.add('selecionado')

        rodaSelecionada = li.classList[0]
        atualizaCarro()
    })
})

  function atualizaCarro() {
 carroSelecionado.src = `./assets/p-${corSelecionada}-${rodaSelecionada}.jpeg`
 }