(this["webpackJsonprobin-hood-assign"]=this["webpackJsonprobin-hood-assign"]||[]).push([[0],{156:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(0),i=n(72),s=(n(91),n(57)),a=n(10),o=n(43),l=n(44),d=(n(92),n(73)),j=n.n(d),u=n(74),b=n.n(u),h=n(41),x=n(42),O=n(173),p=n(167),g=n(168),m=n(177),f=n(169),v=n(170),k=n(172),y=n(171),C=n(31),S=n(63),w=n(45),I=n(166),A=n(175),F=function(e){var t=e.onSubmit;return Object(r.jsx)(S.c,{onSubmit:function(e){return t(e)},children:function(e){var t=e.formProps;return Object(r.jsxs)("form",Object(C.a)(Object(C.a)({},t),{},{children:[Object(r.jsx)(w.b,{name:"name",defaultValue:"",isRequired:!0,children:function(e){var t=e.fieldProps;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y.a,Object(C.a)(Object(C.a)({},t),{},{placeholder:"Enter name"})),Object(r.jsx)(I.a,{children:"Add here you collegue"})]})}}),Object(r.jsx)(A.a,{children:Object(r.jsx)(k.a,{css:{},type:"submit",appearance:"primary",children:"Add"})})]}))}})},R=n(176),T=n(174),P=n.p+"static/media/logo.b231e09d.png",H=function(){return Object(r.jsx)(R.a,{backgroundColor:"#a4b57b",avatar:Object(r.jsx)(T.a,{src:P}),primaryText:"RobinHood Assign"})},N=n(82),E=n.n(N),L=function(e){var t=e.user,n=e.status,c=e.onRemove;return Object(r.jsx)(R.a,{backgroundColor:t.color,avatar:Object(r.jsx)(T.a,{src:t.avatar,status:n}),primaryText:Object(r.jsxs)(r.Fragment,{children:[t.name," ",c&&Object(r.jsx)("span",{role:"button",tabIndex:0,onKeyDown:function(){return c()},onClick:function(){return c()},children:Object(r.jsx)(E.a,{size:"small",label:"Remove user"})})]})})},B=function(e){var t=e.borderColor,n=e.children,c=e.minHeight,i=e.noOutline,s=e.noHorizontalScrollbar;return Object(r.jsx)("div",{style:{outline:i?"none":"0px dashed ".concat(t),outlineOffset:-4,padding:8,minHeight:c,height:"100%",boxSizing:"border-box",overflowY:"auto",overflowX:s?"hidden":"auto",backgroundColor:"white"},children:n})},J=function(e){return x.generateAvatar({username:e,background:x.BackgroundSets.RandomBackground1,characters:x.CharacterSets.Kittens,height:400,width:400})},U=function(e){return{name:e,color:b()({luminosity:"light",format:"hex"}),avatar:J(e)}},q={};try{q=JSON.parse(decodeURIComponent(window.location.hash.substr(3)))}catch(K){}var z=function(){var e=j.a.name(),t=Object(a.e)(),n=Object(c.useState)(Object(o.a)(q.users||[U(e)])),i=Object(l.a)(n,2),s=i[0],d=i[1],u=Object(c.useState)(q.topic||""),b=Object(l.a)(u,2),x=b[0],C=b[1],S=Object(c.useState)(q.currentUserIndex||0),w=Object(l.a)(S,2),I=w[0],A=w[1];return Object(c.useEffect)((function(){!Object(h.isEmpty)(q)&&Object(h.isEqual)(q,{users:s,currentUserIndex:I})||t.push({hash:JSON.stringify({users:s,currentUserIndex:I,topic:x})})}),[s,I,x]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(H,{})}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(p.a,{testId:"topNavigation",id:"product-navigation",skipLinkTitle:"Product Navigation",height:90,isFixed:!1,children:Object(r.jsx)(B,{borderColor:"blue",children:Object(r.jsx)("h3",{style:{textAlign:"center"},children:"Assignment queue made easy!"})})}),Object(r.jsxs)(g.a,{testId:"content",children:[Object(r.jsx)(m.a,{testId:"leftSidebar",id:"space-navigation",skipLinkTitle:"Available users",isFixed:!1,width:325,children:Object(r.jsx)(B,{borderColor:"darkgreen",children:Object(r.jsxs)("div",{style:{minWidth:50,padding:"0 20px"},children:[Object(r.jsx)("h4",{style:{textAlign:"center"},children:"Available persons"}),Object(r.jsxs)("p",{children:[s.map((function(e,t){return Object(r.jsx)(L,{user:e,status:I===t?"locked":void 0,onRemove:function(){return function(e){d(Object(o.a)(s.filter((function(t,n){return e!==n}))))}(t)}})})),Object(r.jsx)(F,{onSubmit:function(e){d([].concat(Object(o.a)(s),[U(e.name)]))}})]})]})})}),Object(r.jsx)(f.a,{testId:"main",id:"main",skipLinkTitle:"Current Responsible",children:Object(r.jsxs)(B,{borderColor:"black",minHeight:"400px",children:[Object(r.jsxs)("h4",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Current Responsible for:",Object(r.jsx)(y.a,{width:150,css:{width:"150px"},defaultValue:x,onChange:function(e){var t=e.currentTarget.value;return C(t)},placeholder:"(Enter topic)"})]}),Object(r.jsx)("p",{children:s[I]?Object(r.jsx)(L,{user:s[I],status:"locked"}):"No responsible"}),Object(r.jsx)(k.a,{css:{},type:"submit",appearance:"primary",onClick:function(){return A(Object(h.get)(s,"[".concat(I+1,"]"))?I+1:0)},children:"Set next responsible"})]})})]}),Object(r.jsx)(v.a,{testId:"rightPanel",id:"help-panel",skipLinkTitle:"Help Panel",isFixed:!1,width:225,children:Object(r.jsx)(B,{borderColor:"orange",children:Object(r.jsx)("h3",{style:{textAlign:"center"},children:"Help Panel"})})})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};i.render(Object(r.jsx)(c.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(a.a,{exact:!0,path:"/",component:z})})}),document.getElementById("root")),D()},91:function(e,t,n){},92:function(e,t,n){}},[[156,1,2]]]);
//# sourceMappingURL=main.3ea360c7.chunk.js.map