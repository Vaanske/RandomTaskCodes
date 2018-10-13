function returnArr(str) {
	  let res=str.split(" ");
	 let resNum= res.map(x=> parseInt(x));
	 return resNum;
}

function sumOfItAll(arr){
	  let sum=0;
	  for (let i=0;i<arr.length;i++)
	  	     sum=sum+arr[i];
	  return sum;
}


function goodVsEvil(good, evil){
    let goodArr=sumOfItAll(returnArr(good));
    let evilArr=sumOfItAll(returnArr(evil));
    if (goodArr > evilArr) return  "Battle Result: Good triumphs over Evil"
    if (goodArr< evilArr)  return  "Battle Result: Evil eradicates all trace of Good"
    return "Battle Result: No victor on this battle field"
}

