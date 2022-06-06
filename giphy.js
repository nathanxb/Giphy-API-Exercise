const $gifSpace = $('#gif-space');

//form submission 
$('form').on('submit', function (e) {
    e.preventDefault();
    const $searchInput = $('#giphy-search');
    const search = $searchInput.val();
    getGif(search);
    $searchInput.val('');
})

//requesting info from Giphy API
async function getGif(search) {
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: search,
            api_key: "35NppZPNVVl0oh8LJX8XpftxTTODJUvE"
        }
    });
    selectRandomGif(response.data.data);

}
//select random index of gif array
function selectRandomGif(giphyArray) {
    let arrLength = giphyArray.length;
    let randomIndex = Math.floor(Math.random() * arrLength);
    let $gifSelection = $('<img>', {
        src: giphyArray[randomIndex].images.original.url
    });
    appendGif($gifSelection);
}

//append gif
function appendGif(gif) {
    $gifSpace.append(gif);
}

//remove gifs
$('#remove-all').on('click', function (e) {
    e.preventDefault();
    $gifSpace.empty();
});

