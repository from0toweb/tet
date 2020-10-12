'use strict';

const btnsBlock = document.querySelector('.start__buttons'),
	popup = document.querySelector('.popup'),
	popupLight = document.querySelector('.popup__block--light'),
	popupDark = document.querySelector('.popup__block--dark'),
	popupBack = document.querySelector('.popup__back'),
	popupButtons = document.querySelector('.popup__buttons'),
	form = document.querySelector('form');

const openPopup = event => {
	const target = event.target;

	if (target.matches('.start__button--primary')) {
		popup.style.visibility = 'visible';
		popup.style.opacity = '1';
		popupLight.style.display = 'flex';
		popupDark.style.display = 'none';
	} else if (target.matches('.start__button--dark')) {
		popup.style.visibility = 'visible';
		popup.style.opacity = '1';
		popupLight.style.display = 'none';
		popupDark.style.display = 'flex';
	}
};

const closePopup = () => {
	popup.style.visibility = 'hidden';
	popup.style.opacity = '0';
	popupLight.classList.remove('thanks');
	popupDark.classList.remove('thanks');
};

const openThanks = event => {
	if (event.target === form) {
		popupLight.classList.add('thanks');
		form.reset();
	} else if (event.target.matches('.popup__button--dark')) {
		popupDark.classList.add('thanks');
	}
};

btnsBlock.addEventListener('click', openPopup);
popupBack.addEventListener('click', closePopup);
document.addEventListener('click', event => {
	if (event.target.matches('.popup')) closePopup();
});
window.addEventListener('keyup', event => {
	if (event.key === 'Escape') closePopup();
});
form.addEventListener('submit', event => {
	event.preventDefault();
	openThanks(event);
});
popupButtons.addEventListener('click', openThanks);
