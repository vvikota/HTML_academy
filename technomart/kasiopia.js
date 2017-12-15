




var linkmap = document.querySelector(".js-map"),
  linkbuy = document.querySelectorAll(".js-buy"),
  map = document.querySelector(".modal-map"),
  buy = document.querySelector(".modal-add-product"),
  closemap = document.querySelector(".modal-content-close-map"),
  closebuy = document.querySelector(".modal-content-close-buy"),
  linklesson = document.querySelector(".js-lesson"),
  closelesson = document.querySelector(".modal-content-close-lesson"),
  storage = localStorage.getItem("login"),
  lesson = document.querySelector(".modal-write-us");

if (linklesson && lesson && closelesson) {
  var form = lesson.querySelector("form"),
    login = lesson.querySelector("[name=login]"),
    email = lesson.querySelector("[name=email]"),
    textletter = lesson.querySelector("[name=textletter]");
  linklesson.addEventListener("click", function(a) {
   a.preventDefault(),
   lesson.classList.add("modal-content-show"),
   login.focus(), storage ? (login.value = storage, email.focus()) : login.focus() }),
   closelesson.addEventListener("click", function(a) { 
   a.preventDefault(),
   lesson.classList.remove("modal-content-show"),
   lesson.classList.remove("modal-error") }),

 form.addEventListener("submit", function(a) {
  login.value && email.value && textletter.value ? (localStorage.setItem("login", login.value),
  localStorage.setItem("email", email.value)) : (a.preventDefault(),
  lesson.classList.add("modal-error")) }),


  window.addEventListener("keydown", function(a) {
   27 === a.keyCode && lesson.classList.contains("modal-content-show") && (lesson.classList.remove("modal-content-show"),
   lesson.classList.remove("modal-error")) })}

for (var i = 0; i < linkbuy.length; i++) linkbuy[i].addEventListener("click", function(a) {
 a.preventDefault(),
 buy.classList.add("modal-content-show") });

closebuy.addEventListener("click",function(a) { 
  a.preventDefault(),
   buy.classList.remove("modal-content-show") }),
 
  window.addEventListener("keydown", function(a) {
   27 === a.keyCode && buy.classList.contains("modal-content-show") && buy.classList.remove("modal-content-show") }),

    linkmap.addEventListener("click", function(a) {
     a.preventDefault(),
      map.classList.add("modal-content-show-map") }),

   closemap.addEventListener("click", function(a) {
     a.preventDefault(),
     map.classList.remove("modal-content-show-map") }),

      window.addEventListener("keydown", function(a) { 
        27 === a.keyCode && map.classList.contains("modal-content-show-map") && map.classList.remove("modal-content-show-map") });