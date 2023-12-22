
let textBox=document.getElementById("input-text-box");
textBox.addEventListener("keyup", (event)=>{
    let entradaText=event.target.value
    console.log(entradaText)
    let texth1=document.getElementById("output-text");
    texth1.innerHTML=entradaText
})

let grupoRadio=document.getElementById("grup-radius")
grupoRadio.addEventListener("click", (event)=>{
console.log(event.target.value)
})


