class NoteList {

    constructor() {
        this.notes = []
    }

    addNote(note) {
      this.notes.push(note)
    }

    viewNotes() {
        for ( var i = 0; i < this.notes.length; i++ ) {
            return this.notes[i]
        }
    }

};

