let data = JSON.parse(localStorage.getItem("data"));

let container = document.querySelector("#products_data");

append(data)

function redirect() {
  window.location.href = "index.html";
}

function append(data) {

  data.forEach(function(el, i) {

    let div = document.createElement("div");
    div.style.border = "1px solid green";
    div.style.textAlign = "center";

    let image = document.createElement("img");
    image.src = el.imageLink;
    image.style.width = "300px";
    let brand = document.createElement("h2");
    brand.innerText = el.brand;
    let name = document.createElement("h3");
    name.innerText = el.name;
    let price = document.createElement("h3");
    price.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove Product";
    btn.addEventListener("click", function(){
      remove(i);
    })

    div.append(image, name, brand, price, btn);
    container.append(div);
  })

}

function remove(id) {
  console.log(id);

  data.splice(id,1);
  localStorage.setItem("data", JSON.stringify(data));
  let newData = JSON.parse(localStorage.getItem("data"));
  append(newData);
}


if (typeof exports !== "undefined") {
  module.exports = {
    append, remove
  };
}