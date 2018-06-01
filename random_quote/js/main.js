let msg;
function getQuote() {
  $.ajax({
    url:
      'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success(data) {
      const post = data.shift();
      $('#quote').html(post.content);
      $('.author').html(post.title);
      msg = post.content;
      msg = msg.replace(/<p>/g, '');
      msg = msg.replace(/<\/p>/g, '');
      const url = `https://twitter.com/intent/tweet?text=${msg}`;
      $('#twitterUrl').attr('href', url);
    },
    cache: false,
    error(data) {
      console.log(data);
    },
  });
}
$('.btn').on('click', () => {
  getQuote();
});

$(document).ready(() => {
  Particles.init({
    selector: '.background',
    color: ['#08d9d6', '#ff2e63', '#eaeaea'],
    sizeVariations: 5,
    speed: 0.8,
  });

  getQuote();
});
