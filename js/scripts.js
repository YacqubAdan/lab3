const hello = document.getElementById("hello");

//uncomment below to see what getElementById 'got':
//console.log(hello);
var toggle = false;

function greeting(){
  toggle == true 
  if (toggle == false){
    hello.innerText = "Hello"
    toggle = true 
  } else if(toggle == true){
    hello.innerText = "Goodbye"
    toggle = false;
  }

}

hello.addEventListener("click", greeting);

/*
 for textContent vs innerHTML vs innerText see:
 https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
*/