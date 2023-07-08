document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', (e) => {
		if (e.target.closest('.accordion__control')) {
			console.log(e);
			const accordion = e.target.closest('.accordion');
			console.log(accordion);
			const content = accordion.querySelector('.accordion__content');
			console.log(content);
			accordion.classList.toggle('open');
			
			if (accordion.classList.contains('open')) {
				accordion.setAttribute('aria-expanded', true);
 				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				accordion.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		}
	})
})

