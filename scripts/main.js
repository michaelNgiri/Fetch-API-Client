if (!navigator.serviceWorker) {
	console.log('service worker not present');
}else{
	
	console.log('service worker present');
	// navigator.serviceWorker.register('http://devpool-client.herokuapp.com/sw.js').then(function(argument) {
	// 	// body...
	// 	console.log('succesfully registered service worker');
	// 	fetch(event.request).then(function(response){
	// 		if (response.status === 404) {
	// 			return new Response('oops! that page does not exist');
	// 		}
	// 	    return response;
	// 	});
	// }).catch(function(err){
	// 	console.log(err);
	// 	console.log('could not register service worker');
	// });
}