// helper function
// function getDigit(num, place) {
//     const strNum = (num + '');
//     return strNum.charAt(strNum.length -1 - place) * 1;
// }

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// function digitCount(num) {
//     return (num + '').length;
// }

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
    return arr.reduce(function(acc, item) {
        const currentDigitNum = digitCount(item);
        acc = (acc > currentDigitNum) ? acc : currentDigitNum;
        return acc;
    }, 0)
}

function radixSort(arr) {
    let maxDigit = maxDigits(arr);

    for(let k = 0; k < maxDigit; k++) {
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++ ) {
            let currentDigit = getDigit(arr[i], k);
            buckets[currentDigit].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }

    return arr;
}

// Time O(nk) n - arr.length, k - number of digits
// Space O(n+k)