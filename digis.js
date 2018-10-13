




function titleCase(title, minorWords) {
	var newArr= new Array();
	var subArr=new Array();
	var constu;
    if (typeof minorWords==="undefined")
      {
       newArr=title.split(" ");
      for (let i=0;i<newArr.length;i++) { 
                  newArr[i]=newArr[i].charAt(0).toLocaleUpperCase()+newArr[i].slice(1);
      }
      
       }
    else {
       newArr=title.split(" ");
       subArr=minorWords.split(" ");
         console.log(newArr);
        console.log(subArr);
       newArr[0]=newArr[0].charAt(0).toLocaleUpperCase()+newArr[0].slice(1);
        for (let i=1;i<newArr.length;i++) {
        	 newArr[i]=newArr[i].charAt(0).toLocaleUpperCase()+newArr[i].slice(1);
        	    for (var j=0;j<subArr.length;j++) {
        	    	    console.log(newArr[i]);
        	    	    console.log(subArr[j]);
        	    	    subArr[j]=subArr[j].charAt(0).toLocaleUpperCase()+subArr[j].slice(1);
        	    	    constu= subArr[j].localeCompare(newArr[i]);
        	    	          if (constu===0)
        	    	          	     { 
        	    	                       newArr[i]=newArr[i].charAt(0).toLocaleLowerCase()+newArr[i].slice(1);
        	    	                       console.log("passed "+i);
        	    	                       continue;
        	    	          	     }      
        	    	                    	 
        	    
        	 
        	 }
        }
    }
 newArr=newArr.join(" ");
 return newArr;
}


console.log(titleCase("the clash of the kings mother","the of kings"));