
let res = document.getElementById('res')

let pais = ['Chile', 'Brasil', 'Bolívia', 'Argentina', 'Paraguai']

let cidade = new Array('Tijucas','Itajai','São josé')

// console.log(pais[2])
// console.log(cidade[1])


pais.push('Uruguai')
pais.unshift('Colômbia')
console.log(pais)
console.log(cidade)
pais.pop()
pais.shift()
console.log(pais)
console.log(cidade)

function inserir(){
    pais.pop()
    pais.shift()

    res.innerHTML += pais +'<br>'
    cidade.innerHTML +=cidade + '<br>'
}