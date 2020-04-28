const hamburger = document.querySelelctor('.hamburger');
const navlinks = document.querySelelctor('nav-links');
const links = document.querySelelctor('nav-links');



hamburger.addEventListener('click', () =>{
	navlinks.classList.toggle("open");
});