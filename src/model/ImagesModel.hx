package model;
/**
* ImagesModel
*
* @package model
**/
import controller.ImagesController;
import common.AppModel;
typedef Image = {var title:String; var description:String; var author:String; var src:String;}
class ImagesModel extends AppModel<Int,Image,String>
{
    public function new()
    {
        data = new Map<Int,Image>();
    }
}
