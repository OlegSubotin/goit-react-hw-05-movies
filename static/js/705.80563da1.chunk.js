"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[705],{9778:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(3504),r=n(5562),i=n.n(r),o="MovieGallery_list__tZ4SP",c="MovieGallery_item__4tR9S",s="MovieGallery_image__GR1sS",u="MovieGallery_text__r6Cf+",l="MovieGallery_link__CmVj8",f=n(9163),m=n(184),v=function(e){var t=e.movies;return(0,m.jsxs)(m.Fragment,{children:[t.length>0&&(0,m.jsx)("ul",{className:o,children:t.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return(0,m.jsx)("li",{className:c,children:(0,m.jsxs)(a.rU,{className:l,to:"/movies/".concat(t),children:[(0,m.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):f,alt:n,className:s}),(0,m.jsx)("p",{className:u,children:n})]})},t)}))}),0===t&&i().Notify.info("Sorry, there is no movie")]})}},4697:function(e,t,n){n.d(t,{Df:function(){return o},IQ:function(){return u},Jh:function(){return l},Pg:function(){return s},gH:function(){return c}});var a=n(4569),r="d738edb014e8e3b583b9023797190025",i="https://api.themoviedb.org/3/",o=function(){var e="".concat(i,"trending/movie/day?api_key=").concat(r,"&page=",1);return a.get(e)};function c(e){var t="".concat(i,"search/movie?api_key=").concat(r,"&query=").concat(e);return a.get(t)}function s(e){var t="".concat(i,"movie/").concat(e,"?api_key=").concat(r);return a.get(t)}function u(e){var t="".concat(i,"movie/").concat(e,"/credits?api_key=").concat(r);return a.get(t)}function l(e){var t="".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(r);return a.get(t)}},5705:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(8152),r=n(2791),i=n(5562),o=n.n(i),c=n(8185),s={wrapper:"SearchBar_wrapper__KGK67",form:"SearchBar_form__gW7Gj",button:"SearchBar_button__T7RTc",input:"SearchBar_input__bIy50"},u=n(184);var l=function(e){var t=e.onSubmit,n=(0,r.useState)(""),i=(0,a.Z)(n,2),l=i[0],f=i[1];return(0,u.jsx)("div",{className:s.wrapper,children:(0,u.jsxs)("form",{className:s.form,onSubmit:function(e){e.preventDefault(),""!==l.trim()?(t(l),f("")):o().Notify.info("Put a movie name you are looking for")},children:[(0,u.jsx)("input",{className:s.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:l,onChange:function(e){f(e.currentTarget.value.toLowerCase())}}),(0,u.jsx)("button",{className:s.button,children:(0,u.jsxs)("span",{className:s.buttonLabel,children:[" ",(0,u.jsx)(c.dVI,{fill:"#00008b"})]})})]})})},f=n(4697),m=n(9778),v=n(1421),d="MoviesView_title__aHOX4",h="idle",_="pending",p="rejected",g="resolved";function j(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],i=t[1],c=(0,r.useState)(h),s=(0,a.Z)(c,2),j=s[0],x=s[1],y=(0,r.useState)([]),b=(0,a.Z)(y,2),N=b[0],S=b[1],w=(0,r.useState)(null),k=(0,a.Z)(w,2),Z=k[0],G=k[1];return(0,r.useEffect)((function(){""!==n&&(x(_),(0,f.gH)(n).then((function(e){var t=e.data.results.map((function(e){return{id:e.id,poster_path:e.poster_path,title:e.title}}));S(t),x(g)})).catch((function(e){G(e),x(p)})))}),[n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{onSubmit:function(e){n!==e?(S([]),i(e)):o().Notify.info("You have already found your movies")}}),j===h&&(0,u.jsx)("h1",{className:d,children:"We can find any movie you want "}),j===_&&(0,u.jsx)(v.Z,{}),j===p&&(0,u.jsx)("h1",{className:d,children:Z}),j===g&&N&&(0,u.jsx)(u.Fragment,{children:0===N.length?(0,u.jsx)("h1",{className:d,children:"Your movie is very specific "}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:d,children:"We've found for you:"}),(0,u.jsx)(m.Z,{movies:N})]})})]})}},9163:function(e,t,n){e.exports=n.p+"static/media/movieImage.71253f31d01ef6cdd4cc.jpg"}}]);
//# sourceMappingURL=705.80563da1.chunk.js.map