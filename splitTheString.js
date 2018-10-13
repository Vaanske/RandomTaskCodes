function solution(str){
    if (str.length%2!=0) str=str.concat("_");
    let resArr= new Array();
    for (let i=0;i<str.length;i++) {
    	   if (i%2==0) {
    	            resArr.push(str[i].concat(str[i+1]));
    	   }
    }
    return resArr;
}

console.log(solution("abracc"))