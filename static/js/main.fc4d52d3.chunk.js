(this["webpackJsonpinventory-react"]=this["webpackJsonpinventory-react"]||[]).push([[0],{52:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(45),r=n.n(i),s=(n(52),n(33),n(14)),o=n(7),l=n(21),j=n(22),d=n(24),b=n(23),u=n(1),h=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(u.jsx)(s.b,{to:"/",className:"navbar-brand",children:"MedInvent"}),Object(u.jsx)("div",{className:"collpase navbar-collapse",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(s.b,{to:"/all",className:"nav-link",children:"\u0421\u043f\u0438\u0441\u044a\u043a \u0441 \u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430"})}),Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(s.b,{to:"/add",className:"nav-link",children:"\u0414\u043e\u0431\u0430\u0432\u0438 \u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430"})}),Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(s.b,{to:"/user",className:"nav-link",children:"\u0421\u044a\u0437\u0434\u0430\u0439 \u041b\u0435\u0447\u0435\u043d\u0438\u0435"})})]})})]})}}]),n}(a.Component),O=n(35).default;function m(e){return e?"\u0414\u0430":"\u041d\u0435"}var x=function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.medicament.name}),Object(u.jsx)("td",{children:m(e.medicament.isAvailable)}),Object(u.jsx)("td",{children:m(e.medicament.doesExpireAfterOpen)}),Object(u.jsx)("td",{children:e.medicament.expirationDate.substring(0,10)})]})},p=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={medicaments:[]},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.get("".concat("https://main-invento-m5k5bapnre712ycg-gtw.qovery.io/","medicaments/")).then((function(t){e.setState({medicaments:t.data})})).catch((function(e){console.error(e)}))}},{key:"medicamentsList",value:function(){return this.state.medicaments.map((function(e){return Object(u.jsx)(x,{medicament:e},e._id)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"\u0421\u043f\u0438\u0441\u044a\u043a \u043d\u0430 \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u0438\u0442\u0435"}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{className:"thead-light",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\u0418\u043c\u0435"}),Object(u.jsx)("th",{children:"\u041d\u0430\u043b\u0438\u0447\u043d\u043e\u0441\u0442"}),Object(u.jsx)("th",{children:"\u0420\u0430\u0437\u0432\u0430\u043b\u044f \u043b\u0438 \u0441\u0435 \u0441\u043b\u0435\u0434 \u043e\u0442\u0432\u0430\u0440\u044f\u043d\u0435"}),Object(u.jsx)("th",{children:"\u0413\u043e\u0434\u043d\u043e \u0434\u043e"})]})}),Object(u.jsx)("tbody",{children:this.medicamentsList()})]})]})}}]),n}(a.Component),f=n(16),v=n.n(f),g=n(26),y=n(19),k=n(20),C=n(17),w=(n(78),n(5)),N=n(47),D=n(25),G=n(35).default,L=function(){var e=Object(a.useState)({}),t=Object(C.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),r=Object(C.a)(i,2),s=r[0],o=r[1],l=Object(a.useState)(!0),j=Object(C.a)(l,1)[0],d=Object(a.useState)(!1),b=Object(C.a)(d,1)[0],h=Object(a.useState)(!1),O=Object(C.a)(h,1)[0],m=Object(a.useState)(!1),x=Object(C.a)(m,1)[0],p=0,f=n.name,L=n.type,I=n.description,R=n.linkLeaflet,S=n.expirationDate,z=function(e,t){c(Object(k.a)(Object(k.a)({},n),{},Object(y.a)({},e,t))),s[e]&&o(Object(k.a)(Object(k.a)({},s),{},Object(y.a)({},e,null)))},A=Object(a.useCallback)(Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G.get("https://main-invento-m5k5bapnre712ycg-gtw.qovery.io/medicaments/".concat(f)).then((function(e){console.log(e),200===e.status?(x=!0,console.log("if "+e.status),console.log("does med exist in verify method: "+x)):console.log("else"+e.status)}));case 1:case"end":return e.stop()}}),e)})))),H=Object(a.useCallback)(Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G.post("https://main-invento-m5k5bapnre712ycg-gtw.qovery.io/medicaments/add",{name:f,expirationDate:S,description:I,linkLeaflet:R,doesExpireAfterOpen:O,isRunningOut:b,isAvailable:j}).then((function(e){console.log(e),console.log(e.status),p=e.status})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))),F="\u041d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0435 \u043f\u0440\u0430\u0437\u043d\u043e!",E=function(){var e={};return A(),console.log("does medicament exists in find errors method: ".concat(x)),f&&""!==f?f.length>30?e.name="name is too long!":x&&(e.name="\u0422\u043e\u0437\u0438 \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442 \u0432\u0435\u0447\u0435 \u0435 \u0434\u043e\u0431\u0430\u0432\u0435\u043d \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0430"):e.name=F,I&&""!==I?I.length>100&&(e.description="description is too long!"):e.description=F,S&&""!==S||(e.expirationDate=F),L&&""!==L||(e.type=F),e};return Object(u.jsxs)("div",{className:"Form d-flex flex-column align-items-center",children:[Object(u.jsx)("h1",{children:"\u0414\u043e\u0431\u0430\u0432\u0438 \u043d\u043e\u0432 \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442"}),Object(u.jsxs)(w.a,{style:{width:"300px"},children:[Object(u.jsxs)(w.a.Group,{children:[Object(u.jsx)(w.a.Label,{children:"\u0418\u043c\u0435"}),Object(u.jsx)(w.a.Control,{type:"text",onChange:function(e){return z("name",e.target.value)},isInvalid:!!s.name}),Object(u.jsx)(w.a.Control.Feedback,{type:"invalid",children:s.name})]}),Object(u.jsxs)(w.a.Group,{children:[Object(u.jsx)(w.a.Label,{children:"\u041b\u0438\u043d\u043a \u043a\u044a\u043c \u043b\u0438\u0441\u0442\u043e\u0432\u043a\u0430\u0442\u0430"}),Object(u.jsx)(w.a.Control,{type:"text",onChange:function(e){return z("linkLeaflet",e.target.value)}})]}),Object(u.jsxs)(w.a.Group,{children:[Object(u.jsx)(w.a.Label,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(u.jsx)(w.a.Control,{as:"textarea",onChange:function(e){return z("description",e.target.value)},isInvalid:!!s.description}),Object(u.jsx)(w.a.Control.Feedback,{type:"invalid",children:s.description})]}),Object(u.jsx)("fieldset",{children:Object(u.jsxs)(w.a.Group,{children:[Object(u.jsx)(D.a,{children:"\u0422\u0438\u043f \u043d\u0430 \u041c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442\u0430"}),Object(u.jsx)(w.a.Check,{type:"radio",label:"first radio",name:"formHorizontalRadios",id:"formHorizontalRadios1",onChange:function(e){return z("type",e.target.name)},isInvalid:!!s.type}),Object(u.jsx)(w.a.Check,{type:"radio",label:"second radio",name:"formHorizontalRadios",id:"formHorizontalRadios2",onChange:function(e){return z("type",e.target.name)},isInvalid:!!s.type}),Object(u.jsx)(w.a.Check,{type:"radio",label:"third radio",name:"formHorizontalRadios",id:"formHorizontalRadios3",onChange:function(e){return z("type",e.target.name)},isInvalid:!!s.type}),Object(u.jsx)(w.a.Control.Feedback,{type:"invalid",children:s.type})]})}),Object(u.jsxs)(w.a.Group,{children:[Object(u.jsx)(w.a.Label,{children:"\u0413\u043e\u0434\u0435\u043d \u0434\u043e"}),Object(u.jsx)(w.a.Control,{type:"date",name:"expirationDate",onChange:function(e){return z("expirationDate",e.target.value)},isInvalid:!!s.expirationDate,placeholder:"\u0413\u043e\u0434\u0435\u043d \u0434\u043e"}),Object(u.jsx)(w.a.Control.Feedback,{type:"invalid",children:s.expirationDate})]}),Object(u.jsx)(w.a.Group,{children:Object(u.jsx)(w.a.Check,{type:"switch",id:"doesExpireAfterOpen",label:"\u0420\u0430\u0437\u0432\u0430\u043b\u044f \u043b\u0438 \u0441\u0435 \u0441\u043b\u0435\u0434 \u043e\u0442\u0432\u0430\u0440\u044f\u043d\u0435",onChange:function(e){return O=e.target.checked}})}),Object(u.jsx)(w.a.Group,{children:Object(u.jsx)(w.a.Check,{type:"switch",id:"isRunningOut",label:"\u0421\u0432\u044a\u0440\u0448\u0432\u0430 \u043b\u0438",onChange:function(e){return b=e.target.checked}})}),Object(u.jsx)(w.a.Group,{children:Object(u.jsx)(w.a.Check,{type:"switch",id:"isAvailable",label:"\u041d\u0430\u043b\u0438\u0447\u0435\u043d",onChange:function(e){return j=e.target.checked},defaultChecked:!0})}),Object(u.jsx)(N.a,{type:"submit",onClick:function(e){e.preventDefault();var t=E();Object.keys(t).length>0?o(t):Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:console.log("the status code after executing the function ".concat(p)),200!==p||204!==p?alert("\u043d\u0435\u0449\u043e \u0441\u0435 \u043e\u0431\u044a\u0440\u043a\u0430"):alert("\u0414\u043e\u0431\u0430\u0432\u0438\u0445\u0442\u0435 \u043d\u043e\u0432 \u043c\u0435\u0434\u0438\u043a\u0430\u043c\u0435\u043d\u0442 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0430 ".concat(f));case 4:case"end":return e.stop()}}),e)})))()},children:"\u0414\u043e\u0431\u0430\u0432\u0438"}),Object(u.jsx)(w.a.Group,{})]})]})};var I=function(){return Object(u.jsx)(s.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{path:"/all",exact:!0,component:p}),Object(u.jsx)(o.a,{path:"/add",component:L})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.fc4d52d3.chunk.js.map