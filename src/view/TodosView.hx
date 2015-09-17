package view;
/**
* ImagesView
*
* @author Midori Kocak github.com/mtkocak
* @package view
**/
class TodosView
{
    public var todosElement:TodosElement = new TodosElement();
    /**
    * Class Constructor
    * @return void
    **/
    public function new()
    {
    }

    public function add(?title:String = "",?isCompleted:Bool = false):Void{
        var todoView:TodoView = new TodoView();
        todoView.updateTodo(title,isCompleted);
        todosElement.add(todoView.todoElement);
    }

    public function clear(){
        todosElement.clear();
    }

/*
    public function showImages(data:Array<Image>):Void{
        var imagesElement:Element = Browser.document.createElement('ul');
        for(item in data){
            var listElement:Element = Browser.document.createElement('li');
            var imageElement:ImageElement = Browser.document.createImageElement();
            imageElement.src = item.src;
            listElement.appendChild(imageElement);
            imagesElement.appendChild(listElement);
        }
        js.Browser.document.body.appendChild(imagesElement);
    }
    */
}
