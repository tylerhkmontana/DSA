let randomArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40))

console.log(`Before: ${randomArray}`)

const bubbleSort = function (unsortedArray) {
    let ua = [...unsortedArray]
    // console.log(ua)
    let count = 0
    for(let i = 0; i < ua.length; i++) {
        for(let j = 0; j < ua.length; j++) {
            if (ua[j] > ua[j+1]) {
                let temp = ua[j+1]
                ua[j+1] = ua[j]
                ua[j] = temp
            }
            count++
        }
    }
    return ua
} 

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) return unsortedArray

    const pivot = Math.floor(unsortedArray.length/2)
    let leftArr = unsortedArray.slice(0, pivot)
    let rightArr = unsortedArray.slice(pivot)

    return bubbleSort([...mergeSort(leftArr), ...mergeSort(rightArr)])
}

console.log(`After: ${mergeSort(randomArray)}`)