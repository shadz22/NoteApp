// import { NoteList } from "./note-list-model";

function NoteController() {
  this.view = new View();
  this.noteList = this.view.noteList;

  
  NoteController.prototype.add = function(text) {
    this.noteList.createNote(text);
  }
  
  NoteController.prototype.htmlify = function() {
    return (this.view.returnHtmlString());
  }

  NoteController.prototype.insert = function() {
    var message = this.htmlify();
    var element = document.getElementById("app")
    element.innerHTML = message
  }

  NoteController.prototype.greeting = function(message) {
    var element = document.getElementById("app");

    element.innerHTML = message;
    
  }
}
  
  
