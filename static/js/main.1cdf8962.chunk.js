(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),i=c(4),r=c.n(i),l=(c(10),c(11),c(2)),o=c.p+"static/media/noimg.4e5bf58a.png",j=function(e){return Object(a.jsxs)("div",{className:"movie-wrap",children:[Object(a.jsx)("div",{className:"movie-img",children:null==e.img?Object(a.jsx)("img",{src:o}):Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.img)})}),Object(a.jsxs)("div",{className:"movie-content",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("h3",{children:e.voteAverage})]}),Object(a.jsxs)("div",{className:"detail-btn",children:[Object(a.jsx)("a",{href:"#",onClick:function(){return e.viewMovieInfo(e.movieId)},children:"Detail"}),Object(a.jsx)("i",{class:"fas fa-arrow-right"})]})]})},h=function(e){for(var t=[],c=function(c){var n=e.currentPage===c?"active":"";if(t.push(Object(a.jsx)("li",{className:"wave-effect ".concat(n),onClick:function(){return e.nextPage(c)},children:Object(a.jsx)("a",{href:"#",children:c})},c)),10===c)return"break"},n=1;n<=e.pages+1;n++){if("break"===c(n))break}return Object(a.jsx)("div",{className:"pagenation-wrap",children:Object(a.jsx)("ul",{className:"pagenation",children:t})})},b=function(e){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"movie-infowrap",children:[Object(a.jsx)("div",{className:"img",children:null==e.img?Object(a.jsx)("img",{src:o}):Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.img)})}),Object(a.jsxs)("div",{className:"txt",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsx)("h4",{children:e.releaseDate}),Object(a.jsxs)("h2",{className:"rate",children:[Object(a.jsx)("span",{children:"Rate : "}),e.voteAverage]}),Object(a.jsx)("p",{children:e.overview}),Object(a.jsx)("a",{className:"close-btn",href:"#",onClick:e.closeMovieInfo,children:Object(a.jsx)("i",{class:"fas fa-times-circle"})})]})]})})},u=c.p+"static/media/logo.0af2d27a.png";var d=function(){var e="8c8479a7341bf9bb3bf15f6dc39c6cb4",t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),d=o[0],v=o[1],m=Object(n.useState)(""),O=Object(l.a)(m,2),f=O[0],x=O[1],g=Object(n.useState)(1),p=Object(l.a)(g,2),N=p[0],w=p[1],k=Object(n.useState)(0),S=Object(l.a)(k,2),_=S[0],I=S[1],M=Object(n.useState)(null),y=Object(l.a)(M,2),C=y[0],F=y[1],P=Object(n.useState)(""),A=Object(l.a)(P,2),D=A[0],R=A[1],q=function(e){var t=s.filter((function(t){return t.id===e})),c=t.length>0?t[0]:null;F(c)},B=Math.floor(_/20);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:u,alt:""})}),Object(a.jsx)("ul",{className:"menu",children:Object(a.jsx)("li",{})})]})}),null===C?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"search-area",children:[Object(a.jsx)("h1",{children:"Search the Movie"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(f)).then((function(e){return e.json()})).catch((function(e){return alert("Fail to get information, check the URl")})).then((function(e){console.log(e),i(e.results),I(e.total_results),0===e.total_results?R(Object(a.jsx)("div",{className:"noMovie",children:Object(a.jsx)("p",{children:"We can't find the movie"})})):R("")}))},children:[Object(a.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search",value:d,onChange:function(e){v(e.target.value),x(d)}}),Object(a.jsx)("i",{class:"fas fa-search search-logo"}),Object(a.jsx)("button",{type:"submit"})]})]}),Object(a.jsx)("div",{className:"movie-area",children:Object(a.jsxs)("div",{className:"movie-list",children:[s.map((function(e,t){return Object(a.jsx)(j,{movieId:e.id,title:e.title,img:e.poster_path,viewMovieInfo:q,voteAverage:e.vote_average},t)})),D]})}),_>20?Object(a.jsx)(h,{pages:B,nextPage:function(t){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(f,"&page=").concat(t)).then((function(e){return e.json()})).catch((function(e){return alert("Fail to get information, check the URl")})).then((function(e){i(e.results),w(t)}))},currentPage:N}):""]}):Object(a.jsx)(b,{closeMovieInfo:function(){F(null)},title:C.title,img:C.poster_path,overview:C.overview,releaseDate:C.release_date,voteAverage:C.vote_average})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),v()}},[[12,1,2]]]);
//# sourceMappingURL=main.1cdf8962.chunk.js.map