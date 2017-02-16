function testNoteControllertMakesInstanceOfNoteController() {
  var notelist = new NoteList();
  var noteController = new NoteController(notelist);
  assert.isTrue(noteController instanceof NoteController);
}

function testInnerHTML() {
  var list = new NoteList();
  list.addNote('Favourite food: pesto');
  var controller = new NoteController(list);
  var gbie = document.getElementById;
  document.getElementById = function() {
    return {};
  };
  controller.htmlInserter();
  assert.isTrue(controller.el.innerHTML === '<ul><li><div><a href=\"#notes/0\">Favourite food: pest</a></div></li></ul>');
  document.getElementById = gbie;
}

function testSingleNoteDisplay() {
  var noteList = new NoteList();
  noteList.addNote('Favourite food: pesto');
  var controller = new NoteController(list);
  controller.htmlInserter();
  // controller.makeUrlChangeShowNoteForCurrentPage();
  controller.testUrlChange();
  assert.isTrue(document.getElementById('singlenote').innerHTML === 'Favourite food: pesto');
}

testNoteControllertMakesInstanceOfNoteController();
testInnerHTML();
// testSingleNoteDisplay()
// testLoadFullContentSingleNote();

// added either of these in function testLoadFullContentSingleNote() before the assert to trigger the hash change. Instead got a page reload :(
// window.location.assign('#notes/0');
// location.hash = '#notes/0';
