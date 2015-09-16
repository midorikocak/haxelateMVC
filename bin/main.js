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
	var todos = Main.getTodos();
	var todosView = new view.TodosView();
	var todosController = new controller.TodosController(todos,todosView);
	todosController.updateView();
};
Main.getTodos = function() {
	var model1 = new model.Todos();
	return model1;
};
Main.getTodo = function() {
	var model1 = new model.Todo();
	return model1;
};
var controller = {};
controller.TodosController = function(model,view) {
	this.model = model;
	this.view = view;
};
controller.TodosController.prototype = {
	getTodos: function() {
		return this.model.get_list();
	}
	,add: function(todo) {
		this.model.add(todo);
	}
	,'delete': function(todo) {
		this.model["delete"](todo);
	}
	,setTodos: function(list) {
		this.model.set_list(list);
	}
	,updateView: function() {
		this.view.updateTodos(this.model.get_list());
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
view.TodosView = function() {
	this.todoListElement = window.document.createElement("ul");
};
view.TodosView.prototype = {
	updateTodos: function(list) {
		this.todoListElement.innerHTML = "";
		window.document.body.appendChild(this.todoListElement);
	}
};
Main.main();
})();
