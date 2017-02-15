(function(exports){

   function NoteController(noteListModel){
    this.noteListView = new NoteView(noteListModel);
    this.notelist = noteListModel;
  };

  // function makeUrlChangeShowNoteForCurrentPage() {
  //   window.addEventListener("hashchange", showNoteForCurrentPage);
  // };
  //
  // function showNoteForCurrentPage() {
  //   showNote(getNoteFromUrl(window.location));
  // };
  //
  // function getNoteFromUrl(location) {
  //   return parseInt(location.hash.split("#notes/")[1]);
  // };
  //
  // function showNote(noteId) {
  //   var note = this.notelist.getNoteList[noteId];
  //   document
  //     .getElementById("singlenote")
  //     .innerHTML = note.getText();
  // };


  NoteController.prototype.htmlInserter = function(){
    this.el = document.getElementById('app');
    this.el.innerHTML = this.noteListView.displayNotes();

  };

  exports.NoteController = NoteController
  // exports.makeUrlChangeShowNoteForCurrentPage = makeUrlChangeShowNoteForCurrentPage
})(this)
