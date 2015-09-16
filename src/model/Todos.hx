package model;
/**
* Images
* 
* @author Midori Kocak github.com/mtkocak
* @package model
**/
import js.html.Storage;
class Todos
{
    var list(default,set_list):List<Todo>;
    /**
    * Class Constructor
    * @return void
    **/
    public function new()
    {
        list = new List<Todo>();
    }

    public function get_list():List<Todo>{
        return list;
    }

    public function set_list(list:List<Todo>){
        this.list = list;
        return list;
    }

    public function add(todo:Todo):Void{
        this.list.add(todo);
    }

    public function delete(todo:Todo):Void{
        this.list.remove(todo);
    }
}
