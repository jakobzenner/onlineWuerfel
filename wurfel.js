   let wuerfelBild = document.querySelector("#bild");

    //listener
    wuerfelBild.addEventListener('click', (event) => {
       event.target.style.backgroundImage=`url("./img/wurfel.png")`;
       event.target.classList.add("wuerfelAnimation");

    })

    wuerfelBild.addEventListener('animationend', (event) => {
       let zufall = Math.floor(Math.random()*6)+1;
       console.log(zufall)
       event.target.style.backgroundImage=`url("./img/wurfel-${zufall}.png")`;
       event.target.classList.remove("wuerfelAnimation");

    });
        