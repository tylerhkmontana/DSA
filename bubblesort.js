let randomArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40))

console.log(`Before: ${randomArray}`)

function bubbleSort(unsortedArray) {
    let ua = [...unsortedArray]
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
    console.log(`bubbleSort was run ${count} times`)
    return ua
} 

function improvedBubbleSort(unsortedArray) {
    let ua = [...unsortedArray]
    let count = 0
    for(let i = 0; i < ua.length; i++) {
        let isSwapped = false

        for(let j = 0; j < ua.length; j++) {
            if (ua[j] > ua[j+1]) {
                let temp = ua[j+1]
                ua[j+1] = ua[j]
                ua[j] = temp
                isSwapped = true
            }
            count++
        }
        if (!isSwapped) break
    }
    console.log(`improved bubble sort was run ${count} times`)
    return ua
} 

function upgradedBubbleSort(unsortedArray) {
    let ua = [...unsortedArray]
    let index = 0
    let count = 0
    for(let i = 0; i < ua.length; i++) {
        for(let j = 0; j < ua.length - index; j++) {
            if (ua[j] > ua[j+1]) {
                let temp = ua[j+1]
                ua[j+1] = ua[j]
                ua[j] = temp
            }
            count++
        }

        index++
    }
    console.log(`upgraded bubble sort was run ${count} times`)
    return ua
} 

console.log(`After: ${bubbleSort(randomArray)}`) // worst
console.log(`After: ${improvedBubbleSort(randomArray)}`) // the more the array is initially sorted, the better performance it gets
console.log(`After: ${upgradedBubbleSort(randomArray)}`) // Twice faster than the worst one