// 'use strict'

(function testCreateNote() {
  var noteList = new NoteList();
  assert.isTrue(noteList.createNote('Hello').getText() === 'Hello');
  assert.isTrue(noteList.notes.length === 1);
})();


(function testReturnNotes() {
  var noteList = new NoteList();
  noteList.createNote('Hello');
  noteList.createNote('Hey');
  assert.isTrue(noteList.returnNotes().length === 2);
  assert.isTrue(noteList.returnNotes()[0].getText() === 'Hello');
})();



