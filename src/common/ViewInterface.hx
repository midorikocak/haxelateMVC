package common;
interface ViewInterface<TOutput>
{
    public function render(value:Dynamic):TOutput;
}
