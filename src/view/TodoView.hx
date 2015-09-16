package view;
/**
* TodoView
* 
* @author Midori Kocak github.com/mtkocak
* @package view
**/
class TodoView
{
    public var todoElement:TodoElement;
    /**
    * Class Constructor
    * @return void
    **/
    public function new()
    {
        this.todoElement = new TodoElement();
    }

    public function updateTodo(title:String,isCompleted:Bool):TodoElement{
        this.todoElement.update(title,isCompleted);
        return this.todoElement;
    }
}
