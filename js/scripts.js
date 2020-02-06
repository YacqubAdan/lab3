const hello = document.getElementById("hello");

//uncomment below to see what getElementById 'got':
//console.log(hello);

function greeting() {
  alert("Hello!");
  hello.textContent = "Good";
}

hello.addEventListener("click", greeting);

/*
 for textContent vs innerHTML vs innerText see:
 https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
*/