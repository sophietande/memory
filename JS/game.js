const container = document.getElementById("image-container");
const imagesSource = [];

//création du tableau
for (let i = 0; i < 6; i++) {
  imagesSource.push("../ressource/memory-legume/" + (i + 1) + ".svg");
  imagesSource.push("../ressource/memory-legume/" + (i + 1) + ".svg");
}

//mélange du tableau
shuffle(imagesSource);

//ajout des images dans le container
for (let i = 0; i < imagesSource.length; i++) {
  const img = document.createElement("img");
  img.src = imagesSource[i];

  setTimeout(function () {
    img.src = "../ressource/question.svg";
  }, 2000);

  img.setAttribute("class", "class-img");
  img.addEventListener("click", () => {
    img.src = imagesSource[i];
    
    clickImg(img, );
  });

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
//fonction déclenchée au click sur image du memory
let tabPair = [];
let flag = 0;

const clickImg = (node) => {
  console.log("flag: " + flag);

  if (flag == 0)
	tabPair = [];

  if (flag < 2) {
    tabPair.push(node);
  }

  flag++;

  if (flag === 2) {
    //si j'ai une paire
    if (tabPair[0].src === tabPair[1].src) {
      console.log("success");
    } else {
      console.log("raté");

      for (let i = 0; i < tabPair.length; i++) {
        setTimeout(function () {
		tabPair[i].src = "../ressource/question.svg";
        }, 1000);
      }
    }
    flag = 0;
  }
};

//créaton d'un tableau contenant les img générées dans la div container
//let imagesTab = Array.from(container.getElementsByTagName("img"));

// imagesTab.forEach((image) => {
//   image.addEventListener("click", () => {
//     clickImg(image);
//   });
// });

//console.log(imagesSource);

// let imageNodes = Array.from(container.getElementsByTagName("img"))
// console.log(imageNodes);

// imageNodes.forEach(image => {
//   image.addEventListener('click', () => {

//     test(image)
//   })
// })
