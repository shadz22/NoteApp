
(function  testCheckInstantiation() {
    var view = new View();
    assert.isTrue(view.noteList instanceof NoteList);

})();

(function testReturnHtmlString() {
  var view = new View();
  view.noteList.createNote("Hello")
  view.noteList.createNote("Hey")
  assert.isTrue(view.returnHtmlString()=== "<ul><li><div>Hello</div></li><li><div>Hey</div></li></ul>")

})();

