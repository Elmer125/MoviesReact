(this["webpackJsonpmovies-react"]=this["webpackJsonpmovies-react"]||[]).push([[0],{12:function(e,t,c){e.exports={searchContainer:"Search_searchContainer__1ZW4d",searchBox:"Search_searchBox__33O5Y",searchInput:"Search_searchInput__1GBcZ",searchButton:"Search_searchButton__1JcTJ"}},16:function(e,t,c){e.exports={spinner:"Spinner_spinner__1GXGK",spinning:"Spinner_spinning__24dha"}},19:function(e,t,c){e.exports={movieCard:"MovieCard_movieCard__3dcYy",movieImage:"MovieCard_movieImage__3tIDV"}},22:function(e,t,c){e.exports={title:"App_title__3kzE5"}},24:function(e,t,c){e.exports={moviesGrid:"MoviesGrid_moviesGrid__1qWQ9"}},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(21),s=c.n(n),a=(c(29),c(22)),r=c.n(a),o=c(7),j=c(2),l=c(9),h=c.n(l);function u(e){return fetch("https://api.themoviedb.org/3"+e,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNkNzFlM2ZmOGI5ZTYyYjdhMDMzZWU1YWViYjc2YSIsInN1YiI6IjYxMGFiZTE1OGQyMmZjMDAzMDEzOWVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UDtlO0RM4PcSSs8NXx1xBDbwSxhfhiN6Efm1n3g5NaM ","Content-type":"application/json;charset=utf-8"}}).then((function(e){return e.json()}))}var m=c(13),b=c(16),d=c.n(b),O=c(1);function v(){return Object(O.jsx)("div",{className:d.a.spinner,children:Object(O.jsx)(m.b,{className:d.a.spinning,size:60})})}function x(){var e=Object(j.h)().movieId,t=Object(i.useState)(!0),c=Object(o.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)(null),r=Object(o.a)(a,2),l=r[0],m=r[1];if(Object(i.useEffect)((function(){s(!0),u("/movie/"+e).then((function(e){m(e),s(!1)}))}),[e]),console.log(l),n)return Object(O.jsx)(v,{});var b="https://image.tmdb.org/t/p/w400"+l.poster_path;return Object(O.jsxs)("div",{className:h.a.detailsContainer,children:[Object(O.jsx)("img",{className:"".concat(h.a.col," ").concat(h.a.movieImage),src:b,alt:l.title}),Object(O.jsxs)("div",{className:"".concat(h.a.col," ").concat(h.a.movieDetails),children:[Object(O.jsxs)("p",{className:h.a.firstItem,children:[Object(O.jsx)("strong",{children:"Title:"})," ",l.title]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Genres: "}),l.genres.map((function(e){return e.name})).join(", ")]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Description:"})," ",l.overview]})]})]})}var p=c(10),_=c(19),f=c.n(_);function g(e){var t=e.movie,c="https://image.tmdb.org/t/p/w300"+t.poster_path;return Object(O.jsx)("li",{className:f.a.movieCard,children:Object(O.jsxs)(p.b,{to:"/movies/"+t.id,children:[Object(O.jsx)("img",{width:230,height:345,className:f.a.movieImage,src:c,alt:t.title}),Object(O.jsx)("div",{children:t.title})]})})}var I=c(24),N=c.n(I);function M(){return new URLSearchParams(Object(j.g)().search)}function S(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(!0),a=Object(o.a)(s,2),r=a[0],j=a[1],l=M().get("search");return Object(i.useEffect)((function(){j(!0),u(l?"/search/movie?query="+l:"/discover/movie").then((function(e){n(e.results),j(!1)}))}),[l]),r?Object(O.jsx)(v,{}):Object(O.jsx)("ul",{className:N.a.moviesGrid,children:c.map((function(e){return Object(O.jsx)(g,{movie:e},e.id)}))})}var D=c(12),C=c.n(D);function G(){var e=M().get("search"),t=Object(i.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1],a=Object(j.f)();Object(i.useEffect)((function(){s(e||"")}),[e]);return Object(O.jsx)("form",{className:C.a.searchContainer,onSubmit:function(e){e.preventDefault(),a.push("/?search="+n)},children:Object(O.jsxs)("div",{className:C.a.searchBox,children:[Object(O.jsx)("input",{className:C.a.searchInput,type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(O.jsx)("button",{className:C.a.searchButton,type:"submit",children:Object(O.jsx)(m.a,{size:20})})]})})}function B(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(G,{}),Object(O.jsx)(S,{})]})}function J(){return Object(O.jsxs)(p.a,{children:[Object(O.jsx)("header",{children:Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)("h1",{className:r.a.title,children:"Movies"})})}),Object(O.jsx)("main",{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/movies/:movieId",children:Object(O.jsx)(x,{})}),Object(O.jsx)(j.a,{path:"/",children:Object(O.jsx)(B,{})})]})})]})}s.a.render(Object(O.jsx)(J,{}),document.getElementById("root"))},9:function(e,t,c){e.exports={detailsContainer:"MovieDetails_detailsContainer__hRp0G",col:"MovieDetails_col__ZJBE5",movieImage:"MovieDetails_movieImage__1HVjB",movieDetails:"MovieDetails_movieDetails__3Y9l-",firstItem:"MovieDetails_firstItem__17lKs"}}},[[36,1,2]]]);
//# sourceMappingURL=main.8454ba6b.chunk.js.map