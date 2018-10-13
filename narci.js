function narcissistic( peopleInLine ) {
    if (peopleInLine[0]>25) return "NO";
    let cash=0;
    let k=1;
    for (let i=0;i<peopleInLine.length;i++)
       {
         
         if (peopleInLine[i]==25) cash=cash+25;
          else  {
                 let change= peopleInLine[i]-25;
                 cash=cash+25;
                 console.log("change is"+change);
                 if (change>cash)  return "NO";
                 else cash=cash-change;
          }
          console.log(cash);
       }
  return "YES";
}




console.log(narcissistic([25,25,50,100,25,50,25,100,25,25,25,100,25,25,50,100,25,50,25,100,50,25]));