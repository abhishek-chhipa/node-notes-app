const yargs = require('yargs');
const chalk = require ('chalk');
const notes = require('./notes.js');


// customize yagrs number
// yargs.version('1.1.0');

// ad remove read list

// create add command
yargs
    .command({
        command:"add",
        builder:{
            title : {
                describe:'Note Title',
                demandOption:true,        // this means we definately habe to provide a title(required)
                type:'string'
            },
            body :{
                discribe:"Note Body",
                demandOption:true,
                type: 'string'
            }

        },
        discribe:"add new note",
        handler(argv){
            notes.addNotes(argv.title,argv.body);
        }
})  


yargs
    .command({
        command:'remove',
        builder: {
            title:{
            describe:"removing title",
            demandOption: true,
            type: 'string'
            }
        },
        discribe:"remove",
        handler(argv) {
            notes.removeNotes(argv.title);
        }
    })

yargs
    .command({
        command:'list',
        discribe:"listing a note",
        handler() {
            notes.listNotes();
        }
    })
    
    yargs
    .command({
        command:'read',
        builder : {
            title :{
                describe : 'reading title',
                demandOption: true,
                type: 'string'
            }
        },
        discribe:"read",
        handler(argv) {
            notes.readNotes(argv.title);
        }
    });



// console.log(yargs.argv);
yargs.parse();
