function bubbleSort(arr) {
    let isSwaped = false;
    for(let i = arr.length; i > 0; i--) {
        isSwaped = false;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                isSwaped = true;
                //swap
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(!isSwaped) {
            break;
        }
    }
    return arr;
}