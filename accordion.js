
	const jsa = document.querySelector('#jsa');											
	

	
	// accordion
	jsa.addEventListener('click',function(e){
		//console.dir(e.target);
		e.target.parentElement.classList.toggle('open');				
	})	
