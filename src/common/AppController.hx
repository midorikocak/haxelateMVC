package common;
/**
* Controller
*
* @author Midori Kocak github.com/mtkocak
* @package controller
**/
class AppController<TId,TValue,TOutput> implements ControllerInterface<TId,TValue,TOutput>
{

    public var controllerModel:ModelInterface<TId,TValue>;
    public var controllerView:ViewInterface<TOutput>;

    public function add(value:TValue):TOutput{
        return controllerView.render(this.controllerModel.create(value));
    }

    public function edit(id:TId,value:TValue):TOutput{
        return controllerView.render(this.controllerModel.update(id,value));
    }

    public function index():TOutput{
        return controllerView.render(this.controllerModel.get_data());
    }

    public function view(id:TId):TOutput{
        return controllerView.render(this.controllerModel.read(id));
    }
    public function delete(id:TId):TOutput{
        return controllerView.render(this.controllerModel.delete(id));
    }
}
