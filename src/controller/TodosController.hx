package controller;
/**
* ImagesController
* 
* @author Midori Kocak github.com/mtkocak
* @package controller
**/
import js.html.Element;
import view.TodoElement;
import model.Todo;
import view.TodosView;
import model.Todos;
class TodosController
{
    var model:Todos;
    var view:TodosView;
    /**
    * Class Constructor
    * @return void
    **/
    public function new(model:Todos,view:TodosView)
    {
        this.model = model;
        this.view = view;
    }

    public function getTodos():List<Todo>{
        return this.model.get_list();
    }

    public function add(todo:Todo):Void{
        this.model.add(todo);
    }

    public function delete(todo:Todo){
        this.model.delete(todo);
    }

    public function setTodos(list:List<Todo>):Void{
        this.model.set_list(list);
    }

    public function updateView(){
        this.view.updateTodos(this.model.get_list());
    }
}
