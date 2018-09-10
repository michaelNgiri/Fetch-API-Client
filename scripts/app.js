const url = 'http://localhost:3000/api/v1/questions/recent';
let userId;
document.addEventListener("DOMContentLoaded", function(){
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
});