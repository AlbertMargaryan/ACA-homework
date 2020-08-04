// 

fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for(let i = 0; i < data.length; i++){
    	let tbody = document.querySelector('tbody')
    	let tr = document.createElement('tr')

    	let td = document.createElement('td')
    	let td2 = document.createElement('td')
    	let td3 = document.createElement('td')
    	let td4 = document.createElement('td')
        let td5 = document.createElement('td')

    	let title = document.createTextNode(data[i].title)
    	let relDate = document.createTextNode(data[i].release_date)
    	let director = document.createTextNode(data[i].director)
        let producer = document.createTextNode(data[i].producer)
    	let description = document.createTextNode(data[i].description)


    	tbody.append(tr)

    	tr.append(td)
    	tr.append(td2)
    	tr.append(td3)
        tr.append(td5)
    	tr.append(td4)
        

    	td.append(title)
    	td2.append(relDate)
    	td3.append(director)
        td5.append(producer)
    	td4.append(description)

    }
  });