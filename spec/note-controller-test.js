function testNoteControllertMakesInstanceOfNoteController() {
  var notelist = new NoteList();
  var noteController = new NoteController(notelist);
  assert.isTrue(nodelist instanceof NoteController);
};



testNoteControllertMakesInstanceOfNoteController();
