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





