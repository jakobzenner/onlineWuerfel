let wuerfelBild = document.querySelector("#bild");

//listener
wuerfelBild.addEventListener('click', (event) => {
   event.target.style.backgroundImage = `url("./img/wurfel.png")`;
   event.target.classList.add("wuerfelAnimation");

})
/* Hier können wir mit 'animationend' definieren, was passiert nach der Animation */
wuerfelBild.addEventListener('animationend', (event) => {
   /* Mit diesen beiden Funktionen, erzeuge ich eine Zahl von 1 bis 6 */
   let zufall = Math.floor(Math.random() * 6) + 1;
   console.log(zufall)
   event.target.style.backgroundImage = `url("./img/wurfel-${zufall}.png")`;
   event.target.classList.remove("wuerfelAnimation");

});
