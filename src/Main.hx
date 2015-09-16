package ;
/**
* Main
*
* @package
**/
import model.ImagesModel;
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
        var imagesView = new ImagesView();
        var imagesModel = new ImagesModel();
        var imagesController = new ImagesController();
        imagesModel.modelController = imagesController;
        imagesController.controllerModel = imagesModel;
        imagesController.controllerView = imagesView;

        imagesController.index();
    }
}
