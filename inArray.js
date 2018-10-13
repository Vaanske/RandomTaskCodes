function inArray(array1,array2){
  let newArr= new Array();
  for (let i=0;i<array2.length;i++) {
          for (let j=0;j<array1.length;j++) {
                 if (array2[i].includes(array1[j])) newArr.push(array1[j])
                 }
      }
newArr=newArr.sort().filter( function (item,pos,arr) {
   return !pos  || item!= arr[pos-1]});
return newArr.sort();
}