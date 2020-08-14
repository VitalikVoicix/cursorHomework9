const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const wrapper = document.querySelector(".wrapper")

const createSquares = function(){
      wrapper.insertAdjacentHTML('beforeend', '<div id="square">'+'<div></div>'.repeat(25)+'</div>');
      document.querySelectorAll('#square>div').forEach(el => {
      el.style.backgroundColor = '#'+Math.random().toString(10).slice(2,8);
     });
     button1.hidden=true;

}

button1.addEventListener('click',createSquares);

function interval (){
    document.querySelectorAll('#square>div').forEach(el => {
    el.style.backgroundColor = '#'+Math.random().toString(10).slice(2,8);
    button2.hidden=true;
   });
}

const change = function(){
  if(button1.hidden){
  setInterval(interval,1000);
}
    }
button2.addEventListener("click",interval);  
button2.addEventListener("click",change);

