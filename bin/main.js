(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Lambda = function() { };
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
};
var List = function() {
	this.length = 0;
};
List.prototype = {
	iterator: function() {
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
	var imagesView = new view.ImagesView();
	var imagesModel = new model.ImagesModel();
	var imagesController = new controller.ImagesController();
	imagesModel.modelController = imagesController;
	imagesController.controllerModel = imagesModel;
	imagesController.controllerView = imagesView;
	imagesController.index();
};
var IMap = function() { };
var common = {};
common.ControllerInterface = function() { };
common.AppController = function() { };
common.AppController.__interfaces__ = [common.ControllerInterface];
common.AppController.prototype = {
	add: function(value) {
		return this.controllerView.render(this.controllerModel.create(value));
	}
	,edit: function(id,value) {
		return this.controllerView.render(this.controllerModel.update(id,value));
	}
	,index: function() {
		return this.controllerView.render(this.controllerModel.get_data());
	}
	,view: function(id) {
		return this.controllerView.render(this.controllerModel.read(id));
	}
	,'delete': function(id) {
		return this.controllerView.render(this.controllerModel["delete"](id));
	}
};
common.ModelInterface = function() { };
common.AppModel = function() { };
common.AppModel.__interfaces__ = [common.ModelInterface];
common.AppModel.prototype = {
	create: function(value) {
		return 5;
	}
	,read: function(id) {
		return this.data.get(id);
	}
	,update: function(id,value) {
		return this.data.set(id,value);
	}
	,'delete': function(id) {
		return this.data.remove(id);
	}
	,get_data: function() {
		return this.data;
	}
	,set_data: function(data) {
		if(this.data != data) {
			this.data = data;
			this.modelController.index();
		}
		return data;
	}
};
common.ViewInterface = function() { };
common.AppView = function() { };
common.AppView.__interfaces__ = [common.ViewInterface];
common.AppView.prototype = {
	render: function(value) {
		console.log(value);
		return value;
	}
};
var controller = {};
controller.ImagesController = function() {
};
controller.ImagesController.__super__ = common.AppController;
controller.ImagesController.prototype = $extend(common.AppController.prototype,{
	getData: function() {
		var asyncData = new haxe.Http("data/data.json");
		asyncData.onData = function(data) {
			console.log("async data loaded");
		};
		asyncData.request(true);
	}
});
var haxe = {};
haxe.Http = function(url) {
	this.url = url;
	this.headers = new List();
	this.params = new List();
	this.async = true;
};
haxe.Http.prototype = {
	request: function(post) {
		var me = this;
		me.responseData = null;
		var r = this.req = js.Browser.createXMLHttpRequest();
		var onreadystatechange = function(_) {
			if(r.readyState != 4) return;
			var s;
			try {
				s = r.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) me.onStatus(s);
			if(s != null && s >= 200 && s < 400) {
				me.req = null;
				me.onData(me.responseData = r.responseText);
			} else if(s == null) {
				me.req = null;
				me.onError("Failed to connect or resolve host");
			} else switch(s) {
			case 12029:
				me.req = null;
				me.onError("Failed to connect to host");
				break;
			case 12007:
				me.req = null;
				me.onError("Unknown host");
				break;
			default:
				me.req = null;
				me.responseData = r.responseText;
				me.onError("Http Error #" + r.status);
			}
		};
		if(this.async) r.onreadystatechange = onreadystatechange;
		var uri = this.postData;
		if(uri != null) post = true; else {
			var $it0 = this.params.iterator();
			while( $it0.hasNext() ) {
				var p = $it0.next();
				if(uri == null) uri = ""; else uri += "&";
				uri += encodeURIComponent(p.param) + "=" + encodeURIComponent(p.value);
			}
		}
		try {
			if(post) r.open("POST",this.url,this.async); else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question?"?":"&") + uri,this.async);
				uri = null;
			} else r.open("GET",this.url,this.async);
		} catch( e1 ) {
			me.req = null;
			this.onError(e1.toString());
			return;
		}
		if(!Lambda.exists(this.headers,function(h) {
			return h.header == "Content-Type";
		}) && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var $it1 = this.headers.iterator();
		while( $it1.hasNext() ) {
			var h1 = $it1.next();
			r.setRequestHeader(h1.header,h1.value);
		}
		r.send(uri);
		if(!this.async) onreadystatechange(null);
	}
	,onData: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
};
var js = {};
js.Browser = function() { };
js.Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	if(typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	throw "Unable to create XMLHttpRequest object.";
};
var model = {};
model.ImagesModel = function() {
	this.set_data(new haxe.ds.IntMap());
};
model.ImagesModel.__super__ = common.AppModel;
model.ImagesModel.prototype = $extend(common.AppModel.prototype,{
});
var view = {};
view.ImagesView = function() {
};
view.ImagesView.__super__ = common.AppView;
view.ImagesView.prototype = $extend(common.AppView.prototype,{
});
Main.main();
})();
