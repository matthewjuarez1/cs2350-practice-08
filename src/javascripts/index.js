// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import { movies } from './movies'
let featured_movie = document.querySelector('.featured')
for (let m of movies){
  let movie_thumb = document.getElementById('m' + m.id)
  movie_thumb.innerHTML = 
  <img src="${m.poster}">

  
}