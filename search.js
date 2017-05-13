$(document).ready(function(){
    console.log("ready");
    search("trump");
})

function search(term){

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

//article search API
var apiKey = "api-key=010df052716e4cef8459eeb85a014d07&";
var q = "q=" + encodeURIComponent(term);

queryURL = queryURL + apiKey + q;

$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
              console.log(response);

})
  };