package model;
/**
* Images
* 
* @author Midori Kocak github.com/mtkocak
* @package model
**/
class Todos
{
    var list(default,set_list):List<Todo>;
    /**
    * Class Constructor
    * @return void
    **/
    public function new()
    {
    }

    public function get_list():List<Todo>{
        return list;
    }

    public function set_list(list:List<Todo>){
        this.list = list;
        return list;
    }

    public function add(todo:Todo){
        this.list.add(todo);
    }
}
