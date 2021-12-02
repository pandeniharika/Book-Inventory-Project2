(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(31),s=n.n(c),a=n(9),i=(n(38),n(10)),r=n(11),l=n(15),b=n(14),d=n(2);n(39),n(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=f,h=n(13),j=n(4),y=n(32),k=n.n(y).a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),m=new(function(){function e(){Object(i.a)(this,e)}return Object(r.a)(e,[{key:"getAll",value:function(){return k.get("/mybooks")}},{key:"get",value:function(e){return k.get("/mybooks/".concat(e))}},{key:"create",value:function(e){return k.post("/mybooks",e)}},{key:"update",value:function(e,t){return k.put("/mybooks/".concat(e),t)}},{key:"delete",value:function(e){return k.delete("/mybooks/".concat(e))}},{key:"deleteAll",value:function(){return k.delete("/mybooks")}},{key:"findByTitle",value:function(e){return k.get("/mybooks?title=".concat(e))}}]),e}()),v=n(0),O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).onChangeTitle=o.onChangeTitle.bind(Object(j.a)(o)),o.onChangeDescription=o.onChangeDescription.bind(Object(j.a)(o)),o.getMybook=o.getMybook.bind(Object(j.a)(o)),o.updatePublished=o.updatePublished.bind(Object(j.a)(o)),o.updateMybook=o.updateMybook.bind(Object(j.a)(o)),o.deleteMybook=o.deleteMybook.bind(Object(j.a)(o)),o.state={currentMybook:{id:null,title:"",description:"",published:!1},message:""},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getMybook(this.props.match.params.id)}},{key:"onChangeTitle",value:function(e){var t=e.target.value;this.setState((function(e){return{currentMybook:Object(h.a)(Object(h.a)({},e.currentMybook),{},{title:t})}}))}},{key:"onChangeDescription",value:function(e){var t=e.target.value;this.setState((function(e){return{currentMybook:Object(h.a)(Object(h.a)({},e.currentMybook),{},{description:t})}}))}},{key:"getMybook",value:function(e){var t=this;m.get(e).then((function(e){t.setState({currentMybook:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updatePublished",value:function(e){var t=this,n={id:this.state.currentMybook.id,title:this.state.currentMybook.title,description:this.state.currentMybook.description,published:e};m.update(this.state.currentMybook.id,n).then((function(n){t.setState((function(t){return{currentMybook:Object(h.a)(Object(h.a)({},t.currentMybook),{},{published:e})}})),console.log(n.data)})).catch((function(e){console.log(e)}))}},{key:"updateMybook",value:function(){var e=this;m.update(this.state.currentMybook.id,this.state.currentMybook).then((function(t){console.log(t.data),e.setState({message:"The mybook was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteMybook",value:function(){var e=this;m.delete(this.state.currentMybook.id).then((function(t){console.log(t.data),e.props.history.push("/mybooks")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.currentMybook;return Object(v.jsx)("div",{children:t?Object(v.jsxs)("div",{className:"edit-form",children:[Object(v.jsx)("h4",{children:"Mybook"}),Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Title"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"title",value:t.title,onChange:this.onChangeTitle})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"description",children:"Description"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"description",value:t.description,onChange:this.onChangeDescription})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Status:"})}),t.published?"Published":"Pending"]})]}),t.published?Object(v.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!1)},children:"UnPublish"}):Object(v.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!0)},children:"Publish"}),Object(v.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteMybook,children:"Delete"}),Object(v.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateMybook,children:"Update"}),Object(v.jsx)("p",{children:this.state.message})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"Please click on a Mybook..."})]})})}}]),n}(o.Component),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).onChangeSearchTitle=o.onChangeSearchTitle.bind(Object(j.a)(o)),o.retrieveMybooks=o.retrieveMybooks.bind(Object(j.a)(o)),o.refreshList=o.refreshList.bind(Object(j.a)(o)),o.setActiveMybook=o.setActiveMybook.bind(Object(j.a)(o)),o.removeAllMybooks=o.removeAllMybooks.bind(Object(j.a)(o)),o.searchTitle=o.searchTitle.bind(Object(j.a)(o)),o.state={mybooks:[],currentMybook:null,currentIndex:-1,searchTitle:""},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.retrieveMybooks()}},{key:"onChangeSearchTitle",value:function(e){var t=e.target.value;this.setState({searchTitle:t})}},{key:"retrieveMybooks",value:function(){var e=this;m.getAll().then((function(t){e.setState({mybooks:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveMybooks(),this.setState({currentMybook:null,currentIndex:-1})}},{key:"setActiveMybook",value:function(e,t){this.setState({currentMybook:e,currentIndex:t})}},{key:"removeAllMybooks",value:function(){var e=this;m.deleteAll().then((function(t){console.log(t.data),e.refreshList()})).catch((function(e){console.log(e)}))}},{key:"searchTitle",value:function(){var e=this;m.findByTitle(this.state.searchTitle).then((function(t){e.setState({mybooks:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTitle,o=t.mybooks,c=t.currentMybook,s=t.currentIndex;return Object(v.jsxs)("div",{className:"list row",children:[Object(v.jsx)("div",{className:"col-md-8",children:Object(v.jsxs)("div",{className:"input-group mb-3",children:[Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by title",value:n,onChange:this.onChangeSearchTitle}),Object(v.jsx)("div",{className:"input-group-append",children:Object(v.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchTitle,children:"Search"})})]})}),Object(v.jsxs)("div",{className:"col-md-6",children:[Object(v.jsx)("h4",{children:"Mybooks List"}),Object(v.jsx)("ul",{className:"list-group",children:o&&o.map((function(t,n){return Object(v.jsx)("li",{className:"list-group-item "+(n===s?"active":""),onClick:function(){return e.setActiveMybook(t,n)},children:t.title},n)}))}),Object(v.jsx)("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllMybooks,children:"Remove All"})]}),Object(v.jsx)("div",{className:"col-md-6",children:c?Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"Mybook"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Title:"})})," ",c.title]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Description:"})})," ",c.description]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Status:"})})," ",c.published?"Published":"Pending"]}),Object(v.jsx)(a.c,{to:"/mybooks/"+c.id,className:"badge badge-warning",children:"Edit"})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"Please click on a Mybook..."})]})})]})}}]),n}(o.Component),g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(a.a,{children:[Object(v.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(v.jsx)(a.c,{to:"/mybooks",className:"navbar-brand",children:"My Books Inventory"}),Object(v.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(a.c,{to:"/mybooks",className:"nav-link",children:"Mybooks"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(a.c,{to:"/add",className:"nav-link",children:"Add"})})]})]}),Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{exact:!0,path:["/","/mybooks"],component:p}),Object(v.jsx)(d.a,{exact:!0,path:"/add",component:u}),Object(v.jsx)(d.a,{path:"/mybooks/:id",component:O})]})})]})}}]),n}(o.Component),f=g,x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),s(e),a(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(v.jsx)(a.b,{children:Object(v.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),x()}},[[68,1,2]]]);
//# sourceMappingURL=main.1eaee660.chunk.js.map