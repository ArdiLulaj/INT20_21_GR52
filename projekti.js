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




function tryCatch(){
  tryCatch1();
  tryCatch2();
  tryCatch3();
}

function tryCatch1(){

  let x=document.getElementById("tryCatch1").value;
  try{
    if(x=="") throw "empty"; 
  }
  catch(err){
    alert("You did not enter a name");
  }
}

function tryCatch2(){

  let x=document.getElementById("tryCatch2").value;
  try{
    if(x=="") throw "empty"; 
  }
  catch(err){
    alert("You did not enter an email");
  }
}

function tryCatch3(){

  let x=document.getElementById("tryCatch3").value;
  try{
    if(x=="") throw "empty"; 
  }
  catch(err){
    alert("You did not enter a password");
  }
}










function Costumer (costumer_name, costumer_age) {

   
    this.name = costumer_name,
    this.age = costumer_age,

    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
}


const costumer1 = new Costumer('Costumer1', 29,);
const costumer2 = new Costumer('Costumer2', 25,);
const costumer3 = new Costumer('Costumer3 ',24,)

costumer1.gender= 'male';


console.log(costumer1.name); 
console.log(costumer2.age);
console.log(costumer3.name + costumer3.age) 

costumer1.greet=function(){
  console.log(costumer1.gender);
}

costumer1.greet();




function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return ('Infinity');
  }
  return (x * y);
}

console.log(multiply(1.7976931348623157e+308, 1));


console.log(multiply(1.7976931348623157e+308, 1.1));




function divide(x, y) {
  if (x / y < Number.MIN_VALUE) {
    return '0';
  }
  return (x / y);
}

console.log(divide(5e-324, 1));


console.log(divide(5e-324, 2));





function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));

console.log(expo('123456'));


console.log(expo('word'));




function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('100'));

console.log(sanitise('NotANumber'));




console.log(Math.E + Math.PI + Math.SQRT2+Math.LOG2E);
const mathComb= Math.E + Math.PI + Math.SQRT2+Math.LOG2E;
console.log(Math.round(mathComb));
console.log(Math.floor(mathComb));
console.log(Math.trunc(mathComb));
console.log(Math.pow(Math.round(mathComb),2));




let regExText = "Lorem Ipsum d trempor in culpra qui anim id est culpra laborum";
let result = regExText.match(/CULPRA/gi);
console.log(result);




function regEx() {
    var str = "mark";
    var patt = new RegExp("randomword");
    var res = patt.test(str);
    console.log(res);
}





const obj = /p/.exec("abcdefghijklmnopqrstuvwxyz");
console.log("Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input);








const p = 'Word1 word2 word3 word4 word5 word6 word7 word8 word1.';

console.log(p.replace('Word1', 'newWord'));



const regex = /Word1/gi;
console.log(p.replace(regex, 'newWord'));








$(document).ready(function(){
  $(".calendar").mouseenter(function(){
    $(".canvas").hide();
  });
   $(".footer").mouseenter(function(){
    $(".canvas").show("fast",function(){
      alert("To hide the section hover to the calendar.\nTo DELETE it click the calendar.");
    });
  });
});




$(document).ready(function(){
  $(".calendar").click(function(){
    $(".canvas").remove();
  });
});







$(document).ready(function(){
  $("#whatSay").click(function(){
    $(".reviews-col").fadeToggle();
  });
});




$(document).ready(function(){
  $(".video").mouseenter(function(){
    $(".audio").slideToggle("slow");
  });
});





$(document).ready(function(){
  $(".footer").mouseenter(function(){
  $("#aboutUs ").css({"color":"#0394fc"});
});
});




$(document).ready(function(){
  $("#servicesWeOffer").click(function(){
    $(".service-col").animate({
      height: 'toggle'
    });
  });
}); 








$(document).ready(function(){
  $(".footer").click(function(){
    alert("Text: " + $("#get").text());
  });
  $(".footer").mouseleave(function(){
    alert("HTML: " + $("#get").html());
  });
});





$(document).ready(function(){
    $("#servicesWeOffer").mouseleave(function(){
        $("#hide").text("You have to click it!");
    });
    });






$(document).ready(function(){
  $("#servicesWeOffer").mouseleave(function(){
    $("#hide").prepend("<b>Really?</b> ");
  });
  });









if(window.Worker){
  var myWorker = new Worker("worker.js");
  var message = {addThis: {num1:1, num2:1}};
  myWorker.postMessage(message)
  myWorker.onmessage=function(e){
    console.dir(e.data.result);
  };
}
