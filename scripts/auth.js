const baseUrl = 'http://localhost:3000/api/v1/';
//const baseUrl = 'https://dev-pool.herokuapp.com/api/v1/';

function submitLogin(){
    const x = document.getElementById('password').value.toString().trim();
    const y = document.getElementById('email').value.toString().trim();
    //console.log(x);
   // console.log(y);
    const body =  'email'+'='+y+'&'+'password'+'='+x;
    const url = baseUrl+"auth/login";
    //console.log(body);
    //const data = {"email":y, password:x};
    postQuery(url, body)
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
        Window.Authorization = data.Authorization;
        console.log(Window.Authorization);
        authText.innerText="Logout";
    }).catch(err => {
        console.log(err);
        // Do something for an error here
    });
}

function submitSignup(){
    const firstName = document.getElementById('reg-first_name').value.toString().trim();
    const lastName = document.getElementById('reg-last_name').value.toString().trim();
    const x = document.getElementById('reg-password').value.toString().trim();
    const y = document.getElementById('reg-email').value.toString().trim();
    //console.log(x);
    // console.log(y);
    const body =  'email'+'='+y+'&'+'password'+'='+x+'&'+'first_name'+'='+firstName+'&'+'last_name'+'='+lastName;
    const url = "http://dev-pool.herokuapp.com/api/v1/auth/signup";
    console.log(body);
    //const data = {"email":y, password:x};
    postSignupQuery(url, body)
}
function postSignupQuery(url, body) {
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
            alert('Registration succesful');
            return response.json();
        }).then(data => {
        alert('Registration succesful');
        authText.innerText="Logout";
    }).catch(err => {
        console.log(err);

    });
}