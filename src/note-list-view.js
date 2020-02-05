(function(exports) {
  function View() {
    this.noteList = new NoteList();
  }

  View.prototype.returnHtmlString = function() {
    
    var array = ["<ul>"];
    for (i =0; i < this.noteList.notes.length; i++ ) {
      array.push("<li><div>" + this.noteList.notes[i].text + "</div></li>")
    }
    array.push("</ul>");
    return array.join("");
    
  }


exports.View = View
})(this);