function testNoteListMakesInstanceOfNoteList() {
  var notelist = new NoteList();
  assert.isTrue(notelist instanceof NoteList);
}

function testNoteListReturnArray() {
  var notelist = new NoteList();
  assert.isTrue(notelist.getNoteList() instanceof Array);
}

function testAddNoteToNoteList() {
  var notelist = new NoteList();
  var text = 'live is awesome!';
  notelist.addNote(text);
  assert.isTrue(notelist.getNoteList().length === 1);
}

function testAnoteHasIndex() {
  var notelist = new NoteList();
  var text = 'live is awesome!';
  var text1 = 'at makers!';
  notelist.addNote(text);
  notelist.addNote(text1);
  assert.isTrue(notelist.getNoteList().length === 2);
  assert.isTrue(notelist.getNoteList()[0].id === 0);
  assert.isTrue(notelist.getNoteList()[1].id === 1);
}

testNoteListMakesInstanceOfNoteList();
testNoteListReturnArray();
testAddNoteToNoteList();
testAnoteHasIndex();
