(this.webpackJsonpcscwwwform=this.webpackJsonpcscwwwform||[]).push([[0],{22:function(e,t,a){},38:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c=a(1),l=a.n(c),o=a(30),s=a.n(o),r=(a(38),a(17)),n=a(9),i=a(7),d=a(31),j=a.n(d),h=a(3),b=a(8),u=a(11),m=a(19);a(22);function g(e,t,a,c,l,o,s,r,n,i,d,j,h,b,u,m,g,O,x){var v=[];if("undefined"!==typeof Storage?(console.log(e),e.length<=40?localStorage.fn=e:v.push("First Name must be 40 characters or less\n"),console.log(t),e.length<=40?localStorage.ln=t:v.push("Last Name must be 40 characters or less\n"),console.log(a),localStorage.ti=""===a?"None":a,localStorage.height=""===c&&""===l?"None Entered":"".concat(c,"'").concat(l,'"'),console.log(c),localStorage.ft=c,console.log(l),localStorage.ih=l,console.log(o),""!==o?o.match(/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/)?localStorage.po=o:v.push("You tried to enter a phone number but it did not pass\n"):localStorage.po="None Entered",console.log(s),localStorage.st=s,console.log(r),localStorage.ct=r,console.log(n),n.match(/^[A-Z][A-Z]$/)?localStorage.sa=n:v.push("state must be two uppercase letters"),console.log(i),i.match(/^\d{5}$/)?localStorage.zc=i:v.push("zip codes must be up to five positive digits"),s&&r&&n&&i&&(console.log("in the if for making the big address"),localStorage.youraddress="".concat(s,",").concat(r,",").concat(n,",").concat(i),console.log(typeof localStorage.youraddress),console.log(localStorage.youraddress),function(e){var t,a=e.split(/[ ,]+/);console.log(a),3===a.length&&fetch("https://dev.virtualearth.net/REST/v1/Locations/US/".concat(localStorage.sa,"/").concat(localStorage.zc,"/").concat(localStorage.ct,"/").concat(a[0],"%20").concat(a[1],"%20").concat(a[2],"?key=AjLO9XD7SI7kT5yhQ1tbmi2fGDB1tnz5OBD4Mx0f0oQPXy9Oz3reskGgLrmKS7Jm")).then((function(e){return e.json()})).then((function(e){t=e,localStorage.long=t.resourceSets[0].resources[0].point.coordinates[1],localStorage.lat=t.resourceSets[0].resources[0].point.coordinates[0],console.log(localStorage.long),console.log(e)}));console.log(t)}(s)),console.log(d),localStorage.se=d?"Yes":"No",console.log(j),localStorage.sp=j?"Yes":"No",console.log(h),localStorage.sf=h?"Yes":"No",console.log(b),localStorage.sw=b?"Yes":"No",console.log(u),localStorage.sm=u?"Yes":"No",console.log(m),localStorage.sv=m?"Yes":"No",localStorage.mb=""===g?"less than $ 50":g,console.log(O),O.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)?localStorage.em=O:v.push('Your email is not valid, it must have an "@" and a "."'),console.log(x),localStorage.tos=x?"Yes":"No"):alert("SORRY. THIS BROWSER DOES NOT HAVE WEB STORAGE SUPPORT. PLEASE USE ANOTHER BROWSER"),v.length>0){var S=document.getElementById("bigbig"),p=document.createElement("div"),f=v.join("</br>");return p.innerHTML='<div class="alert alert-warning alert-dismissible fade show col-auto" role="alert"><strong>There was an issue with the following: </strong> </br>'.concat(f,'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>'),S.append(p),!1}return!0}var O=a(0);var x=function(){console.log("inside he FResults functiom");var e=function(e){localStorage.removeItem("fn"),localStorage.removeItem("ln"),localStorage.removeItem("ti"),localStorage.removeItem("ft"),localStorage.removeItem("ih"),localStorage.removeItem("po"),localStorage.removeItem("st"),localStorage.removeItem("ct"),localStorage.removeItem("sa"),localStorage.removeItem("zc"),localStorage.removeItem("se"),localStorage.removeItem("sp"),localStorage.removeItem("sf"),localStorage.removeItem("sw"),localStorage.removeItem("sm"),localStorage.removeItem("sv"),localStorage.removeItem("mb"),localStorage.removeItem("em"),localStorage.removeItem("tos")};return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"col-md-12 d-flex justify-content-center",children:Object(O.jsx)("h4",{children:"Results verification page Vivian Kuang"})}),Object(O.jsx)("div",{id:"bigdiv",children:Object(O.jsx)(h.a,{onSubmit:e,children:Object(O.jsxs)(b.a,{sm:12,children:[Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Name:   ",localStorage.fn," ",localStorage.ln]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Perferred Title:   ",localStorage.ti]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Your Height:   ",localStorage.height]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Phone:   ",localStorage.po]})}),Object(O.jsxs)("div",{className:"linehere",children:[Object(O.jsxs)("h5",{children:["Address:   ",localStorage.st," ",localStorage.ct," ",localStorage.sa," ",localStorage.zc]}),Object(O.jsx)(b.a,{sm:12,children:Object(O.jsx)("img",{src:"https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/".concat(localStorage.lat,",").concat(localStorage.long,"/15?mapSize=500,500&pp=").concat(localStorage.lat,",").concat(localStorage.long,";21;AA&key=AjLO9XD7SI7kT5yhQ1tbmi2fGDB1tnz5OBD4Mx0f0oQPXy9Oz3reskGgLrmKS7Jm"),alt:"Can't Find Your Address on The Map."})})]}),Object(O.jsxs)("div",{className:"linehere",children:[Object(O.jsx)("h5",{children:"All services you require"}),Object(O.jsxs)("h5",{children:[localStorage.se,"   Email"]}),Object(O.jsxs)("h5",{children:[localStorage.sp,"   Phone"]}),Object(O.jsxs)("h5",{children:[localStorage.sf,"   Facebook"]}),Object(O.jsxs)("h5",{children:[localStorage.sw,"   Tweeter"]}),Object(O.jsxs)("h5",{children:[localStorage.sm,"   Surface Mail"]}),Object(O.jsxs)("h5",{children:[localStorage.sv,"   Personal Visit"]})]}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Your Monthly Budget for services:   ",localStorage.mb]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Your Email:   ",localStorage.em]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:[localStorage.tos,"   I agree to terms"]})}),Object(O.jsx)(u.a,{className:"justify-content-center",id:"buttonrow",children:Object(O.jsx)(m.a,{type:"submit",onClick:e,children:"Confirm"})})]})})})]})};var v=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1],s=l.a.useState(""),r=Object(i.a)(s,2),n=r[0],d=r[1],x=l.a.useState(""),v=Object(i.a)(x,2),S=v[0],p=v[1],f=l.a.useState(""),y=Object(i.a)(f,2),N=y[0],C=y[1],I=l.a.useState(""),k=Object(i.a)(I,2),E=k[0],w=k[1],L=l.a.useState(""),P=Object(i.a)(L,2),T=P[0],F=P[1],G=l.a.useState(""),A=Object(i.a)(G,2),B=A[0],Y=A[1],R=l.a.useState(""),z=Object(i.a)(R,2),V=z[0],D=z[1],M=l.a.useState(""),q=Object(i.a)(M,2),$=q[0],X=q[1],H=l.a.useState(""),K=Object(i.a)(H,2),Q=K[0],J=K[1],Z=l.a.useState(""),U=Object(i.a)(Z,2),W=U[0],_=U[1],ee=l.a.useState(!1),te=Object(i.a)(ee,2),ae=te[0],ce=te[1],le=l.a.useState(!1),oe=Object(i.a)(le,2),se=oe[0],re=oe[1],ne=l.a.useState(!1),ie=Object(i.a)(ne,2),de=ie[0],je=ie[1],he=l.a.useState(!1),be=Object(i.a)(he,2),ue=be[0],me=be[1],ge=l.a.useState(!1),Oe=Object(i.a)(ge,2),xe=Oe[0],ve=Oe[1],Se=l.a.useState(!1),pe=Object(i.a)(Se,2),fe=pe[0],ye=pe[1],Ne=l.a.useState(""),Ce=Object(i.a)(Ne,2),Ie=Ce[0],ke=Ce[1],Ee=l.a.useState(""),we=Object(i.a)(Ee,2),Le=we[0],Pe=we[1],Te=l.a.useState(!1),Fe=Object(i.a)(Te,2),Ge=Fe[0],Ae=Fe[1],Be=l.a.useState(!1),Ye=Object(i.a)(Be,2),Re=Ye[0],ze=Ye[1],Ve=Object(c.useState)(null),De=Object(i.a)(Ve,2),Me=De[0],qe=De[1],$e=Object(c.useRef)(null),Xe=function(e){var t=$e.current.execute();console.log("Does captcha excute return anything?"),console.log(t);var c=e.currentTarget;(console.log("what is the value of token"),console.log(Me),e.preventDefault(),!1===c.checkValidity())?(console.log("in the checkvalidity of the if statement"),e.preventDefault(),e.stopPropagation()):(console.log("b4 the set true to the handle submit"),o(!0),function(){if(a&&null!==Me){var e=g(n,S,N,E,T,B,V,$,Q,W,ae,se,de,ue,xe,fe,Ie,Le,Ge);if(console.log("after the getinput"),!e||null===Me)return!1;ze(!0)}}()||e.preventDefault())};return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"col-md-12 d-flex justify-content-center",children:Object(O.jsx)("h4",{children:"CSC 642 848 Fall 2021 Individual Assignment Vivian Kuang"})}),Object(O.jsx)("div",{className:"col-md-12 d-flex justify-content-center",children:Object(O.jsx)("h4",{children:"Data survey form"})}),Object(O.jsxs)("div",{id:"bigdiv",children:[Object(O.jsx)("div",{className:"col-md-12 d-flex justify-content-center linehere",children:Object(O.jsx)("h3",{children:"Items marked with * are mandatory"})}),Object(O.jsx)(h.a,{noValidate:!0,validated:a,id:"formid",children:Object(O.jsxs)(b.a,{sm:12,id:"fitt",children:[Object(O.jsxs)("div",{className:"linehere",children:[Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"fnid",children:[Object(O.jsxs)(h.a.Label,{column:!0,sm:4,children:["First name",Object(O.jsx)("h3",{children:"*"})]}),Object(O.jsxs)(b.a,{sm:7,children:[Object(O.jsx)(h.a.Control,{required:!0,type:"text",value:n,onChange:function(e){e.target.value.length<=40?d(e.target.value):(document.getElementById("fnid").isValid=!1,o(!1))},placeholder:"First Name"}),Object(O.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please provide a valid First Name (up to 40 characters)."})]})]}),Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"lnid",children:[Object(O.jsxs)(h.a.Label,{column:!0,sm:4,children:["Last name",Object(O.jsx)("h3",{children:"*"})]}),Object(O.jsxs)(b.a,{sm:7,children:[Object(O.jsx)(h.a.Control,{required:!0,type:"text",value:S,onChange:function(e){e.target.value.length<=40?p(e.target.value):(document.getElementById("lnid").isValid=!1,o(!1))},placeholder:"Last Name"}),Object(O.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please provide a valid Last Name (up to 40 characters)."})]})]})]}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"formGridState",children:[Object(O.jsxs)(h.a.Label,{column:!0,sm:4,children:["Choose Preferred Title",Object(O.jsx)("h3",{children:"*"})]}),Object(O.jsx)(b.a,{sm:4,children:Object(O.jsxs)(h.a.Select,{required:!0,value:N,onChange:function(e){return C(e.target.value)},children:[Object(O.jsx)("option",{children:"None"}),Object(O.jsx)("option",{children:"Student"}),Object(O.jsx)("option",{children:"Professor"}),Object(O.jsx)("option",{children:"Staff"}),Object(O.jsx)("option",{children:"Retired"})]})})]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"validationCustom02",children:[Object(O.jsx)(h.a.Label,{column:!0,sm:4,children:" Your Height"}),Object(O.jsx)(b.a,{sm:2,children:Object(O.jsx)(h.a.Control,{type:"text",value:E,onChange:function(e){return w(e.target.value)},placeholder:"0"})}),Object(O.jsx)(h.a.Label,{column:!0,sm:2,children:"Feet(s)"}),Object(O.jsx)(b.a,{sm:2,children:Object(O.jsx)(h.a.Control,{type:"text",value:T,onChange:function(e){return F(e.target.value)},placeholder:"0"})}),Object(O.jsx)(h.a.Label,{column:!0,sm:2,children:"Inch(es)"})]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"poid",children:[Object(O.jsx)(h.a.Label,{column:!0,sm:4,children:"Phone Number"}),Object(O.jsx)(b.a,{sm:7,children:Object(O.jsx)(h.a.Control,{type:"text",value:B,onChange:function(e){e.target.value.length<=12?Y(e.target.value):(document.getElementById("poid").isValid=!1,o(!1))},placeholder:"123-456-7890"})})]})}),Object(O.jsxs)("div",{className:"linehere",children:[Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"stid",children:[Object(O.jsxs)(h.a.Label,{column:!0,sm:4,children:["Street",Object(O.jsx)("h3",{children:"*"})]}),Object(O.jsxs)(b.a,{sm:7,children:[Object(O.jsx)(h.a.Control,{required:!0,type:"text",value:V,onChange:function(e){e.target.value.length<=40?D(e.target.value):(document.getElementById("stid").isValid=!1,o(!1))},placeholder:"000 Name Street"}),Object(O.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please provide a valid street. (up to 40 characters)"})]})]}),Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"ctid",children:[Object(O.jsxs)(h.a.Label,{column:!0,sm:4,children:["City",Object(O.jsx)("h3",{children:"*"})]}),Object(O.jsxs)(b.a,{sm:7,children:[Object(O.jsx)(h.a.Control,{required:!0,type:"text",value:$,onChange:function(e){e.target.value.length<=40?X(e.target.value):(document.getElementById("ctid").isValid=!1,o(!1))},placeholder:"City Name"}),Object(O.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please provide a valid city. (up to 40 characters)"})]})]}),Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"said",children:[Object(O.jsxs)(h.a.Label,{column:!0,sm:4,children:["State",Object(O.jsx)("h3",{children:"*"})]}),Object(O.jsxs)(b.a,{sm:2,children:[Object(O.jsx)(h.a.Control,{required:!0,type:"text",value:Q,onChange:function(e){e.target.value.length<=40||e.target.value.match(/^[A-Z][A-Z]$/)?J(e.target.value):(document.getElementById("said").isValid=!1,o(!1))},placeholder:"XX"}),Object(O.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please provide a valid state. (up to 2 captial characters)"})]})]}),Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"zcid",children:[Object(O.jsxs)(h.a.Label,{column:!0,sm:4,children:["Zip Code",Object(O.jsx)("h3",{children:"*"})]}),Object(O.jsxs)(b.a,{sm:3,children:[Object(O.jsx)(h.a.Control,{required:!0,type:"text",value:W,onChange:function(e){e.target.value.match(/^\d{5}$/)||e.target.value.length<=5?_(e.target.value):(document.getElementById("zcid").isValid=!1,o(!1))},placeholder:"12345"}),Object(O.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please provide a valid zip code. (up to 5 posite digits)"})]})]})]}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"formGridEmail",children:[Object(O.jsx)(h.a.Label,{column:!0,sm:4,children:"Check all services you require"}),Object(O.jsxs)(b.a,{sm:7,children:[Object(O.jsx)(h.a.Check,{type:"checkbox",label:"Email",value:ae,onChange:function(e){return ce(!ae)}}),Object(O.jsx)(h.a.Check,{type:"checkbox",label:"Phone",value:se,onChange:function(e){return re(!se)}}),Object(O.jsx)(h.a.Check,{type:"checkbox",label:"Facebook",value:de,onChange:function(e){return je(!de)}}),Object(O.jsx)(h.a.Check,{type:"checkbox",label:"Tweeter",value:ue,onChange:function(e){return me(!ue)}}),Object(O.jsx)(h.a.Check,{type:"checkbox",label:"Surface Mail",value:xe,onChange:function(e){return ve(!xe)}}),Object(O.jsx)(h.a.Check,{type:"checkbox",label:"Personal Visit",value:fe,onChange:function(e){return ye(!fe)}})]})]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"formGridState",children:[Object(O.jsx)(h.a.Label,{column:!0,sm:4,children:"Your Monthly Budget for services"}),Object(O.jsx)(b.a,{sm:5,children:Object(O.jsxs)(h.a.Select,{value:Ie,onChange:function(e){return ke(e.target.value)},children:[Object(O.jsx)("option",{children:"less than $ 50"}),Object(O.jsx)("option",{children:"between $ 50 and $ 100"}),Object(O.jsx)("option",{children:" above $ 100"})]})})]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)(h.a.Group,{as:u.a,className:"mb-3",controlId:"formGridEmail",children:[Object(O.jsxs)(h.a.Label,{column:!0,sm:4,children:["Your Email",Object(O.jsx)("h3",{children:"*"})]}),Object(O.jsxs)(b.a,{sm:7,children:[Object(O.jsx)(h.a.Control,{required:!0,type:"email",placeholder:"@mail",value:Le,onChange:function(e){return Pe(e.target.value)}}),Object(O.jsx)(h.a.Control.Feedback,{type:"invalid",children:"Please provide a valid email. (must have an @ charcter)"})]})]})}),Object(O.jsxs)("div",{className:"linehere",children:[Object(O.jsx)(h.a.Group,{children:Object(O.jsxs)("div",{id:"needinline",children:[Object(O.jsx)("div",{id:"cbox",children:Object(O.jsx)(h.a.Check,{required:!0,label:"I agree to -> ",value:Ge,onChange:function(e){return Ae(!Ge)},feedback:"You must agree before submitting.",feedbackType:"invalid"})}),Object(O.jsx)("div",{id:"tbox",children:Object(O.jsx)("a",{href:"https://www.google.com/",children:" terms"})}),Object(O.jsx)("div",{id:"sbox",children:Object(O.jsx)("h3",{children:"*"})})]})}),Object(O.jsx)(b.a,{sm:11})]}),Object(O.jsxs)(u.a,{className:"justify-content-between",id:"buttonrow",children:[Object(O.jsx)(b.a,{sm:3,children:Object(O.jsx)(m.a,{variant:"outline-secondary",type:"button",children:"Close"})}),Object(O.jsxs)(b.a,{sm:3,children:[Object(O.jsx)(m.a,{variant:"outline-primary",type:"button",onClick:Xe,children:"Submit form"}),Object(O.jsx)(j.a,{sitekey:"31a2d3b1-806c-45ba-ab73-3dd4a79a3147",size:"invisible",onVerify:qe,ref:$e})]})]})]})})]}),Re&&localStorage.long&&Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"col-md-12 d-flex justify-content-center",children:Object(O.jsx)("h4",{children:"Results verification page Vivian Kuang"})}),Object(O.jsx)("div",{id:"bigdiv",children:Object(O.jsx)(h.a,{onSubmit:Xe,children:Object(O.jsxs)(b.a,{sm:12,children:[Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Name:   ",localStorage.fn," ",localStorage.ln]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Perferred Title:   ",localStorage.ti]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Your Height:   ",localStorage.height]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Phone:   ",localStorage.po]})}),Object(O.jsxs)("div",{className:"linehere",children:[Object(O.jsxs)("h5",{children:["Address:   ",localStorage.st," ",localStorage.ct," ",localStorage.sa," ",localStorage.zc]}),Object(O.jsx)(b.a,{sm:12,children:Object(O.jsx)("img",{src:"https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/".concat(localStorage.lat,",").concat(localStorage.long,"/15?mapSize=500,500&pp=").concat(localStorage.lat,",").concat(localStorage.long,";21;AA&key=AjLO9XD7SI7kT5yhQ1tbmi2fGDB1tnz5OBD4Mx0f0oQPXy9Oz3reskGgLrmKS7Jm"),alt:"Can't Find Your Address on The Map."})})]}),Object(O.jsxs)("div",{className:"linehere",children:[Object(O.jsx)("h5",{children:"All services you require"}),Object(O.jsxs)("h5",{children:[localStorage.se,"   Email"]}),Object(O.jsxs)("h5",{children:[localStorage.sp,"   Phone"]}),Object(O.jsxs)("h5",{children:[localStorage.sf,"   Facebook"]}),Object(O.jsxs)("h5",{children:[localStorage.sw,"   Tweeter"]}),Object(O.jsxs)("h5",{children:[localStorage.sm,"   Surface Mail"]}),Object(O.jsxs)("h5",{children:[localStorage.sv,"   Personal Visit"]})]}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Your Monthly Budget for services:   ",localStorage.mb]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:["Your Email:   ",localStorage.em]})}),Object(O.jsx)("div",{className:"linehere",children:Object(O.jsxs)("h5",{children:[localStorage.tos,"   I agree to terms"]})}),Object(O.jsx)(u.a,{className:"justify-content-center",id:"buttonrow",children:Object(O.jsx)(m.a,{type:"submit",onClick:Xe,children:"Confirm"})})]})})})]})]})},S=a(32);a(56);var p=function(){return Object(O.jsx)(S.a,{id:"bigbig",children:Object(O.jsx)("div",{id:"bigdiv2",children:Object(O.jsx)(r.a,{children:Object(O.jsxs)(n.c,{children:[Object(O.jsx)(n.a,{exact:!0,path:"",children:Object(O.jsx)(v,{})}),Object(O.jsx)(n.a,{exact:!0,path:"/FResults",children:Object(O.jsx)(x,{})})]})})})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),c(e),l(e),o(e),s(e)}))};s.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(p,{})})}),document.getElementById("root")),f()}},[[60,1,2]]]);
//# sourceMappingURL=main.5baeaecb.chunk.js.map