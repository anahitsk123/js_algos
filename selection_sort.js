function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndx = i;
        for (let j = i; j < arr.length; j++) {
            if(arr[j] < arr[minIndx])  {
                minIndx = j;
            }
        }
        if(i !== minIndx) {
            let temp = arr[i];
            arr[i] = arr[minIndx];
            arr[minIndx] = temp;
        }
    }

    return arr;
}