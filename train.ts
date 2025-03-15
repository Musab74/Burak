
// I Task

function majorityElement(arr: number[]): number | null {
    let count: { [key: number]: number } = {};

    arr.forEach((element) => {
        count[element] = (count[element] || 0) + 1;
    });

    let maxNum: number | null = null;
    let maxCount: number = 0;

    for (let num in count) {
        let currentCount = count[num]; 
        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxNum = Number(num);
        }
    }

    return maxNum;
}

console.log(majorityElement([1, 3, 4, 2, 3])); // checking 


// H - TASK
// function getPositive(arr: number[]): string {
//     return arr.filter(num => num > 0).join("");
// }

// console.log(getPositive([1, -4, 2, 5]));


// // G - TASK
// function getHighestValue(arr) {
//     if (arr.length === 0) return -1;
//     let maxNum=Math.max(...arr);
   
//     return arr.indexOf(maxNum)
//    }
   
//    console.log(getHighestValue([23,78,65,78]));
   