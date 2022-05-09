// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

const app = new Vue(
    {
        el: '#root',
        data: [
            {
                text: 'Comprare il latte',
                done: false,
            },
            {
                text: 'Andare a correre',
                done: true,
            },
            {
                text: 'Seguire recap pomeridiano',
                done: true,
            },
            {
                text: 'Completare esercizio',
                done: false,
            },
        ],
        methods: {
            
        }
    }
)