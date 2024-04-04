let myForm = document.querySelector("#table-form")
let input= document.querySelector("#table-input")
let tableDiv = document.querySelector("#time-table")
// console.log("myForm:", myForm);

myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
 
    let tableOf = input.value;

    for(let i = 1 ; i <= 20 ; i++){
    let message = console.log(`${tableOf} X ${i} = ${tableOf*i}`);
    tableDiv.innerHTML += message ;
    }
});
