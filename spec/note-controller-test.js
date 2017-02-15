function testNoteControllertMakesInstanceOfNoteController() {
  var notelist = new NoteList();
  var noteController = new NoteController(notelist);
  assert.isTrue(noteController instanceof NoteController);
};


function testInnerHTML() {
  var list = new NoteList();
  list.addNote('Favourite food: pesto');
  var controller = new NoteController(list);
  var gbie = document.getElementById
  document.getElementById = function() {
    return {};
  };
  controller.htmlInserter();
  assert.isTrue(controller.el.innerHTML === '<ul><li><div><a href=\"#notes/0\">Favourite food: pest</a></div></li></ul>');
  document.getElementById = gbie
}


function testLoadFullContentSingleNote() {
  var list = new NoteList();
  list.addNote('Favourite food: pesto');
  var controller = new NoteController(list);
  // document.getElementById("singlenote").innerHTML = 'Favourite food: pesto';

  // assert.isTrue(controller.el.innerHTML === 'Favourite food: pesto');
  // assert.isTrue(window.location.href === "http://localhost:8000/#notes/0");
}

testNoteControllertMakesInstanceOfNoteController();
testInnerHTML();
testLoadFullContentSingleNote();
