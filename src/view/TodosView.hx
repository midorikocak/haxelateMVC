package view;
/**
* ImagesView
*
* @author Midori Kocak github.com/mtkocak
* @package view
**/
import model.Todo;
import model.Todos;
import js.Browser;
import js.html.ImageElement;
import js.html.Element;
class TodosView
{
    var todoListElement:Element = Browser.document.createElement('ul');
    /**
    * Class Constructor
    * @return void
    **/
    public function new()
    {
    }

    public function updateTodos(list:List<Todo>){
        this.todoListElement.innerHTML = "";
        js.Browser.document.body.appendChild(this.todoListElement);
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
