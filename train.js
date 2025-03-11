// G - TASK
function getHighestValue(arr) {
    if (arr.length === 0) return -1;
    let maxNum=Math.max(...arr);
   
    return arr.indexOf(maxNum)
   }
   
   console.log(getHighestValue([23,78,65,78]));
   