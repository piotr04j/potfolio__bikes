window.onload = function () {
	var hamburger = document.querySelector('.responsive__menu__button');
	var responsiveMenu = document.querySelector('.responsive__nav');
	var hamburgerIcon = document.querySelector('i')
	responsiveMenu.style.display = 'none'; //set display none for responsive menu before first click
	
	document.addEventListener('click', function (event) {

		var isClickButton = hamburger.contains(event.target);
		
		if (isClickButton) {

			if (responsiveMenu.style.display === 'none') {
				responsiveMenu.style.display = 'block';
				hamburgerIcon.classList.remove('fa-bars');
				hamburgerIcon.classList.add('fa-times');
			} else {
				responsiveMenu.style.display = 'none';
				hamburgerIcon.classList.remove('fa-times');
				hamburgerIcon.classList.add('fa-bars');
			}

		} else {
			responsiveMenu.style.display = 'none';
			hamburgerIcon.classList.remove('fa-times');
			hamburgerIcon.classList.add('fa-bars');
		}
	})
}