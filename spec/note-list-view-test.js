function testNoteViewtMakesInstanceOfNoteView() {
  var notelist = new NoteList();
  var noteview = new NoteView(notelist);
  assert.isTrue(noteview instanceof NoteView);
}


function testNoteViewReturnFormattedList() {
  var notelist = new NoteList();
  notelist.addNote("note1");
  notelist.addNote("note2");
  var noteview = new NoteView(notelist);
  var htmlString = "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>";
  assert.isTrue(noteview.displayNotes() === htmlString);
}

function testCharacterLimit20() {
  var notelist = new NoteList();
  notelist.addNote("Dostoyevsky writes really long notes, you know?");
  var noteview = new NoteView(notelist);
  var htmlString20 = "<ul><li><div>Dostoyevsky writes r</div></li></ul>";
  assert.isTrue(noteview.displayNotes() === htmlString20);
}

testNoteViewtMakesInstanceOfNoteView();
testNoteViewReturnFormattedList();
testCharacterLimit20();
