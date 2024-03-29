let randomArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40))

console.log(`Before: ${randomArray}`)

function radixSort(unsortedArray) {
    let holderArray = Array.from({length: 10}, () => [])
    let maxNum = Math.max(...unsortedArray)
    let exp = 1

    while (Math.floor(maxNum/exp) > 0) {

        while (unsortedArray.length > 0) {
            let currVal = unsortedArray.pop()
            let radixIndex = Math.floor(currVal/exp) % 10
            holderArray[radixIndex].push(currVal)
        }

        holderArray.forEach(arr => {
            while(arr.length > 0) {
                unsortedArray.push(arr.pop())
            }
        })

        exp *=10
    }

    return unsortedArray
}

console.log(`After ${radixSort(randomArray)}`)