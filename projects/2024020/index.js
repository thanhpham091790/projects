import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

render();

document.addEventListener("click", (e)=>{
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like);
    }
    if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet);
    }
    if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply);
    }
    if(e.target.id === "tweet-btn"){
        handleTweetBtnClick();
    }
});

function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter((tweet)=>{
        return tweet.uuid === tweetId
    })[0];

    targetTweetObj.isLiked ? targetTweetObj.likes-- : targetTweetObj.likes++;
    targetTweetObj.isLiked = !targetTweetObj.isLiked;

    render();
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter((tweet)=>{
        return tweet.uuid === tweetId;
    })[0];

    targetTweetObj.isRetweeted ? targetTweetObj.retweets-- : targetTweetObj.retweets++;
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;

    render();
}

function handleReplyClick(tweetId){
    const tweetReplies = document.querySelector(`#replies-${tweetId}`);
    tweetReplies.classList.toggle("hidden");
}

function handleTweetBtnClick(){
    const tweetInput = document.querySelector("#tweet-input");
    if(tweetInput.value){
        const newTweet = {
            handle: `@ThanhPham`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: `${tweetInput.value}`,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4(),
        };   
        tweetsData.unshift(newTweet);
        render();
        tweetInput.value = '';
    }
}

function getFeedHtml(){
    let feedHtml = ``;
    tweetsData.forEach((tweet)=>{

        let likeIconClass = "";
        let retweetIconClass = "";

        if(tweet.isLiked){
            likeIconClass = "liked";
        }

        if(tweet.isRetweeted){
            retweetIconClass = "retweeted";
        }

        let repliesHtml = ``;

        if(tweet.replies.length > 0){
            tweet.replies.forEach((reply)=>{
                repliesHtml += `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${reply.handle}</p>
                                <p class="tweet-text">${reply.tweetText}</p>
                            </div>
                        </div>
                </div>`;
            });
        }

        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweet.uuid}"></i>
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>  
            </div>
            <div class="hidden" id="replies-${tweet.uuid}">
                ${repliesHtml}
            </div>          
        </div>`;
    });

    return feedHtml;
}

function render(){
    document.querySelector("#feed").innerHTML = getFeedHtml();
}

