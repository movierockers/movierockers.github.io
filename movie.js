function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var url = getParameterByName('tmdb');

const getYearFromDate = (date) => {
    let year= date.split('-').shift();
    return year;
  };

$.getJSON('https://api.themoviedb.org/3/movie/' + url + '?api_key=d3c9a5561cb6ce6f31879e28df2e5c3e', 
function(data) {
    var dati = getYearFromDate(data.release_date)
document.title = data.title + " (" + dati + ") Full Movie Download HD Tamilrockers Moviesda"
var header = `<header><p class="normal">${data.title} ${getYearFromDate(data.release_date)} HD Full Movie Download ${data.title} (${getYearFromDate(data.release_date)}) HD Download isaimini Moviesda.Net</p><h1>${data.title} movie HD download Movierulz</h1><h2 class="normal">Download ${data.title} (${getYearFromDate(data.release_date)}) movie HD Moviesda</h2></header>`
 var embed  = '<iframe src="https://www.2embed.to/embed/tmdb/movie?id=' + url + '" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="100%%" width="100%%" allowfullscreen></iframe>'

var keys = `<ul><li>${data.title} Movie Download isaimini</li>
<li>${data.title} Movie Download Tamilrockers</li>
 <li>${data.title} Movie Download Tamilgun</li>
 <li>${data.title} Movie Download Tamilmv</li>
 <li>${data.title} Movie Download isaiminiweb</li>
 <li>${data.title} Movie Download isaiminida</li>
 <li>${data.title} Movie Download isaiminipa</li>
 <li>${data.title} Movie Download Tamildbox</li>
 <li>${data.title} Movie Download moviesdaweb</li>
 <li>${data.title} Movie Download moviesda</li>
 <li>${data.title} Movie Download marina rockers</li>
 <li>${data.title} Movie Download sri rockers</li>
 <li>${data.title} Movie Download kuttymovies</li>
 <li>${data.title} Movie Download coolTamil</li>
 <li>${data.title} Movie Download Youtube</li>
 <li>${data.title} Movie Download Disney+ Hotstar</li>
 <li>${data.title} Movie Download Netflix</li>
 <li>${data.title} Movie Download Amazon Prime Video</li>
 <li>${data.title} Movie Download ZEE5</li>
 <li>${data.title} Movie Download ALT Balaji</li>
 <li>${data.title} Movie Download MX Player</li>
 <li>${data.title} Movie Download Hungama</li>
 <li>${data.title} Movie Download BIGFlix</li>
 <li>${data.title} Movie Download TnMoviez</li>
 <li>${data.title} Movie Download isaidub</li>
 <li>${data.title} Movie Download oruTamil</li>
 <li>${data.title} Movie Download in Tamil</li>
 <li>${data.title} Movie Download in Hindi</li>
 <li>${data.title} Movie Download in Telugu</li>
 <li>${data.title} Movie Download in Malayalam</li>
 <li>${data.title} Movie Download in Kannada</li>
 <li>${data.title} Movie Download in English</li>
 <li>${data.title} Movie Download telegram</li>
 <li>${data.title} Movie Download telegram link</li>
 <li>${data.title} Movie Download isaiminimob</li>
 <li>${data.title} Movie Download Tamilblasters</li>
 <li>${data.title} Movie Download Tamilplay</li>
 <li>${data.title} Movie Download jiorockers</li>
 <li>${data.title} Movie Download movierulz</li>
 <li>${data.title} Movie Download kotha movies</li>
</ul>`


 var text = `
  <div id="movie-image">
  <figure style=" text-align: center; ">
    <picture>
  <img itemprop="image" alt=" movie poster" style="height: auto !important;width: 150px;margin-bottom: 5px;" title=" Movie Poster" src="https://image.tmdb.org/t/p/original${data.poster_path}" loading="lazy">

    </picture>
  </figure>
</div>
<p>${data.overview}</p>
<fieldset id="movie-handle">
  <legend class="bluer cen">Movie Information</legend>
  <b>Movie Name:</b> ${data.title}<br>
  <b>Release Date:</b> ${data.release_date}<br>
  <b>Runtime:</b> ${data.runtime} min<br>
  <b>Status:</b> ${data.status}<br>
  <b>Budget:</b> ${data.budget}<br>
  <b>IMDB:</b> <a href="https://www.imdb.com/title/${data.imdb_id}/">${data.imdb_id}</a><br>
  <b>Rating:</b> ${data.vote_average}<br>
  <b>Votes:</b> ${data.vote_count}<br>
  <b>Popularity:</b> ${data.popularity}<br>

</fieldset>
`
  $(".moviebox").html(text);
  $(".embed").html(embed);
  $(".keys").html(keys);
  $(".headercode").html(header);
  $('head').append(`<meta name="description" content="${data.title} Movie Download ${data.title} Movie Moviesda Download ${data.title} 2022 Tamil Movie Download ${data.title} 2022 Movie isaimini Download Moviesda.Mobi ${data.title} Full Movie Download ${data.title} 720p HD Movie Download ${data.title} 1080p Mp4 Movie Download
  " />`);

});  


var videoUrl = 'https://api.themoviedb.org/3/movie/' + url + '?api_key=d3c9a5561cb6ce6f31879e28df2e5c3e&append_to_response=alternative_titles,credits,similar,videos,keywords,images';

$.getJSON(videoUrl, function (data) {
console.log(data);

var cast = data.credits.cast;
var keywords = data.keywords.keywords;
var genres = data.genres;

var profilecdn = "https://image.tmdb.org/t/p/w138_and_h175_face/";

var text = `<img alt="${data.title} Movie backdrop" style=" height: auto !important; " title="${data.title} Movie backdrop" src="https://image.tmdb.org/t/p/w780${data.backdrop_path}" loading="lazy">`
 

          
      $('.cast').html(cast);
      
      

      
      $.each(data.credits.cast, function(i, item) {
      
       document.getElementById("cast").innerHTML += ' <li itemprop="name"><a itemprop="url" href=\'/search?keyword=' + item.name + '\'>' + item.name + '</a> as '+ item.character +' </li> ';
              
          
});

$.each(data.keywords.keywords, function(i, item) {
      
      document.getElementById("keywords").innerHTML += '' + item.name + ', ';
             
         
});

$.each(data.genres, function(i, item) {
      
      document.getElementById("genres").innerHTML += ' ' + item.name + ', ';
             
         
});
});