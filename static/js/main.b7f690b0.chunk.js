(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(10),c=a.n(l),i=(a(16),a(17),a(8)),d=a(1),r=a(2),s=a(3),u=a(4),m=a(7),h=a(6),p=(a(18),a(5)),f=a.n(p),g=function(e){var t=e.href,a=e.id,n=e.name,l=e.text,c=e.activeFilter,i=e.handleClick;return o.a.createElement("a",{id:a,name:n,href:t,className:f()({selected:a===c}),onClick:i},l)},v=function(e){var t=e.id,a=e.name,n=e.className,l=e.text,c=e.handleClick;return o.a.createElement("button",{id:t,name:a,type:"button",className:n,onClick:c},l)};v.defaultProps={text:""};var T=function(e){var t=e.id,a=e.name,n=e.className,l=e.checked,c=e.handleChange;return o.a.createElement("input",{id:t,name:a,type:"checkbox",checked:l,className:n,onChange:c})};T.defaultProps={placeholder:"",checked:!1,handleBlur:function(){}};var E=function(e){var t=e.value,a=e.id,n=e.name,l=e.className,c=e.placeholder,i=e.autoFocus,d=e.handleChange,r=e.handleBlur;return o.a.createElement("input",{value:t,id:a,name:n,type:"text",className:l,placeholder:c,autoFocus:i,onChange:d,onBlur:r})};E.defaultProps={placeholder:"",autoFocus:!1,handleBlur:function(){}};var b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={inputTitle:e.props.title},e.changeTitleTodo=function(t){var a=t.target;e.setState({inputTitle:a.value})},e.onEdit=function(t){var a=e.props.setEditingId;document.addEventListener("keyup",e.handleKeyup),a(t)},e.handleKeyup=function(t){var a=e.props,n=a.title,o=a.setEditingId;"Escape"===t.code&&(e.setState({inputTitle:n}),o(),document.removeEventListener("keyup",e.handleKeyup))},e.sendChanges=function(t){t.preventDefault();var a=e.props,n=a.id,o=a.setTodoValue,l=e.state.inputTitle;l.trim().length>0&&o(n,"title",l.trim())},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.completed,l=t.id,c=t.toggleTodoStatus,i=t.editingTodoId,d=t.deleteTodo,r=this.state.inputTitle;return o.a.createElement("li",{className:f()({completed:n&&i!==l,editing:i===l})},o.a.createElement("form",{onSubmit:this.sendChanges},o.a.createElement("div",{className:"view"},o.a.createElement(T,{id:"".concat(l),name:"".concat(l),className:"toggle",checked:n,handleChange:c}),o.a.createElement("label",{htmlFor:"edit-".concat(l),onDoubleClick:function(){return e.onEdit(l)}},a),o.a.createElement(v,{id:"destroy-".concat(l),name:"destroy-".concat(l),className:"destroy",handleClick:function(){return d(l)}})),i===l&&o.a.createElement(E,{className:"edit",id:"edit-".concat(l),name:"edit-".concat(l),value:r,autoFocus:!0,handleChange:this.changeTitleTodo,handleBlur:this.sendChanges})))}}]),a}(n.Component);b.defaultProps={};var S=function(e){var t=e.todoList,a=e.editingTodoId,n=e.selectedAll,l=e.toggleTodoStatus,c=e.toggleTodoAllStatus,i=e.deleteTodo,d=e.setEditingId,r=e.setTodoValue;return o.a.createElement("section",{className:"main"},o.a.createElement(T,{id:"toggle-all",name:"toggle-all",className:"toggle-all",checked:n,handleChange:c}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement("ul",{className:"todo-list"},t.map(function(e,t){return o.a.createElement(b,Object.assign({},e,{editingTodoId:a,toggleTodoStatus:l,deleteTodo:i,setEditingId:d,setTodoValue:r,key:e.id}))})))},O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.handleInputChange=function(t){var a=t.target;document.addEventListener("keyup",e.handleKeyup),e.setState({title:a.value})},e.handleKeyup=function(t){"Escape"===t.code&&(e.setState({title:""}),document.removeEventListener("keyup",e.handleKeyup))},e.reset=function(){e.setState({title:""})},e.sendTodo=function(t){t.preventDefault();var a=e.props.addNewTodo,n=e.state.title;n.trim().length>0&&(a(n.trim()),e.reset())},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("form",{onSubmit:this.sendTodo},o.a.createElement(E,{className:"new-todo",id:"new-todo",name:"new-todo",value:e,handleChange:this.handleInputChange,handleBlur:this.sendTodo})))}}]),a}(n.Component),k=[{id:"all",href:"#/",text:"All"},{id:"active",href:"#/active",text:"Active"},{id:"completed",href:"#/completed",text:"Completed"}],j=function(e){var t=e.todoList,a=e.activeFilter,n=e.setFilter,l=e.clearComplited;return o.a.createElement("footer",{className:f()("footer",{hidden:0===t.length})},o.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!e.completed}).length," items left")),o.a.createElement("ul",{className:"filters"},k.map(function(e){var t=e.id,l=e.href,c=e.text;return o.a.createElement("li",{key:t},o.a.createElement(g,{href:l,id:t,text:c,name:t,activeFilter:a,handleClick:n}))})),o.a.createElement(v,{id:"clear-completed",name:"clear-completed",className:"clear-completed",text:"Clear completed",handleClick:l}))},y=JSON.parse(localStorage.getItem("todos"))||[],C={all:"all",completed:"completed",active:"active"},N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={todoList:Object(r.a)(y),editingTodoId:0,activeFilter:C.all,selectedAll:!1},e.addNewTodo=function(t){e.setState(function(e){return{todoList:[].concat(Object(r.a)(e.todoList),[{id:+new Date,title:t,completed:!1}]),selectedAll:!1}})},e.toggleTodoStatus=function(t){var a=t.target,n=parseInt(a.id);e.setState(function(e){return{todoList:e.todoList.map(function(e){return e.id===n?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e}),selectedAll:!1}},e.checkSelectedAll()),e.checkSelectedAll()},e.toggleTodoAllStatus=function(t){t.target;e.setState(function(e){return Object(d.a)(Object(d.a)({},e),{},{todoList:Object(r.a)(e.todoList).map(function(t){return Object(d.a)(Object(d.a)({},t),{},{completed:!e.selectedAll})}),selectedAll:!e.selectedAll})})},e.checkSelectedAll=function(){var t=e.state.todoList,a=t.filter(function(e){return e.completed}).length,n=0!==t.length&&a===t.length;e.setState({selectedAll:n})},e.setEditingId=function(t){e.setState(function(e){return Object(d.a)(Object(d.a)({},e),{},{editingTodoId:t||0})})},e.setTodoValue=function(t,a,n){e.setState(function(e){return Object(d.a)(Object(d.a)({},e),{},{todoList:Object(r.a)(e.todoList).map(function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},Object(i.a)({},a,n)):e}),editingTodoId:0})})},e.deleteTodo=function(t){e.setState(function(e){return{todoList:Object(r.a)(e.todoList).filter(function(e){return e.id!==t})}})},e.setFilter=function(t){t.preventDefault();var a=t.target.name;e.setState({activeFilter:a})},e.getFilteredTodos=function(){var t=e.state,a=t.todoList,n=t.activeFilter;return n===C.completed?a.filter(function(e){return e.completed}):n===C.active?a.filter(function(e){return!e.completed}):a},e.clearComplited=function(){e.setState(function(e){return{todoList:e.todoList.filter(function(e){return!e.completed})}})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.checkSelectedAll()}},{key:"componentDidUpdate",value:function(){var e=this.state.todoList;localStorage.setItem("todos",JSON.stringify(Object(r.a)(e))),this.checkSelectedAll()}},{key:"render",value:function(){var e=this.state,t=e.todoList,a=e.editingTodoId,n=e.activeFilter,l=e.selectedAll,c=this.getFilteredTodos();return o.a.createElement("section",{className:"todoapp"},o.a.createElement(O,{addNewTodo:this.addNewTodo}),o.a.createElement(S,{todoList:c,editingTodoId:a,selectedAll:l,toggleTodoStatus:this.toggleTodoStatus,toggleTodoAllStatus:this.toggleTodoAllStatus,deleteTodo:this.deleteTodo,setEditingId:this.setEditingId,setTodoValue:this.setTodoValue}),o.a.createElement(j,{todoList:t,activeFilter:n,setFilter:this.setFilter,clearComplited:this.clearComplited}))}}]),a}(n.PureComponent);c.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b7f690b0.chunk.js.map