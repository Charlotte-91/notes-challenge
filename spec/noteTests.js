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
    var n = 'n'
    note.addNote(text)
    note.addNote(n)
    console.log(note.viewNotes())
    assert.isTrue(note.viewNotes() === 'i am a note')
}
   
function noteListView() {
    var notelistview = new NoteListView();
    var text = 'i am a note'
    notelistview.notelist.addNote(text)
    assert.isTrue(note.html() === '<ul><li><div>i am a note</div></li></ul>')
}
}