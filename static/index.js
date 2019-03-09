$(document).ready(function() {
  $("#pageLinkForm").submit(function() {
    if ($("#comicPageInput").val() === "")
    {
      alert("Please enter link to comic web page");
      return false;
    }
  });
});
