(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{56:function(e,t,o){},57:function(e,t,o){},66:function(e,t,o){"use strict";o.r(t);var n=o(7),c=o(2),a=o.n(c),i=o(15),r=o.n(i),d=(o(56),o(28)),s=o(92),l=o(95),u=o(94),j=o(88),p=(o(57),o(93)),b=o(89),O=o(90),h=o(91),f=o(96),m=o(37),x=m.a.initializeApp({apiKey:"AIzaSyBVnWR8sHeTLIKmIl5TlVHUOoNnr59fli0",authDomain:"todolist-a650d.firebaseapp.com",projectId:"todolist-a650d",storageBucket:"todolist-a650d.appspot.com",messagingSenderId:"864342397802",appId:"1:864342397802:web:ddc24055a3150c6fd44b13",measurementId:"G-WB3TJLFRM7"}).firestore(),g=o(85),v=Object(g.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var y=function(e){var t=v(),o=Object(c.useState)(!1),a=Object(d.a)(o,2),i=a[0],r=a[1],s=Object(c.useState)(),l=Object(d.a)(s,2),u=l[0],m=l[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{open:i,onClose:function(e){return r(!1)},children:Object(n.jsxs)("div",{className:t.paper,children:[Object(n.jsx)("h1",{children:"Welcome to update Your Activity..."}),Object(n.jsx)("input",{placeholder:e.todo.todo,value:u,onChange:function(e){return m(e.target.value)}}),Object(n.jsx)(j.a,{onClick:function(){x.collection("todos").doc(e.todo.id).set({todo:u},{merge:!0}),r(!1)},children:"Update"})]})}),Object(n.jsxs)(b.a,{className:"todo_list",children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)(h.a,{}),Object(n.jsx)(f.a,{primary:e.todo.todo,secondary:"Deadlinee....."})]}),Object(n.jsx)(j.a,{variant:"outlined",onClick:function(e){return r(!0)},children:"Edit"}),Object(n.jsx)(j.a,{cursor:"pointer",color:"primary",variant:"outlined",onClick:function(t){return x.collection("todos").doc(e.todo.id).delete()},children:"DELETE ME"})]})]})};var C=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),o=t[0],a=t[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),p=r[0],b=r[1];return Object(c.useEffect)((function(){x.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){a(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("form",{children:[Object(n.jsx)("h1",{children:"Todo List App using React"}),Object(n.jsxs)(s.a,{children:[Object(n.jsx)(l.a,{children:"Write a goodTodo"}),Object(n.jsx)(u.a,{type:"text",placeholder:"ENter....",value:p,onChange:function(e){return b(e.target.value)}})]}),Object(n.jsx)(j.a,{disabled:!p,type:"submit",onClick:function(e){e.preventDefault(),x.collection("todos").add({todo:p,timestamp:m.a.firestore.FieldValue.serverTimestamp()}),b("")},variant:"contained",color:"primary",children:"Add"})]}),Object(n.jsx)("ul",{children:o.map((function(e){return Object(n.jsx)(y,{todo:e})}))})]})})},S=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,98)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;o(e),n(e),c(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),S()}},[[66,1,2]]]);
//# sourceMappingURL=main.2e86e455.chunk.js.map