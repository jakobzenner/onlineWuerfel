function wurfelWerfen () {
let wurfel = Math.floor(Math.random()*6)+1;
console.log(wurfel);
let img = document.querySelector('#img')
document.querySelector('#msg').innerHTML = 'Viel Spaß!'

switch(wurfel){
    case 1:
        img.src = './img/wurfel-1.png'
        break;
    case 2:
        img.src = './img/wurfel-2.png'
        break;
    case 3:
        img.src = './img/wurfel-3.png'
        break;
    case 4:
        img.src = './img/wurfel-4.png'
        break;
    case 5:
        img.src = './img/wurfel-5.png'
        break;
    case 6:
        img.src = './img/wurfel-6.png'
        break;
    default:
        img.src = './img/wurfel.png'
    
  }

}
//listener
img.addEventListener('click', wurfelWerfen)



