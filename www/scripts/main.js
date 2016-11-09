
let modal = document.getElementById('mainModal');
let span = document.getElementsByClassName("close")[0];
let images = document.querySelectorAll('.image');
let infos = document.querySelectorAll('.info');


(function(){
	let URL = "http://148.75.251.185:8888"
	let content = document.querySelector('#name');
	let index = 0;
	let jqueryButton = document.querySelector('.image');
	let gridSystem = document.querySelector('#grids');
	
	gridSystem.addEventListener('click',function(evnt){
		if( evnt.target.classList.contains('thumb')){
			
			$.ajax({
				method: "GET",
				url: URL+'/students/'+evnt.target.dataset.id,
			}).done(function(response){
				document.querySelector('#mainModal .modalContent .name').innerText =  response.first_name + " " + response.last_name;

				document.querySelector('#mainModal .modalContent .email').innerText =  response.email;
				document.querySelector('#mainModal .modalContent .exerpt').innerText =  response.excerpt;

				modal.style.display = "block";
			});
		}
		
	});

	$.ajax({ 
		url: URL+'/students',
		method: "GET"
	}).done(function(response){
		for (let i=0; i<response.length; i++){
			$.ajax({
				url: URL+'/students/'+response[i].id,
				method: "GET"
			}).done(function(response){
				

				let div= document.createElement('div');
				div.classList.add('image');
				let image = document.createElement('img');
				image.classList.add('thumb');
				image.src = URL + response.profilePics;
				image.dataset.id = response.id;
				div.appendChild(image);

				gridSystem.appendChild(div);

			});
		}
	})

})();





span.addEventListener('click',function(){
 	modal.style.display = "none";
});

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
