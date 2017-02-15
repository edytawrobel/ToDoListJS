(function(exports){

   function NoteController(noteListModel){
    noteListModel.addNote('Favourite drink: seltzer');
    this.noteListView = new NoteView(noteListModel);
  };

  NoteController.prototype.htmlInserter = function(){
    this.el = document.getElementById('app');
    this.el.innerHTML = this.noteListView.displayNotes();

  };

  exports.NoteController = NoteController
})(this)
