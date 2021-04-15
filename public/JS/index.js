// const footer = document.querySelector("footer");
// footer.style.backgroundColor = "red";

// fetch("http://localhost:3000/api/cameras")
// .then(response => response.json())
// .then(response => {
//     console.log(response)
 
// })
// .catch(error => alert("Erreur : " + error));


// const produitCamera = document.querySelector(".section_produits_camera__name h3");
// produitCamera.style.backgroundColor = "red";

main()

async function main() {
    const articles = await getArticles()

    for (article of articles) {
        displayArticle(article)
    }
}

function getArticles() {
   return fetch("http://localhost:3000/api/cameras")
   .then(function(httpBodyResponse) {
       return httpBodyResponse.json()
   })
   .then(function(articles) {
    return articles
   })
   .catch(function(error) {
    alert(error)
   })
}

function displayArticle() {
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById
}
