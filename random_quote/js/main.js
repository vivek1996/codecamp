$(document).ready(function() {
  Particles.init({
    selector: ".background",
    color: ["#08d9d6", "#ff2e63", "#eaeaea"],
    sizeVariations: 5,
    speed: 0.8
  });

  getQuote();
});

function getQuote() {
  $.getJSON(
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    function(data) {
      console.log(data[0]);
      $("#quote").html(data[0].content);
      $(".author").html(data[0].title);
      var msg = data[0].content;
      msg = msg.replace(/ /g, "%20");
      console.log(msg);
    }
  );
}
$(".btn").on("click", function() {
  getQuote();
});
$(".fa-twitter").on("click", function() {
  window.open(
    `https://twitter.com/intent/tweet?text=${data[0].content}`,
    blank
  );
});
