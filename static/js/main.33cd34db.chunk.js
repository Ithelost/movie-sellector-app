(this["webpackJsonpmovie-sellector-app"]=this["webpackJsonpmovie-sellector-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),a=n.n(i),c=n(12),r=n.n(c),o=(n(18),n(6)),u=n(2),l=n(3),d=n(5),v=n(4),h=(n(19),function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"span-2",children:[Object(s.jsx)("h6",{children:this.props.movie.Title},this.props.movie.imdbID),Object(s.jsx)("button",{onClick:function(t){return e.props.removeSelectedMovie(e.props.movie.imdbID,t)},children:"Remove"})]})}}]),n}(a.a.Component)),p=(n(20),function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={poster:e.movie.Poster,title:e.movie.Title,type:e.movie.Type,year:e.movie.Year,id:e.movie.imdbID},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"owl-item",children:[Object(s.jsx)("img",{src:this.state.poster,alt:this.state.title}),Object(s.jsxs)("h4",{children:[" ",this.state.title," "]}),Object(s.jsxs)("div",{className:"submit-wrapper",children:[" ",Object(s.jsx)("p",{onClick:function(){e.props.addToSelectedMovies(e.state.id)},children:"Add to my list"})," "]})]})}}]),n}(a.a.Component)),j=n(8),m=(n(21),function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var s;Object(u.a)(this,n),(s=t.call(this,e)).updateState=function(){console.log(s.props);var e=Object(o.a)({},s.state),t=s.props.selectedMovies;if(t!==[]){for(var n=0;n<Object.keys(t).length;n++){t[n].Genre.split(", ").map((function(t){return e.Genres.includes(t)||"N/A"===t||e.Genres.push(t),t})),t[n].Language.split(", ").map((function(t){return e.Languages.includes(t)||"N/A"===t||e.Languages.push(t),t}))}s.setState(e)}},s.submitQuery=function(e){e.preventDefault(),console.log("sumbit query");var t=document.getElementById("genre-choice").value,n=document.getElementById("language-choice").value,i=s.props.selectedMovies.filter((function(e){var s=!0,i=!0;return"nvt"!==t&&"N/A"!==e.Genre&&(s=e.Genre.split(", ").includes(t)),"nvt"!==n&&"N/A"!==e.Language&&(i=e.Language.split(", ").includes(n)),!(!s||!i)})),a=Object(o.a)({},s.state);a.movieSuggestionResult=i,s.setState(a)},s.state={Genres:[],ReleasedYears:[],Languages:[],movieSuggestionResult:[]};var i=Object(j.a)(s);return window.onload=function(){var e=document.getElementById("suggestMovies");e&&e.addEventListener("transitionrun",(function(){i.updateState()}))},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{id:"suggestMovies",className:"overlay",children:[Object(s.jsx)("div",{className:"closebtn",onClick:function(){return e.props.closeBtn()}}),Object(s.jsxs)("form",{onSubmit:this.submitQuery,children:[Object(s.jsxs)("select",{id:"genre-choice",children:[Object(s.jsx)("option",{defaultValue:!0,children:"nvt"}),this.state.Genres.map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))]}),Object(s.jsxs)("select",{id:"year-choice",children:[Object(s.jsx)("option",{defaultValue:!0,children:"nvt"}),this.state.ReleasedYears.map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))]}),Object(s.jsxs)("select",{id:"language-choice",children:[Object(s.jsx)("option",{defaultValue:!0,children:"nvt"}),this.state.Languages.map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))]}),Object(s.jsx)("button",{type:"submit",children:"start"})]}),0!==this.state.movieSuggestionResult.length?this.state.movieSuggestionResult.map((function(e){return Object(s.jsx)("h2",{id:e.imdbID,className:"overlay-content",children:e.Title})})):Object(s.jsx)("h2",{id:"empty",className:"overlay-content",children:"No match found"})]})}}]),n}(a.a.Component)),b=n(7),f=n.n(b),g=n(10),O=n(11),x=n.n(O);function y(){return(y=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.ajax({url:"http://www.omdbapi.com/?apikey=a455290f&s="+t,dataType:"json",cache:!0});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function M(){return(M=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.ajax({url:"http://www.omdbapi.com/?apikey=a455290f&i="+t,dataType:"json",cache:!0});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var S=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).handleChangeMovieQuery=function(e){var t=Object(o.a)({},s.state);t.movieQuery=e.target.value,s.setState(t)},s.handleSubmit=function(e){e.preventDefault(),""!==s.state.movieQuery?function(e){return y.apply(this,arguments)}(s.state.movieQuery).then((function(e){"True"===e.Response?s.setState({movies:e.Search}):alert("No movies found!")})):alert("Type the name of the movie")},s.addToSelectedMovies=function(e){s.state.selectedMovies.some((function(t){return t.imdbID===e}))||function(e){return M.apply(this,arguments)}(e).then((function(e){var t=Object(o.a)({},s.state);t.selectedMovies.push(e),s.setState({selectedMovies:t.selectedMovies})}))},s.removeSelectedMovie=function(e,t){t.preventDefault();var n=Object(o.a)({},s.state),i=n.selectedMovies.findIndex((function(t){return t.imdbID===e}));n.selectedMovies.splice(i,1),s.setState(n)},s.suggestMoviesBtn=function(){var e=document.getElementById("suggestMovies");"100%"!==e.style.width?e.style.width="100%":e.style.width="0%"},s.state={movieQuery:"",movies:[],selectedMovies:[]},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("form",{className:"search-bar",onSubmit:this.handleSubmit,children:[Object(s.jsxs)("label",{children:["Name:",Object(s.jsx)("input",{type:"text",value:this.state.movieQuery,onChange:this.handleChangeMovieQuery})]}),Object(s.jsx)("input",{type:"submit",value:"Submit"})]}),Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsx)("div",{className:"grid-container-movie-panel",children:this.state.movies.map((function(t){return Object(s.jsx)(p,{movie:t,addToSelectedMovies:e.addToSelectedMovies},t.imdbID)}))}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){return e.suggestMoviesBtn()},children:"suggest"}),this.state.selectedMovies.map((function(t){return Object(s.jsx)(h,{movie:t,removeSelectedMovie:e.removeSelectedMovie},t.imdbID)}))]})]}),Object(s.jsx)(m,{selectedMovies:this.state.selectedMovies,closeBtn:this.suggestMoviesBtn})]})}}]),n}(a.a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.33cd34db.chunk.js.map