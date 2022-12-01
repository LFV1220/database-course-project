import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { getUserRoutes } from '../dbutil';

const Menu2 = ({ setBuildingsList }) => {
    const [value, setValue] = useState('Day');
    const [formCount, setFormCount] = useState(['', '']);

    const handleValueInput = (e) => setValue(e);

    const handleSave = () => setBuildingsList([...formCount]);

    const addForm = () => setFormCount(formCount => [...formCount, '']);

    const removeForm = () => setFormCount(formCount => formCount.slice(0, -1));

    const onInputChange = (e, id) => {
        const updatedInputs = formCount.map((input, i) => {
            if (i === id)
                return input = e.target.value;
            else
                return input;
        })

        setFormCount(updatedInputs);
    }

    useEffect(() => {
        getUserRoutes('joshua135@usf.edu', value);
    }, [value]);

    return (
        <div className="menu-container">
            <h2>Class Schedule</h2>

            <div>
                <Dropdown className="dropdown" onSelect={handleValueInput}>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        {value}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item eventKey="Monday">Monday</Dropdown.Item>
                        <Dropdown.Item eventKey="Tuesday">Tuesday</Dropdown.Item>
                        <Dropdown.Item eventKey="Wednesday">Wednesday</Dropdown.Item>
                        <Dropdown.Item eventKey="Thursday">Thursday</Dropdown.Item>
                        <Dropdown.Item eventKey="Friday">Friday</Dropdown.Item>
                        <Dropdown.Item eventKey="Saturday">Saturday</Dropdown.Item>
                        <Dropdown.Item eventKey="Sunday">Sunday</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form className="form">
                    {formCount.map((form, i) =>
                        <li key={i}>
                            <Form.Text>Building {i + 1}:</Form.Text>
                            <Form.Group className="mb-3">
                                <Form.Control className="input" onChange={e => onInputChange(e, i)} type="text" placeholder="Enter building code..." maxLength="3" />
                            </Form.Group>
                        </li>
                    )}
                </Form>

                <div className="flex menu-buttons">
                    <button className='form-button' onClick={() => handleSave()}>Save</button>
                    <button className='form-button' onClick={() => addForm()}>Add</button>
                    <button className='form-button' onClick={() => removeForm()}>Remove</button>
                </div>

            </div>
        </div>
    )
}

export default Menu2;
