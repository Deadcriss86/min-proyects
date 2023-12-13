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


const getAbbreviations = (dataArray) => {
    dataArray.forEach((city) => {
      let { ciudad } = city;
      let ciudadArray = ciudad.split(" ");
      if (ciudadArray.length > 1) {
        let intials = "";
        ciudadArray.forEach((word) => {
          let intial = word.charAt(0);
          intials += `${intial.toUpperCase()}. `;
        });
        console.log(intials);
      } else {
        let incialesCiudad = ciudad.substring(0, 3);
        console.log(incialesCiudad);
      }
    });
  };
  
  getAbbreviations(cities);

  /*  ejercios 3 y 4 */

  let persons = [
    {
      nombre: "Juan",
      apellidos: "García Pérez",
      edad: 30,
      correo: "juan.garcia@example.com",
    },
    {
      nombre: "María",
      apellidos: "Martínez López",
      edad: 25,
      correo: "maria.martinez@example.com",
    },
    {
      nombre: "Carlos",
      apellidos: "Rodríguez Gómez",
      edad: 28,
      correo: "carlos.rodriguez@example.com",
    },
    {
      nombre: "Ana",
      apellidos: "Hernández Ruiz",
      edad: 35,
      correo: "ana.hernandez@example.com",
    },
    {
      nombre: "Javier",
      apellidos: "Díaz Fernández",
      edad: 22,
      correo: "javier.diaz@example.com",
    },
  ];

  persons.forEach((people)=>{
    let fullnames=people.nombre+" "+people.apellidos
    console.log(fullnames)
})

persons.map((people)=>{
    let emails=people.correo;
    let e_mail=emails.split("@")
    e_mail.pop();
    e_mail.push("@kodemia.mx")
    let prueba=e_mail[0]+e_mail[1]
    console.log(prueba)
})

