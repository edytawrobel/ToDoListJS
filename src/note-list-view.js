"use strict";

(function(exports) {

  // var notelist = [];

  function NoteView(notelistObj) {
    this._notelist = notelistObj.getNoteList();
  };

  NoteView.prototype.displayNotes = function () {
    var string = ""
      for (var i = 0; i < this._notelist.length; i++) {
      string += "<li><div>" + this._notelist[i].getText() + "</div></li>"
    }
    return "<ul>" + string + "</ul>";
  }

exports.NoteView = NoteView;
})(this);
