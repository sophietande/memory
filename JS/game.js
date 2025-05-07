const container = document.getElementById("image-container");
const imagesSource = [];

//création du tableau
for (let i = 0; i < 6; i++) {
  imagesSource.push("../ressource/memory-legume/" + (i + 1) + ".svg");
  imagesSource.push("../ressource/memory-legume/" + (i + 1) + ".svg");
}
//mélandgge du tableau
shuffle(imagesSource);

//ajout des images dans le container
for (let i = 0; i < imagesSource.length; i++) {
  const img = document.createElement("img");

  img.src = imagesSource[i];
  img.setAttribute("class", "class-img");
  container.appendChild(img);
}

function shuffle(tab) {
  for (let i = tab.length - 1; i != 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);

    let temp = tab[i];
    tab[i] = tab[randomIndex];
    tab[randomIndex] = temp;
  }
}
//fonction délcnahcée au click sur image du memory
let tabPair = [];
let flag = 0;
const test = (node) => {
  //console.log(node.src);
  
  console.log("toto: "+flag);
  if(flag<2) {
    tabPair.push(node.src);
    console.log(tabPair);
    
  }
  flag++;

};

//créaton d'un tableau contenant les img générées dans la div container
let imagesTab = Array.from(container.getElementsByTagName("img"));
console.log(imagesTab);

imagesTab.forEach((image) => {
  image.addEventListener("click", () => {
    test(image);
  });
});

//console.log(imagesSource);

// let imageNodes = Array.from(container.getElementsByTagName("img"))
// console.log(imageNodes);

// imageNodes.forEach(image => {
//   image.addEventListener('click', () => {

//     test(image)
//   })
// })
