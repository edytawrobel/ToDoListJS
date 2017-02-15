function testNoteControllertMakesInstanceOfNoteController() {
  var notelist = new NoteList();
  var noteController = new NoteController(notelist);
  assert.isTrue(noteController instanceof NoteController);
};

testNoteControllertMakesInstanceOfNoteController();

function testInnerHTML() {
  var list = new NoteList();
  list.addNote('Favourite food: pesto');
  var controller = new NoteController(list);
  document.getElementById = function() {
    return {};
  };
  controller.htmlInserter();
  assert.isTrue(controller.el.innerHTML === '<ul><li><div>Favourite food: pesto</div></li></ul>');
}

testInnerHTML();
