(function(exports){

   function NoteController(){
  };

  NoteController.prototype.htmlInserter = function(){
    var el = document.getElementById('app');
    el.innerHTML = "howdy";

  };

  exports.NoteController = NoteController
})(this)
