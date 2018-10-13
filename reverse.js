function reverseLetter(str) {
  let res=new Array();
  for (let i=0;i<str.length;i++)
      {
         if ((str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90) || (str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122))
         	       res.push(str[i]);
       }
  return res.reverse().join("");
}


console.log(reverseLetter("nam!-3ig"));