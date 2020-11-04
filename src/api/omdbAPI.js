// http://www.omdbapi.com/?i=tt3896198&apikey=a455290f

import $ from 'jquery'

//IMDB will only return a maximum of 8 movies
export default async function searchWithTitel(query) {
  try {
    const results = await $.ajax({
      url: 'http://www.omdbapi.com/?apikey=a455290f&s=' + query,
      dataType: 'json',
      cache: true,
    });
    return results;
  } catch (err) {
    console.error(err);
  }
}

export async function searchWithId(imdbId) {
  try {
    const results = await $.ajax({
      url: 'http://www.omdbapi.com/?apikey=a455290f&i=' + imdbId,
      dataType: 'json',
      cache: true,
    });
    return results;
  } catch (err) {
    console.error(err);
  }
}