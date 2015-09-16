package common;
/**
* View
*
* @author Midori Kocak github.com/mtkocak
* @package view
**/
class AppView<TOutput> implements ViewInterface<TOutput>
{
    public function new(){

    }

  public function render(value:Dynamic):TOutput{
      trace(value);
      return cast value;
  }
}
