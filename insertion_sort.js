function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentArrItem = arr[i];
        for (var j = i - 1; j >= 0 && currentArrItem < arr[j]; j--) {
            // push current item of sorted part one further to gi ve space for inserting
            arr[j+1] = arr[j];
        }
        // As second loop is decresing, last val of j is the last val of sorted arr - 1,
        // so we add one to get to the last indx of sorted part
        arr[j+1] = currentArrItem;
    }

    return arr;
}