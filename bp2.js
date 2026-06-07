
        let book = document.getElementById("book");
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("close");

// فتح عند الضغط على الكتاب
book.onclick = function(){
    popup.style.display = "flex";
}

// إغلاق عند الضغط على زر رجوع
closeBtn.onclick = function(){
    popup.style.display = "none";
}

// إغلاق عند الضغط خارج النافذة
popup.onclick = function(e){
    if(e.target === popup){
        popup.style.display = "none";
    }
}
    