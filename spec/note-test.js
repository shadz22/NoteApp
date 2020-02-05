
(function testTextStoredInNote() {
  var note = new Note("Hello");
  assert.isTrue(note.text === "Hello");

})(this); 


(function testReturnsText() {
  var note = new Note("Hi");
  assert.isTrue(note.getText() === "Hi"); 
})();