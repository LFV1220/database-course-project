import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function Menu({ setBuildingsList }) {
    // dropdown value input (days of the week)
    const [value, setValue] = useState('Day');

    const handleValueInput = (e) => {
        setValue(e);
    }

    // form array for inputs
    const [form, setForm] = useState([
        (<div>
            <Form.Text>Building 1:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input" type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 2:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input" type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 3:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input" type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>),
        (<div>
            <Form.Text>Building 4:</Form.Text>
            <Form.Group className="mb-3">
                <Form.Control className="input" type="text" placeholder="Enter building code..." maxLength="3" />
            </Form.Group>
        </div>)]);

    const addForm = () => {
        let newForm = (
            <div>
                <Form.Text>Building {form.length + 1}:</Form.Text>
                <Form.Group className="mb-3">
                    <Form.Control className="input" type="text" placeholder="Enter building code..." maxLength="3" />
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
    let savedBuildings = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    };

    const handleSave = () => {
        switch (value) {
            case "Monday":
                savedBuildings.monday = saveBuildings();
                console.log(savedBuildings.monday);
                setBuildingsList(savedBuildings.monday);
                break;
            case "Tuesday":
                savedBuildings.tuesday = saveBuildings();
                console.log(savedBuildings.tuesday);
                setBuildingsList(savedBuildings.tuesday);
                break;
            case "Wednesday":
                savedBuildings.wednesday = saveBuildings();
                console.log(savedBuildings.wednesday);
                setBuildingsList(savedBuildings.wednesday);
                break;
            case "Thursday":
                savedBuildings.thursday = saveBuildings();
                console.log(savedBuildings.thursday);
                setBuildingsList(savedBuildings.thursday);
                break;
            case "Friday":
                savedBuildings.friday = saveBuildings();
                console.log(savedBuildings.friday);
                setBuildingsList(savedBuildings.friday);
                break;
            case "Saturday":
                savedBuildings.saturday = saveBuildings();
                console.log(savedBuildings.saturday);
                setBuildingsList(savedBuildings.saturday);
                break;
            case "Sunday":
                savedBuildings.sunday = saveBuildings();
                console.log(savedBuildings.sunday);
                setBuildingsList(savedBuildings.sunday);
                break;
            default:
                return null;
        }

    }

    const saveBuildings = () => {
        let tempSaved = [];
        let inputs = document.getElementsByClassName("input");

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length === 3) {
                tempSaved.push(inputs[i].value);
            }

        }
        return tempSaved;
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
                    <button onClick={handleSave}>Save</button>
                    <button onClick={addForm}>Add</button>
                    <button onClick={removeForm}>Remove</button>
                </div>

            </div>
        </div>
    );
}

export default Menu;