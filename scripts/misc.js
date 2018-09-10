const authText =  document.getElementById('auth-text');
let Authorization,
    userId,
    questionId ,
    answerId;

if(Authorization === null || Authorization === "" || Authorization === undefined){
    authText.innerText="Login";
}else{
    authText.innerText="Logout";
    console.log(Authorization);
}