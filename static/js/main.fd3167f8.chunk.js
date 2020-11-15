(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{42:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(2),a=s(12),r=s.n(a),o=s(13),l=s(14),i=s(15),d=s(18),h=s(17),u=s(16),m=s.n(u),j=function(){return m.a.get("https://randomuser.me/api/?nat=US&results=30")},b=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"jumbotron bg-info text-white text-center",children:Object(c.jsx)("h1",{className:"display-4",children:"Employee Directory"})}),Object(c.jsx)("p",{children:"Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at."})]})};var p=function(e){return Object(c.jsxs)("table",{className:"table table-striped table-bordered table-hover",children:[Object(c.jsx)("thead",{className:"thead-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"ID"}),Object(c.jsx)("th",{scope:"col",children:"Photo"}),Object(c.jsx)("th",{scope:"col",children:"First"}),Object(c.jsx)("th",{scope:"col",children:"Last"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Zip Code"}),Object(c.jsx)("th",{scope:"col",children:"Gender"})]})}),Object(c.jsx)("tbody",{children:e.employees.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:t+1}),Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:e.first})}),Object(c.jsx)("td",{children:e.name.first}),Object(c.jsx)("td",{children:e.name.last}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.location.postcode}),Object(c.jsx)("td",{children:e.gender})]},t)}))})]})};var O=function(e){return Object(c.jsx)("form",{children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for employee by first or last name",id:"search"})}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-danger",children:" Search "})})]})})})},f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={search:"",employees:[]},e.getEmployees=function(){j().then((function(t){console.log(t.data.results),e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var s=t.target.name,c=t.target.value;e.setState(Object(o.a)({},s,c)),console.log(t.target.value)},e.handleFormSubmit=function(t){t.preventDefault(),e.searchDirectory(e.state.search)},e.searchDirectory=function(t){console.log("You searched for ".concat(e.state.search));var s=e.state.employees.filter((function(t){return t.name.first.includes(e.state.search)||t.name.last.includes(e.state.search)}));e.setState({employees:s})},e.handleEmployeeSortLast=function(){var t=e.state.employees;e.setState({employees:t.sort((function(e,t){var s=e.name.last.toLowerCase(),c=t.name.last.toLowerCase();return s<c?-1:s>c?1:0}))})},e.handleEmployeeSortFirst=function(){var t=e.state.employees;e.setState({employees:t.sort((function(e,t){var s=e.name.first.toLowerCase(),c=t.name.first.toLowerCase();return s<c?-1:s>c?1:0}))})},e.handleEmployeeSlice=function(){var t=e.state.employees;e.setState({employees:t.slice(15)})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(b,{}),Object(c.jsx)("button",{className:"btn btn-primary m-3",onClick:this.handleEmployeeSortLast,children:"Sort by last name"}),Object(c.jsx)("button",{className:"btn btn-success m-3",onClick:this.handleEmployeeSortFirst,children:"Sort by first name"}),Object(c.jsx)("button",{className:"btn btn-dark m-3",onClick:this.handleEmployeeSlice,children:"Slice"}),Object(c.jsx)(O,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(c.jsx)(p,{employees:this.state.employees})]})}}]),s}(n.Component);var x=function(){return Object(c.jsx)(f,{})};s(41);r.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fd3167f8.chunk.js.map