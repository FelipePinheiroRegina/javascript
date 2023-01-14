let arrays = [5, 8, 9, 4, 2, 0]

console.log(arrays)

//console.log(arrays[0])
//console.log(arrays[1])
//console.log(arrays[2])
//console.log(arrays[3])
//console.log(arrays[4])
//console.log(arrays[5])

/*for (pos = 0; pos < arrays.length; pos++){
    console.log(`O índice ${pos} tem o valor ${arrays[pos]}`)
}
*/

for (let pos in arrays){
    console.log(`O índice ${pos} tem o valor ${arrays[pos]}`)
}

let pos = arrays.indexOf(8)
if (pos == -1){
    console.log('Valor não encontrado.')
} else {
    console.log(`o valor está na posição ${pos}`)
}
