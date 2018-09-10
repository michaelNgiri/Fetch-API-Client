function submitLogin(){
    const x = document.getElementById('password').value.toString().trim();
    const y = document.getElementById('email').value.toString().trim();
    //console.log(x);
   // console.log(y);
    const body =  'email'+'='+y+'&'+'password'+'='+x;
    const url = "http://localhost:3000/api/v1/auth/login";
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
        Authorization = data.Authorization;
        console.log(Authorization);
        authText.innerText="Logout";
    }).catch(err => {
        console.log(err);
        // Do something for an error here
    });
}
