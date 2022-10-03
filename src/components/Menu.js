import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function Menu() {
    // dropdown value input
    const [value, setValue] = useState('Day');

    const handleValueInput = (e) => {
        setValue(e);
    }

    // form array
    const [form, setForm] = useState([
        (<div>
            <Form.Text>Building 1:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input-field" type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 2:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input-field" type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 3:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input-field" type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 4:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input-field" type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>)]);

    const addForm = () => {
        let length = form.length;
        let newForm = (
            <div>
                <Form.Text>Building {form.length + 1}:</Form.Text>
                <Form.Group className="mb-3">
                    <Form.Control className="input-field" type="text" placeholder="Enter building code..." maxLength="3" />
                </Form.Group>
            </div>
        );
        const newForms = [...form, newForm];
        setForm(newForms);
    }

    const removeForm = () => {
        const newForms = [];
        for (let i = 0; i < form.length - 1; i++) {
            newForms[i] = form[i];
        }
        setForm(newForms);
    }


    return (
        <div className="menu-container">
            <h2 style={{ 'fontWeight': '300' }}>Class Schedule</h2>

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
                    {form}
                </Form>

                <div className="menu-buttons">
                    <button>Save</button>
                    <button onClick={addForm}>Add</button>
                    <button onClick={removeForm}>Remove</button>
                </div>

            </div>
        </div>
    );
}

export default Menu;