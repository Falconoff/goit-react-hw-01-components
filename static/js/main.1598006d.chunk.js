(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{21:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var a,c,i,r,d,o,s,l,b,p,u,j=t(3),f=t.n(j),x=t(6),m=t.n(x),O=t(4),h=t(7),g=t(8),y=t(9),v=t(1),w=t(2),k=w.a.div(a||(a=Object(v.a)(["\n  width: 200px;\n  background-color: #fff;\n  font-size: 14px;\n  margin: 50px auto;\n"]))),U=w.a.div(c||(c=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n\n  & > p {\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n"]))),J=w.a.img(i||(i=Object(v.a)(["\n  width: 100px;\n  height: auto;\n  margin-bottom: 20px;\n"]))),z=w.a.p(r||(r=Object(v.a)(["\n  font-size: 16px;\n  font-weight: 700;\n  color: #000;\n"]))),M=w.a.p(d||(d=Object(v.a)(["\n  color: #88f;\n"]))),S=M,C=w.a.ul(o||(o=Object(v.a)(["\n  list-style: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  justify-content: space-between;\n\n  & > li {\n    flex-basis: 33%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(190, 208, 247);\n    padding: 10px;\n    border: 1px solid #aaa;\n  }\n"]))),G=w.a.span(s||(s=Object(v.a)(["\n  font-size: 12px;\n"]))),L=w.a.span(l||(l=Object(v.a)(["\n  font-size: 14px;\n  font-weight: 700;\n"]))),A=t(0);function D(n){var e=n.username,t=n.tag,a=n.location,c=n.avatar,i=n.stats;return Object(A.jsxs)(k,{children:[Object(A.jsxs)(U,{children:[Object(A.jsx)(J,{src:c,alt:"User avatar"}),Object(A.jsx)(z,{children:e}),Object(A.jsxs)(M,{children:["@",t]}),Object(A.jsx)(S,{children:a})]}),Object(A.jsxs)(C,{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(G,{children:"Followers"}),Object(A.jsx)(L,{children:i.followers})]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(G,{children:"Views"}),Object(A.jsx)(L,{children:i.views})]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(G,{children:"Likes"}),Object(A.jsx)(L,{children:i.likes})]})]})]})}function N(n,e){var t=function(){return Math.floor(Math.random()*(e-n))+n};return{backgroundColor:"rgb("+t()+", "+t()+", "+t()+")"}}var P,R,T,K=w.a.li(b||(b=Object(v.a)(["\n  flex-basis: 33%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 20px;\n  border: 1px solid #aaa;\n  color: #fff;\n"]))),W=w.a.span(p||(p=Object(v.a)(["\n  font-size: 12px;\n"]))),Y=w.a.span(u||(u=Object(v.a)(["\n  font-size: 16px;\n"])));function B(n){var e=n.label,t=n.percentage;return Object(A.jsxs)(K,{style:N(50,128),children:[Object(A.jsx)(W,{children:e}),Object(A.jsxs)(Y,{children:[t,"%"]})]})}var E,F,H,I,X=w.a.section(P||(P=Object(v.a)(["\n  background-color: #fff;\n  min-width: 200px;\n  display: inline-block;\n  margin: 50px auto;\n"]))),q=w.a.h2(R||(R=Object(v.a)(["\n  margin: 20px auto;\n  font-size: 20px;\n  text-transform: uppercase;\n"]))),V=w.a.ul(T||(T=Object(v.a)(["\n  list-style: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  justify-content: space-between;\n"])));function Q(n){var e=n.title,t=n.data;return Object(A.jsxs)(X,{children:[e&&Object(A.jsx)(q,{children:e}),Object(A.jsx)(V,{children:t.map((function(n){var e=n.label,t=n.percentage,a=n.id;return Object(A.jsx)(B,{label:e,percentage:t},a)}))})]})}var Z,$=w.a.li(E||(E=Object(v.a)(["\n  width: 300px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 5px 5px #333;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  padding: 15px 25px;\n"]))),_=w.a.span(F||(F=Object(v.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 15px;\n  background-color: ",";\n"])),(function(n){return n.status?"green":"red"})),nn=w.a.img(H||(H=Object(v.a)(["\n  margin-right: 15px;\n"]))),en=w.a.p(I||(I=Object(v.a)(["\n  font-size: 26px;\n  margin: 0;\n"])));function tn(n){var e=n.avatar,t=n.name,a=n.isOnline;return Object(A.jsxs)($,{children:[Object(A.jsx)(_,{status:a}),Object(A.jsx)(nn,{src:e,alt:"User avatar",width:"48"}),Object(A.jsx)(en,{children:t})]})}var an,cn=w.a.ul(Z||(Z=Object(v.a)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n"])));function rn(n){var e=n.friends;return Object(A.jsx)(cn,{children:e.map((function(n){return Object(A.jsx)(tn,{avatar:n.avatar,name:n.name,isOnline:n.isOnline},n.id)}))})}var dn,on=w.a.tr(an||(an=Object(v.a)(["\n  &:nth-of-type(odd) {\n    background-color: #e5e9ff;\n  }\n"])));function sn(n){var e=n.type,t=n.amount,a=n.currency;return Object(A.jsxs)(on,{children:[Object(A.jsx)("td",{children:e}),Object(A.jsx)("td",{children:t}),Object(A.jsx)("td",{children:a})]})}var ln,bn=w.a.table(dn||(dn=Object(v.a)(["\n  width: 600px;\n  background-color: #fff;\n  border-color: red;\n\n  & tr {\n    height: 50px;\n  }\n\n  & th {\n    background-color: #2fd2e7;\n    color: white;\n  }\n"])));function pn(n){var e=n.items;return Object(A.jsxs)(bn,{children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Type"}),Object(A.jsx)("th",{children:"Amount"}),Object(A.jsx)("th",{children:"Currency"})]})}),Object(A.jsx)("tbody",{children:e.map((function(n){return Object(A.jsx)(sn,{type:n.type,amount:n.amount,currency:n.currency},n.id)}))})]})}var un=w.a.div(ln||(ln=Object(v.a)(["\n  text-align: center;\n  background-color: #949696;\n  padding: 50px;\n"])));var jn=function(){return Object(A.jsxs)(un,{children:[Object(A.jsx)(D,{username:O.username,tag:O.tag,location:O.location,avatar:O.avatar,stats:O.stats}),Object(A.jsx)(Q,{title:"upload stats",data:h}),Object(A.jsx)(rn,{friends:g}),Object(A.jsx)(pn,{items:y})]})};t(20),t(21);m.a.render(Object(A.jsx)(f.a.StrictMode,{children:Object(A.jsx)(jn,{})}),document.getElementById("root"))},4:function(n){n.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},7:function(n){n.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},8:function(n){n.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},9:function(n){n.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')}},[[22,1,2]]]);
//# sourceMappingURL=main.1598006d.chunk.js.map