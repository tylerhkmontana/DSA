let unsortedArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40))

console.log(`Before: ${unsortedArray}`)

function selectionsort(ua) {
    let count = 0
    for (let i = 0; i < ua.length; i++) {
        let smallestNumIndex = i
        for (let j = i; j < ua.length; j++) {
            if (ua[j] < ua[smallestNumIndex]) smallestNumIndex=j
            count++
        }
        let temp = ua[i]
        ua[i] = ua[smallestNumIndex]
        ua[smallestNumIndex] = temp
    }

    console.log(`ran ${count}`)
    return ua
}

console.log(`Afer: ${selectionsort(unsortedArray)}`)