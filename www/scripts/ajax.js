$.ajax({
  url: "http://148.75.251.185:8888/students",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});



(function(){
	let URL = "http://148.75.251.185:8888"
	let content = document.querySelector('#name');
	let index = 0;
	let jqueryButton = document.querySelector('.image');
	let mainGrid = document.querySelector('#grids');


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

				image.src = URL + response.profilePics;
				image.dataset.id = response.id;
				div.appendChild(image);

				mainGrid.appendChild(div);

			});
		}
	})

})();



	let nextButton = document.querySelecor('.next');
	nextButton.addEventListener('click',function(){
		$.ajax({
			method: : "GET"
			url: URL
		})
		.done(function(response){
			content.innerText = response[++index].name
		});
	});


	let preButton= document.querySelector('.previous');
	preButton.addEventListener('click',function(){
		$.ajax({
			method: : "GET"
			url: URL
		})
		.done(function(response){
			content.innerText = response[--index].name
		});
	});
});
