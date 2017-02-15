var list = new NoteList();
list.addNote('Favourite drink: seltzer');
var controller = new NoteController(list);
var view = new NoteView(list);
controller.htmlInserter();
