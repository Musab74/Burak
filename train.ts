// H - TASK
function getPositive(arr: number[]): string {
    return arr.filter(num => num > 0).join("");
}

// Test the function
console.log(getPositive([1, -4, 2, 5]));


// // G - TASK
// function getHighestValue(arr) {
//     if (arr.length === 0) return -1;
//     let maxNum=Math.max(...arr);
   
//     return arr.indexOf(maxNum)
//    }
   
//    console.log(getHighestValue([23,78,65,78]));
   