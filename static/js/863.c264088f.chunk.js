"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[863],{4672:function(n,t,r){r.d(t,{O:function(){return d}});var e,a,u=r(7689),c=r(168),i=r(7933),o=r(1087),s=i.Z.ul(e||(e=(0,c.Z)(["\nlist-style: circle;\nmargin-left: 20px;\npadding: 0;"]))),p=(0,i.Z)(o.rU)(a||(a=(0,c.Z)(["\ndisplay: block;\ntext-decoration: none;\ncolor: black;\npadding: 5px;\n\n&:hover {\n    color: red;\n    }\n"]))),f=r(184),d=function(n){var t=n.movies,r=(0,u.TH)();return(0,f.jsx)(s,{children:t.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})}},4863:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,u,c=r(9439),i=r(2791),o=r(1087),s=r(7442),p=r(4672),f=r(168),d=r(7933),l=d.Z.form(e||(e=(0,f.Z)(["\n display: flex;\n flex-wrap: wrap;\n gap: 10px;\n"]))),x=d.Z.input(a||(a=(0,f.Z)(["\npadding: 5px 8px;\nborder-radius: 8px;\nborder: 1px solid black;\nwidth: 100%;\nmin-width: 200px;\nmax-width: 300px;\noutline: none;\nbackground: #f4f4f4;\ncolor: #000;\n"]))),h=d.Z.button(u||(u=(0,f.Z)(["\ncursor: pointer;\npadding: 5px 8px;\nmin-width: 100px;\ncolor: #000;\nborder-radius: 8px;\nfont-weight: bold;\nbackground: #f4f4f4;\n  box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.15),\n    -2px -2px 4px rgba(0, 0, 0, 0.15);\n     &:active{\n    box-shadow:  inset 2px 2px 4px rgba(0, 0, 0, 0.15),\n    inset -2px -2px 4px rgba(0, 0, 0, 0.15);}\n"]))),v=r(184),g=function(){var n=(0,o.lr)(),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,i.useState)([]),u=(0,c.Z)(a,2),f=u[0],d=u[1];return(0,i.useEffect)((function(){var n=r.get("search");n&&(0,s.z1)(n).then((function(n){return d(n)}))}),[r]),(0,v.jsxs)("div",{children:[(0,v.jsxs)(l,{onSubmit:function(n){e({search:n.target[0].value}),n.preventDefault()},children:[(0,v.jsx)(x,{type:"text"}),(0,v.jsx)(h,{type:"submit",children:"Search"})]}),(0,v.jsx)(p.O,{movies:f})]})},m=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(g,{})})}},7442:function(n,t,r){r.d(t,{Hg:function(){return o},TP:function(){return p},tx:function(){return d},z1:function(){return s},zv:function(){return f}});var e=r(5861),a=r(4687),u=r.n(a),c=r(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=65f73936914e96331bea5b0c7cf2b569",o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie".concat(i,"&query=").concat(t,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t).concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast.map((function(n){return{name:n.name,character:n.character,profile_path:n.profile_path,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results.map((function(n){return{author:n.author,content:n.content,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=863.c264088f.chunk.js.map