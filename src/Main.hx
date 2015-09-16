package ;
/**
* Main
*
* @package
**/
import view.TodoElement;
import controller.TodoController;
import view.TodoView;
import model.Todo;
import js.html.Storage;
import haxe.Json;
import haxe.Http;
import model.Todos;
import view.TodosView;
import controller.TodosController;
class Main
{
    /**
    * Class Constructor
    * @return void
    **/
    public function new()
    {
    }

    public static function main()
    {
        var todos:Todos = getTodos();
        var todosView:TodosView = new TodosView();

        var todosController:TodosController = new TodosController(todos,todosView);

        todosController.updateView();
    }

    public static function getTodoElement(title:String,isCompleted:Bool):TodoElement{
        var todo:Todo = getTodo();
        var todoView:TodoView = new TodoView();

        var todoController:TodoController = new TodoController();
        return todoController.updateView();
    }

    public static function getTodos(){
        var todos = new Todos();
        return todos;
    }

    public static function getTodo(title:String,isCompleted:Bool){
        var todo:Todo = new Todo();
        todo.set_title(title);
        todo.set_isCompleted(isCompleted);
        return todo;
    }



    /*
    public static function getImages(imagesModel:Images){
        var imagesView = new TodosView();
        var imagesController = new TodosController(imagesModel,imagesView);
        imagesController.updateView();
    }
    */

    /*
    public static function getData(){
        var asyncData:Http = new Http('data/data.json');
        asyncData.onData = function(data){
            var images:Images = new Images();
            images.set_images(Json.parse(data));
            getImages(images);
        }
        asyncData.request(true);
    }
    */
}
