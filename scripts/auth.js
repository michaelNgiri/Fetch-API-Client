
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
        localStorage.setItem("Authorization", data.Authorization);
        console.log('you are logged in as:'+localStorage.Authorization);
        
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
    }).catch(err => {
        console.log(err);

    });
}

function authenticate(){
    //localStorage.clear();
    const loginUrl = 'login.html';
    if (localStorage.Authorization === null) {
         authText.innerText="Logout";
        console.log('you are not logged in');
        self.location.loginUrl;
    }else{
        localStorage.removeItem('Authorization');
         authText.innerText="Login";
        console.log('you are now logged out');

    }
}