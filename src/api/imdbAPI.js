
import $ from 'jquery'

//IMDB will only return a maximum of 8 movies
export default async function searchImdb(query) {
  var firstLetter = (query.slice(0,1)).toLowerCase();
  var fixedQuery = query.replace(" ","")
  try {
    const results = await $.ajax({
      url: 'https://sg.media-imdb.com/suggests/' + firstLetter + '/' + fixedQuery + '.json',
      dataType: 'jsonp',
      cache: true,
      jsonp: false,
      jsonpCallback: 'imdb$' + fixedQuery
    });
    return results;
  } catch (results_1) {
    console.error(results_1);
  }
  }

