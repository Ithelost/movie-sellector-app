// http://www.omdbapi.com/?i=tt3896198&apikey=a455290f

import $ from 'jquery'

//IMDB will only return a maximum of 8 movies
export default async function searchOmdb(query) {
  try {
    const results = await $.ajax({
      url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a455290f' + '&t=Lord',
      dataType: 'json',
      cache: true,
    });
    return results;
  } catch (err) {
    console.error(err);
  }
}