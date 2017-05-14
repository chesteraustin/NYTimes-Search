$(document).ready(function(){

	$("#runSearch").on("click",function(){
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
      }).done(function(response) {

          for(i = 0; i < response.response.docs.length; i++){
              console.log(response.response.docs[i]);

            var title =  response.response.docs[i].headline.main;
            var content = response.response.docs[i].web_url;

			//Bylines are not guaranateed
			if (typeof  response.response.docs[i].byline ==! "undefined")
			var author = response.response.docs[i].byline.original;

            var display = $("<div>");
            var titleContainer = $("<h1>");
            var authorContainer = $("<h2>");
            var contentContainer = $("<a>");
			contentContainer.attr("href", content);
                titleContainer.text(title);
                authorContainer.text(author);
                contentContainer.text(content);
			display.append(titleContainer)
			display.append(authorContainer)
			display.append(contentContainer)
			console.log(display)
			$("#topArticles").append(display);
        }
    })
}
