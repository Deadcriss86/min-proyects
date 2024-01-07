document.write("hola")

const getAllUsers=async()=>{
    let response =await fetch("https://pruebadatabase-9e928-default-rtdb.firebaseio.com/.JSON" ,{
        method: "GET"
    });
    let users=await response.json();
    console.log(users)
    printUser(users)
}

const printUser=(userData)=>{
    document.write(JSON.stringify(userData));
}