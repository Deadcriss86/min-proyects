let nameAnimal=document.getElementById("name")
let razaAnimal=document.getElementById("raza")
let pictureAnimal=document.getElementById("picture-animal")

let saveDataAnimal=document.getElementById("save-data-mas")
/* coneccion con base de dato */
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

  /* */
  const getAllAnimals = async () => {
    let response = await fetch(
      "https://javascript30js-default-rtdb.firebaseio.com/songList/.json"
    );
    let data = await response.json();
    /*ya que tenemos las canciones, imprimimos todas las canciones*/
    printAllAnimals(data);
  };

  /*delete */
  const deleteAnimal = async (animalKey) => {
    let response = await fetch(
      `https://firstdatabase-c5db5-default-rtdb.firebaseio.com/${animalKey}/.json`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    return data;
  };
    /* boton guardar*/
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
  /* imprimir funcion */
  const printAllAnimals = (animals) => {
    console.log(animals);
    let animalList = document.getElementById("animal-list");
    animalList.innerHTML = "";
  
    /*Aquí convertimos las canciones de la base de datos en un array*/
    let animalArray = Object.keys(animal).map((key) => ({ ...animals[key], key }));
    console.log(animalArray);
  
    /*iteramos en el array para crear un li por cada canción*/
    animalArray.forEach((animal) => {
      let animalItem = createSongItem(animal);
      animalList.append(animalItem);
    });
  };

  /* representacion en html */
  const createSongItem = (animalData) => {
    let { name, raza, picture, key } = animalData;
    let animalLi = document.createElement("li");
    animalLi.classList.add("list-group-item", "d-flex", "gap-3");
  
    let nameSpan = document.createElement("span");
    let nameSpanText = document.createTextNode(`Creada por: ${nombre}`);
    nameSpan.append(nameSpanText);
  
    let razaSpan = document.createElement("span");
    let razaSpanText = document.createTextNode(raza);
    razaSpan.append(razaSpanText);
  
    let pictureSpan = document.createElement("span");
    let pictureSpanText = document.createTextNode(picture);
    pictureSpan.append(pictureSpanText);
  
    let buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("d-flex", "gap-3");
  
    let favButton = document.createElement("button");
    favButton.classList.add("btn", "btn-primary");
    let favButtonText = document.createTextNode("Agregar a Favoritos");
    favButton.append(favButtonText);
  
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
  
    let deleteButtonText = document.createTextNode("Eliminar");
    deleteButton.append(deleteButtonText);
    deleteButton.addEventListener("click", async () => {
      let data = await deleteAnimal(key);
      getAllAnimals();
    });
  
    buttonWrapper.append(favButton, deleteButton);
  
    songLi.append(userSpan, titleSpan, authorSpan, buttonWrapper);
  
    return songLi;
  };
  getAllAnimals();
