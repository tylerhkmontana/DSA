let randomArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40))

console.log(`Before: ${randomArray}`)

function countingSort(unsortedArray) {
    const maxNum = Math.max(...unsortedArray)
    let countingArray = Array.from({length: maxNum + 1}, () => 0)

    unsortedArray.forEach(el => countingArray[el]++)

    let newArray = []

    countingArray.forEach((el, i) => {
        for(j = 0; j < el; j++) {
            newArray.push(i)
        }
    })

    return newArray
}

console.log(`After: ${countingSort(randomArray)}`)