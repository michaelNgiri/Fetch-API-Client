const url = baseUrl+"questions";


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
    fetch(baseUrl+'questions/').then(response => {
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



