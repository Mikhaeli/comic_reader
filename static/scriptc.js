$(document).ready(function() {
  $("#getcomic").click(function() {

    //No other proxy servers were working, so I used code from
    //https://github.com/messier31/cors-proxy-server
    //to deploy a proxy-server on heroku
    //var regex = /<img alt="[^"]+" src="(.*?)" width="100%" \/>/g;

    //I won't need a proxy server when this is all on the backend
    var regex = /(?<=<img alt="[^"]+" src=").*?(?=" width="100%" \/>)/g;

    var comicPage = "http://fullcomic.pro/read-comic-online-doctor-fate-1987-issue-1-31720.html?readType=1";
    var url = "https://meatysauce.herokuapp.com/" + comicPage;

     $.get(url, function(data, status) {
      //TODO
      //Get title from comic webpage
      var pictures = data.match(regex);

      //document.body.innerHTML = "";
      //add next buttons, page selectors, etc
    //  $("#header").html(navHeader);

      var pageNum = 1;

      function turnToPage(num, operation) {
        //pageNum starts at 1
        //Easier to display
        if (operation === "+") {
          if (pageNum += num <= pictures.length) {
            pageNum += num;
          }
        } else if (operation === "-") {
          if ((pageNum -= num >= 1)) {
            pageNum -= num;
          }
        } else if (num && !operation) {
          if (pageNum >= 1 && pageNum <= pictures.length) {
            pageNum = num;
          }
        }

        /*$("#page").html(
          '<img id="picture" src="' + pictures[pageNum - 1] + '">'
        );*/
      }
      /*
      turnToPage();

       $("#page").click(function() {
       turnToPage(1, "+");
      });
      */
    });

  });
});
