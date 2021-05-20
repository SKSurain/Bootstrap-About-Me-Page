
let next = document.querySelector("#nextButton");
let prev = document.querySelector("#prevButton");

next.addEventListener("click", function () {
    fetchJokes();
});

const fetchJokes = async () => {
    try {
        const responseJson = await axios.get('https://official-joke-api.appspot.com/random_joke')
        let setupHeader = document.querySelector("#jokeHeader");
        let punchlinePar = document.querySelector("#jokePar");
        setupHeader.textContent = responseJson.data.setup;
        punchlinePar.textContent = responseJson.data.punchline;
    } catch (error) {
        console.log(error);
    }
}

// const fetchJokeImages = async () => {
//     try {
//         const responseJson = await axios.get(' https://meme-api.herokuapp.com/gimme/ProgrammerHumor')
//         let jokeImage = document.querySelector("#jokeImage");
//         jokeImage.src = responseJson.data.url;
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchJokeImages();

fetchJokes();

