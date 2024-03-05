let txtUsername = document.querySelector("#txtUsername")
let txtPassword = document.querySelector("#txtPassword")
let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
let btnRegister = document.querySelector("#btnRegister")

btnRegister.onclick = function () {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}
function register (Username, password, confirmPassword) {
    // if...else if...else
    // Conditional Operators (Greater Than >, Less Than <, Equal ==, not ! )
    // Greater than or Equal >=, Less Than or Equal <=
    // Not Equal !=

    console.log(Username, password, confirmPassword)

    if(password == confirmPassword && password !="" && confirmPassword !="") {
        return console.log("Password match!")
    } else if(password == "" || confirmPassword ==""){
        return console.log("Password must not be empty.")
    }
    
    else {
        return console.log("Password does not match.")
    }
    
}