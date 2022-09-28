import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function Menu() {
    return (
        <div className="menu-container">
            <h2 style={{ 'fontWeight': '300' }}>Class Schedule</h2>

            {["Day", "Day", "Day", "Day", "Day"].map(
                (d) => (
                    <div>
                        <Dropdown className="dropdown">
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                {d}
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Wednesday</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Thursday</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Friday</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">Saturday</Dropdown.Item>
                                <Dropdown.Item href="#/action-7">Sunday</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form className="form">
                            <Form.Group className="mb-3">
                                <Form.Control type="building" placeholder="Enter building..." />
                            </Form.Group>
                        </Form>
                    </div>

                ),
            )}

            {/* <Dropdown className='dropdown'>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Day
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                        Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
        </div>
    );
}

export default Menu;