package ;
/**
* Main
*
* @package
**/
import haxe.Json;
import haxe.Http;
import model.Images;
import view.ImagesView;
import controller.ImagesController;
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
        getData();
    }

    public static function getImages(imagesModel:Images){
        var imagesView = new ImagesView();
        var imagesController = new ImagesController(imagesModel,imagesView);
        imagesController.updateView();
    }

    public static function getData(){
        var asyncData:Http = new Http('data/data.json');
        asyncData.onData = function(data){
            var images:Images = new Images();
            images.set_images(Json.parse(data));
            getImages(images);
        }
        asyncData.request(true);
    }
}
