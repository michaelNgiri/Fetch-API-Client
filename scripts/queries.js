function getQuery(url, data) {
  if (!('fetch' in window)) {
  console.log('Fetch API not found, try including the polyfill');
  alert('fetch is disabled in your browser');
  return;
}

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        console.log(data[0]['title']);
        console.log(data[0]['id']);
        return data;
    }).catch(err => {
        console.log(err);
        // Do something for an error here
    });
}


//
// function postQuery(url, data) {
//     if (!('fetch' in window)) {
//         console.log('Fetch API not found, try including the polyfill');
//         alert('fetch is disabled in your browser');
//         return;
//     }
//    // const url = 'http://localhost:3000/api/v1/questions';
// // const x =  fetch(url);
// // console.log(x);
//     fetch(url,
//         {
//             method: 'post',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//             },
//             body: ''
//         })
//         .then(response => {
//             return response.json();
//         }).then(data => {
//         // Work with JSON data here
//         console.log(data[1]['id']);
//     }).catch(err => {
//         console.log(err);
//         // Do something for an error here
//     });
// }

function fetchQuestionId(){
    return document.getElementById('featured-question-id').textContent();
}