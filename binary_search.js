function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor( (left + right) / 2 );

    while(val !== arr[mid] && left < right) {
        if(val < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor( (left + right) / 2 );
    }

    return (val === arr[mid]) ? mid : -1;
}
