
	const faqbox = document.querySelector('#faqbox');											
	const faqsection = document.querySelector('#faq');			

	
	// accordion
	faqbox.addEventListener('click',function(e){
		//console.dir(e.target);
		e.target.parentElement.classList.toggle('open');				
	})	
