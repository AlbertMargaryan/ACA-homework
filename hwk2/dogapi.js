// https://dog.ceo/api/breed/hound/images/random
function getDogImg(elem){
	let dog = elem.innerText.toLowerCase().split(' ').join('');
	fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {
	  	document.querySelector('img').setAttribute('src', data.message)
	    
	});
}