(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(1),s=o.n(c),n=o(7),a=o.n(n),l=(o(13),o(3)),i=(o(14),o(8)),d=o(0),r=function(t){var e=t.inputText,o=t.setInputText,c=t.todos,s=t.setTodos,n=t.setStatus;return Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"add-todo",children:[Object(d.jsx)("input",{value:e,onChange:function(t){o(t.target.value)},type:"text",className:"todo-input",placeholder:"What do you need to do?"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),s([].concat(Object(i.a)(c),[{text:e,completed:!1,id:1e3*Math.random()}])),o("")},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus"})})]}),Object(d.jsx)("div",{onChange:function(t){n(t.target.value)},className:"select",children:Object(d.jsxs)("select",{name:"todos",className:"filter-todos",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=o(6),j=function(t){var e=t.text,o=t.todo,c=t.todos,s=t.setTodos;console.log(c);return Object(d.jsxs)("div",{className:"todo-div",children:[Object(d.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(d.jsx)("button",{className:"checked",onClick:function(){s(c.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{className:"delete",onClick:function(){s(c.filter((function(t){return t.id!==o.id})))},children:Object(d.jsx)("i",{className:"far fa-trash-alt"})})]})},b=function(t){var e=t.todos,o=t.setTodos,c=(t.todo,t.filtered);return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(d.jsx)(j,{text:t.text,todos:e,todo:t,setTodos:o,filtered:c},t.id)}))})})};var f=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),o=e[0],s=e[1],n=Object(c.useState)([]),a=Object(l.a)(n,2),i=a[0],u=a[1],j=Object(c.useState)("all"),f=Object(l.a)(j,2),O=f[0],m=f[1],p=Object(c.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];return Object(c.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}}()}),[]),Object(c.useEffect)((function(){!function(){switch(O){case"completed":v(i.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(i.filter((function(t){return!1===t.completed})));break;default:v(i)}}(),localStorage.setItem("todos",JSON.stringify(i))}),[i,O]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"To-do List"})}),Object(d.jsx)(r,{todos:i,setTodos:u,inputText:o,setInputText:s,setStatus:m}),Object(d.jsx)(b,{todos:i,setTodos:u,filtered:h})]})},O=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;o(t),c(t),s(t),n(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.f1c24654.chunk.js.map