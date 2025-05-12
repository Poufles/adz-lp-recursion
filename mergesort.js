/**
 * Sorts the elements using merge sort algorithm.
 * @param {Array} arr Array containing elements to be sorted 
 * @returns A sorted copy of the original array.
 */
function MergeSort(arr) {
    const lengthArr = arr.length;
    
    // Checks if the given array has elements to sort
    if (lengthArr === 0) {
        console.error('No elements to be sorted.');
        return arr;
    };

    const sortedArr = [];

    if (lengthArr > 1) {
        const division = lengthArr / 2; // Takes the length in two.
        const leftDivision = arr.slice(0, division); // Takes the left half of the array.
        const rightDivision = arr.slice(division); // Takes the right half of the array.

        // Verify through recursion if the array
        // has only 1 element.
        const leftArr = MergeSort(leftDivision);
        const rightArr = MergeSort(rightDivision);

        // Reiterate through the left array.
        while (leftArr.length > 0) {
            // Sorts the array
            if (leftArr[0] > rightArr[0]) {
                sortedArr.push(rightArr.shift());
            } else {
                sortedArr.push(leftArr.shift());
            };
        }
        
        // Validate if any elements stays
        // on the right part of the division.
        while (rightArr.length > 0) {
            sortedArr.push(rightArr.shift());
        };

        return sortedArr; 
    };

    // Put the single element in an array
    sortedArr.push(arr[0]);
    return sortedArr;
};

console.log(MergeSort([]));
console.log(MergeSort([0]));
console.log(MergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(MergeSort([105, 79, 100, 110]));
console.log(MergeSort([12, 3, 17, 8, 34, 1, 0, 56, 23, 5]));
console.log(MergeSort([99, 87, 75, 63, 51, 39, 27, 15, 3, -9]));
console.log(MergeSort([13, -3, 7, 7, 42, 0, -5, 2, 2, 1, 0, 13]));
console.log(MergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));