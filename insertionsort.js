let randomArray = Array.from({length: 40}, () => Math.floor(Math.random() * 40))

console.log(`Before: ${randomArray}`)

function insertionSort1(unsortedArray) {
    let count = 0
    let ua = [...unsortedArray]
    for(let i = 1; i < ua.length; i++) {
        for(let j = i; j > 0; j--) {
            if(ua[j] < ua[j-1]) {
                let temp = ua[j-1]
                ua[j-1] = ua[j]
                ua[j] = temp
            }
            count++
        }
    }

    console.log(`sort1 ran ${count}`)
    return ua
}


function insertionSort2(unsortedArray) {
    let count = 0
    let ua = [...unsortedArray]
    for(let i = 1; i < ua.length; i++) {
        let insertionIndex = i
        for(let j = i - 1; j > -1; j--) {
            if(ua[j] > ua[i]) {
                insertionIndex = j
            } else {
                j = -99
            }

            count++
        }

        let temp = ua[i]
        ua.splice(i, 1)
        ua.splice(insertionIndex, 0, temp) 
    }

    console.log(`sort2 ran ${count}`)

    return ua
}

console.log(`After sort1: ${insertionSort1(randomArray)}`)
console.log(`After sort2: ${insertionSort2(randomArray)}`)  // less space compelxity