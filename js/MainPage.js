var navbar__array = [
    {
        Text: "Home",
        Link: "#"
    },
    {
        Text: "Matches",
        Link: "#"
    },
    {
        Text: "Players",
        Link: "#"
    },
    {
        Text: "Blog",
        Link: "#"
    },
    {
        Text: "Contacts",
        Link: "#"
    }
]

var fillNews = [
    {
        image: "url(./image/newsOne.jpeg)",
        title: "Romolu to stay at Real Madrid?",
        authorImage: "./image/postOne__author.jpeg",
        authorName: "Mellisa Allison",
        postDate: "May 19, 2020 • Sports"
    },
    {
        image: "url(./image/newsTwo.jpeg)",
        title: "Romolu to stay at Real Madrid?",
        authorImage: "./image/postOne__author.jpeg",
        authorName: "Mellisa Allison",
        postDate: "May 19, 2020 • Sports"
    },
    {
        image: "url(./image/newsTree.jpeg)",
        title: "Romolu to stay at Real Madrid?",
        authorImage: "./image/postOne__author.jpeg",
        authorName: "Mellisa Allison",
        postDate: "May 19, 2020 • Sports"
    }
]

var videoCarousel = [
    {
        Image: "url('./image/VideoPhoto(1).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    },
    {
        Image: "url('./image/VideoPhoto(2).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    },
    {
        Image: "url('./image/VideoPhoto(3).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    },
    {
        Image: "url('./image/VideoPhoto(1).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    },
    {
        Image: "url('./image/VideoPhoto(2).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    },
    {
        Image: "url('./image/VideoPhoto(3).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    },
    {
        Image: "url('./image/VideoPhoto(1).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    },
    {
        Image: "url('./image/VideoPhoto(2).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    },
    {
        Image: "url('./image/VideoPhoto(3).jpg')",
        videoDescribe: "Dogba set for Juvendu return",
    }
]

var NewsArray = [
    {
        Text: "All",
        Link: "#"
    },
    {
        Text: "Club news",
        Link: "#"
    },
    {
        Text: "Media center",
        Link: "#"
    },
    {
        Text: "Video",
        Link: "#"
    },
    {
        Text: "RSS",
        Link: "#"
    }
]

var TicketsArray = [
    {
        Text: "Online tickets",
        Link: "#"
    },
    {
        Text: "Payments & Prices",
        Link: "#"
    },
    {
        Text: "Contact",
        Link: "#"
    },
    {
        Text: "Tickets",
        Link: "#"
    },
    {
        Text: "Coupons",
        Link: "#"
    }
]

var MatchsArray = [
    {
        Text: "Standings",
        Link: "#"
    },
    {
        Text: "World cup",
        Link: "#"
    },
    {
        Text: "La liga",
        Link: "#"
    },
    {
        Text: "Hiper cup",
        Link: "#"
    },
    {
        Text: "World cup",
        Link: "#"
    }
]

var SocialArray = [
    {
        Text: "Facebook",
        Link: "#"
    },
    {
        Text: "Instagram",
        Link: "#"
    },
    {
        Text: "Twitter",
        Link: "#"
    },
    {
        Text: "Youtube",
        Link: "#"
    },
    {
        Text: "World cup",
        Link: "#"
    }
]

function FillNavBar(arr, ID__Name){
    for(let i = 0; i < arr.length; i++){
        let createLi = document.createElement("li");
        let createA = document.createElement("a");
        if(i == 0){
            createLi.className = "active";
        }
        createA.innerText = arr[i].Text;
        createA.href = arr[i].Link;
        createLi.appendChild(createA);
        document.getElementById(ID__Name).appendChild(createLi);
    }
}

function FillLatestNews(arr, ID__Name){
    for(let i = 0; i < arr.length; i++){
        let createLi = document.createElement("li");
        let newsInfoDiv = document.createElement("div");
        let NewsTitleP = document.createElement("p");
        let postAuthorDiv = document.createElement("div");
        let createImg = document.createElement("img");
        let authorInfoDiv = document.createElement("div");
        let authorNameP = document.createElement("p");
        let postDateP = document.createElement("p");
        let createHR = document.createElement("hr");
        createHR.className = "hrInNews";
        createLi.style.backgroundImage = arr[i].image;
        newsInfoDiv.className = "newsInfo";
        NewsTitleP.className = "NewsTitle";
        NewsTitleP.innerText = arr[i].title;
        postAuthorDiv.className = "postAuthor";
        createImg.className = "post__author";
        createImg.alt = "PostAuthor";
        createImg.src = arr[i].authorImage;
        authorInfoDiv.className = "authorInfo";
        authorNameP.className = "authorName";
        authorNameP.innerText = arr[i].authorName;
        postDateP.className = "postDate";
        postDateP.innerText = arr[i].postDate;
        authorInfoDiv.appendChild(authorNameP);
        authorInfoDiv.appendChild(postDateP);
        postAuthorDiv.appendChild(createImg);
        postAuthorDiv.appendChild(authorInfoDiv);
        newsInfoDiv.appendChild(NewsTitleP);
        newsInfoDiv.appendChild(postAuthorDiv);
        newsInfoDiv.appendChild(createHR);
        createLi.appendChild(newsInfoDiv);
        document.getElementById(ID__Name).appendChild(createLi);
    }
}

function fillVideoCarousel(arr, ID__Name){
    for(let i = 0; i < arr.length; i++){
        let createLi = document.createElement("li");
        let videoDesc = document.createElement("div");
        videoDesc.className = "videoDescribe"
        let createI = document.createElement("i");
        createI.className = "fas fa-play playVideo";
        let descForVideo = document.createElement("p");
        descForVideo.className = "describeForVideo";
        descForVideo.innerText = arr[i].videoDescribe;
        createLi.style.backgroundImage = arr[i].Image;
        videoDesc.appendChild(createI);
        videoDesc.appendChild(descForVideo);
        createLi.appendChild(videoDesc);
        document.getElementById(ID__Name).appendChild(createLi);
    }
}

var Weeks = 2;
var Days = 1;
var Hours = 3;
var Minute = 0;
var Seconds = 23;
var weeksHTML = "<span>Weeks</span>";
var DaysHTML = "<span>Days</span>";
var HoursHTML = "<span>Hours</span>";
var MinuteHTML = "<span>Minutes</span>";
var SecondsHTML = "<span>Seconds</span>";

function countDown(){
    Seconds--;
    if(Seconds < 0){
        Seconds = 59;
        Minute--;
    }
    if(Minute < 0){
        Minute = 59;
        Hours--;
    }
    if(Hours < 0){
        Hours = 23;
        Days--;
    }
    if(Days < 0){
        Days = 6;
        Weeks--;
    }
    document.getElementById("timer").innerHTML = Weeks + weeksHTML + Days + DaysHTML + 
    Hours + HoursHTML + Minute + MinuteHTML + Seconds + SecondsHTML;
}

setInterval(countDown, 1000);

function heightToggle(clicked, actionClass){
    $(document).ready(function(){
        $(clicked).click(function(){
            $(actionClass).animate({
                height: "toggle"
            })
        })
    })
}

$(document).ready(function(){
    $(window).resize(function(){
        var matchContainer__width = ($(".match__container").width() / 2) - 35;
        $(".firstTeam, .secondTeam").width(matchContainer__width);
    })
})

$(document).ready(function(){
    var matchContainer__width = ($(".match__container").width() / 2) - 35;
    $(".firstTeam, .secondTeam").width(matchContainer__width);
})

$(document).ready(function(){
    $(".News li").mouseover(function(){
        $(this).find(".hrInNews").css({
            "width": "110%",
            "transition": "0.5s"
        })
    })
})

$(document).ready(function(){
    $(".News li").mouseleave(function(){
        $(this).find(".hrInNews").css({
            "width": "0%",
            "transition": "0.5s"
        })
    })
})

$(document).ready(function(){
    $(".navbar__menu li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})

$(document).ready(function(){
    $(".Next").click(function(){
        let CarouselWidth = parseInt($(".SoccerVideos__carousel").width());
        let MarginSize = parseInt($(".SoccerVideos__carousel").css("margin-left"));
        let DisplayWidth = parseInt($(".SoccerVideo__content").width());
        let result = -1 * (CarouselWidth - DisplayWidth); 
        if(result <  MarginSize){
            $(".SoccerVideos__carousel").css({
                "margin-left": "-=277px",
                "transition": "1s"
            })
        }
        else{
            $(".SoccerVideos__carousel").css({
                "margin-left": "0px",
                "transition": "2s"
            })
        }
    })
})

$(document).ready(function(){
    $(".Prev").click(function(){
        let CarouselWidth = parseInt($(".SoccerVideos__carousel").width());
        let MarginSize = parseInt($(".SoccerVideos__carousel").css("margin-left"));
        let DisplayWidth = parseInt($(".SoccerVideo__content").width());
        let result = Math.floor(DisplayWidth / 277);
        let Result = ((videoCarousel.length - result) * 277) * -1;

        if(MarginSize == 0){
            $(".SoccerVideos__carousel").css({
                "margin-left": Result.toString() + "px",
                "transition": "2s"
            })
        }else{
            $(".SoccerVideos__carousel").css({
                "margin-left": "+=277",
                "transition": "1s"
            })
        }
    })
})

setInterval(function(){
    $(document).ready(function(){
        let CarouselWidth = parseInt($(".SoccerVideos__carousel").width());
        let MarginSize = parseInt($(".SoccerVideos__carousel").css("margin-left"));
        let DisplayWidth = parseInt($(".SoccerVideo__content").width());
        let result = -1 * (CarouselWidth - DisplayWidth); 
        if(result <  MarginSize){
            $(".SoccerVideos__carousel").css({
                "margin-left": "-=277px",
                "transition": "1s"
            })
        }
        else{
            $(".SoccerVideos__carousel").css({
                "margin-left": "0px",
                "transition": "2s"
            })
        }
    })
}, 5000);

heightToggle(".bar", ".navbar__menu");


FillNavBar(navbar__array, "navbar__menu");

FillLatestNews(fillNews, "News");

fillVideoCarousel(videoCarousel, "SoccerVideos__carousel");

FillNavBar(NewsArray, "FooterNews");

FillNavBar(TicketsArray, "FooterTickets");

FillNavBar(MatchsArray, "FooterMatches");

FillNavBar(SocialArray, "FooterSocial")