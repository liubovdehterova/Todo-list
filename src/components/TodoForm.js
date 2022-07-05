import React, {useState, useEffect, useRef} from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    };
    const handleChange = e => {
        setInput(e.target.value);
    }
    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type="text"
                           placeholder="Update your item"
                           value={input}
                           name="text"
                           className="todo__input edit"
                           onChange={handleChange}
                           ref={inputRef}
                    />
                    <button className="todo__button edit">
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input type="text"
                           placeholder="Add a todo"
                           value={input}
                           name="text"
                           className="todo__input"
                           onChange={handleChange}
                           ref={inputRef}
                    />
                    <button className="todo__button">
                        Add todo
                    </button>
                </>
            )}

        </form>
    )
}

export default TodoForm;