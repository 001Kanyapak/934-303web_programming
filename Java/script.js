document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#login").onsubmit = function () {

    //get value form input 
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let checkUsername = false;
    let checkPassword = false;
    let check = false;
    let errorMessageUsername = "";
    let errorMessagePassword = "";

    //alert("username : " +username +"   password : " + password);
    if ( username.length >= 8 ) {
        checkUsername = true;
    }else{
        checkUsername = false;
        errorMessageUsername = "Please input username more then 8 charecter";
    }

    if (password.length >= 8 )  {
        checkPassword = true;
    }else{
        checkPassword = false;
        errorMessagePassword = "Please input password more then 8 charecter";
    }

    document.querySelector("#errorUsername").innerHTML = errorMessageUsername;
    document.querySelector("#errorPassword").innerHTML = errorMessagePassword;

    check = checkUsername & checkPassword;
    alert(check);
    return check;

    };
});