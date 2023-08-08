var names =["Brand", "Yam", "Jose", "Antonio", "Pedro"];
console.log(names);

// for (let i = 0; i < names¿.length; i++) {
//       console.log(names[i]);
// } //Clasic "for" printing all items of the array

names.forEach(el => {
      console.log(el);  
});

console.log(names.join(`--`)) //Another basic metod with join for printing in console all items in the array with "anything" parameter to separate

//Objects
var Alumn = {
      name: `Brand`,
      age: `23`,
      role: `Software Consultant`
}
console.log(JSON.stringify(Alumn));//Printing object as a string
var stringparse = JSON.stringify(Alumn); //Save in variable the object converted to string
console.log(JSON.parse(stringparse)); //Parse of string object in format legible

//Functions
var ConsumerObjt={
      name: "Stitch",
      contact: "55858585",
      age: "3312"
}// Object

function AddLocation(objt){    //function that recive an objet for add an carecteristic or make an operation.
      objt.locaton = "Colosio";
      return objt;
}
console.log(ConsumerObjt); //without funtion 
console.log(AddLocation(ConsumerObjt));// with function 