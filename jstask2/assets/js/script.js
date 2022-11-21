// TASK 1

// let image = document.getElementById('image');
// let text = document.getElementById('text');

// if (confirm("Şəkli görməyi təsdiq edirsiniz?") == true) {
//     text.innerHTML = "Şəkli görməyi təsdiq etdiniz";
//     image.style.filter = "blur(0)";
// } else {
//     text.innerHTML = "Şəkli görməyi təsdiq etmədiniz";
//     image.style.filter = "blur(10px)";
// }




// TASK 2

// let text = document.getElementById('text');
// let image = document.getElementById('image');

// let prmt = parseInt(prompt("Yaşınızı daxil edin"));

// console.log(prmt);


// if(isNaN(prmt)){
//     text.innerHTML = "Yaş düzgün daxil edilməyib, kontenti görə bilməzsiniz ";
//     image.style.filter = "blur(10px)";
// } else if (prmt >= 18) {
//     text.innerHTML = "Yaşınız kifayətdir, kontenti görə bilərsiniz";
//     image.style.filter = "blur(0)"
// } else {
//     text.innerHTML = "Yaşınız kifayət deyil, kontenti görə bilməzsiniz";
//     image.style.filter = "blur(10px)"
// }






// TASK 3

// let input = document.getElementById('inp');
// let btn = document.getElementById('btn');
// let text = document.getElementById('text');


// function Show(){
//     if (input.value === null || input.value.trim().length < 4) {
//         text.style.color = "black";
//         text.innerHTML = "Duzgun qrup adi daxil edin";
//     }else{
//         var groupNo = input.value.slice(-3, -2);
//         if (groupNo == 1) {
//             text.innerHTML = "Seher qrupu"
//             text.style.color = "yellow";
//         } else if (groupNo == 2) {
//             text.innerHTML = "Gunorta qrupu";
//             text.style.color = "red";
//         } else if (groupNo == 3) {
//             text.innerHTML = "Axsam qrupu"
//             text.style.color = "black";
//         } else {
//             text.style.color = "black";
//             text.innerHTML = "Qrup nomresi duzgun deyil";
//         }
//     }
// }
