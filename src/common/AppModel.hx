package common;
/**
* Model
*
* @author Midori Kocak github.com/mtkocak
* @package model
**/
class AppModel<TId,TValue,TOutput> implements ModelInterface<TId,TValue>
{
    var data(default,set_data):Map<TId,TValue>;
    public var modelController:ControllerInterface<TId,TValue,TOutput>;

    /*
    public function new(contoller:AppController){
        this.modelController = controller;
    }
    */

    public function create(value:TValue):TId{
        // abstract
        return cast 5;
    }

    public function read(id:TId):TValue{
        return this.data.get(id);
    }

    public function update(id:TId,value:TValue):Bool{
        return cast this.data.set(id,value);
    }
    public function delete(id:TId):Bool{
        return cast this.data.remove(id);
    }

    public function get_data():Map<TId,TValue>{
        return this.data;
    }

    public function set_data(data:Map<TId,TValue>){
        if(this.data != data){
            this.data = data;
            modelController.index();
        }
        return data;
    }
}
