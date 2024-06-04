/*----1---
function small(arr){
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > smallest) {
            smallest = arr[i];
        }
    }
    console.log(smallest);
}
const array = [5, 3, 90, 10, 7];
small(array);
*/
/*----2---
function small(arr){
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    console.log(smallest);
}
const array = [5, 30, 90, 10, 7];
small(array);
*/
/*----3---
function sum(arr){
    var sums=arr[0];
    for(i=1;i<arr.length;i++){
sums+=arr[i];
    }
    console.log(sums);
}
var arr1=[10,100,30];
sum(arr1);
*/
/*----4---
function sum(arr){
    var sums=arr[0];
    for(i=1;i<arr.length;i++){
sums+=arr[i];
    }
    console.log( "th average is: "+sums/arr.length);
}
var arr1=[20,100,30];
sum(arr1);
*/
/*----5---
function Median(arr) {
    
    arr.sort((a, b) => a - b);

    const n = arr.length;
    
    if (n % 2 !== 0) {
       console.log( arr[Math.floor(n / 2)]);
    } else {
        
        console.log((arr[n / 2 - 1] + arr[n / 2]) / 2);
    }
}

const arr = [3, 1, 6, 2, 4];
Median(arr); 
*/
/*----6---
function removeDuplicates(arr) {
    let uniqueArr = []; 
    for (let i = 0; i < arr.length; i++) { 
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) { 
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) { 
            uniqueArr.push(arr[i]);
        }
    }
   console.log(uniqueArr); 
}


const arr = [1, 2, 3, 4, 1, 2, 5];
 removeDuplicates(arr);
 */
/*----7---
function sort(arr){
    console.log(arr.sort());
}
var arr1=[5,3,1,2,4];
sort(arr1);
*/
/*----8---
function sortDesc(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1; 
    } else {
        return 0; 
    }
}

let array = [5, 3, 8, 1, 2, 9, 4, 7, 6];
console.log("Original array:", array);
array.sort(sortDesc);
console.log("Sorted array in descending order:", array);
*/
/*----9-----
function shuffle(arr){
    var x=arr.length;
    while(x!=0){
        var y =Math.floor(Math.random()*x);
        x--;
        [arr[x],arr[y]]=[arr[y],arr[x]];
    }
    console.log(arr);
}
var arr1=[1,2,3,4,5];
shuffle(arr1);
*/



