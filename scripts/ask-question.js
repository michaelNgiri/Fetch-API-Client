// document.addEventListener("DOMContentLoaded", function(){
   // fetchAllQuestions();
    // .then(
    //     console.log('all questions fetched')
    //         .catch(err =>{
    //             console.log(err);
    //         })
    // )
// });



function checkValidQuestion(){
 let text;
 const title = document.getElementById('ask-question-title').value;
const question = document.getElementById('question-body').value;
const submitQuestionButton = document.getElementById('ask-question-submit-button');
 
 if (typeof title === '' || question.length<5) {
    submitQuestionButton.style.cursor='disabled';
 }else{
    submitQuestionButton.style.cursor='default';
    submitQuestionButton.style.background='#0b948d'
   }

 }