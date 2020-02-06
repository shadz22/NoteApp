// import { NoteList } from "./note-list-model";

(function(exports)  { 
  function NoteController() {
  this.view = new View();
  this.noteList = this.view.noteList;
  }
  
  NoteController.prototype.add = function(text) {
    this.noteList.createNote(text);
  }
  
  NoteController.prototype.htmlify = function() {
    return (this.view.returnHtmlString());
  }

  NoteController.prototype.insert = function(id, doc = document) {
    var message = this.htmlify();
    var element = doc.getElementById(id)
    element.innerHTML = message
  }

  NoteController.prototype.greeting = function(message) {
    var element = document.getElementById("app");

    element.innerHTML = message;
    
  }

  exports.NoteController = NoteController;

})(this);