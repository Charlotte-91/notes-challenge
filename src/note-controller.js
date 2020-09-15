document.getElementById('app').innerHTML = 'Howdy'

var notelistview = new NoteListView();
notelistview.notelist.addNote('Hello everyone!')
notelistview.notelist.addNote('Its me again! :p')
var listHTML = notelistview.html();
console.log(listHTML)
document.getElementById('note').innerHTML = listHTML