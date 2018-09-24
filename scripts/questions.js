const title = document.getElementById('ask-question-title').value;
const question = document.getElementById('question-body').value;

    function submitQuestion(){
    const title = document.getElementById('ask-question-title').value;
    const question = document.getElementById('question-body').value;
    console.log(title);
    console.log(question);
    console.log(Authorization);
    const body =  'question_title'+'='+title+'&'+'question'+'='+question+'&id'+'=1'+'&Authorization'+'='+localStorage.Authorization;
    const url = baseUrl+"questions";
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
fetch(url).then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
    console.log(data[0]);
    document.getElementById('featured-question-title').innerHTML=data[0]['question_title'];
    document.getElementById('featured-question-body').innerHTML=data[0]['question_body'];
    document.getElementById('featured-question-id').setAttribute('value', data[0]['id']);
    document.getElementById('featured-question-owner-id').setAttribute('value', data[0]['id']);
    console.log(data[0]['id']);
    return data;
}).catch(err => {
    console.log(err);
    // Do something for an error here
});

function fetchAllQuestions(){
    fetch('http://https://dev-pool.herokuapp.com/api/v1/questions/').then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        console.log(data);
        let i;
        for(i = 0; i < data.length; i++) {
            const obj = data[i];

            console.log(obj.id);
         const question = {
                id:obj.id,
                owner_id:obj.user_id,
                title:obj.question_title,
             body:obj.question_body
            };
            // console.log(question);
            const element = document.getElementById('questions-list');
            const child1 = element.appendChild('li').innerHTML=question.question.title;
        }
        document.getElementById('el1').innerHTML=data;
    }).catch(err => {
        console.log(err);
        // Do something for an error here
    });
}

function checkValidQuestion(){
 let text;
 
 if (typeof title === '' || typeof question === '') {
    submitQuestionButton.style.cursor='disabled';
 }else{
    submitQuestionButton.style.cursor='default';
    submitQuestionButton.style.background='#0b948d'
 }

 }