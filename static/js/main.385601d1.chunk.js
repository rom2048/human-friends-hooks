(this["webpackJsonphuman-friends-hooks"]=this["webpackJsonphuman-friends-hooks"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),r=n.n(a),i=(n(9),n(2)),l=n(0),h=function(e){var t=e.id,n=e.name,c=e.email,s=e.phone,a=e.website;return Object(l.jsxs)("div",{className:"tc grow bg-light-purple br2 shadow-3 ma3 pa3 br3 bw2 dib",children:[Object(l.jsx)("img",{alt:"human",src:"https://robohash.org/".concat(t,"?set=set5")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("p",{children:s}),Object(l.jsx)("p",{children:a})]})]})},o=function(e){var t=e.humans,n=t.map((function(e,n){return Object(l.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email,phone:t[n].phone,website:t[n].website},n)}));return Object(l.jsx)("div",{children:n})},j=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--black bg-light-purple",type:"search",placeholder:"search humans",onChange:t})})},b=(n(11),function(e){return Object(l.jsx)("div",{className:"scroll-box",children:e.children})});var u=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(i.a)(a,2),h=r[0],u=r[1],d=Object(c.useState)(0),m=Object(i.a)(d,2),f=m[0],p=m[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[f]);var O=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return console.log(n,h),n.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Humans"}),Object(l.jsxs)("div",{className:"flex justify-center flex-wrap",children:[Object(l.jsx)("button",{className:"f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue ma2",onClick:function(){return p(f+1)},children:"Click me!"}),Object(l.jsx)("p",{className:"tc f1-l fw1red",children:f})]}),Object(l.jsx)(j,{searchChange:function(e){u(e.target.value)}}),Object(l.jsx)(b,{children:Object(l.jsx)(o,{humans:O})})]}):Object(l.jsx)("h1",{children:"Loading"})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};n(12);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.385601d1.chunk.js.map