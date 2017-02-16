(function(exports){
  function NoteController(noteList){
    this.noteListView = new NoteView(noteList);
    this.noteList = noteList;
  }

  NoteController.prototype.htmlInsert = function(){
    this.el = document.getElementById('app');
    this.el.innerHTML = this.noteListView.displayNotes();
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(location.hash));
  }

  function getNoteFromUrl(locationHash) {
    return parseInt(location.hash.split("#notes/")[1]);
  }

  function showNote(noteId) {
    document.getElementById("singlenote").innerHTML = noteList.getNoteList()[noteId].getText();
  }

  exports.NoteController = NoteController;
})(this);
