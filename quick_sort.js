function swap(arr, firstIndx, lastIndx) {
    let temp = arr[firstIndx];
    arr[firstIndx] = arr[lastIndx];
    arr[lastIndx] = temp;
}

function  pivot(arr, start = 0, end = arr.length -1) {
    let stepToMove = start;
    let pivot = arr[start];

    for(let i = start + 1; i <= end; i++) {
        if(arr[i] < pivot) {
            stepToMove++;
            swap(arr, stepToMove, i);
        }
    }
    swap(arr, start, stepToMove);
    return stepToMove;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right); //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
};

quickSort([4, 6, 9, 1, 2, 5, 3]);