import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const Menu2 = ({ setBuildingsList }) => {
    const [value, setValue] = useState('Day');
    const [formCount, setFormCount] = useState([1, 2, 3, 4])

    const formInput0 = '';

    const handleValueInput = (e) => {
        setValue(e);
    }

    const handleSave = () => {
        console.log(formInput0)
        setBuildingsList([]);
    }

    const addForm = () => {
        setFormCount(formCount => [...formCount, formCount[formCount.length - 1] + 1]);
    }

    const removeForm = () => {
        setFormCount(formCount => formCount.slice(0, -1));
    }

    return (
        <div className="menu-container">
            <h2>Class Schedule</h2>

            <div>
                <Dropdown className="dropdown" onSelect={handleValueInput}>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        { value }
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
                    { formCount.map((form, i) => {
                        return (
                            <li key={ i }>
                                <Form.Text>Building 4:</Form.Text>
                                <Form.Group className="mb-3"  controlId="formInput0">
                                    <Form.Control className="input" type="text" placeholder="Enter building code..." maxLength="3"  />
                                </Form.Group>
                            </li>
                        )
                    }) }
                </Form>

                <div className="flex menu-buttons">
                    <button className='form-button' onClick={() => handleSave() }>Save</button>
                    <button className='form-button' onClick={() => addForm() }>Add</button>
                    <button className='form-button' onClick={() => removeForm() }>Remove</button>
                </div>

            </div>
        </div>
    )
}

export default Menu2;