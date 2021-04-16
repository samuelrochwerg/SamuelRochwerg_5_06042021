// const footer = document.querySelector("footer");
// footer.style.backgroundColor = "red";

fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    console.log(response)
 
})
.catch(error => alert("Erreur : " + error));


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

function displayArticle(article) {
    document.getElementById("section__produits").innerHTML += `
    <a href="product.html">
                <article class="section__produits__camera">
                    <img src='${article.imageUrl}' alt='' />
                    <div class="section__produits__camera__description">
                        <h3 class="section_produits_camera__name">${article.name}</h3>
                            <h3 class="section_produits_camera__price">${article.price}</h3>
                        <p class="description__text">${article.description}</p>
                    </div>
                </article>
            </a>`
}