setProfileTitle();
// document.addEventListener("DOMContentLoaded", function(){

// });

//set title for profile page
function setProfileTitle(argument) {
	document.title = localStorage.firstName+' '+localStorage.lastName+"'s profile | StackOverflow-Lite";
}