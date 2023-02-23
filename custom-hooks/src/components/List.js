import React, {useEffect} from 'react';
import useScroll from "../hooks/useScroll";

const List = () => {
    const [todos, setTodos] = React.useState([])
    const [page, setPage] = React.useState(1)
    const limit = 10;
    const parentRef = React.useRef();

    const childRef = React.useRef();
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit))

    function fetchTodos (page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json])
                setPage(prev => prev + 1)
            })
    }


    return (
        <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
            {todos.map((todo, index) => (
                    <div style={{padding:30, border: '2px solid black'}} key={todo.id}>{todo.title}</div>
            ))}
            <div ref={childRef} style={{height: 20, background: 'red'}}></div>
        </div>
    );
};

export default List;
