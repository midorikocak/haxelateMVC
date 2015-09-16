package controller;
/**
* ImagesController
* 
* @author Midori Kocak github.com/mtkocak
* @package controller
**/
import view.ImagesView;
import model.Images;
class ImagesController
{
    var model:Images;
    var view:ImagesView;
    /**
    * Class Constructor
    * @return void
    **/
    public function new(model:Images,view:ImagesView)
    {
        this.model = model;
        this.view = view;
    }

    public function getImages():Array<Image>{
        return this.model.get_images();
    }

    public function setImages(images:Array<Image>):Void{
        this.model.set_images(images);
    }

    public function updateView(){
        this.view.showImages(this.model.get_images());
    }
}
