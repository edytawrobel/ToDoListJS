(function(exports){
  function NoteController(noteListModel){
    this.noteListView = new NoteView(noteListModel);
    this.notelist = noteListModel;
  }

  NoteController.prototype.htmlInserter = function(){
    this.el = document.getElementById('app');
    this.el.innerHTML = this.noteListView.displayNotes();
  };

  NoteController.prototype.testUrlChange = function() {
    location.hash = "#notes/0";
    showNoteForCurrentPage();
  }

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    // window.addEventListener("hashchange", showNoteForCurrentPage);
    addEventListener("hashchange", showNoteForCurrentPage);

  };

  function showNoteForCurrentPage() {
    // showNote(getNoteFromUrl(window.location));
    showNote(getNoteFromUrl(location.hash));
  }

  function getNoteFromUrl(locationHash) {
    return parseInt(location.hash.split("#notes/")[1]);
  }

  function showNote(noteId) {
    document.getElementById("singlenote").innerHTML = list.getNoteList()[noteId].getText();
  }

  exports.NoteController = NoteController;
})(this);
