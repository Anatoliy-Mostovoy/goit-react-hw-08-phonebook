(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{19:function(t,e,c){t.exports={List:"Contacts_List__2V3YO",Button:"Contacts_Button__3WuIa"}},20:function(t,e,c){t.exports={Label:"Filter_Label__1q_sH",Input:"Filter_Input__2MQXK"}},21:function(t,e,c){t.exports={Title:"App_Title__2qxNr"}},62:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(9),o=c.n(r),s=c(15),u=c(64),i=c(7),b=c.n(i),l=c(5),d=c(11),j=c.n(d),f=c(2),O=Object(f.b)("contacts/fetchContactRequest"),h=Object(f.b)("contacts/fetchContactSuccess"),C=Object(f.b)("contacts/fetchContactError"),m={addContactRequest:Object(f.b)("contacts/addContactRequest"),addContactSuccess:Object(f.b)("contacts/addContactSuccess"),addContactError:Object(f.b)("contacts/addContactError"),deleteContactRequest:Object(f.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(f.b)("contacts/deleteContactSuccess"),deleteContactError:Object(f.b)("contacts/deleteContactError"),changeFilterValue:Object(f.b)("contacts/changeFilterValue"),fetchContactRequest:O,fetchContactSuccess:h,fetchContactError:C};j.a.defaults.baseURL="http://localhost:9999";var p,x=function(t){return function(e){e(m.addContactRequest("Mother Fucker")),j.a.post("/contacts",t).then((function(t){return e(m.addContactSuccess(t.data))})).catch((function(t){return e(m.addContactError(t))}))}},_=function(t){return function(e){e(m.deleteContactRequest()),j.a.delete("/contacts/".concat(t)).then((function(){return e(m.deleteContactSuccess(t))}))}},v=function(){return function(t){t(m.fetchContactRequest()),j.a.get("/contacts").then((function(e){return t(m.fetchContactSuccess(e.data))})).catch((function(e){return t(m.addContactError(e))}))}},S=c(14),g=(c(30),c(1)),L=function(t){t.submitMethod;var e=Object(l.c)((function(t){return t})),c=Object(l.b)(),a=Object(n.useState)(""),r=Object(s.a)(a,2),o=r[0],i=r[1],d=Object(n.useState)(""),j=Object(s.a)(d,2),f=j[0],O=j[1],h=Object(n.useState)(""),C=Object(s.a)(h,2),m=C[0],p=C[1],_=Object(u.a)(),v=function(t){var e=t.target,c=e.value,n=e.name,a=e.id;switch(n){case"name":i(c.trim());break;case"number":O(c);break;default:return}p(a)},L=function(){i(""),O(""),p("")};return Object(g.jsx)("div",{className:b.a.Container,children:Object(g.jsxs)("form",{className:b.a.Form,onSubmit:function(t){if(t.preventDefault(),e.contacts.find((function(t){return t.name.toLowerCase()===o.toLowerCase()})))return L(),void S.b.error("Hey, this name always here!");c(x({name:o,number:f,id:m})),L()},children:[Object(g.jsxs)("label",{className:b.a.Label,htmlFor:_,children:["Name",Object(g.jsx)("input",{className:b.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:v,id:Object(u.a)()})]}),Object(g.jsxs)("label",{children:["Number",Object(g.jsx)("input",{type:"tel",className:b.a.Input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:v,value:f,id:Object(u.a)()})]}),Object(g.jsx)("button",{type:"submit",className:b.a.Button,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},N=c(19),q=c.n(N),F=function(){var t=Object(l.c)((function(t){var e=t.contacts,c=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(c.toLowerCase())}))})),e=Object(l.b)();return Object(n.useEffect)((function(){e(v())}),[e]),Object(g.jsx)("div",{children:Object(g.jsx)("ul",{children:t&&t.map((function(t){return Object(g.jsxs)("li",{className:q.a.List,children:[t.name,": ",t.number,Object(g.jsx)("button",{className:q.a.Button,type:"button",onClick:function(){e(_(t.id))},children:"Delete"})]},t.id)}))})})},R=c(20),k=c.n(R),y=function(t){return t.filter},w=function(){var t=Object(l.c)(y),e=Object(l.b)();return Object(g.jsxs)("label",{className:k.a.Label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438:",Object(g.jsx)("input",{className:k.a.Input,type:"text",value:t,onChange:function(t){e(m.changeFilterValue(t.target.value))}})]})},B=c(21),E=c.n(B),I=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:E.a.Title,children:"PhoneBook"}),Object(g.jsx)(L,{}),Object(g.jsx)("h2",{className:E.a.Title,children:"Contacts"}),Object(g.jsx)(w,{}),Object(g.jsx)(F,{}),Object(g.jsx)(S.a,{})]})},A=c(13),z=c(3),M=c(6),T={contactsReducer:Object(f.c)([],(p={},Object(M.a)(p,m.fetchContactSuccess,(function(t,e){return e.payload})),Object(M.a)(p,m.addContactSuccess,(function(t,e){return[].concat(Object(A.a)(t),[e.payload])})),Object(M.a)(p,m.deleteContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),p)),filterReducer:Object(f.c)("",Object(M.a)({},m.changeFilterValue,(function(t,e){return e.payload})))},V=c(8),Z=Object(z.b)({contacts:T.contactsReducer,filter:T.filterReducer}),J=Object(f.a)({reducer:Z,devTools:!1,middleware:Object(A.a)(Object(f.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}}))});o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(l.a,{store:J,children:Object(g.jsx)(I,{})})}),document.getElementById("root"))},7:function(t,e,c){t.exports={Container:"Form_Container__2LBkn",Label:"Form_Label__1q0Y-",Input:"Form_Input__29dvv",Button:"Form_Button__Zkrc7"}}},[[62,1,2]]]);
//# sourceMappingURL=main.aa89d5be.chunk.js.map