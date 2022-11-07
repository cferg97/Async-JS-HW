const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ca9611081msh7fa99f298f5e94dp1d4fe1jsn4bb1e6e93072',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

let container = document.querySelector('.row')


// fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=daft-punk', options)
//     .then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=pink-floyd', options)
//     .then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


const loadMetallica = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica', options)
    .then(response => response.json())
    .then((metallica) => {
        console.log(metallica.data)
        for (data of metallica.data){
            const row = document.querySelector(".row")
            row.innerHTML += `<div class="card col-3 align-items-center">
            <img src="${data.album.cover_medium}" class="card-img-top mt-1">
            <div class="card-body">
            <h5 class="card-title">${data.artist.name}</h5>
            <p class="card-text">Song title: ${data.title}</p>
            </div>
            </div>`
        }
    })
}


const loadPinkfloyd = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd', options)
    .then(response => response.json())
    .then((pinkFloyd) => {
        console.log(pinkFloyd.data)
        for (data of pinkFloyd.data){
            const row = document.querySelector(".row")
            row.innerHTML += `<div class="card col-3 align-items-center">
            <img src="${data.album.cover_medium}" class="card-img-top mt-1">
            <div class="card-body">
            <h5 class="card-title">${data.artist.name}</h5>
            <p class="card-text">Song title: ${data.title}</p>
            </div>
            </div>`
        }
    })
}

const loadDaftPunk = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=daft punk', options)
    .then(response => response.json())
    .then((daftPunk) => {
        console.log(daftPunk.data)
        for (data of daftPunk.data){
            const row = document.querySelector(".row")
            row.innerHTML += `<div class="card col-3 align-items-center">
            <img src="${data.album.cover_medium}" class="card-img-top mt-1">
            <div class="card-body">
            <h5 class="card-title">${data.artist.name}</h5>
            <p class="card-text">Song title: ${data.title}</p>
            </div>
            </div>`
        }
    })
}

const clear = () => {
    const row = document.querySelector(".row")
    row.innerHTML = ""
}
