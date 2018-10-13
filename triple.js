function toArr(num) {
 let resArr=new Array();
 let i=0;
 while (num > 0) {
 	   resArr[i]=Math.floor(num%10);
 	   i++;
 	   num=Math.floor(num/10);
 }
 return resArr.reverse();
}

function isTriple(arr){
	  let count=0;
	  let num;
	  for (let i=0;i<arr.length;i++) {
	  	    if (count==2) {
	  	    	        num=arr[i];
	  	    	        count=0;
               }
              if (arr[i]==arr[i+1]){
               	  count=count+1;
               	           
	  }
	  	    }
	  return num;
}
function isDouble(arr,num){
	  console.log(num);
	  let count=0;
	  let num2;
	  for (let i=0;i<arr.length;i++){
	  	   console.log("iteration: "+i);
	  	   console.log(count);
	  	  if (arr[i]==num && count==1) {
	  	  	       num2=arr[i];
	  	  	       count=0;
	  	  	   }
	  	  if (arr[i]===arr[i+1]) {
	  	          count=count+1;     
	  	          }
	  	  }
	  	 
	if (num2==num) return 1;
    return 0;
}


function tripledouble(num1, num2) {
	  let num1Arr= toArr(num1);
	  let num2Arr=toArr(num2);
	  console.log(num1Arr);
	  console.log(num2Arr);
      let check1= isTriple(num1Arr);
      if (typeof check1=="undefined") return 0;
      let check2=isDouble(num2Arr,check1);
   if (check2==1) return 1;
   return 0;
}

console.log(tripledouble(227917228666, 276242911))