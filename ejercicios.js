let cities = [
    { ciudad: "Nueva York", pais: "Estados Unidos" },
    { ciudad: "Los Ángeles", pais: "Estados Unidos" },
    { ciudad: "Toronto", pais: "Canadá" },
    { ciudad: "Buenos Aires", pais: "Argentina" },
    { ciudad: "Sídney", pais: "Australia" },
    { ciudad: "Ciudad de México", pais: "México" },
    { ciudad: "Río de Janeiro", pais: "Brasil" },
    { ciudad: "Santiago", pais: "Chile" },
    { ciudad: "Lima", pais: "Perú" },
    { ciudad: "São Paulo", pais: "Brasil" },
    { ciudad: "Bogotá", pais: "Colombia" },
    { ciudad: "Miami", pais: "Estados Unidos" },
    { ciudad: "Ciudad de Panamá", pais: "Panamá" },
    { ciudad: "Madrid", pais: "España" },
    { ciudad: "París", pais: "Francia" },
    { ciudad: "Londres", pais: "Reino Unido" },
    { ciudad: "Tokio", pais: "Japón" },
    { ciudad: "Sídney", pais: "Australia" },
    { ciudad: "El Cairo", pais: "Egipto" },
    { ciudad: "Ciudad del Cabo", pais: "Sudáfrica" },
  ];


cities.forEach((item)=>{
console.log("la ciudad: "+item.ciudad+" se encuentra en: "+item.pais)
})


function abreviarString(texto){
    let textoLimpio=texto.replace(/[^a-zA-Z\s]/g, '');

    return textoLimpio
    .split(' ')
    .map(word =>word.charAt(0))
    .join('');
}


let ciudadesAbreviadas = cities.map((ciudadAbreviada)=>{
    console.log(ciudadAbreviada)
})

let textoOriginal = arrayString;
let abreviatura=abreviarString(textoOriginal);
console.log(abreviatura)