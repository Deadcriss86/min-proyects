let nameAnimal=document.getElementById("name")
let razaAnimal=document.getElementById("raza")
let pictureAnimal=document.getElementById("picture-animal")

let saveDataAnimal=document.getElementById("save-data-mas")

const saveAnimal = async (animal) => {
    let response = await fetch(
      "https://firstdatabase-c5db5-default-rtdb.firebaseio.com/.json",
      {
        method: "POST",
        body: JSON.stringify(animal),
      }
    );
    let data = await response.json();
    return data;
  };

  saveDataAnimal.addEventListener("click", async (event) => {
    event.preventDefault();
  
    let nombre = nameAnimal.value;
    let raza = razaAnimal.value;
    let picture = pictureAnimal.value;
  
    let animal = { nombre, raza, picture };
  
    console.log(animal);
    let result = await saveAnimal(animal);
    console.log(result);
  });
