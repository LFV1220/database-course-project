import { useState } from 'react';
import Menu2 from './Menu2';
import UsfMap2 from './Map2';

const HomePage = () => {
    const [buildingsList, setBuildingsList] = useState([]);

    return (
        <div className='flex main-container'>
            <Menu2 setBuildingsList={ setBuildingsList } />
            <UsfMap2 buildingsList={ buildingsList } />
        </div>
    )
}

export default HomePage;