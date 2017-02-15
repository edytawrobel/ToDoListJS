function testSingleNoteViewInstanceOfSingleNoteView() {
  var note = new Note('string');
  var singlenote = new SingleNoteView(note);
  assert.isTrue(singlenote instanceof SingleNoteView);
}

function testSingleNoteReturnsHTML() {
  var note = new Note('text');
  var singlenote = new SingleNoteView(note);
  assert.isTrue(singlenote.displayNote() === '<div>text</div>');
}

testSingleNoteViewInstanceOfSingleNoteView();
testSingleNoteReturnsHTML();
