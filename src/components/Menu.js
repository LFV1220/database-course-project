import Dropdown from 'react-bootstrap/Dropdown';

function Menu() {
    return (
        <div className="menu-container">
            <h2 style={{'fontWeight': '300'}}>Classes</h2>

            <Dropdown className='dropdown'>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                    Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Menu;