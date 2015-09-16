package controller;
/**
* TodoController
* 
* @author Midori Kocak github.com/mtkocak
* @package controller
**/
import view.TodoView;
import model.Todo;
class TodoController
{
    var model:Todo;
    var view:TodoView;

    /**
    * Class Constructor
    * @return void
    **/
    public function new(model:Todo,view:TodoView)
    {
        this.model = model;
        this.view = view;
    }

    public function setIsCompleted(isCompleted:Bool):Void{
        this.model.set_isCompleted(isCompleted);
    }

    public function getIsCompleted(){
        return this.model.get_isCompleted();
    }

    public function getTitle(){
        return this.model.get_title();
    }

    public function setTitle(title:String):Void{
        this.model.set_title(title);
    }

    public function updateView(){
        return this.view.updateTodo(this.model.get_title(),this.model.get_isCompleted());
    }
}
