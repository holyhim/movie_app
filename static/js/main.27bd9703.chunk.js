(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{36:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(0),a=s.n(c),r=s(26),i=s.n(r),o=s(8),j=s(2),l=s(14),u=s.n(l),m=s(27),d=s(11);s(36);function b(e){var t=e.id,s=e.year,c=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(n.jsx)("div",{className:"movie",children:Object(n.jsxs)(o.b,{to:{pathname:"movie/".concat(t),state:{year:s,title:c,genres:i,summary:a,poster:r}},children:[Object(n.jsx)("img",{src:r,alt:c,title:c}),Object(n.jsxs)("div",{className:"movie_data",children:[Object(n.jsx)("h3",{className:"movie_title",children:c}),Object(n.jsx)("h5",{className:"movie_year",children:s}),Object(n.jsx)("ul",{className:"movie_genres",children:i.map((function(e,t){return Object(n.jsx)("li",{className:"movie_genre",children:e},t)}))}),Object(n.jsx)("p",{className:"movie_summary",children:a.lenth>200?a.slice(0,200):a})]})]})})}var h=s(29),O=s.n(h);s(59);var p=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)([]),i=Object(d.a)(r,2),o=i[0],j=i[1],l=function(){var e=Object(m.a)(u.a.mark((function e(){var t,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,j(s),a(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),Object(n.jsx)("section",{className:"container",children:s?Object(n.jsx)("div",{className:"movies",children:o.map((function(e){return Object(n.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))}):Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader_text",children:"Loading..."})})})};s(60);function v(){return Object(n.jsxs)("div",{className:"about__container",children:[Object(n.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(n.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})}function x(e){var t=Object(c.useState)(e.location),s=Object(d.a)(t,1)[0];return Object(c.useEffect)((function(){var t=e.history;void 0===s.state&&t.push("/")}),[]),s.state?Object(n.jsx)("span",{children:s.state.title}):null}s(61);function f(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})}s(62);var y=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(f,{}),Object(n.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(n.jsx)(j.a,{path:"/about",component:v}),Object(n.jsx)(j.a,{path:"/movie/:id",component:x})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.27bd9703.chunk.js.map