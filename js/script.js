const loader = document.querySelector("#loading");
function search() { 
    document.getElementById("notNestle").style.display = "none";
    document.getElementById("nestle").style.display = "none";
    document.getElementById("unable").style.display = "none";
    let url = 'https://world.openfoodfacts.org/api/v0/product/' + document.getElementById("numb").value + ".json";

    var obj
    document.getElementById('spinner').style.display = "block";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      obj = data;
     })
    .then(() => {
    document.getElementById('spinner').style.display = "none";
    console.log(obj);
      console.log(obj.product.brands);
      checkBrands(obj.product.brands);
      document.getElementById('name').innerHTML = obj.product.category_propertiess;
     });

} 

function checkBrands(input) {
    if(input !== undefined) {
        if(input.includes("Nestlé")){
            document.getElementById("nestle").style.display = "block";
            document.getElementById("notNestle").style.display = "none";
        }
        if(input.includes("Nestlé") == false){
            document.getElementById("nestle").style.display = "none";
            document.getElementById("notNestle").style.display = "block";
        }
    }
    else{
        document.getElementById("unable").style.display = "block";
    }
}
function init(){
    document.getElementById("notNestle").style.display = "none";
    document.getElementById("nestle").style.display = "none";
    document.getElementById('spinner').style.display = "none"; 
    document.getElementById('unable').style.display = "none"; 
}




