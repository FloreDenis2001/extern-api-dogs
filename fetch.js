fetch("https://dog.ceo/api/breeds/list/all")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    createOptions(data.message);
  });

//functie ce primeste ca paramteru un obiect  in care cheile sunt rase

//ccreaza optiunile de rasa

function createOptions(breeds) {
  let options = " ";
  for (let breed in breeds) {
    options += `<option value="${breed}">${breed}</option>`;
  }
  let selectZone = document.querySelector(".breed-select");
  selectZone.innerHTML = options;
}



function dogSelected(breed){
    fetch("https://dog.ceo/api/breed/"+breed+"/images/random")
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        createImage(data.message);
    })
}


function createImage(image){
    let dog=document.querySelector(".dog-image");
    dog.src=image;
}

let selectDog=document.querySelector(".breed-select");

selectDog.addEventListener("change",(e)=>{
     dogSelected(selectDog.value);
})



let moreBtn=document.querySelector(".more");

moreBtn.addEventListener("click",(e)=>{
  fetch("https://dog.ceo/api/breed/"+selectDog.value+"/images/random")
  .then((data)=>{
      return data.json();
  })
  .then((data)=>{
      createImage(data.message);
  })
  


})