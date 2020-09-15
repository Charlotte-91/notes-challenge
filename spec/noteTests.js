function runTests() {
 pushingNoteToArray()
 displayingNotes()
 noteListView()

function pushingNoteToArray() {
    var note = new NoteList();
    var text = 'i am a note'
    note.addNote(text)
    assert.isTrue(note.notes.length === 1)
   
}

function displayingNotes() {
    var note = new NoteList();
    var text = 'i am a note'
    note.addNote(text)
    console.log(note.viewNotes())
    assert.isTrue(note.notes[0] === 'i am a note')
}
   
function noteListView() {
    var notelistview = new NoteListView();
    var text = 'i am a note'
    notelistview.notelist.addNote(text)
    console.log(notelistview.html())
    assert.isTrue(notelistview.html()[0] === '<ul><li><div>i am a note</div></li></ul>')
}
}