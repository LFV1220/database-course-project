import React, { useState } from 'react';
import { ImageSourceEventType } from 'ol/source/Image';
//import { fromPascal } from 'postgres';
import { FormControl } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { getElementError } from '@testing-library/react';

function Menu() {
    // dropdown value input
    const [value, setValue] = useState('Day');

    const handleValueInput = (e) => {
        setValue(e);
    }

    //TODO: work on getting input on array correctly
    let tempSaved = new Array();
    function handleInputChange(e) {
        // if (e.target.value.length === 3) {

        // }

        form.map(evt => {

        }

        );


    }

    // form array
    const [form, setForm] = useState([
        (<div>
            <Form.Text>Building 1:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input-field" key={0} onChange={handleInputChange} type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 2:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input-field" key={1} onChange={handleInputChange} type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 3:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input-field" key={2} type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 4:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input-field" key={3} type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>)]);

    const addForm = () => {
        let length = form.length;
        let newForm = (
            <div>
                <Form.Text>Building {form.length + 1}:</Form.Text>
                <Form.Group className="mb-3">
                    <Form.Control className="input-field" key={form.length} type="text" placeholder="Enter building code..." maxLength="3" />
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

    // saved buildings
    const savedBuildings = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    };

    // TODO: function to check value (with switch case) then setSaved to certain day to add form data to the certain array
    // TODO: also fix input, where building number corresponds to tempSaved index
    // const handleSave = () => {
    //     switch (value) {
    //         case "Monday":
    //             // something like savedBuildings.{value} = tempSaved in here
    //             return
    //         case "Tuesday":
    //             return
    //         case "Wednesday":
    //             return
    //         case "Thursday":
    //             return
    //         case "Friday":
    //             return
    //         case "Saturday":
    //             return
    //         case "Sunday":
    //             return
    //         default:
    //             return null;
    //     }

    // }


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