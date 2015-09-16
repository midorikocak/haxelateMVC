package ;
/**
* Main
*
* @package
**/
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
        //getData();
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
