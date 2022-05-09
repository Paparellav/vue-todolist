// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

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
            userTodo: '',
        },
        methods: {
            removeItem: function(index) {
                this.todos.splice(index, 1)
            },
            addItem: function() {

                const newObject = {
                    text: this.userTodo,
                    done: false,
                }
                this.todos.push(newObject);
                this.userTodo = "";
            },
            toggleDone: function(index) {
                this.todos[index].done = !this.todos[index].done;
            }
        },
    },
);