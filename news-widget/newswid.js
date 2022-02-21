let API = "https://api.rss2json.com/v1/api.json?rss_url=";
let userFeedURLs = [
    "https://www.thehindu.com/news/international/feeder/default.rss",
"https://www.thehindu.com/business/feeder/default.rss",
    "https://www.thehindu.com/sport/feeder/default.rss",
    "https://www.thehindu.com/life-and-style/feeder/default.rss",
    "https://www.thehindu.com/thread/feeder/default.rss",
    "https://www.thehindu.com/news/international/feeder/default.rss",
    "https://www.sciencedaily.com/rss/all.xml",
    "https://www.sciencedaily.com/rss/top/science.xml",
    "https://www.sciencedaily.com/rss/top/health.xml",
    "https://www.sciencedaily.com/rss/top/society.xml",
    "https://www.sciencedaily.com/rss/top/environment.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml",
    "https://www.yahoo.com/news/rss",
    "https://news.google.com/news/rss",
    "https://indianexpress.com/section/sports/feed/",
    "https://indianexpress.com/section/opinion/editorials/feed/",
    "https://indianexpress.com/section/opinion/feed/",
    "https://indianexpress.com/section/lifestyle/fashion/feed/",
    "https://indianexpress.com/section/entertainment/feed/",
    "https://indianexpress.com/section/world/feed/",
    "https://indianexpress.com/section/lifestyle/feed/",
    "https://feeds.feedburner.com/ndtvprofit-latest",
    "https://feeds.feedburner.com/ndtvnews-offbeat-news",
    "https://feeds.feedburner.com/ndtvnews-world-news",
    "https://feeds.feedburner.com/ndtvsports-latest",
    "https://www.indiatoday.in/rss/1206500",
    "https://www.indiatoday.in/rss/1206577",
    "https://www.indiatoday.in/rss/1206614",
    "https://zeenews.india.com/rss/entertainment-news.xml",
    "https://zeenews.india.com/rss/sports-news.xml",
    "https://zeenews.india.com/rss/asia-news.xml",
    "https://www.livemint.com/rss/opinion",
    "https://www.livemint.com/rss/money",
    "https://www.livemint.com/rss/education",
    "https://www.livemint.com/rss/markets",
    "https://www.livemint.com/rss/AI",
    "https://www.cnbc.com/id/100727362/device/rss/rss.html",
    "https://www.cnbc.com/id/15837362/device/rss/rss.html",
    "https://www.cnbc.com/id/19832390/device/rss/rss.html",
    "https://www.cnbc.com/id/19794221/device/rss/rss.html",
    "https://www.cnbc.com/id/10001147/device/rss/rss.html",
    "https://www.cnbc.com/id/20910258/device/rss/rss.html",
    "https://www.cnbc.com/id/10000664/device/rss/rss.html"
];
userFeedURLs.forEach(userUrl => {
    $.ajax({
        type: 'GET',
        url: API + userUrl,
        dataType: 'jsonp',
        success: function (data) {
           // console.log(data);
            data.items.forEach(item => {
                var content = document.getElementById('content');

                var newItem = "";
                newItem += "<div  id=\"rfitem\"><a target=\"_blank\" href=\"" + item.link + "\"><h4 class='title'>" + item.title + "</h4></a>" + "<p class='dtitle'>" + data.feed.title + "</p><hr>";
                if (item.author != "")

             
                newItem += "<p> By " + item.author + "</p>";

                newItem += "<p>Published Date: " + item.pubDate + "</p>";

                newItem += "<a href=\"" + item.link + "\" target=\"_blank\"><p class='descp'> " + item.description + "</p></a></div>";

                content.insertAdjacentHTML('beforeend', newItem);
            });
        }
    });
});