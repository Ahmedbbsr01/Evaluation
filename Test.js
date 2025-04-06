function compressedString (str){
    let result= " ";
    let count= 1;
    for (let i=1; i<=str.length;i++){
        if (str[i] === str[i-1]){
            count++;
        }else {
        result = result + str[i-1] + count;
        count=1;
        }
    }
    return result.length < str.length ? result : str;
}
let a = "aabcccccaaa";
let b = compressedString(a);
console.log(b)