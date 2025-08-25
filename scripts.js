document.addEventListener("DOMContentLoaded", () => {
const artistData = [
    { name: "Matanza", Image: "./assets/Artista-Matanza.jpg"},
    { name: "Guns-N-Roses", Image: "./assets/Artista-Guns-N-Rose.jpg"},
    { name: "Linkin-Park", Image: "./assets/Artista-Linkin-Park.jpg"},
    { name: "Metallica", Image: "./assets/Artista-metallica.jpg"},
    { name: "Nirvana", Image: "./assets/Artista-Nirvana.jpg"},
    { name: "Limp-Bizkit", Image: "./assets/Artista-Limp-Bizkit.jpg"}
];

const albumData = [
    { name: "A arte do insulto", artist: "Matanza", Image: "./assets/Album-A-Arte-do-Insulto.jpg"},
    { name: "Guns-N-Roses", artist: "Guns-N-Roses", Image: "./assets/Album-Guns-N-Roses.jpg"},
    { name: "Hybrid-Theory", artist: "Linkin-Park", Image: "./assets/Album-Hybrid-Theory.jpg" },
    { name: "Metallica", artist: "Metallica", Image: "./assets/Album-Metallica.jpg" },
    { name: "Nevermind", artist: "Nirvana", Image: "./assets/Album-Nevermind.jpg" },
    { name: "Odiosa-Natureza-Humana", artist: "Matanza", Image: "./assets/Album-Odiosa-Natureza-Humana.jpg" },
    { name: "Significant-Other", artist: "Limp-Bizkit", Image: "./assets/Album-Significant-Other.jpg" }
];

const artistGrid = document.querySelector(".artist-grid")
const albumGrid = document.querySelector(".album-grid")

artistData.forEach(artist => {
    const artistCard = document.createElement("div")
    artistCard.classList.add("artist-card")

    artistCard.innerHTML = `
        <img src="${artist.Image}" alt="imagem do ${artist.name}">
        <h3>${artist.name}</h3>
        <p>Artista</p>
        
    `
    artistGrid.appendChild(artistCard)
})
albumData.forEach(album => {
    const albumCard = document.createElement("div")
    albumCard.classList.add("album-card")

    albumCard.innerHTML = `
        <img src="${album.Image}" alt="imagem do ${album.name}">
        <h3>${album.name}</h3>
        <p>${album.artist}</p>

    `
    albumGrid.appendChild(albumCard)

})

})