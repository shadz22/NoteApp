

(function testAdd() {
  var noteController = new NoteController();
  noteController.add("Ria")
  assert.isTrue(noteController.noteList.notes.length === 1);

})();


(function testHtmlify() {
  var noteController = new NoteController();
  noteController.add("Ria")
  noteController.add("happyShadi")
  noteController.htmlify()
  assert.isTrue(noteController.view.returnHtmlString() === "<ul><li><div>Ria</div></li><li><div>happyShadi</div></li></ul>")

})();


(function testInsert() {
  var noteController = new NoteController()
  noteController.add('Asia')
  
  var fakeDiv = {
    innerHTML: ""
  }
  var fakeDocument = {
    getElementById: function(){
      return fakeDiv
    }
  }

  noteController.insert("test", fakeDocument)
  assert.isTrue(fakeDiv.innerHTML.includes('Asia'))

})();