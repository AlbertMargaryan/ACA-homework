// http://openlibrary.org/search.json?q=${bookname}&page=1

let page = 1;

function getBook(thePage){
	let tbody = document.querySelector('tbody')
	tbody.remove()

	let loading = document.createTextNode('Loading please wait...')
	let paragraph = document.createElement('p')
	document.querySelector('table').append(paragraph)
	paragraph.append(loading)

	let book = document.querySelector('input').value.toLowerCase().split(' ').join('+');
	fetch(`http://openlibrary.org/search.json?q=${book}&page=${thePage}`)
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {

	  	paragraph.remove();
	  	
	  	let table =document.querySelector('table')
	  	let newTbody = document.createElement('tbody')

	  	table.append(newTbody)
	  	document.querySelector('h3').innerText = "Books Found:" + data.numFound;
	  	let numFound =  data.numFound;
	  	if (Number(numFound.toString()[0]) < page) {
	  		page = 1;
	  	}
	  	else if(page <= 1) {
	  		page = Number(numFound.toString()[0]) + 1;
	  	}

	  	for(let i = 0; i < data.docs.length; i++) {
	  		
	  		let tr = document.createElement('tr')

	  		let td = document.createElement('td')
	  		let td2 = document.createElement('td')
	  		let td3 = document.createElement('td')
	  		let td4 = document.createElement('td')

	  		let title = document.createTextNode(data.docs[i].title)
	  		let author = document.createTextNode(data.docs[i].author_name)
	  		let pubYear = document.createTextNode(data.docs[i].first_publish_year)
	  		
	  		newTbody.append(tr)

	  		tr.append(td)
	  		tr.append(td2)
	  		tr.append(td3)
	  		tr.append(td4)

	  		td.append(title)
	  		td2.append(author)
	  		td3.append(pubYear)
	  		
	  		if(typeof data.docs[i].subject !== 'undefined') {
	  			let subject = document.createTextNode(data.docs[i].subject.slice(0,5))
				td4.append(subject)
			}
	  		else {
	  			td4.append(document.createTextNode("This Book has no subjects. Sorry..."))
	  		}
	  		
	  	}
	}).catch(function(err) {
        console.log(err + 'n Invalid Request Please check your network connection');
    });
}
