// 1 - we should make the first function 
let val;
var tweet_id = 2;

function getVal() {
    val = document.querySelector('.new_tweet').value;
    return val
}
function getVal1() {
    val1 = document.querySelector('.username_tweet').value;
    return val1
}
function getVal2() {
    val1 = document.querySelector('.username_tweet').value;
    x = val1.toLowerCase().split(" ").join("_")
    return x
}
function clearTextBox() {
    document.querySelector('.new_tweet').value = '';
    document.querySelector('.username_tweet').value = '';
}

function ChangeTweetColor(id) {
    const selected_tweet = document.querySelector(`#tweet${id}`);
    if (selected_tweet.className.includes('coloerd')) {
        selected_tweet.className = 'tweet';
        // console.log(selected_tweet.className);
    } else {

        selected_tweet.className += ' coloerd';
    }
}


function retweet(id) {
    var tweetusername = document.querySelector(`#tweet${id}`).querySelector(".tweet_name").textContent;
    let tweetuser = document.querySelector(`#tweet${id}`).querySelector(".tweet_slug").textContent;
    let tweetTxt = document.querySelector(`#tweet${id}`).querySelector(".content").textContent;
    newElement(tweetusername, tweetuser, tweetTxt)

}


function addTweet() {

    if (getVal() && getVal1()) {
        const tweetusername = getVal1()
        const tweetuser = getVal2()
        const tweetTxt = getVal()
        newElement(tweetusername, tweetuser, tweetTxt)

    }
}

function newElement(tweetusername, tweetuser, tweetTxt) {
    var today = new Date();
    var time_now = today.getHours() + ":" + today.getMinutes()
    const tweet = `<div class="tweet" id="tweet${tweet_id}" >
            <img class="tweet_logo" src="./svg/user.svg" />
            <div class="tweet_main">
            <div class="tweet_header">
            <div class="tweet_name">
            ${tweetusername}
            </div>
            <div class="tweet_slug">
            @${tweetuser}
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
    tweetcontainer.innerHTML = tweetcontainer.innerHTML + tweet
    clearTextBox()
    tweet_id++
}


