(function () { "use strict";
var List = function() { };
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
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
	,setTodos: function(list) {
		this.model.set_list(list);
	}
	,updateView: function() {
		this.view.showTodos(this.model.get_list());
	}
};
var model = {};
model.Todo = function() {
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
};
var view = {};
view.TodosView = function() {
};
view.TodosView.prototype = {
	showTodos: function(list) {
	}
};
Main.main();
})();
