(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{42:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(2),r=s(12),a=s.n(r),o=s(13),l=s(14),i=s(15),h=s(18),j=s(17),d=s(16),m=s.n(d),b=function(){return m.a.get("https://randomuser.me/api/?nat=US&results=50")},u=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"jumbotron bg-info text-white text-center",children:Object(c.jsx)("h1",{className:"display-4",children:"Employee Directory"})}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Employee Directory returns a list of 50 employees, with images and contact information."}),Object(c.jsx)("li",{children:"Sort employees by first name or last name at the click of a button."}),Object(c.jsx)("li",{children:"Slice button returns a list of 25 employees."}),Object(c.jsx)("li",{children:"Refresh the page to return a new list of 50 employees."})]})]})};var p=function(e){return Object(c.jsxs)("table",{className:"table table-striped table-bordered table-hover",children:[Object(c.jsx)("thead",{className:"thead-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"ID"}),Object(c.jsx)("th",{scope:"col",children:"Photo"}),Object(c.jsx)("th",{scope:"col",children:"First"}),Object(c.jsx)("th",{scope:"col",children:"Last"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Zip Code"}),Object(c.jsx)("th",{scope:"col",children:"Gender"})]})}),Object(c.jsx)("tbody",{children:e.employees.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:t+1}),Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:e.first})}),Object(c.jsx)("td",{children:e.name.first}),Object(c.jsx)("td",{children:e.name.last}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.location.postcode}),Object(c.jsx)("td",{children:e.gender})]},t)}))})]})};var O=function(e){return Object(c.jsxs)("form",{children:[Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-6",children:["Type a name into the search field to return employees with that name.",Object(c.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control m-3",placeholder:"Search for employee by first or last name",id:"search"})]}),Object(c.jsx)("div",{className:"col-1",children:Object(c.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-danger m-4",children:" Search "})})]})})]})},y=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={search:"",employees:[]},e.getEmployees=function(){b().then((function(t){console.log(t.data.results),e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var s=t.target.name,c=t.target.value;e.setState(Object(o.a)({},s,c)),console.log(t.target.value)},e.handleFormSubmit=function(t){t.preventDefault(),e.searchDirectory(e.state.search)},e.searchDirectory=function(t){console.log("You searched for ".concat(e.state.search));var s=e.state.employees.filter((function(t){return t.name.first.includes(e.state.search)||t.name.last.includes(e.state.search)}));e.setState({employees:s})},e.handleEmployeeSortLast=function(){var t=e.state.employees;e.setState({employees:t.sort((function(e,t){var s=e.name.last.toLowerCase(),c=t.name.last.toLowerCase();return s<c?-1:s>c?1:0}))})},e.handleEmployeeSortFirst=function(){var t=e.state.employees;e.setState({employees:t.sort((function(e,t){var s=e.name.first.toLowerCase(),c=t.name.first.toLowerCase();return s<c?-1:s>c?1:0}))})},e.handleEmployeeSlice=function(){var t=e.state.employees;e.setState({employees:t.slice(25)})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{}),Object(c.jsx)("button",{className:"btn btn-primary m-3",onClick:this.handleEmployeeSortLast,children:"Sort by last name"}),Object(c.jsx)("button",{className:"btn btn-success m-3",onClick:this.handleEmployeeSortFirst,children:"Sort by first name"}),Object(c.jsx)("button",{className:"btn btn-warning m-3",onClick:this.handleEmployeeSlice,children:"Slice"}),Object(c.jsx)(O,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(c.jsx)(p,{employees:this.state.employees})]})}}]),s}(n.Component);var x=function(){return Object(c.jsx)(y,{})};s(41);a.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c389873e.chunk.js.map