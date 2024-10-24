// Array of music library data (with Hindi and Tamil songs, including cover image URLs)
const songs = [
    { title: "Bohemian Rhapsody", artist: "Queen", cover: "bohem2.jfif" },
    { title: "Imagine", artist: "John Lennon", cover: "imagine.jpg" },
    { title: "Hey Jude", artist: "The Beatles", cover: "hey dude.jpg" },

    // Hindi Songs
    { title: "Tum Hi Ho", artist: "Arijit Singh", cover: "tum hi ho.jpg" },
    { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", cover: "kal ho naa ho.jpg" },
    { title: "Tera Ban Jaunga", artist: "Akhil Sachdeva", cover: "tera ban jaunga.jfif" },

    // Tamil Songs
    { title: "Why This Kolaveri Di", artist: "Dhanush", cover: "kolaveri img.jpg" },
    { title: "Rowdy Baby", artist: "Dhanush & Dhee", cover: "rowdy baby.jfif" },
    { title: "Illuminati", artist: "Anirudh Ravichander", cover: "illuminati.jfif" }

    
];

// Function to display songs with cover images
function displaySongs(filteredSongs) {
    const songList = document.getElementById("songList");
    songList.innerHTML = ""; // Clear previous results

    filteredSongs.forEach(song => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = song.cover;  // Set the cover image source

        const text = document.createElement("span");
        text.textContent = `${song.title} - ${song.artist}`;

        li.appendChild(img);    // Add the cover image
        li.appendChild(text);   // Add the song details (title and artist)
        songList.appendChild(li);  // Append the list item to the song list
    });
}

// Function to search the music library
function searchSongs() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredSongs = songs.filter(song => {
        return (
            song.title.toLowerCase().includes(searchInput) ||
            song.artist.toLowerCase().includes(searchInput)
        );
    });

    displaySongs(filteredSongs);
}

// Event listener for input
document.getElementById("searchInput").addEventListener("input", searchSongs);

// Initial display of all songs
displaySongs(songs);
