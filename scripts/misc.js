const baseUrl = 'http://localhost:3000/api/v1/';
//const baseUrl = 'https://dev-pool.herokuapp.com/api/v1/';
const authText =  document.getElementById('auth-text');
let Authorization,
    userId=1,
    questionId ,
    answerId;
 Authorization = localStorage.Authorization
if(Authorization === null || Authorization === "" || Authorization === undefined){
    authText.innerText="Login";
}else{
    authText.innerText="Logout";
    //console.log(Authorization);
}