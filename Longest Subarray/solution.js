'use strict'; ···

/*
Complete the 'maxLength' function below.

The function is expected to return an INTEGER.
The function accepts following parameters:
   l. INTEGER_ARRAY a
   2. INTEGER k
*/

function maxLength(a, k) {
    let max = 0;
    let maxTemp = 0;
    let i = 0;
    let j = 0;
    while (i <= a.length) {
        while(maxTemp <= k && j <= a.length){
            maxTemp += a[j];
            j++;
        }
        let subarrayLength = j - i;
        max = subarrayLength - 1 > max ? subarrayLength - l : max;
        
        maxTemp -= a[j];
        ++j;
    }
    return max;
}
function main() { ···
