(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"name":"Surprise Discovery","description":"A web app for Rose-Hulman students to buy and sell secondhand items with each other.","imageSrc":"/images/SurpriseDiscovery.jpg","srcCode":"https://github.com/Travis544/Surpise-Discovery","technologies":"Node JS, SQL, JavaScript, HTML, CSS","detailUrl":"","status":"Completed","tags":[],"deployedLink":""},{"name":"Joust","description":"Demonstrated grasp of object oriented design by remaking the classic arcade game Joust","imageSrc":"/images/Joust.jpg","technologies":"Java","srcCode":"","detailUrl":"","status":"Completed","tags":[]},{"name":"Witcher 3.5","description":"A 2D pixel rpg based on the popular video game series The Witcher.","imageSrc":"/images/Witcher3.5.jpg","srcCode":"","technologies":"Unity, C#","detailUrl":"","status":"In Progress","tags":[]}]')},35:function(e,t,c){},46:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(18),i=c.n(a),r=(c(46),c(17)),o=(c.p,c(35),c(25)),l=c(22),j=c(21),d=c(6),h=c(34),b=c.p+"static/media/galaxy.44a9c6c9.jpg",u=c(1),m=function(e){var t=e.text;return Object(u.jsx)("div",{class:"typeContainer",children:Object(u.jsx)("div",{className:"typewriter",children:Object(u.jsx)("h1",{children:t})})})},x=c(61),O=c(16),g=c(58),p=c.p+"static/media/YuanhangZheng_Resume.8d407bae.pdf",f=function(e){return Object(O.a)(e),Object(u.jsxs)("div",{children:[Object(u.jsx)(g.a,{variant:"outline-info",href:p,target:"_blank",children:"My Resume"})," "]})},v=function(e){var t=e.title,c=e.body;e.author,e.date;return Object(u.jsxs)(x.a,{className:" text-white",id:"homeCard",children:[Object(u.jsx)(x.a.Header,{id:"aboutTitle",children:t}),Object(u.jsx)(x.a.Body,{children:Object(u.jsx)("blockquote",{className:"blockquote mb-0",children:Object(u.jsx)("p",{id:"description",children:c})})}),Object(u.jsx)(x.a.Body,{children:Object(u.jsx)("div",{id:"resumeBox",children:Object(u.jsx)(f,{})})})]})},y=c(37),S=function(e){Object(O.a)(e);var t=Object(s.useState)([]),c=Object(r.a)(t,2),n=c[0],a=c[1],i=new Date(2021,6,6,0,0,0,0);Object(s.useEffect)((function(){var e=[];fetch("https://api.github.com/repos/travis544/Travis544.github.io/commits").then((function(e){return e.json()})).then((function(t){var c,s=Object(y.a)(t);try{for(s.s();!(c=s.n()).done;){var n=c.value,i={};i.message=n.commit.message;var r=n.commit.author.date;i.date=new Date(r),console.log(i),e.push(i)}}catch(o){s.e(o)}finally{s.f()}a(e)})),e.push({message:"Finished homepage",date:new Date(2021,6,6,0,0,0,0)})}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{style:{color:"white"},children:"Recent updates"}),Object(u.jsx)(x.a,{id:"updateLog",children:Object(u.jsx)("ul",{children:n.map((function(e,t){if(e.date>=i)return Object(u.jsxs)("li",{children:[" ",e.date.toDateString()," : ",e.message," "]},t)}))})})]})},k=function(){return Object(u.jsx)("div",{id:"home",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)(o.a,{children:[Object(u.jsxs)("div",{id:"containerIm",children:[Object(u.jsx)("img",{className:"responsiveIm",src:b,alt:"thumbnail"}),Object(u.jsx)(m,{text:"Welcome to my website"})]}),Object(u.jsx)(v,{className:"",title:"About",author:"Travis Zheng",body:"Hi I'm Travis Zheng. I am a junior student at Rose-Hulman Institute Of Technology studying Computer Science. This is my personal profolio showcasing the cool projects that I have done or I am currently working on. You'll also learn more about me on this website.",date:"07/04/2021"})]}),Object(u.jsx)(S,{})]})})},C=c(41),T=c(28),w=c(59),N=c(60),I=function(e){var t=e.project;return Object(u.jsxs)(x.a,{style:{margin:"20px"},children:[Object(u.jsx)(x.a.Img,{variant:"top",src:t.imageSrc}),Object(u.jsxs)(x.a.Body,{children:[Object(u.jsx)(x.a.Title,{children:t.name}),Object(u.jsx)(x.a.Text,{children:t.description}),Object(u.jsx)(x.a.Text,{children:Object(u.jsx)("i",{style:{fontSize:"12px"},children:t.technologies})})]}),Object(u.jsxs)(x.a.Footer,{className:"flexContainer",style:{justifyContent:"space-between"},children:[""!=t.srcCode&&Object(u.jsx)("a",{href:t.srcCode,children:Object(u.jsx)("i",{class:"fab fa-github",style:{maxHeight:"20px"}})}),t.deployedLink&&Object(u.jsx)("a",{href:t.deployedLink,children:Object(u.jsx)("i",{class:"material-icons",children:"link"})}),Object(u.jsxs)("small",{className:"text-muted",children:["Status: ",t.status]})]})]})},D=function(e){Object(O.a)(e);var t=Object(s.useState)([]),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){var e=Math.ceil(T.length/3);console.log(e);for(var t=0,c=function(e){for(var c=[],s=t;s<3+t;s++)console.log(s),s>=T.length?c.push({}):c.push(T[s]);console.log("CONTAINER"),console.log(c),a((function(e){return[].concat(Object(C.a)(e),[c])})),t=3+t},s=0;s<e;s++)c();console.log(n)}),[]),console.log(n),Object(u.jsx)(o.a,{children:n.map((function(e,t){return Object(u.jsx)(w.a,{style:{justifyContent:"center"},children:e.map((function(e,t){return Object.keys(e).length>0?Object(u.jsx)(N.a,{lg:3,children:Object(u.jsx)(I,{project:e})},"index"+t):Object(u.jsx)(N.a,{lg:3},"index"+t)}))},t+"T")}))})};var L=function(){var e=Object(s.useState)("dark"),t=Object(r.a)(e,2),c=t[0];return t[1],Object(s.useEffect)((function(){console.log("SSS"),"dark"===c&&(document.body.style.backgroundColor="#282c34")}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a.Brand,{href:"#home",children:"Travis Zheng"}),Object(u.jsx)(l.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(u.jsxs)(l.a.Collapse,{id:"navbar-toggle",children:[Object(u.jsx)(h.a,{className:"me-auto"}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(j.b,{className:"nav-link navLink",to:"/",children:"Home"}),Object(u.jsx)(j.b,{className:"nav-link navLink",to:"/project",children:"Projects"})]})]})]})}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/project",children:Object(u.jsx)(D,{})}),Object(u.jsx)(d.a,{exact:!0,path:"/",children:Object(u.jsx)(k,{})})]})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),J()}},[[56,1,2]]]);
//# sourceMappingURL=main.56ca406f.chunk.js.map