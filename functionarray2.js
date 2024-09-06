function addition(arr) {
    console.log("elements of array are : ");
    var i = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
var marks = [67, 89, 77, 90, 88];
var result = 0;
result = addition(marks);
console.log("addition is : " + result);
