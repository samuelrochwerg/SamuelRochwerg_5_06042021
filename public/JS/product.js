fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    console.log(response)
 
})
.catch(error => alert("Erreur : " + error));
