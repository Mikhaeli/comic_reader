$(document).ready(function() {

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
    $("#comicPage").attr("src", pictures[pageNum - 1]);
    /*
      $("#comicPage").html(
        '<img id="picture" src="' + pictures[pageNum - 1] + '">'
      );
      */
  }

    turnToPage();

    $("#comicPage").click(function() {
       turnToPage(1, "+");
    });

});
