// const footer = document.querySelector("footer");
// footer.style.backgroundColor = "red";

fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    console.log(response)
 
})
.catch(error => alert("Erreur : " + error));

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

//Modèle Template mais l'image ne s'affiche pas

// function displayArticle(article) {
//     const templateElt = document.getElementById("templateArticle")
//     const cloneElt = document.importNode(templateElt.content, true);

//     cloneElt.getElementById("section_produits_camera__name").textContent = article.name 
//     cloneElt.getElementById("section_produits_camera__price").textContent = article.price
//     cloneElt.getElementById("description__text").textContent = article.description
//     cloneElt.getElementById("image_camera").textContent = article.imageUrl

//     document.getElementById("section__produits").appendChild(cloneElt)

// }

//Même chose mais en moins propre//

function displayArticle(article) {
    document.getElementById("section__produits").innerHTML += `
    <a href="product.html">
                <article class="section__produits__camera">
                    <img src='${article.imageUrl}' alt='' />
                    <div class="section__produits__camera__description">
                        <h3 class="section_produits_camera__name">${article.name}</h3>
                            <h3 class="section_produits_camera__price">${article.price + " €"}</h3>
                        <p class="description__text">${article.description}</p>
                    </div>
                </article>
            </a>`
}