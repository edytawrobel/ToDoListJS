var noteList = new NoteList();
// list.addNote('Favourite drink: seltzer');
var noteController = new NoteController(noteList);
var noteView = new NoteView(noteList);
// noteController.makeUrlChangeShowNoteForCurrentPage();


document.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(document.getElementById('new-note').value);
    noteList.addNote(document.getElementById('new-note').value);
    noteController.htmlInsert();
    noteController.makeUrlChangeShowNoteForCurrentPage();
});
