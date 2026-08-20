const firebaseConfig = {
  apiKey: "AIzaSyASJCSX74_gVGQ_zzROpgFZPSGC5mecLss",
  authDomain: "ta3afa-f5e9d.firebaseapp.com",
  projectId: "ta3afa-f5e9d",
  storageBucket: "ta3afa-f5e9d.appspot.com",
  messagingSenderId: "1039885292105",
  appId: "1:1039885292105:web:dcfe9202ecb6cc98dfa598"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

let currentUser = null;

let book =
document.getElementById("book");

let popup00 =
document.getElementById("popup00");

let closeBtn =
document.getElementById("close00");

let note00 =
document.getElementById("note00");


// ✅ فتح popup
book.onclick = function(){
    popup00.style.display = "flex";
}


// ✅ إغلاق popup
closeBtn.onclick = function(){
    popup00.style.display = "none";
}


// ✅ إغلاق عند الضغط خارج الصندوق
popup00.onclick = function(e){
    if(e.target === popup00){
        popup00.style.display = "none";
    }
}


// ✅ التحقق من المستخدم
// ✅ التحقق من المستخدم

auth.onAuthStateChanged(async (user) => {

    if (user) {

        currentUser = user;

        try {

            const docSnap = await db
                .collection("users")
                .doc(user.uid)
                .get();

            if (docSnap.exists) {

                const data = docSnap.data();

                note00.value = data.note00 || "";
            }

        } catch (error) {

            console.log(error);
        }
    }
});

// ✅ حفظ تلقائي أثناء الكتابة
note00.oninput = async function(){

    if(!currentUser) return;

    try{

        await db.collection("users")
        .doc(currentUser.uid)
        .update({

            note00: note00.value

        });

    }catch(error){

        console.log(error);
    }
}
