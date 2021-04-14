const footer = document.querySelector("footer");
footer.style.backgroundColor = "red";

fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    console.log(response)
 
})
.catch(error => alert("Erreur : " + error));

console.log({hello:"hello"})

const addition = (nombre1, nombre2) => {
    let resultat = nombre1 + nombre2;
    return resultat;
}


console.log(addition(10, 25))

