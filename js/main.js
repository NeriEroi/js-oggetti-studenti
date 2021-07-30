// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

const studenteCheStudia = {
    nome: 'Antonio',
    cognome: 'De Curtis',
    anni: 69,
    interessi: ['recitazione teatrale e cinematografica'],
}

for (const property in studenteCheStudia) {
    console.log(studenteCheStudia[property]);
}


// Creare un array di oggetti di studenti.

var studentiAttori = [

    studenteCheStudiaUno = {
        nome: 'Eduardo',
        cognome: 'De Filippo',
        anni: 84,
        interessi: ['recitazione teatrale e cinematografica'],
    },
    studenteCheStudiaDue = {
        nome: 'Giuseppe',
        cognome: 'De Filippo',
        anni: 76,
        interessi: ['recitazione teatrale e cinematografica'],
    },
    studenteCheStudiaTre = {
        nome: 'Antonio',
        cognome: 'De Curtis',
        anni: 69,
        interessi: ['recitazione teatrale e cinematografica'],
    }
];

console.log(studentiAttori);
  

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
  
for (i = 0; i < studentiAttori.length; i++) {
    
    var studente_corrente = studentiAttori[i];
        
    console.log(studente_corrente.nome + ' ' + studente_corrente.cognome);
}


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoNome = prompt("Inserisci un nome:");
var nuovoCognome = prompt("Inserisci un cognome:");
var nuovaEta = parseInt(prompt("inserisci la tua età"));


var newObj = {
    nome: nuovoNome,
    cognome: nuovoCognome,
    anni: nuovaEta,
}

studentiAttori.push(newObj);




