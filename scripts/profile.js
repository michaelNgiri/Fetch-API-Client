setProfileTitle();
document.addEventListener("DOMContentLoaded", function(){

});

//set title for profile page
function setProfileTitle() {
	document.title = localStorage.firstName+' '+localStorage.lastName+"'s profile | StackOverflow-Lite";
}