// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

const app = new Vue(
    {
        el: '#root',
        data: {
            todos: [
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
        },
        methods: {
            removeItem: function(index) {
                this.todos.splice(index, 1)
            },
        }
    }
)