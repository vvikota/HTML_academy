
  /*form-popup*/
  var btnContact = document.querySelector(".btn-contact");
  var popup = document.querySelector(".modal-content-feedback");
  var feedbackClose = document.querySelector(".modal-content-feedback-close");
  var login = popup.querySelector("[name = login]");
  var mail = popup.querySelector("[name = mail]");
  var letter = popup.querySelector("[name = letter]");
  var form = popup.querySelector("form");
  var storage = localStorage.getItem("login");

  btnContact.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("show-content-feedback");

    if (storage) {
      login.value = storage;
      mail.focus();
    } else {
      login.focus();
    }
  });


  feedbackClose.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("show-content-feedback");
    popup.classList.remove("feedback-error");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !mail.value || !letter.value) {
      event.preventDefault();
      popup.classList.add("feedback-error");
    } else {
      localStorage.setItem("login", login.value);
    }
  });


  window.addEventListener("keydown", function(event){
  	if(event.keyCode === 27){     /*проверка нажатия esc*/
  		if(popup.classList.contains("show-content-feedback")) { /*проверка открыт ли попап*/
  			popup.classList.remove("show-content-feedback");   /*закрытие попаппа*/ 
  		}
  	}
  });

  /*map-popup*/
  var mapPopup = document.querySelector(".modal-content-map"); /*окно карты*/
  var mapOpen = document.querySelector(".contact img"); /* кнопка-карта*/
  var mapClose = document.querySelector(".modal-content-map-close"); /*закрытие карты*/

  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-map-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-map-show");
  });

  window.addEventListener("keydown", function(event){
  	if(event.keyCode === 27){     /*проверка нажатия esc*/
  		if(mapPopup.classList.contains("modal-map-show")) { /*проверка открыт ли попап*/
  			mapPopup.classList.remove("modal-map-show");   /*закрытие попаппа*/ 
  		}
  	}
  });