const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ca9611081msh7fa99f298f5e94dp1d4fe1jsn4bb1e6e93072',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};




const loadSongs = () => {
    let search = document.getElementById("search-bar").value
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`, options)
    .then(response => response.json())
    .then((metallica) => {
        console.log(metallica.data)
        for (data of metallica.data){
            const row = document.getElementById("card-con")
            let duration = data.duration
            duration = Math.floor(duration / 60) + ':' + ('0' + Math.floor(duration % 60)).slice(-2)
            row.innerHTML += `<div class="col mb-4">
            <div class="card">
            <img src="${data.album.cover_big}" class="card-img-top p-2 rounded">            <div class="card-body">
            <h5 class="card-title">${data.artist.name}</h5>
            <p class="card-text">Song title: ${data.title}</p>
            <p class="card-text">Duration: ${duration}</p>
            </div>
        </div>
        </div>`
        }
        
    })
    .catch(err => console.error(err));
}

const clearPage = () => {
    const row = document.getElementById("card-con")
    let search = document.getElementById("search-bar")
    search.value = ""
    row.innerHTML = ""
}


let btn = document.getElementById("search-btn")

btn.addEventListener("click", loadSongs)

let searchbar = document.getElementById("search-bar")

searchbar.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        loadSongs()
    }
    else{
        return
    }
})

searchbar.addEventListener("click", clearPage)

let clearbtn = document.getElementById("clear")

clearbtn.addEventListener("click", clearPage)


// const musicPlayer = () => {
//     let search = document.getElementById("search-bar-song").value
//     fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`, options)
//     .then(response => response.json())
//     .then((metallica) => {
//         console.log(metallica.data)
//         for (data of metallica.data){
//             const row = document.getElementById("music-player")
//             row.innerHTML += `<div id="mobile-box">
//       <div class="card">
//         <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//           <img class="card-img-top" src="https://mdbootstrap.com/wp-content/uploads/2019/02/flam.jpg"
//             alt="Card image cap">
//           <a href="#!">
//             <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
//           </a>
//         </div>
//         <div class="card-body text-center">
  
//           <h5 class="h5 font-weight-bold"><a href="#" target="_blank">Dj Flam</a></h5>
//           <p class="mb-0">Urban Bachata remix</p>
  
//           <audio id="music" preload="true">
//             <source src="#">
//           </audio>
//           <div id="audioplayer">
//             <i id="pButton" class="fas fa-play"></i>
//             <div id="timeline">
//               <div id="playhead"></div>
//             </div>
//           </div>
  
//         </div>
//       </div>
//     </div>`
//         }
        
//     })
//     .catch(err => console.error(err));
// }




// let btn-song = document.getElementById("search-btn-song")

// btn-song.addEventListener("click", musicPlayer)

// let searchbar-song = document.getElementById("search-bar-song")

// searchbar-song.addEventListener("keydown", (event) => {
//     if (event.key === "Enter"){
//         musicPlayer()
//     }
//     else{
//         return
//     }
// })