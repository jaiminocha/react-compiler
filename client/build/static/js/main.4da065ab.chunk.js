(this.webpackJsonponline_compiler=this.webpackJsonponline_compiler||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(16),a=n.n(i),s=(n(22),n(5)),o=(n(23),n(24),n(2));var d=function(e){var t=e.isLoading;return Object(o.jsx)("div",{className:"loading",children:t?Object(o.jsx)("div",{className:"loadingio-spinner-double-ring",children:Object(o.jsxs)("div",{className:"ldio",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{})})]})}):null})};var r=function(e){var t=e.isLoading,n=e.memory,c=e.cpuTime;return console.log(n),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("div",{className:"footer-item",children:[Object(o.jsx)("div",{className:"footer-sub-item",children:Object(o.jsx)(d,{isLoading:t})}),Object(o.jsx)("div",{className:"footer-sub-item",children:n?"Memory : ".concat(n," B"):null}),Object(o.jsx)("div",{className:"footer-sub-item",children:c?"CPU Time : ".concat(c," sec"):null})]}),Object(o.jsx)("a",{href:"https://github.com/jaiminocha",target:"_blank",rel:"noreferrer",className:"footer-item link",children:Object(o.jsxs)("div",{className:"footer-sub-item",style:{display:"flex"},children:["View source code on Github",Object(o.jsx)("div",{style:{marginLeft:"10px"},children:Object(o.jsx)("img",{src:"github.png",alt:"Github",width:"15px",height:"15px",style:{marginTop:"2px"}})})]})})]})},l=n(3),j=n(6);var u=function(e){var t=e.output;return Object(o.jsxs)("div",{className:"output",children:[Object(o.jsx)("div",{className:"file-name",children:"output.txt"}),Object(o.jsx)(j.a,{height:"35vh",width:"35vw",theme:"vs-dark",defaultLanguage:"text/plain",value:t||"",options:{readOnly:!0}})]})};var b=function(e){var t=e.input,n=e.setCode;return Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("div",{className:"file-name",children:"input.txt"}),Object(o.jsx)(j.a,{height:"35vh",width:"35vw",theme:"vs-dark",onChange:function(e){n((function(t){return Object(l.a)(Object(l.a)({},t),{},{input:e})}))},value:t||"",defaultLanguage:"text/plain"})]})};var m=function(e){var t=e.Code,n=e.setCode;return Object(o.jsxs)("div",{className:"editor",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"file-name",children:"".concat("nodejs"===t.language?"index.js":"python"===t.language?"main.py":"main.cpp")}),Object(o.jsx)(j.a,{height:"78vh",width:"60vw",theme:"vs-dark",path:t.language,defaultLanguage:"nodejs"===t.language?"javascript":t.language,defaultValue:t.code,onChange:function(e){n((function(t){return Object(l.a)(Object(l.a)({},t),{},{code:e})}))}})]}),Object(o.jsxs)("div",{className:"text-files",children:[Object(o.jsx)(b,{input:t.input,setCode:n}),Object(o.jsx)(u,{output:t.output})]})]})},h=n(17),p=n.n(h);var v=function(e){var t=e.Code,n=e.setCode,c=e.starterCode;return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsxs)("div",{className:"nav-brand",onClick:function(){window.location.reload()},children:["< ",Object(o.jsx)("strong",{children:"Online Compiler"})," />"]}),Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)("button",{onClick:function(){n((function(e){return Object(l.a)(Object(l.a)({},e),{},{loading:!0})})),p.a.post("/api/code/",t).then((function(e){200===e.status?(console.log(e.data.memory),n((function(t){return Object(l.a)(Object(l.a)({},t),{},{output:e.data.output,memory:e.data.memory,cpuTime:e.data.cpuTime,loading:!1})}))):alert("Something went wrong..")}))},className:"menu-item-button",children:"Run Code"}),Object(o.jsxs)("div",{class:"dropdown",children:[Object(o.jsx)("button",{class:"dropbtn",children:t.language}),Object(o.jsx)("div",{class:"dropdown-content",children:["cpp","python","nodejs"].map((function(e){return Object(o.jsx)("div",{onClick:function(){n({code:c["".concat(e)],language:e})},children:e},e)}))})]})]})]})};var O=function(){var e={cpp:'#include<iostream>\nusing namespace std;\n\nint main()\n{\n\tcout<<"Hello world!";\n\treturn 0;\n}',python:"print('Hello World!')",nodejs:"console.log('Hello World!');"},t=Object(c.useState)({language:"cpp",code:e.cpp,output:"",loading:!1}),n=Object(s.a)(t,2),i=n[0],a=n[1];return Object(o.jsxs)("div",{className:"App-header",children:[Object(o.jsx)(v,{Code:i,setCode:a,starterCode:e}),Object(o.jsx)(m,{Code:i,setCode:a}),Object(o.jsx)(r,{isLoading:i.loading,memory:i.memory,cpuTime:i.cpuTime})]})};a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4da065ab.chunk.js.map