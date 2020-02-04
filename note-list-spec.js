// 'use strict'

(function testCreateNote() {
  var noteList = new NoteList();
  assert.isTrue(noteList.createNote('Hello').getText() === 'Hello');
  assert.isTrue(noteList.notes.length === 1);
})();


(function testGetNotes() {
  var noteList = new NoteList();
  noteList.createNote('Hello');
  noteList.createNote('Hey');
  assert.isTrue(noteList.getNotes().length === 2);
  assert.isTrue(noteList.getNotes()[0].getText() === 'Hello');
})();



