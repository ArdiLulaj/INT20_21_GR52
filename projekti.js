let text1="Our Company Wishes You ";
text1+="Happy New Year";
console.log(text1 +" 2022");

function mark(){
  let text = "Lorem Ipsum Sit amet, consectetur adipiscing elit,sed do eiusmod trempor incididunt ut labore et dolore manga aliqua ut ad minim veniam,quis nostrud exeriat nulla pariatur exepteur sint occaecat non prodent,sunt in culpra qui officia deserunt mollit anim id est laborum"
    let result = text.toLowerCase();

  document.getElementById("mark").innerHTML = result;
}







const person = {
  firstName: "Ardi",
  lastName: " Lulaj",
  age: 19,
  eyeColor: "blue"
};

console.log(person.firstName + person.lastName+ " is " + person.age + " years old.");






const array = [
  "Happy",
  " New",
  " Year",
  " 2022"
];


let i,len,text;
for (i = 0, len = array.length, text = ""; i < len; i++) {
  text += array[i] ;
}

console.log(text);






  var today = new Date();
       var timeNow = today.getHours();
       var greeting;
       if(timeNow>16)
       {
            greeting = "Good Evening!";
       }
       else if(timeNow>12)
       {
          greeting = "Good Day!"; 
       }
       else if(timeNow>0)
       {
          greeting = "Good Morning!"; 
       }
       else
       {
          greeting = "Hello!"; 
       }
       
       

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
alert(greeting+ "\n" +"Have a Great "+day);






let sum = 0;

let number = parseInt(prompt('Enter a positive number: '));

while(number >= 0) {
    sum += number;
    number = parseInt(prompt('Enter a negative number to stop: '));
}
console.log(`The sum is ${sum}.`);







let x =1;
         if(x==1)
         {
             let x=2;
             console.log('The value of x defined with let inside the block:'+ x);
         }
         console.log('The value of x defined with let outside the block:'+ x);
         function varFunksioni()
         {
             var x=1;
             if(x==1)
             {
                 var x=2;
                console.log('The value of x defined with var inside the block:'+ x);
             }
             console.log('The value of x defined with var outside the block:'+ x);
         }
         varFunksioni();