// 1 - we should make the first function 
let val;
var tweet_id = 1;

function getVal() {
    val = document.querySelector('.new_tweet').value;
return val
}
function clearTextBox() {
    document.querySelector('.new_tweet').value = ''; 
}

function ChangeTweetColor(id){
    const selected_tweet = document.querySelector(`#tweet${id}`);
    if (selected_tweet.className.includes('coloerd')) {
        selected_tweet.className = 'tweet';
        console.log(selected_tweet.className);
    }else{

        selected_tweet.className += ' coloerd';
    }
}

function retweet(id) {
    tweet_id += 1
    let selected_tweet = document.querySelector(`#tweet${id}`).innerHTML;
    selected_tweet = `<div class="tweet">${selected_tweet}</div>`
    const tweetcontainer = document.getElementById('tweetcontainer')
    tweetcontainer.innerHTML = selected_tweet + tweetcontainer.innerHTML 
    let new_selected_tweet = document.querySelector('.tweet');
    new_selected_tweet.id = `tweet${tweet_id}`
    document.querySelector(`#tweet${tweet_id}`).querySelector('.tweet_icon').querySelector('img').onclick = () => {ChangeTweetColor(tweet_id)};
}
function newElement() {
    var today = new Date();
    var time_now = today.getHours() + ":" + today.getMinutes()
    const tweetTxt = getVal() 
    const tweet =  `<div class="tweet" id="tweet${tweet_id}" >
    <img class="tweet_logo" src="./svg/user.svg" />
    <div class="tweet_main">
        <div class="tweet_header">
        <div class="tweet_name">
            mahmood haroon
        </div>
        <div class="tweet_slug">
        @mahmood_haroon
        </div>
        <div class="tweet_time">
            ${time_now}
        </div>
        </div>
        <div class="content">
        ${tweetTxt}
        </div>
        <br>
        <div class="tweet_icon">
            <img src="./svg/love.svg" alt="" onclick="ChangeTweetColor(${tweet_id})">
            <img src="./svg/retweet.svg" alt="" onclick="retweet(${tweet_id})">
        </div>
    </div>
    </div>`
    const tweetcontainer = document.getElementById('tweetcontainer')
    tweetcontainer.innerHTML = tweetcontainer.innerHTML +   tweet
    clearTextBox() 
    tweet_id += 1
}
  