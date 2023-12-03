import React from 'react';
import { useState } from 'react';

Todosample.propTypes = {

};

function Todosample(props) {
    const store = localStorage.getItem('items');
    const [inputValue, setValue] = useState('');
    const [items, setItems] = useState(JSON.parse(store) || []);

    const clearLocalStorage = () => {
        localStorage.removeItem('items');
        setItems([]);
    }
    const handleAdd = () => {
        if (!inputValue) return;
        var newItems = [...items, inputValue];

        var jsonNewItems = JSON.stringify(newItems);
        localStorage.setItem('items', jsonNewItems);

        setItems(newItems);
        setValue('');
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input type="text" value={inputValue} onChange={e => setValue(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todosample;