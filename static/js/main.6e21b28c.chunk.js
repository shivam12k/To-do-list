(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),s=(a(12),a(6)),o=a(3),i=(a(13),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"todo_list"},c.a.createElement("button",{className:"btn cross",onClick:function(){return e.onSelect(e.id)}},c.a.createElement("i",{class:"fa fa-close"})),c.a.createElement("li",{className:"text"},e.text)))}),u=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),u=Object(o.a)(r,2),m=u[0],d=u[1],E=function(e){d((function(t){return t.filter((function(t,a){return a!==e}))}))};return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"heading"},c.a.createElement("center",null,c.a.createElement("h2",null,"To-do List"))),c.a.createElement("div",{className:"buttom"},c.a.createElement("div",{className:"group"},c.a.createElement("input",{type:"text",required:!0,placeholder:"Add a items..",value:a,onChange:function(e){l(e.target.value)}}),c.a.createElement("a",{href:"#"},c.a.createElement("span",{className:" b1 glyphicon glyphicon-plus-sign",onClick:function(){0!==a.length?(d((function(e){return[].concat(Object(s.a)(e),[a])})),l("")):alert("please enter something")}}))),c.a.createElement("div",{className:"list"},c.a.createElement("ul",null,m.map((function(e,t){return c.a.createElement(i,{key:t,id:t,text:e,onSelect:E})}))))))))};r.a.render(c.a.createElement(u,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6e21b28c.chunk.js.map