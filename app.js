let inputNumber1 = document.getElementById('number1');
let inputNumber2 = document.getElementById('number2');
let btnEnter= document.getElementById('btn-enter');

let Result= "";
let Suma= document.getElementById('Suma');


function app(){
    btnEnter.addEventListener("click", function(){
    
        Number1 = inputNumber1.value;
        Number2 = inputNumber2.value;
        Result= (parseInt(Number1)+ parseInt(Number2));
        console.log(Result);
        Suma.innerHTML=Result;
        
    })
}










app();
