(function(exports){

   function NoteController(noteListModel){
    this.noteListView = new NoteView(noteListModel);
  };

  NoteController.prototype.htmlInserter = function(){
    this.el = document.getElementById('app');
    this.el.innerHTML = this.noteListView.displayNotes();

  };

  exports.NoteController = NoteController
})(this)
