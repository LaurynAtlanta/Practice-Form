let form = document.getElementById('form');
let username= document.getElementById('name');
let password= document.getElementById('password');
let inputs = document.getElementsByTagName('input');

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkLength();
});

function checkLength(){
    const usernameValue = username.value;
    const passwordValue = password.value;
    if(usernameValue.length< 6){
        form.style.animation= 'shake 0.5s ease';
    } else if(passwordValue.length< 6){
        form.style.animation= 'shake 0.5s ease';
    } 
    form.addEventListener('animationend', () => { 
        form.style.animation = '';
    });
}

// function checkLength(){
//     for(let i=0; i<inputs.length; i++){
//         if(inputs[i].value<6){
//             form.style.animation= 'shake 0.5s ease';
//         }
//     }
//     form.addEventListener('animationend', () => { 
//                 form.style.animation = '';
//             });
// }
