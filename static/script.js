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
  }

  turnToPage();

  $("#picture").click(function() {
    turnToPage(1, "+");
  });

  $("#prevPage").click(function() {
    turnToPage(1, "-");
  });


  $("#nextPage").click(function() {
    turnToPage(1, "+");
  });

});
