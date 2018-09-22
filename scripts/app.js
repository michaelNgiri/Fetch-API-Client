//const baseUrl = 'https://dev-pool.herokuapp.com/api/v1/';
const baseUrl = 'http://localhost:3000/api/v1/';
const authorization = Window.Authorization
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibWljaGFlbG5naXJpQGdtYWlsLmNvbSIsImlkIjoxMn0sImlhdCI6MTUzNzYxOTI5OSwiZXhwIjoxNTM3NjQ5Mjk5fQ.Ssrjp6R4GdbRE0CMzZ0HvgV2O73f2hhS9AgCts-GIXI"
document.addEventListener("DOMContentLoaded", function(){
    fetch(baseUrl+'questions/recent').then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        console.log(data[0]);
        document.getElementById('loading').style.visibility='hidden';
        document.getElementById('featured-question-title').innerHTML=data[0]['question_title'];
        document.getElementById('featured-question-body').innerHTML=data[0]['question_body'];
        document.getElementById('featured-question-id').setAttribute('value', data[0]['id']);
        document.getElementById('featured-question-user-id').setAttribute('value', data[0]['user_id']);
        console.log(data[0]['id']);
        document.getElementById('answer-link').style.visibility='visible';
        window.questionId = data[0]['id'];
        return data;
    }).catch(err => {
        console.log(err);
        // Do something for an error here
    });
});




function saveAnswer(questionId) {
 questionId = document.getElementById('featured-question-id').value;
console.log(questionId);
 const userId = document.getElementById('featured-question-user-id').value;
 console.log(userId);
 const answer = document.getElementById('answer-body').value;
 console.log(answer);

 const answerUrl = baseUrl+'questions/answers';
const queryBody = 'question_id='+questionId+'&user_id='+userId+'&answer='+answer;
console.log(queryBody);

//check if valid characters are entered in answer text
 if (typeof answer === "string" && answer.trim().length >= 5) {


fetch(answerUrl,
        {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "authorization": authorization
            },
            body: queryBody
        })
        .then(response => {
            return response.json();
        }).then(data => {
            if (data['status'] === 200) {
            document.getElementById('answer-body').value = '';
            document.getElementById('answer-form').style.visibility='hidden';
            document.getElementById('answer-again').style.visibility='visible';
            document.getElementById('answer-title').style.visibility='hidden';
            const answerStatus = document.getElementById('answer-status');
                    answerStatus.innerHTML = 'your Answer was saved succesfully';
                    answerStatus.style.color='green';  
                    answerStatus.style.visibility='visible';
            }else{
               document.getElementById('answer-status').style.color='red';
               document.getElementById('answer-body').style.border='1px solid red';
               const answerStatus = document.getElementById('answer-status'); 
                        answerStatus.innerHTML = 'Failed to save! Login and try again';
                        answerStatus.style.visibility='visible';
            }
        // Work with JSON data here
        console.log(data['message']);
    }).catch(err => {
        console.log(err);
        // Do something for an error here
    });

console.log(answerUrl);

}else{
    console.log('invalid answer text');
    const answerStatus = document.getElementById('answer-status');
            answerStatus.innerHTML = 'please type at least 5 characters';
            answerStatus.style.color='orange';
            answerStatus.style.visibility='visible';
}
}


function showAnswerForm(){
    document.getElementById('answer-form').style.visibility='visible';
    document.getElementById('answer-again').style.visibility='hidden';
}