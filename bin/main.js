(function () { "use strict";
var List = function() {
	this.length = 0;
};
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
};
var Main = function() {
};
Main.main = function() {
	var appElement = new view.AppElement();
	var todos = Main.getTodos();
	var todosView = new view.TodosView();
	appElement.sectionElement.appendChild(todosView.todosElement.todosElement);
	(function(f,e) {
		return function() {
			return f(e);
		};
	})($bind(appElement,appElement.doSomething),function(e1) {
		console.log("mahmut");
	});
	var todosController = new controller.TodosController(todos,todosView);
	todosController.add("mahmut",false);
	todosController.updateView();
	todosController.add("osman",true);
	todosController.updateView();
};
Main.getTodos = function() {
	var todos = new model.Todos();
	return todos;
};
Main.getTodo = function() {
	var todo = new model.Todo();
	return todo;
};
var controller = {};
controller.TodoController = function() {
};
controller.TodoController.prototype = {
	set_model: function(model) {
		this.model = model;
		return model;
	}
	,set_view: function(view) {
		this.view = view;
		return view;
	}
	,setIsCompleted: function(isCompleted) {
		this.model.set_isCompleted(isCompleted);
	}
	,getIsCompleted: function() {
		return this.model.get_isCompleted();
	}
	,getTitle: function() {
		return this.model.get_title();
	}
	,setTitle: function(title) {
		this.model.set_title(title);
	}
	,updateView: function() {
		this.view.updateTodo(this.model.get_title(),this.model.get_isCompleted());
	}
};
controller.TodosController = function(model,view) {
	this.model = model;
	this.view = view;
};
controller.TodosController.prototype = {
	getTodos: function() {
		return this.model.get_list();
	}
	,add: function(title,isCompleted) {
		var todo = new model.Todo();
		todo.set_title(title);
		todo.set_isCompleted(isCompleted);
		this.model.add(todo);
	}
	,'delete': function(todo) {
		this.model["delete"](todo);
	}
	,setTodos: function(list) {
		this.model.set_list(list);
	}
	,updateView: function() {
		var list = this.model.get_list();
		this.view.clear();
		var $it0 = list.iterator();
		while( $it0.hasNext() ) {
			var todo = $it0.next();
			this.view.add(todo.get_title(),todo.get_isCompleted());
		}
	}
};
var model = {};
model.Todo = function() {
	this.set_title("");
	this.set_isCompleted(false);
};
model.Todo.prototype = {
	get_title: function() {
		return this.title;
	}
	,set_title: function(title) {
		this.title = title;
		return title;
	}
	,set_isCompleted: function(isCompleted) {
		this.isCompleted = isCompleted;
		return isCompleted;
	}
	,get_isCompleted: function() {
		return this.isCompleted;
	}
};
model.Todos = function() {
	this.set_list(new List());
};
model.Todos.prototype = {
	get_list: function() {
		return this.list;
	}
	,set_list: function(list) {
		this.list = list;
		return list;
	}
	,add: function(todo) {
		this.list.add(todo);
	}
	,'delete': function(todo) {
		this.list.remove(todo);
	}
};
var view = {};
view.AppElement = function() {
	this.bodyElement = window.document.body;
	this.inputElement = this.bodyElement.getElementsByClassName("new-todo")[0];
	this.toggleElement = this.bodyElement.getElementsByClassName("toggle-all")[0];
	this.toggleElement.onclick = $bind(this,this.doSomething);
	this.sectionElement = this.bodyElement.getElementsByClassName("main")[0];
	this.footerElement = this.bodyElement.getElementsByClassName("footer")[0];
	this.hideSectionElement();
	this.showSectionElement();
};
view.AppElement.prototype = {
	doSomething: function(e) {
		console.log("I did");
	}
	,hideSectionElement: function() {
		this.sectionElement.style.display = "none";
	}
	,showSectionElement: function() {
		this.sectionElement.style.display = "initial";
	}
};
view.TodoElement = function(title,isCompleted) {
	if(isCompleted == null) isCompleted = false;
	this.inputElement = (function($this) {
		var $r;
		var _this = window.document;
		$r = _this.createElement("input");
		return $r;
	}(this));
	this.buttonElement = (function($this) {
		var $r;
		var _this = window.document;
		$r = _this.createElement("button");
		return $r;
	}(this));
	this.labelElement = (function($this) {
		var $r;
		var _this = window.document;
		$r = _this.createElement("label");
		return $r;
	}(this));
	this.checkBoxElement = (function($this) {
		var $r;
		var _this = window.document;
		$r = _this.createElement("input");
		return $r;
	}(this));
	this.divElement = window.document.createElement("div");
	this.listElement = window.document.createElement("li");
	this.title = title;
	this.isCompleted = isCompleted;
	this.divElement.className = "view";
	this.checkBoxElement.type = "checkbox";
	this.checkBoxElement.className = "toggle";
	this.divElement.appendChild(this.checkBoxElement);
	this.labelElement.textContent = title;
	this.divElement.appendChild(this.labelElement);
	this.buttonElement.className = "destroy";
	this.divElement.appendChild(this.buttonElement);
	this.listElement.appendChild(this.divElement);
	this.inputElement.className = "edit";
	this.listElement.appendChild(this.inputElement);
};
view.TodoElement.prototype = {
	update: function(title,isCompleted) {
		this.labelElement.textContent = title;
		if(isCompleted == true) {
			this.listElement.className = "completed";
			this.checkBoxElement.checked = true;
		}
	}
};
view.TodoView = function() {
	this.todoElement = new view.TodoElement();
};
view.TodoView.prototype = {
	updateTodo: function(title,isCompleted) {
		this.todoElement.update(title,isCompleted);
	}
};
view.TodosElement = function() {
	this.todosElement = window.document.createElement("ul");
	this.todosElement.className = "todo-list";
};
view.TodosElement.prototype = {
	add: function(todoElement) {
		this.todosElement.appendChild(todoElement.listElement);
	}
	,clear: function() {
		this.todosElement.innerHTML = "";
	}
};
view.TodosView = function() {
	this.todosElement = new view.TodosElement();
};
view.TodosView.prototype = {
	add: function(title,isCompleted) {
		if(isCompleted == null) isCompleted = false;
		if(title == null) title = "";
		var todoView = new view.TodoView();
		todoView.updateTodo(title,isCompleted);
		this.todosElement.add(todoView.todoElement);
	}
	,clear: function() {
		this.todosElement.clear();
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Main.main();
})();
