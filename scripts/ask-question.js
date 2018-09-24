// document.addEventListener("DOMContentLoaded", function(){
   // fetchAllQuestions();
    // .then(
    //     console.log('all questions fetched')
    //         .catch(err =>{
    //             console.log(err);
    //         })
    // )
// });

const url = baseUrl+"questions";
   let text;

    function submitQuestion(){
        const values = pluckFormValues();
    console.log(values.question);
    console.log(Authorization);
    const body =  'question_title'+'='+values.title+'&'+'question'+'='+values.question+'&id'+'=1'+'&Authorization'+'='+localStorage.Authorization;
    document.getElementById('saving-question-text').style.visibility='visible';
    postQuestion(url,body);
}

function checkValidQuestion(){
    const values = pluckFormValues();
    console.log(values.question);
    const submitQuestionButton = document.getElementById('ask-question-submit-button');
    console.log(values.title);
 if (values.title === "" || values.question.trim().length < 5) {
    submitQuestionButton.style.cursor='disabled';
     submitQuestionButton.setAttribute('disabled', 'disabled');
 }else{
    submitQuestionButton.style.cursor='default';
    submitQuestionButton.style.background='#0b948d';
    submitQuestionButton.removeAttribute('disabled');
     submitQuestionButton.setAttribute('cursor', 'grab');
   }

 }

 function pluckFormValues(){
     const title = document.getElementById('ask-question-title').value;
     const question = document.getElementById('question-body').value;
     return {
         title: title,
         question: question
     };
 }

function postQuestion(url, body) {
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
            document.getElementById('saving-question-text').innerText='saved';
            return response.json();
        }).then(data => {
        // Work with JSON data here
        Authorization = data
    }).catch(err => {
        document.getElementById('saving-question-text').innerText='failed to save! Login and try again';
        console.log(err);
        // Do something for an error here
    });
}