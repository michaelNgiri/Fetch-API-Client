function submitQuestion(){
    const title = document.getElementById('ask-question-title').value;
    const question = document.getElementById('ask-question-body').value;
    console.log(title);
    console.log(question);
    const body =  'question_title'+'='+title+'&'+'question'+'='+question+'id'+'='+userId+'Authorization'+'='+Authorization;
    const url = "http://localhost:3000/api/v1/questions";
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
        Authorization = data
    }).catch(err => {
        console.log(err);
        // Do something for an error here
    });
}
