$(document).ready(function(){

	$("#search").on("click",function(){
		var term = $("#searchTerm").val();
		search(term);
	});
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
	})
	.done(function(response) {
		for(i = 0; i < response.docs; i++){
			var title =  response.docs[i].headline.main;
			var contenet = reponse.docs[i].web_url;
			var author = reponse.docs[i].byline.original;
		}
	})
}