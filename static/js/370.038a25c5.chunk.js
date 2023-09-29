"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[370],{2370:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,c,o,i,u,s,p=t(5861),l=t(9439),d=t(4687),h=t.n(d),f=t(2791),x=t(1087),g=t(7689),v=t(168),m=t(5706),w=m.Z.form(r||(r=(0,v.Z)(["\n  margin: 20px;\n  display: flex;\n  justify-content: center;\n"]))),y=m.Z.input(a||(a=(0,v.Z)(["\n  margin-right: 5px;\n  outline: none;\n  width: 200px;\n  height: 35px;\n\n  :not(:placeholder-shown) {\n    line-height: 1.25;\n    color: black;\n    font-size: 20px;\n  }\n"]))),b=m.Z.button(c||(c=(0,v.Z)(["\n  height: 40px;\n  width: 100px;\n  font-size: 20px;\n  display: inline-block;\n  padding: 5px;\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  background-color: teal;\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: darkslategray;\n    cursor: pointer;\n  }\n"]))),Z=t(184),k=function(n){var e=n.onSearch;return(0,Z.jsxs)(w,{action:"submit",onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.searchMovie.value;""!==t.trim()&&e(t)},children:[(0,Z.jsx)(y,{type:"text",name:"searchMovie",placeholder:"Search film"}),(0,Z.jsx)(b,{children:"Search"})]})},j=m.Z.ul(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 0;\n  justify-content: center;\n"]))),_=(0,m.Z)(x.rU)(i||(i=(0,v.Z)(["\n  text-decoration: none;\n  font-size: 24px;\n  display: inline-block;\n  color: black;\n  margin: 0;\n  padding: 0;\n"]))),S=m.Z.li(u||(u=(0,v.Z)(["\n  margin: 0;\n  padding: 0;\n  width: 350px;\n  text-align: center;\n  list-style: none;\n  border: 1px solid #212121;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  list-style: none;\n\n  :hover,\n  :focus {\n    background-color: teal;\n    color: white;\n    border-radius: 4px;\n  }\n"]))),F=m.Z.img(s||(s=(0,v.Z)(["\n  width: 350px;\n  height: 525px;\n  display: block;\n  max-width: 100%;\n"]))),U=function(n){var e=n.listOFfilms,t=n.state;return(0,Z.jsx)(j,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,Z.jsx)(S,{children:(0,Z.jsxs)(_,{to:"".concat(e),state:t,children:[(0,Z.jsx)(F,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"".concat("https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png"),alt:r,width:"200"}),(0,Z.jsx)("p",{children:r})]})},e)}))})},E=t(299),N=t(7574),C=t(7596),z=(t(5462),function(){var n,e=(0,f.useState)([]),t=(0,l.Z)(e,2),r=t[0],a=t[1],c=(0,x.lr)(),o=(0,l.Z)(c,2),i=o[0],u=o[1],s=null!==(n=i.get("name"))&&void 0!==n?n:"",d=(0,g.TH)();(0,f.useEffect)((function(){if(""!==s){var n=function(){var n=(0,p.Z)(h().mark((function n(){return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{(0,E.ad)(s).then((function(n){0===n.results.length&&C.Am.warn("Please try another movie name!",{theme:"dark"}),a(n.results)}))}catch(e){console.log(e)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[s]);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(f.Suspense,{fallback:(0,Z.jsx)(N.a,{}),children:[(0,Z.jsx)(k,{onSearch:function(n){n!==s&&a([]),u(""!==n?{name:n}:{})}}),(0,Z.jsx)(x.rU,{state:{from:"/movies/".concat(i)},children:(0,Z.jsx)(U,{listOFfilms:r,state:{from:d}})}),(0,Z.jsx)(C.Ix,{autoClose:3e3,closeOnClick:!0})]})})})},299:function(n,e,t){t.d(e,{Tg:function(){return u},W0:function(){return f},ad:function(){return p},pI:function(){return g},vq:function(){return d}});var r=t(5861),a=t(4687),c=t.n(a),o=t(1243),i="368dd5813bc50c881ac17d574e13e11d";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("trending/movie/day?api_key=".concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=370.038a25c5.chunk.js.map