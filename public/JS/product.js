fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    console.log(response)
 
})
.catch(error => alert("Erreur : " + error));

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

function getProductData(articleId) {
    return fetch(`$http://localhost:3000/api/cameras/${articleId}`)
      .catch((error) => {
        console.log(error)
      })
      .then((httpBodyResponse) => httpBodyResponse.json())
      .then((productData) => productData)
  }