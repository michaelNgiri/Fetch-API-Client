//const baseUrl = 'http://localhost:3000/api/v1/';
const baseUrl = 'https://dev-pool.herokuapp.com/api/v1/';

const authText =  findDom('auth-text');
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


function postQuery(url, body) {
    if (!('fetch' in window)) {
        console.log('Fetch API not found, try including the polyfill');
        alert('fetch is disabled in your browser');
        return;
    }
    fetch(url,
        {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:body
        })
        .then(response => {
            return response.json();
        }).then(data => {
        // Work with JSON data here
        Authorization = data
    }).catch(err => {
        console.log(err);
        // Do something for an error here
    });
}

function findDom(id){
  const dom =  document.getElementById(id);
  return dom;
}

