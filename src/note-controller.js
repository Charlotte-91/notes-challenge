
class NoteController {
   
    constructor() {
        this.notelistview = new NoteListView();
    }

    logic() {
        this.notelistview.notelist.addNote('Hello everyone!')
        this.notelistview.notelist.addNote('Its me again! :p')
        
        
    }

    displayNotes() {
        var listHTML = this.notelistview.html();
        document.getElementById('note').innerHTML = listHTML
    }

}

n = new NoteController()
n.logic()
n.displayNotes()
