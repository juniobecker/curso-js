let valores = [8, 1, 7, 4, 2, 9]
valores.push(3, 5, 6) // Para adicionar mais valores no array
valores.sort() //Para ordenar de forma crescente os valores do array

for(let pos in valores) { //Só funciona para arrays e objetos
    console.log(valores[pos])
}
/*
for (let num = 0; num<valores.length; num++) {
    console.log(valores[num])
}
*/