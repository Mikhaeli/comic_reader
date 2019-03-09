$(document).ready(function() {

  //pageNum refers to index not actual image number
  var pageNum = 0;

  function turnToPage(num, operation) {
    if (operation === "+") {
      if (pageNum + num <= pictures.length) {
        pageNum += num;
      }
    } else if (operation === "-") {
      if (pageNum - num >= 0) {
        pageNum -= num;
      }
    } else if (num && !operation) {
      if (pageNum >= 1 && pageNum <= pictures.length) {
        pageNum = num;
      }
    }
    $("#comicPage").attr("src", pictures[pageNum]);
    $("#pageno").text(pageNum + 1);
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
