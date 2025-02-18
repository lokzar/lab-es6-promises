// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
// ...
const imprimir=(step)=>{
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
}
getInstruction('mashedPotatoes', 0, (step0) => {
imprimir(step0);
document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  getInstruction('mashedPotatoes', 1, (step1) => {
    imprimir(step1);
    getInstruction('mashedPotatoes', 2, (step2) => {
      imprimir(step2);
      getInstruction('mashedPotatoes', 3, (step3) => {
        imprimir(step3);
        getInstruction('mashedPotatoes', 4, (step4) => {
          imprimir(step4);      
}, (error) => console.log(error));
  }, (error) => console.log(error));
    }, (error) => console.log(error));
      }, (error) => console.log(error));
        }, (error) => console.log(error));
  // ... Your code here


    // ...;


// Iteration 2 - using promises
// ...
obtainInstruction("steak",0)
.then((step0)=>{
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  document.querySelector("#steakImg").removeAttribute("hidden");
  return obtainInstruction("steak",1)
})
.then((step1)=>{
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  return obtainInstruction("steak",2)
})
.then((step2)=>{
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  return obtainInstruction("steak",3)
})
.then((step3)=>{
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction("steak",4)
})
.then((step4)=>{
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  return obtainInstruction("steak",5)
})
.then((step5)=>{
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  return obtainInstruction("steak",6)
})
.then((step6)=>{
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
  return obtainInstruction("steak",7)
})
.then((step7)=>{
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  return obtainInstruction("steak",8)
})

// Iteration 3 using async/await
// ...
async function instructionsBroco(){
  try{
    const paso1= await obtainInstruction("broccoli",0)
      document.querySelector("#broccoli").innerHTML += `<li>${paso1}</li>`
    const paso2= await obtainInstruction("broccoli",1)
      document.querySelector("#broccoli").innerHTML += `<li>${paso2}</li>`
    const paso3= await obtainInstruction("broccoli",2)
      document.querySelector("#broccoli").innerHTML += `<li>${paso3}</li>`
    const paso4= await obtainInstruction("broccoli",4)
      document.querySelector("#broccoli").innerHTML += `<li>${paso4}</li>`
    const paso5= await obtainInstruction("broccoli",5)
      document.querySelector("#broccoli").innerHTML += `<li>${paso5}</li>`
    const paso6= await obtainInstruction("broccoli",6)
      document.querySelector("#broccoli").innerHTML += `<li>${paso6}</li>`
  }
  catch(error){
      console.log(error);
  }
}

instructionsBroco();


// Bonus 2 - Promise all
// ...