package common;
interface ModelInterface<TId,TValue>
{
    public function create(value:TValue):TId;
    public function read(id:TId):TValue;
    public function update(id:TId,value:TValue):Bool;
    public function delete(id:TId):Bool;
    public function get_data():Dynamic;
    public function set_data(value:Dynamic):Dynamic;
}
