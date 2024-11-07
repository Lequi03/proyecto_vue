(function(){"use strict";var t={2245:function(t,e,a){var s=a(6848),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light",staticStyle:{"background-color":"#4700a6"}},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand d-flex align-items-center",attrs:{to:"/"}},[e("img",{staticClass:"d-inline-block align-top me-2",attrs:{src:a(3153),alt:"Vue logo",width:"30",height:"30"}}),t._v(" Gestor de Tareas ")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav ms-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link d-flex align-items-center",attrs:{to:"/addtask"}},[e("i",{staticClass:"bi bi-plus-square me-2"}),e("span",[t._v("Añadir Tarea")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link d-flex align-items-center",attrs:{to:"/tasklist"}},[e("i",{staticClass:"bi bi-list-task me-2 custom-icon"}),e("span",[t._v("Lista de Tareas")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link d-flex align-items-center",attrs:{to:"/combinedview"}},[e("i",{staticClass:"bi bi-table me-2"}),e("span",[t._v("Vista Combinada")])])],1)])])],1)]),e("router-view")],1)},n=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],l=a(1656),o={},r=(0,l.A)(o,i,n,!1,null,null,null),c=r.exports,d=a(6178),u=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"display-4 mb-4"},[t._v("Bienvenido a la Aplicación de Tareas con Vue")]),e("p",{staticClass:"lead text-secondary mb-4"},[t._v(" Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API. ")]),e("img",{staticClass:"img-fluid mb-4 logo",attrs:{src:a(3153),alt:"Vue logo"}}),e("h2",{staticClass:"mt-4"},[t._v("Secciones de la Aplicación")]),e("p",{staticClass:"text-muted"},[e("strong",[t._v("Añadir Tarea:")]),t._v(" Permite ingresar nuevas tareas manualmente. "),e("br"),e("strong",[t._v("Lista de Tareas:")]),t._v(" Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas. "),e("br"),e("strong",[t._v("Vista Combinada:")]),t._v(" Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo. ")])])])}],b={name:"HomeView"},k=b,f=(0,l.A)(k,u,m,!1,null,"853ef974",null),p=f.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-4"},[e("h1",{staticClass:"text-center mb-4"},[t._v("Añadir Tarea")]),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"form-control task-input",attrs:{placeholder:"Añadir nueva tarea","aria-label":"Nueva tarea"},domProps:{value:t.newTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),e("button",{staticClass:"btn btn-add",on:{click:t.addTask}},[t._v("Añadir")])]),t.tasks.length>0?e("div",{staticClass:"row mt-4"},t._l(t.tasks,(function(a){return e("div",{key:a.id,staticClass:"col-12 mb-4"},[e("div",{staticClass:"card mb-3 border-2 border-[#4700a6]"},[e("div",{staticClass:"card-body d-flex justify-content-between align-items-center"},[e("div",{staticClass:"flex-grow-1 me-2"},[e("h5",{staticClass:"card-title m-0",class:{"text-decoration-line-through-black":a.completed}},[t._v(" "+t._s(a.todo)+" ")]),e("span",{staticClass:"badge status-badge",class:{"bg-success":a.completed,"bg-warning":!a.completed}},[t._v(" "+t._s(a.completed?"Completada":"Pendiente")+" ")])]),e("div",{staticClass:"d-flex"},[e("button",{class:["p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",{"btn btn-outline-warning":a.completed,"btn btn-outline-success":!a.completed}],on:{click:function(e){return t.toggleTaskCompletion(a)}}},[e("i",{class:[{"bi bi-slash-circle-fill":a.completed,"bi bi-check-square":!a.completed}]})]),e("button",{staticClass:"btn btn-outline-danger",attrs:{"aria-label":"Eliminar tarea"},on:{click:function(e){return t.deleteTask(a)}}},[e("i",{staticClass:"bi bi-trash"})])])])])])})),0):t._e()])},h=[],v={name:"AddTask",data(){return{newTask:"",tasks:[]}},methods:{addTask(){if(""===this.newTask.trim())return;const t={todo:this.newTask,completed:!1,id:Date.now()};this.tasks.unshift(t),this.newTask=""},deleteTask(t){this.tasks=this.tasks.filter((e=>e.id!==t.id))},toggleTaskCompletion(t){t.completed=!t.completed}}},C=v,y=(0,l.A)(C,g,h,!1,null,"92088c08",null),I=y.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-4"},[e("h1",{staticClass:"text-center mb-4 title"},[t._v("Lista de Tareas")]),e("div",{staticClass:"text-center mb-3"},[e("button",{staticClass:"btn-custom d-inline-flex justify-content-center align-items-center",on:{click:t.fetchTasks}},[e("i",{staticClass:"bi bi-cloud-download me-2"}),t._v("Cargar Tareas ")])]),e("div",{staticClass:"row"},t._l(t.tasks,(function(a){return e("div",{key:a.id,staticClass:"col-12 mb-4"},[e("TodoItem",{attrs:{title:a.todo,completed:a.completed},on:{"toggle-completion":function(e){return t.toggleTaskCompletion(a)},delTodo:function(e){return t.deleteTask(a)}}})],1)})),0)])},T=[],x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-container"},[e("div",[e("h5",{style:{textDecoration:t.completed?"line-through":"none"}},[t._v(" "+t._s(t.title)+" ")]),e("span",[t._v(" "+t._s(t.completed?"Completada":"Pendiente")+" ")])]),e("div",[e("button",{on:{click:function(e){return t.$emit("toggle-completion")}}},[t.completed?e("span",[e("i",{staticClass:"bi bi-slash-circle-fill"})]):e("span",[e("i",{staticClass:"bi bi-check-square"})])]),e("button",{on:{click:function(e){return t.$emit("delTodo")}}},[e("i",{staticClass:"bi bi-trash"})])])])},A=[],R={name:"TodoItem",props:{title:String,completed:Boolean}},E=R,W=(0,l.A)(E,x,A,!1,null,"74b597ec",null),N=W.exports,Z=a(4373),Q={name:"TaskList",components:{TodoItem:N},data(){return{tasks:[]}},methods:{fetchTasks(){Z.A.get("https://dummyjson.com/todos").then((t=>{this.tasks=t.data.todos})).catch((t=>{console.error("Error fetching tasks:",t)}))},toggleTaskCompletion(t){t.completed=!t.completed},deleteTask(t){this.tasks=this.tasks.filter((e=>e.id!==t.id))}}},V=Q,G=(0,l.A)(V,w,T,!1,null,"1b16f5b9",null),P=G.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-4"},[e("h1",{staticClass:"text-center mb-4"},[t._v("Lista Combinada")]),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"form-control task-input",attrs:{placeholder:"Añadir nueva tarea","aria-label":"Nueva tarea"},domProps:{value:t.newTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),e("button",{staticClass:"btn btn-add",on:{click:t.addTask}},[t._v("Añadir")])]),e("div",{staticClass:"row mt-4"},t._l(t.tasks,(function(a){return e("div",{key:a.id,staticClass:"col-12 mb-4"},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-body d-flex justify-content-between align-items-center"},[e("div",{staticClass:"flex-grow-1 me-2"},[e("h5",{staticClass:"card-title m-0",class:{"text-decoration-line-through":a.completed}},[t._v(" "+t._s(a.todo)+" ")]),e("span",{staticClass:"badge",class:{"bg-success":a.completed,"bg-warning":!a.completed}},[t._v(" "+t._s(a.completed?"Completada":"Pendiente")+" ")])]),e("div",{staticClass:"d-flex"},[e("button",{class:["p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",{"btn btn-outline-warning":a.completed,"btn btn-outline-success":!a.completed}],on:{click:function(e){return t.toggleTaskCompletion(a)}}},[e("i",{class:[{"bi bi-slash-circle-fill":a.completed,"bi bi-check-square":!a.completed}]})]),e("button",{staticClass:"btn btn-outline-danger",attrs:{"aria-label":"Eliminar tarea"},on:{click:function(e){return t.deleteTask(a)}}},[e("i",{staticClass:"bi bi-trash"})])])])])])})),0)])},z=[],O={name:"CombinedView",data(){return{newTask:"",tasks:[]}},created(){this.fetchTasks()},methods:{fetchTasks(){Z.A.get("https://dummyjson.com/todos").then((t=>{this.tasks=t.data.todos})).catch((t=>{console.error("Error fetching tasks:",t)}))},addTask(){if(""===this.newTask.trim())return;const t={todo:this.newTask,completed:!1,id:Date.now()};this.tasks.unshift(t),this.newTask=""},toggleTaskCompletion(t){t.completed=!t.completed},deleteTask(t){this.tasks=this.tasks.filter((e=>e.id!==t.id))}}},U=O,Y=(0,l.A)(U,B,z,!1,null,"7ef40a47",null),S=Y.exports;s.Ay.use(d.Ay);const J=[{path:"/",name:"home",component:p},{path:"/addtask",name:"AddTask",component:I},{path:"/tasklist",name:"TaskList",component:P},{path:"/combinedview",name:"CombinedView",component:S}],M=new d.Ay({mode:"history",base:"/gestortarea-plantilla/",routes:J});var j=M;a(8077);s.Ay.config.productionTip=!1,new s.Ay({router:j,render:t=>t(c)}).$mount("#app")},3153:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,n){if(!s){var l=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],n=t[d][2];for(var o=!0,r=0;r<s.length;r++)(!1&n||l>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[r])}))?s.splice(r--,1):(o=!1,n<l&&(l=n));if(o){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,l=s[0],o=s[1],r=s[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(r)var d=r(a)}for(e&&e(s);c<l.length;c++)n=l[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkgestor_tareas"]=self["webpackChunkgestor_tareas"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(2245)}));s=a.O(s)})();
//# sourceMappingURL=app.efb37e4b.js.map