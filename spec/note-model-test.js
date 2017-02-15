function testNoteMakesInstanceOfNote() {
  var note = new Note('text');
  assert.isTrue(note instanceof Note);
  assert.isTrue(note.id === 0);
};

testNoteMakesInstanceOfNote();

function testNoteCanHoldText() {
  var note = new Note('text');
  assert.isTrue(note.getText() === 'text');
};

testNoteCanHoldText();
