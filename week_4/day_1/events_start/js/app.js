document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

// 1. grab the element
  const button = document.querySelector(`#button`)

  // 2. Add event listner (type? click? submit?)
  button.addEventListener(`click`,handleButtonClick)

  const textInput = document.querySelector(`#input`)
  textInput.addEventListener(`input`, handleInput)

  const select = document.querySelector(`#select`)
  select.addEventListener(`change`, handleSelectChange)

  
  const form = document.querySelector(`#form`)
  form.addEventListener(`submit`, handleFormSubmit)


});
// 3. function called when event (click) happens
const handleButtonClick = function(){
  
  const resultParagragh = document.querySelector(`#button-result`)
  resultParagragh.textContent = "The button has definatly been clicked"
}


const handleInput = function(event){
  const resultParagragh = document.querySelector(`#input-result`)
  resultParagragh.textContent = event.target.value
}

  const handleSelectChange = function(event){
    const resultParagragh = document.querySelector(`#select-result`)
    resultParagragh.textContent = "you selected " + event.target.value
  }

  const handleFormSubmit = function(event){
    event.preventDefault()
   const resultParagragh = document.querySelector(`#form-result`)
   resultParagragh.textContent = "YOUR NAME " + event.target.first_name.value + " " + event.target.last_name.value
  }

