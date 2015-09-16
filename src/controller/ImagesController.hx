package controller;
/**
* UsersController
*
* @package controller
**/
import model.ImagesModel.Image;
import common.AppController;
import haxe.Http;
import haxe.Json;
typedef Controller = AppController<Int,Image,String>;
class ImagesController extends Controller
{
    public function new(){

    }

    public function getData(){
        var asyncData:Http = new Http('data/data.json');
        asyncData.onData = function(data){
            trace('async data loaded');
            //this.controllerModel.set_data(Json.parse(data));
        }
        asyncData.request(true);
    }
}


