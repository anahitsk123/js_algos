function mergeSortedArrs(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let resArr = [];

    while(i < arr1Len && j < arr2Len) {
        if(arr1[i] <= arr2[j]) {
            resArr.push(arr1[i]);
            i++;
        } else {
            resArr.push(arr2[j]);
            j++;
        }
    }

    if(j < arr2Len) {
        resArr = resArr.concat(arr2.slice(j));
    } else if(i < arr1Len) {
        resArr = resArr.concat(arr1.slice(i));
    }

    return resArr;
};

mergeSortedArrs([1, 10, 50], [2, 14, 99, 100]);

function breakAndMergeArr(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = breakAndMergeArr(arr.slice(0, mid));
    let right = breakAndMergeArr(arr.slice(mid)); // to the end

    return mergeSortedArrs(left, right);
};

breakAndMergeArr([10, 24, 76, 73]);


