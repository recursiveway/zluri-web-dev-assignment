import React, { useState } from 'react';
import Mountain from '../images/img/Mountain.svg'
import Forest from '../images/img/Forest.svg'
import Desert from '../images/img/Desert.svg'
import Ocean from '../images/img/Ocean.svg'
import ShowImage from './ShowImage';
import { AlignCenter } from 'react-feather';

const S4 = () => {
    const [select, setSelect] = useState("Dropdown");
    const [showMountain, setShowMountain] = useState(true);
    const [showDesert, setShowDesert] = useState(false);
    const [showOcean, setShowOcean] = useState(false);
    const [showForest, setShowForest] = useState(false);


    const handleChange = (e) => {
        setSelect(e.target.value)
        console.log("1");
        handleImage(e.target.value)
    }


    const handleImage = (val) => {
        if (val === "Mountain") {
            setShowMountain(true);
            setShowDesert(false);
            setShowForest(false);
            setShowOcean(false);
            return;
        } else if (val === "Ocean") {
            setShowOcean(true);
            setShowDesert(false);
            setShowForest(false);
            setShowMountain(false);
            return;
        } else if (val === "Forest") {
            setShowForest(true);
            setShowDesert(false);
            setShowMountain(false);
            setShowOcean(false);
            return;
        } else if (val === "Desert") {
            setShowDesert(true);
            setShowMountain(false);
            setShowForest(false);
            setShowOcean(false);
            return;
        }
    }

    // const bg = background: var(--primary - blue - light - 1, )

    return (
        <div style={{ background: 'var(--brand-white, #FFF) ', background: 'rgba(225, 232, 248, 1)', display: 'flex', justifyContent: 'space-around', alignContent: "center", height: '771px', width: '831px' }}>
            <div style={{ margin: 'auto' }}>


                <select value={select} on onChange={handleChange} style={{ borderRadius: '8px', border: '1px solid var(--primary-blue-dark-2, #5287E8', width: '200px', height: '20px' }}>


                    <option value="Mountain" style={{ width: '200px', height: '20px' }}>Mountain</option>
                    <option value="Forest" style={{ width: '200px', height: '20px' }}>Forest</option>
                    <option value="Desert" style={{ width: '200px', height: '20px' }}>Desert</option>
                    <option value="Ocean" style={{ width: '200px', height: '20px' }}>Ocean</option>
                </select>

            </div>
            <div style={{ margin: 'auto' }}>
                {showDesert && <ShowImage source={Desert} alt="Desert" />}
                {showMountain && <ShowImage source={Mountain} alt="Mountain" />}
                {showOcean && <ShowImage source={Ocean} alt="Ocean" />}
                {showForest && <ShowImage source={Forest} alt="Forest" />}

            </div>
        </div>
    )

}

export default S4