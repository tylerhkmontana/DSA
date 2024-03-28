let randomArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40))

console.log(`Before: ${randomArray}`)

function quicksort(unsortedArray, low=0, high=unsortedArray.length - 1) {
    console.log(high)
    if (low < high) {
        let pivotValue = unsortedArray[high]
        let pivotLoc = -1
        for (let i = low; i < high; i++) {
            if (unsortedArray[i] <= pivotValue) {
                pivotLoc++
                let temp = unsortedArray[i]
                unsortedArray[i] = unsortedArray[pivotLoc]
                unsortedArray[pivotLoc] = temp
            }
        }

        pivotLoc++
        let temp = unsortedArray[high] 
        unsortedArray[high] = unsortedArray[pivotLoc]
        unsortedArray[pivotLoc] = temp

        quicksort(unsortedArray, low, pivotLoc - 1)
        quicksort(unsortedArray, pivotLoc + 1, high)
    }
}

quicksort(randomArray)
console.log(`After :${randomArray}`)
