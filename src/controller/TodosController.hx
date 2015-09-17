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

    public function add(title:String,isCompleted:Bool):Void{
        var todo:Todo = new Todo();
        todo.set_title(title);
        todo.set_isCompleted(isCompleted);
        this.model.add(todo);
    }

    public function filterActiveTodos(){

    }

    public function filterCompletedTodos(){

    }

    public function clearCompletedTodos(){
        
    }

    public function getCount():Int{
        return this.model.get_list().length;
    }

    public function delete(todo:Todo){
        this.model.delete(todo);
    }

    public function setTodos(list:List<Todo>):Void{
        this.model.set_list(list);
    }

    public function updateView():Void{
        var list:List<Todo> = this.model.get_list();
        this.view.clear();
        for(todo in list){
            this.view.add(todo.get_title(), todo.get_isCompleted());
        }
    }
}
