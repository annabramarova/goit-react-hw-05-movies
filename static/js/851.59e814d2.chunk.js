"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[851],{5851:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,c,o,s,u,d=t(1087),l=t(7689),p=t(2791),f=t(9439),h=t(7442),x=t(9878),v=t(168),m=t(7933),g=m.Z.div(r||(r=(0,v.Z)(["\ndisplay: flex;\n\n@media screen and (max-width: 768px) {\nflex-direction: column;}"]))),Z=m.Z.img(a||(a=(0,v.Z)(["\ndisplay: block;\nmax-height: 400px;"]))),j=m.Z.div(i||(i=(0,v.Z)(["\n@media screen and (min-width: 768px) {\nmargin-left:20px;\n}"]))),w=m.Z.ul(c||(c=(0,v.Z)(["\nlist-style: none;\ndisplay: flex;\npadding: 0;\ngap: 10px"]))),b=(0,m.Z)(d.rU)(o||(o=(0,v.Z)(["\ndisplay:block;\npadding: 0;\nfont-size: 20px;\nfont-weight:600;\ntext-decoration: none;\ncolor: black;\n\n&:hover{\n    color:red;\n}"]))),k=m.Z.h2(s||(s=(0,v.Z)(["\nmargin: 0;\npadding:0;"]))),y=m.Z.button(u||(u=(0,v.Z)(["\ncursor: pointer;\npadding: 5px 8px;\nmin-width: 100px;\ncolor: #000;\nborder:none;\nbackground-color: #fff;\n"]))),_=t(184),U=function(){var n,e,t=function(n){var e=(0,p.useState)([]),t=(0,f.Z)(e,2),r=t[0],a=t[1];return(0,p.useEffect)((function(){(0,h.TP)(n).then((function(n){return a(n)}))}),[n]),{movieDetails:r}}((0,l.UO)().movieId),r=t.movieDetails,a=r.poster_path,i=r.original_title,c=r.release_date,o=r.title,s=r.vote_average,u=r.overview,v=r.genres,m=null!==(n=null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,_.jsxs)("div",{children:[(0,_.jsxs)(d.rU,{to:m,children:[" ",(0,_.jsx)(y,{type:"button",children:"\ud83e\udc14 Go back"})]}),(0,_.jsxs)(g,{children:[(0,_.jsx)("div",{children:(0,_.jsx)(Z,{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:i})}),(0,_.jsxs)(j,{children:[(0,_.jsxs)(k,{children:[o," ("," ",c?c.slice(0,4):""," ",")"]}),(0,_.jsxs)("p",{children:["User Score:"," ",s?Math.round(10*s).toFixed(0):"","%"]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:u}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)(w,{children:null===v||void 0===v?void 0:v.map((function(n){return(0,_.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:"Additional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(b,{to:"cast",state:{from:m},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(b,{to:"reviews",state:{from:m},children:"Reviews"})})]}),(0,_.jsx)(p.Suspense,{fallback:(0,_.jsx)(x.a,{}),children:(0,_.jsx)(l.j3,{})})]})]})}},7442:function(n,e,t){t.d(e,{Hg:function(){return s},TP:function(){return d},tx:function(){return p},z1:function(){return u},zv:function(){return l}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="?api_key=65f73936914e96331bea5b0c7cf2b569",s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie".concat(o,"&query=").concat(e,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e).concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast.map((function(n){return{name:n.name,character:n.character,profile_path:n.profile_path,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results.map((function(n){return{author:n.author,content:n.content,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=851.59e814d2.chunk.js.map