let book =
document.getElementById("book");
let popup00 =
document.getElementById("popup00");
let closeBtn =
document.getElementById("close00");
let saveBtn =
document.getElementById("save00");
let note00 =
document.getElementById("note00");

book.onclick = function(){
    popup00.style.display = "flex";
}

closeBtn.onclick= function(){
    popup00.style.display = "none";
}

popup00.onclick = function(e){
    if(e.target === popup00){
        popup00.style.display = "none";
    }
}

note00.value =
localStorage.getItem("note00") || "";

saveBtn.onclick = function(){
    localStorage.setItem("note00",note00.value);
}

note00.oninput = function(){
    localStorage.setItem("note00",note00.value);
}