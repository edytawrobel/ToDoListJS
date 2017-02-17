'use strict';

(function (exports) {
  function NoteView (notelistObj) {
    this._notelist = notelistObj.getNoteList()
  }

  NoteView.prototype.displayNotes = function () {
    var string = ''
    for (var i = 0; i < this._notelist.length; i++) {
      string += "<li><div><a href=\"#notes/" + i + "\">" + this._notelist[i].getText().slice(0,20) + "</a></div></li>"
    }
    return "<ul>" + string + "</ul>"
  }

  exports.NoteView = NoteView
})(this)
