async function fetchTweets() {
    const response = await fetch('/api/tweets');
    const tweets = await response.json();
    const tweetContainer = document.getElementById('tweets-container');
    tweetContainer.innerHTML = ''; // Önceki tweetleri temizle

    tweets.forEach(tweet => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');
        tweetDiv.textContent = tweet.content;
        tweetContainer.prepend(tweetDiv);
    });
}

document.getElementById('tweet-button').addEventListener('click', async function() {
    const tweetInput = document.getElementById('tweet-input');
    const tweetText = tweetInput.value;

    if (tweetText) {
        await fetch('/api/tweets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: tweetText })
        });
        tweetInput.value = ''; // Girdi kutusunu temizle
        fetchTweets(); // Tweetleri yeniden al
    }
});

// Sayfa yüklendiğinde tweetleri getir
fetchTweets();
