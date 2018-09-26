
function submitLogin(){
    const password = document.getElementById('password').value.toString().trim();
    const email = document.getElementById('email').value.toString().trim();
    //console.log(x);
   // console.log(y);
    const body =  'email'+'='+email+'&'+'password'+'='+password;
    const loginUrl = baseUrl+"auth/login";
    //console.log(body);
    //const data = {"email":y, password:x};
    postQuery(loginUrl, body)
}

function postQuery(loginUrl, body) {
    if (!('fetch' in window)) {
        console.log('Fetch API not found, try including the polyfill');
        alert('fetch is disabled in your browser');
        return;
    }
    fetch(loginUrl,
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
        saveToLocalStorage(data);
        
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
    const loginUrl = 'login.html';
    const logoutRedirect = 'index.html';

    if (Authorization != null) {
        localStorage.clear();
         authText.innerText="Login";
        console.log('you are now logged out');
        self.location.href = logoutRedirect;
        //location.reload;

    }else{
         authText.innerText="Login";
        console.log('you are not logged in');
        console.log(localStorage);
        self.location.href = loginUrl;
    }
}


function saveToLocalStorage(data){
    localStorage.setItem("Authorization", data.Authorization);
        localStorage.setItem("userID", data.user['id']);
        localStorage.setItem("email", data.user['email']);
        localStorage.setItem("firstName", data.user['firstName']);
        localStorage.setItem("lastName", data.user['lastName']);
        authText.innerText="Logout";
}