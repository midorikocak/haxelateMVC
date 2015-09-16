package common;
interface ControllerInterface<TId,TValue,TOutput>
{
    public function add(value:TValue):TOutput;
    public function edit(id:TId,value:TValue):TOutput;
    public function index():TOutput;
    public function view(id:TId):TOutput;
    public function delete(id:TId):TOutput;
}
