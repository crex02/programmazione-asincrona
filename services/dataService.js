class DataService {

    // static getTodos(callback) {
    //     fetch('https://643672ab8205915d34f3b508.mockapi.io/todos')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    static getTodos() {
        return fetch('https://643693c28205915d34f73df1.mockapi.io/todos')
        .then(resp => resp.json());
    }


    // static postTodo(todo){

    // }

    // static putTodo(todo){

    // }

    // static deleteTodo(todo){

    // }

}