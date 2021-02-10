let addToy = false;

const toyContainer = document.getElementById('toy-collection')

document.addEventListener('DOMContentLoaded', getToys)

function getToys() {
  fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(data => {
      let toys = data.map(function(toy) {
        return new Toy(toy)
      })
      toys.forEach(el => el.addToDom())
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
