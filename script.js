let inputName = document.getElementById('name')
let inputMail = document.getElementById('email')
let sendButton = document.getElementById('submit')



let FirstProjButton = document.getElementById('FirstProjButton')
let SecondProjButton = document.getElementById('SecondProjButton')

let Firstproj = document.querySelector('.Firstproj')
let Secondproj  = document.querySelector('.Secondproj')
let FirstprojFull = document.querySelector('.FirstProjFull')
let SecondprojFull  = document.querySelector('.SecondProjFull')

let CloseFirstButton = document.getElementById('CloseFirstButton')
let CloseSecondButton = document.getElementById('CloseSecondButton')


let linkSelector = document.getElementsByTagName('a')

let modalHeader = document.querySelector(".modalHeader")
let modalSubtitle = document.querySelector(".modalSubtitle")
let modalMessage = document.querySelector("#message")


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");







//-----------------------МОДАЛЬНОЕ ОКНО


const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);



document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();

  }
  
});

// open modal function
const openModal = function () {

    
    closeModalBtn.classList.remove("hidden")

    if (inputMail.value.length > 0 & inputName.value.length > 0 & inputMail.value.includes('@') == true){
        modalHeader.textContent = "Спасибо за отправленную заявку";
        modalSubtitle.textContent = " Я свяжусь с вами в ближайшее время";
        closeModalBtn.classList.add("hidden")

        
        sendButton.addEventListener("click", openModal);        

    
    } else if (inputMail.value.includes('@') == false & (inputMail.value.length > 0 & inputName.value.length > 0) ){
        modalHeader.textContent = "Произошла ошибка";
        modalSubtitle.textContent = "Введите корректный адрес электронной почты";

        
        sendButton.addEventListener("click", openModal);        
    } else{
        modalHeader.textContent = "Произошла ошибка";
        modalSubtitle.textContent = " Заполните все поля перед отправкой";

        
        sendButton.addEventListener("click", openModal);    }

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  inputName.value = ""
  inputMail.value = ""

    

};
// open modal event

sendButton.addEventListener("click", openModal);






//-----------------------НОВЫЙ СЛАЙДЕР


let sliders = document.querySelectorAll('.slider');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.slide');
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.
  
  let next = document.querySelector('.next');
 
  // Кнопка next внутри этого slider.
  
  let i = 0;
  // Номер текущего "открытого" слайда.
  
  next.addEventListener('click', function() {
    
    slide[i].classList.remove('block');

    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    
    slide[i].classList.add('block');
    
    // slide[i] - следующий слайд. Показываем.
  });  

  
 
 
}


$(function() {
  $('a[href^="#"').on('click', function() {

      let href = $(this).attr('href');
  
      $('html, body').animate({
          scrollTop: $(href).offset().top
      });
      return false;
  });


});