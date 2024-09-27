document.getElementById('tweet-button').addEventListener('click', function() {
    const tweetInput = document.getElementById('tweet-input');
    const tweetText = tweetInput.value;

    if (tweetText) {
        const tweetContainer = document.getElementById('tweets-container');
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');
        tweetDiv.textContent = tweetText;

        tweetContainer.prepend(tweetDiv);
        tweetInput.value = ''; // Girdi kutusunu temizle
    }
});
