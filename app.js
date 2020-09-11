let form = document.getElementById('form');
let username= document.getElementById('name');
let password= document.getElementById('password');

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkLength();
});

function checkLength(){
    const usernameValue = username.value;
    const passwordValue = password.value;
    if(usernameValue< 6){
        form.style.animation= 'shake 0.5s ease';
    } else if(passwordValue< 6){
        form.style.animation= 'shake 0.5s ease';
    } 
    form.addEventListener('animationend', () => { 
        form.style.animation = '';
    });
}
