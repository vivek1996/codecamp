var msg;
// function getQuote() {
//   $.getJSON(
//     "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
//     function(data) {
//       $("#quote").html(data[0].content);
//       $(".author").html(data[0].title);
//       msg = data[0].content;
//       msg = msg.replace(/<p>/g, "");
//       msg = msg.replace(/<\/p>/g, "");
//       msg = msg.replace(/ /g, "%20");
//       var url = `https://twitter.com/intent/tweet?text=${msg}`;

//       $("#twitterUrl").attr("href", url);
//     }
//   );
// }
function getQuote() {
  $.ajax({
    url:
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function(data) {
      var post = data.shift();
      // console.log(post);
      $("#quote").html(post.content);
      $(".author").html(post.title);
      msg = post.content;
      msg = msg.replace(/<p>/g, "");
      msg = msg.replace(/<\/p>/g, "");
      var url = `https://twitter.com/intent/tweet?text=${msg}`;
      $("#twitterUrl").attr("href", url);
    },
    cache: false,
    error: function(data) {
      console.log(data);
    }
  });
}
$(".btn").on("click", function() {
  getQuote();
});

$(document).ready(function() {
  Particles.init({
    selector: ".background",
    color: ["#08d9d6", "#ff2e63", "#eaeaea"],
    sizeVariations: 5,
    speed: 0.8
  });

  getQuote();
});

// $(".fa-twitter").on("click", function() {
//   window.open(`https://twitter.com/intent/tweet?text=${msg}`, "_blank");
// });
