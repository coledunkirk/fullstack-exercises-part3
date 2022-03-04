(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(16),o=n.n(s),c=(n(21),n(3)),a=n(4),u=n.n(a),i="/api/persons",l={getAll:function(){return u.a.get(i).then((function(e){return e.data}))},create:function(e){return u.a.post(i,e).then((function(e){return e.data}))},deletePerson:function(e){return u.a.delete("".concat(i,"/").concat(e)).then((function(e){return e.data}))},update:function(e,t){return u.a.put("".concat(i,"/").concat(e),t).then((function(e){return e.data}))}},d=n(0),b=function(e){var t=e.persons,n=e.setPersons,r=e.newName,s=e.setNewName,o=e.newNumber,c=e.setNewNumber,a=e.setMessage,u=e.setMessageClass;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var i={name:r,number:o};console.log(i),""===i.name||""===i.number?(u("error"),a("Please enter a name and number"),setTimeout((function(){a(null)}),5e3)):t.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?function(e){if(window.confirm("".concat(e.name," is already added to the phonebook. Do you want to replace the old number with a new one?"))){var o=t.filter((function(e){return e.name.toLowerCase()===r.toLowerCase()}))[0].id;l.update(o,e).then((function(e){n(t.map((function(t){return t.id!==o?t:e}))),s(""),c("")})).catch((function(r){u("error"),a("".concat(e.name," has already been removed from the server")),setTimeout((function(){a(null)}),5e3),n(t.filter((function(e){return e.id!==o}))),l.deletePerson(o)}))}}(i):l.create(i).then((function(e){n(t.concat(e)),s(""),c(""),u("added"),a("Added ".concat(e.name)),setTimeout((function(){a(null)}),5e3)})).catch((function(e){u("error"),a(e.response.data.error),setTimeout((function(){a(null)}),5e3)}))},children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{value:r,onChange:function(e){s(e.target.value)}})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{value:o,onChange:function(e){c(e.target.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var t=e.filter,n=e.setFilter;return Object(d.jsxs)("div",{children:["filter ",Object(d.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})]})},f=function(e){var t=e.name,n=e.number,r=e.deletePerson;return Object(d.jsxs)("li",{children:[Object(d.jsxs)("div",{children:[t," ",n]}),Object(d.jsx)("button",{onClick:r,children:"delete"})]})},m=function(e){var t=e.persons,n=e.filter,r=e.setPersons,s=n?t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):t;return Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)(f,{name:e.name,number:e.number,deletePerson:function(){return n=e.id,void(window.confirm("Are you sure you want to delete this person?")&&(l.deletePerson(n),r(t.filter((function(e){return e.id!==n})))));var n}},e.name)}))})},h=function(e){var t=e.message,n=e.messageClass;return null===t?null:Object(d.jsx)("div",{className:n,children:t})},O=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=Object(c.a)(o,2),u=a[0],i=a[1],f=Object(r.useState)(""),O=Object(c.a)(f,2),p=O[0],v=O[1],w=Object(r.useState)(""),g=Object(c.a)(w,2),x=g[0],C=g[1],N=Object(r.useState)(null),P=Object(c.a)(N,2),L=P[0],S=P[1],k=Object(r.useState)("added"),y=Object(c.a)(k,2),F=y[0],T=y[1];return Object(r.useEffect)((function(){l.getAll().then((function(e){s(e)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(h,{message:L,messageClass:F}),Object(d.jsx)(j,{filter:x,setFilter:C}),Object(d.jsx)("h2",{children:"add a new"}),Object(d.jsx)(b,{persons:n,setPersons:s,newName:u,setNewName:i,newNumber:p,setNewNumber:v,setMessage:S,setMessageClass:T}),Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)(m,{persons:n,filter:x,setPersons:s})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),o(e),c(e)}))};o.a.render(Object(d.jsx)(O,{}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.540ee991.chunk.js.map