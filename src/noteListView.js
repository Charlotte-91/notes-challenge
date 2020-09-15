class NoteListView {

    constructor() {
        this.notelist = new NoteList()
        this.myNotes = this.notelist.notes
    }

    html() {
       var htmlnotes = this.myNotes.map(note =>  "<ul><li><div>" + note + "</div></li></ul>")
       return htmlnotes
    }

}