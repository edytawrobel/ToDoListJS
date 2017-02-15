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
  var htmlString = "<ul><li><div><a href=\"#notes/0\">note1</a></div></li><li><div><a href=\"#notes/1\">note2</a></div></li></ul>";
  assert.isTrue(noteview.displayNotes() === htmlString);
}

function testCharacterLimit20() {
  var notelist = new NoteList();
  notelist.addNote("Dostoyevsky writes really long notes, you know?");
  var noteview = new NoteView(notelist);
  var htmlString20 = "<ul><li><div><a href=\"#notes/0\">Dostoyevsky writes r</a></div></li></ul>";
  assert.isTrue(noteview.displayNotes() === htmlString20);
}

function testEachNoteIsLinked() {
  var notelist = new NoteList();
  notelist.addNote("Dostoyevsky writes really long notes, you know?");
  var noteview = new NoteView(notelist);
  var htmlStringIndex = "<ul><li><div><a href=\"#notes/0\">Dostoyevsky writes r</a></div></li></ul>";
  assert.isTrue(noteview.displayNotes() === htmlStringIndex);
}

testNoteViewtMakesInstanceOfNoteView();
testNoteViewReturnFormattedList();
testCharacterLimit20();
testEachNoteIsLinked();
