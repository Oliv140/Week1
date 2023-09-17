
/* const testSpan = document.getElementById("Potato");
testSpan.innerHTML = "<h1>WOW!</h1>"; */

//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
 }

 const sub = function(n1,n2){
    return n1 - n2
  } 

  const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };

  function mul(n1, n2){
    return n1 * n2;
  }

  //Anonym funktion
  const division = function(n1, n2) {
    return n1 / n2;
};

//--- Opgave 2 ---//

/* 
console.log( add(1,2) )     //Dette vil printe talet 3. Det er de to argumenter lagt sammen

console.log( add )          //Dette printer [Funtion: add], så 'add' repræsenterer en funktion

console.log( add(1,2,3) ) ; //Dette vil printe '3', fordi at 'add() modtager to argumenter n1 og n2.
                            //Disse ligges sammen og det tredje argument ignoreres
                            
console.log( add(1) );	    //Dette printer NaN. Det er kort for "Not a Numner". 
                            //Dette skyldes at 'add()' skal modtage to argumenter og her får den kun et.
                            //Når en funktion ikke får det krævede argument, bliver det som default sat til "undefined"
                            //Så i bund og grund prøver vi at sige: 1 - 'undefined', hvilket ikke giver et tal 	

console.log( cb(3,3,add) ); //"Result from the two numbers: 3+3=6". Her får vi de to tal; 3 og 3, lagt sammen.
                            //Det får vi fordi vi tager imod to tal som argumenter samt vores metode som argument.
                            //Metoden kaldes ikke som argument, men bliver derimoed brugt som callback inde i selve funktionen
                            //til at udføre beregningen. 
                            
console.log( cb(4,3,sub) ); // Dette vil printe: "Result from the two numbers: 4+3=1"
                            //da vi 'cb' modtager de to tal som argumenter samt 'sub' som argument.
                            //senere kaldes sub med de to tal som argumenter.

console.log(cb(3,3,add())); 
//Vi forsøger at overføre selve funktionen 'add' som argument til cb, det gør vi ikke nu. 
//Når vi skriver add(), forsøger koden at udføre add funktionen, og bruge dens retur-værdi som argument til 'cb'.  
//I stedet bør vi skrive 'add', da det vil overføre selve funktionen til 'cb' som så kan kalde den ved at bruge callback(n1, n2) 
//Kort sagt, 'add()' kalder funktionen, og 'add' overføre den.
//der for ville den rigtige kode se ud således: console.log(cb(3,3,add));

console.log(cb(3,"hh",add));// denne vil returnere en string med 3, hh = 3 hh.  
*/
//------------------------------------------------------------------------------------------------------


//--- 3 Extra ---//
/* const cb = function(n1,n2, callback){

  try{
    if(typeof callback !== "function"){
      throw new Error ("callback must be a funktion!")
    }
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  }catch(error){
    return "Error: " + error.message;
  }
};

console.log(cb(3,3,add())); */

//Her gør vi brug af en try-catch for at give en mere brugervenlig besked såfremt at vores callback ikke er en funktion,
//men eksempelvis som i opgave 7 bliver kaldt som argument. 
//------------------------------------------------------------------------------------------------------

//--- 3 Extra Extra ---//
/*                                                             //...rest er en javascript feature, der muliggør at
function addVersion2(n1, n2, ...rest) {                        //indtaste et uspecificeret antal argumenter.
  return n1 + n2 + rest.reduce((acc, cur) => acc + cur, 0);    //Her udregenes summen af tallene. Først ligges n1 og n2 sammen
}                                                              //og bruger herefter reduce på vores rest-array for at ligge de resterende tal til.
                                                               //reduce bruges til at iterere igennem et array og komme frem til et resultat,
                                                               //her starter reduce fra 0.

console.log(addVersion2(1, 2, 3, 4, 5, 6, 8, 9));

//Når vi skriver rest, er det ikke fordi at man skal kalde argumentet for rest. Vi kunne kalde det "potato"
//det illustrerer bare meget godt hvordan vi bruger "..."-kommandoen her.

//Så forskellen på disse to versioner er at den ene kan tage
//et uspecificeret antal argumenter og ligge dem sammen men det kan den anden ikke */

//------------------------------------------------------------------------------------------------------

//--- Opgave 4 ---//
//console.log(cb(3,3, mul))

//opgave 5
//console.log(cb(6, 3, division)); 
/*Det der gør en funktion anonym er at den ikke har et navn i koden. 
Det vil sige at vi ikke giver den et navn men i stedet bruger den som en "inline" funktion.
Altså en funktion der er tildelt en variabel*/

//------------------------------------------------------------------------------------------------------





