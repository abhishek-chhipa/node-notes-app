const fs = require('fs');
const chalk = require ('chalk');




const addNotes = (title,body) =>{
    const notes = loadNotes();
    const duplicateNote = notes.find( note =>  note.title === title)

    debugger

    if(!duplicateNote) {
        notes.push({
            title : title,
            body : body
        });
    
        saveNotes(notes);
        console.log(chalk.bgGreen.white.bold('new note added'));
    } else{
        console.log(chalk.bgRed.white.bold('note title taken'));
    }
    
};


const removeNotes = (title) => {

    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notes.length > notesToKeep.length)
    {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen.white.bold('note removed'));
    } else{
        console.log(chalk.bgRed.white.bold('no note found'))
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    })
}


const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find( note =>  note.title === title)

    if(note){
        console.log(chalk.inverse.bold(note.title));
        console.log(note.body);
    }else {
        console.log(chalk.bgRed.white('note not found'));
    }

}

const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}


const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return [];
    }
}
    
 module.exports = {
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
 }

