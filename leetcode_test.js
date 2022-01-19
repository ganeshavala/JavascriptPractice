// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

var convert = function(s, numRows) {

    var length = s.length;
    if (numRows == 1) return s;
    var cycleLen = numRows * 2 - 2;
    var aZig = [];
    for (var i = 0; i < numRows; i++){
        for (var j = 0; j + i < length; j=j+cycleLen){
            aZig.push(s.charAt(j + i));
            if (i!=0 && i!=numRows -1 && j + cycleLen - i < length){
                aZig.push(s.charAt(j + cycleLen - i));
            }
        }
    }
    
    return aZig.join("");
    };

console.log(convert("Itriedtolookinthemirror", 3));
console.log(convert("Itriedtolookinthemirror", 4));
console.log(convert("Itriedtolookinthemirror", 5));
console.log(convert("Itriedtolookinthemirror", 6));
console.log("----------------------------------------");

function print(Str,n){
    var len = n*2-2,hash=[];
    if(n == 1) 
    return Str;
    if(n>2){
        for(var i=0;i<n;i++){
            for(var j=0;j+i<Str.length;j=j+len){
                hash.push(Str.charAt(i+j));
                if(i!=0&&i!=n-1&&j+len-i<Str.length){
                    hash.push(Str.charAt(j+len-i))
                }
            }
    }
    return hash.join("");
    }
    return Str;
}


console.log(print("Itriedtolookinthemirror", 3));
console.log(print("Itriedtolookinthemirror", 4));
console.log(print("Itriedtolookinthemirror", 5));
console.log(print("Itriedtolookinthemirror", 6));
