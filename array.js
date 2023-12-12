let utiles=["lapiz", "borrador", "sacapuntas"]
utiles.push("mochila")
utiles.splice(0,0, "marcador")
utiles.pop()
utiles.unshift("mochila de dora")

utiles.forEach(function(elemento, id, array){
    console.log(elemento, id)
})