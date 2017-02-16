var list = new NoteList();
list.addNote('Favourite drink: seltzer');
var controller = new NoteController(list);
var view = new NoteView(list);
controller.htmlInserter();
controller.makeUrlChangeShowNoteForCurrentPage();



document.addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(document.getElementById('new-note').value);

});
