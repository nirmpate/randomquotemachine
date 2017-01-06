$(document).ready(function() {
  var message = "";
  var author = "";
  var quote = "";

  //Initialize generateQuote at start
  generateQuote();
  changeBackground();


  //run functions when btnQuote is clicked
  $(".btnQuote").on("click", function() {
    // $(".block").css("transform","translateX(10em)");
    $(".block").fadeOut(500,'linear', function(){generateQuote();changeBackground();});

    $(".block").fadeIn(500);

});

 //create Tweet function


  function generateQuote() {
    //Open api using ajax.  Format json
    var output = $.ajax({
      url:"https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
      type:"GET",
      data:{},
      dataType:'json',

    success: function(data) {
      //Bind data to variables
      message = '<span>"</span>'
      message += data.quote;
      quote = data.quote;
      author = data.author;


      //Set html to the quote and author.
      //Set tweet button with text.
      $(".message").html(" "+quote);
      $(".author").html("-" + author);
      var tweet = "https://twitter.com/intent/tweet?text=" + quote + " - " + author;
      $("#tweetShare").attr('href',tweet);







      console.dir((data.source)); },
    error: function(err) { console.log(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", 'HqMqmO4wQpmshhWWPpNmAYOwKuGNp1Tvoo6jsnuRejDW7dDqg0');
  }
});
  };

  function changeBackground() {
    //Changes background color of body using a list of colors and a random function.
    var colors = ["#1abc9c","#3498db","#9b59b6","#34495e","#e74c3c","#95a5a6","#d35400","#27ae60"];
    var random = getRandomInt(0,7);

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    $(".bkg").css("background-color",colors[random]);
    $("span").css("color",colors[random]);

  };
});
