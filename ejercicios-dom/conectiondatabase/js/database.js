const getAllUsers=async()=>{
    let response=await fetch("https://firstdatabase-c5db5-default-rtdb.firebaseio.com/.json");
    let data = await response.json();
    console.log(data)
};

const saveUser=async()=>{
    let response=await fetch("https://firstdatabase-c5db5-default-rtdb.firebaseio.com/.json", {
        method: "POST", 
        body:JSON.stringify({name:"juan",lastname:"bodoque", age: "50"}),
    })
    let data = await response.json();
    console.log(data)
}