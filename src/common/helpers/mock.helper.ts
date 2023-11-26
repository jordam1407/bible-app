import { format, subDays } from 'date-fns'

const bibleBooks = [
    'Gênesis',
    'Êxodo',
    'Levítico',
    'Números',
    'Deuteronômio',
    'Josué',
    'Juízes',
    'Rute',
    '1 Samuel',
    '2 Samuel',
    '1 Reis',
    '2 Reis',
    '1 Crônicas',
    '2 Crônicas',
    'Esdras',
    'Neemias',
    'Ester',
    'Jó',
    'Salmos',
    'Provérbios',
    'Eclesiastes',
    'Cânticos',
    'Isaías',
    'Jeremias',
    'Lamentações',
    'Ezequiel',
    'Daniel',
    'Oséias',
    'Joel',
    'Amós',
    'Obadias',
    'Jonas',
    'Miquéias',
    'Naum',
    'Habacuque',
    'Sofonias',
    'Ageu',
    'Zacarias',
    'Malaquias',
    'Mateus',
    'Marcos',
    'Lucas',
    'João',
    'Atos',
    'Romanos',
    '1 Coríntios',
    '2 Coríntios',
    'Gálatas',
    'Efésios',
    'Filipenses',
    'Colossenses',
    '1 Tessalonicenses',
    '2 Tessalonicenses',
    '1 Timóteo',
    '2 Timóteo',
    'Tito',
    'Filemon',
    'Hebreus',
    'Tiago',
    '1 Pedro',
    '2 Pedro',
    '1 João',
    '2 João',
    '3 João',
    'Judas',
    'Apocalipse',
]

function getRandomBook() {
    return bibleBooks[Math.floor(Math.random() * bibleBooks.length)]
}

function getRandomChapter() {
    return Math.floor(Math.random() * 50) + 1 // Generating chapter numbers between 1 and 50
}

function getRandomVerse() {
    return Math.floor(Math.random() * 30) + 1 // Generating verse numbers between 1 and 30
}

// Generate mock data array
export const mockArray = Array.from({ length: 365 }, (_, id) => {
    const hasRead = Math.random() < 0.5 // 50% chance of having 'read' or not
    return {
        id: format(subDays(new Date(), id), 'yyyy-MM-dd'),
        ...(hasRead && {
            read: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => ({
                name: getRandomBook(),
                chapter: getRandomChapter(),
                verse: getRandomVerse(),
            })),
        }),
    }
})

// const mergedItems = mockArray.map((item) => {
//     const sameDay = last365Days.find((date) => date.id === item.id)
//     if (sameDay) return sameDay
//     return item
// })
