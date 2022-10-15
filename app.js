const head = document.querySelector("h1");
const btn = document.querySelector("button");
const loaders = document.querySelector(".loaders");
const FetchSana = (ApiAdress) => {
  fetch(ApiAdress)
    .then((jovob) => jovob.json())
    .then((sana) => {
      head.innerHTML = `${sana.slip.id} ${sana.slip.advice}`;
    })
    .catch((wrong) => console.log(wrong));
};

const MaslahatBerish = () => {
  FetchSana("https://api.adviceslip.com/advice");
};

btn.addEventListener("click", MaslahatBerish);

function loadedAnim() {
  setTimeout(() => {
    loaders.style.opacity = "0";
    loaders.style.display = "none";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", loadedAnim);
