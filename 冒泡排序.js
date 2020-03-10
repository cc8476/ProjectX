let arr = [11, 2, 5, 76, 1111, 2, 5, 5];


for (let k = 0; k < arr.length - 1; k++) {

    for (let i = 0; i < arr.length - 1; i++) {

        const prev = arr[i];
        const next = arr[i + 1];

        if (prev > next) {
            arr[i] = next;
            arr[i + 1] = prev;
        }


    }

}
console.log(arr);


//从小到大
function BubbleSort(arr) {
    var i, j, temp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
var arr = [10, 7, 9, 11, 22, 33, 4, 2, 0, 1000];
BubbleSort(arr);
console.log(arr); //[0, 2, 4, 7, 9, 10, 11, 22, 33, 1000]