function store(){
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('pass');
    if(username.value.length == 0){
        alert('Please fill details');
    } else if(email.value.length == 0){
        alert('Please fill details');
    } else if(password.value.length == 0){
        alert('please fill details');
    } else{
        sessionStorage.setItem('username', username.value);
        sessionStorage.setItem('email', email.value);
        sessionStorage.setItem('pass', password.value);
    }
    console.log(username);
    console.log(email);
    console.log(password);
};

function save(){
    let username = document.getElementById('uname');
    let email = document.getElementById('emailid');
    let password = document.getElementById('pass1');
    if(username.value.length == 0){
        alert('Please fill details');
    } else if(email.value.length == 0){
        alert('Please fill details');
    } else if(password.value.length == 0){
        alert('please fill details');
    } else{
        sessionStorage.setItem('uname', username.value);
        sessionStorage.setItem('emailid', email.value);
        sessionStorage.setItem('pass1', password.value);
    }
    console.log(username);
    console.log(email);
    console.log(password);
}; 
