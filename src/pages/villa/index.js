import React, { useState } from 'react'
import './stylew.css'
import Navbar from '../../components/Navbar'
// import React, { useState } from "react";
import image_drash from '../../assets/img/drash.png'
import plusAdd2 from '../../assets/img/plusAdd.png'

export default function Without() {
    const [categorys, setCategorys] = useState([
        {
            name: "normal",
            maxNormalValue: 5,
            bedrooms: [
                {
                    id: 1,
                    bedroom: 0,
                    total: 0,
                    level: 'EASY'
                }
            ],
        },
        {
            name: "DUPLEX",
            bedrooms: [
                {
                    id: 1,
                    bedroom: 0,
                    total: 0,
                    level: 'EASY'
                }
            ],
        },
        {
            name: "PENTHOUSE",
            bedrooms: [
                {
                    id: 1,
                    bedroom: 0,
                    total: 0,
                    level: 'EASY'
                }
            ],
        }
    ]);

    const handleInputChanges = (value, key, bedroom) => {
        bedroom[key] = value;
        setCategorys([...categorys]); // Обновляем состояние массива
    }

    const addNewItem = (category) => {
        const maxId = category.bedrooms.reduce((max, bedroom) => Math.max(max, bedroom.id), 0);
        const newItem = { id: maxId + 1, bedroom: 0, total: 0, level: 'EASY' };
        const newArray = category.bedrooms.slice();
        newArray.push(newItem);
        setCategorys(prevCategorys => prevCategorys.map(item => {
            if (item.name === category.name) {
                return { ...item, bedrooms: newArray };
            }
            return item;
        }));
    }

    const deleteItem = (categoryId, bedIndex) => {
        setCategorys(prevCategorys =>
            prevCategorys.map(category => {
                if (category.name === categoryId) {
                    const updatedBedrooms = category.bedrooms.filter(bedroom => bedroom.id !== bedIndex);
                    category.bedrooms = updatedBedrooms
                }
                return category;
            })
        );
    }
    const listEasy = [300, 420, 600, 900, 1200, 1620];
    const listMedium = [420, 600, 900, 1320, 1800, 2400];
    const listHard = [600, 840, 1260, 1800, 2400, 3180];

    const listPentEasy = [0, 0, 900, 1440, 2040, 2700, 3600, 4500, 5400, 6300, 7200];
    const listPentMedium = [0, 0, 1200, 1980, 3000, 4500, 5700, 6900, 8100, 9300, 10500];
    const listPentHard = [0, 0, 1680, 2700, 4200, 5580, 7080, 8580, 10080, 11580, 12900];

    const listDuplexEasy = [0, 600, 900, 1200, 1800, 3000, 3900, 4800, 5700, 6600, 7500];
    const listDuplexMedium = [0, 900, 1200, 1800, 3000, 4800, 6000, 7200, 8400, 9600, 11100];
    const listDuplexHard = [0, 1200, 1680, 2400, 3600, 6000, 7580, 9000, 10050, 1200, 13800];


    const [inputValue, setInputValue] = useState(0);
    const calculateSum = () => {

        let sumEasy = 0;
        // let sumMedium = 0;
        // let sumHard = 0;
        // let totalsum = 0;

        categorys.forEach(category => {
            category.bedrooms.forEach(bedroom => {
                const selectedList = getCategoryList(category.name, bedroom.level);

                if (selectedList) {
                    const index = parseInt(bedroom.bedroom);
                    const rate = selectedList[index];
                    sumEasy += rate * parseInt(bedroom.total);
                }

            });
        });

        if (sumEasy > 0) {
            sumEasy += inputValue * 300;
        }

        // ... (rest of your code)
        let timestamp = parseInt((sumEasy).toFixed(0))
        let hours = Math.floor(timestamp / 60 / 60);
        let minutes = Math.floor(timestamp / 60) - (hours * 60);
        let seconds = timestamp % 60;
        var formatted = [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
        ].join(':');

        const minutes1 = minutes / 60
        const bal1 = hours + parseFloat(minutes1.toFixed(2))
        const bal = parseFloat(bal1.toFixed(2))
        // totalsum = (bal*(2)).toFixed(0)
        const qwerty = [formatted, bal]

        return qwerty;
    };

    // Helper function to get the appropriate list based on category and level
    const getCategoryList = (categoryName, level) => {
        if (categoryName === 'normal') {
            if (level === 'EASY') return listEasy;
            if (level === 'MEDIUM') return listMedium;
            if (level === 'HARD') return listHard;
        } else if (categoryName === 'PENTHOUSE') {
            if (level === 'EASY') return listPentEasy;
            if (level === 'MEDIUM') return listPentMedium;
            if (level === 'HARD') return listPentHard;
        } else if (categoryName === 'DUPLEX') {
            if (level === 'EASY') return listDuplexEasy;
            if (level === 'MEDIUM') return listDuplexMedium;
            if (level === 'HARD') return listDuplexHard;
        }
        return null;
    };



    return (
        <div>
            <Navbar />

            <h1 className='h1_style'>Without</h1>
            <div className='sum_calculate'>
                <h1>Time:</h1>
                <h1>{calculateSum()[0]}</h1>
                <h1>Point:</h1>
                <h1>{calculateSum()[1]} {calculateSum()[3]}</h1>


            </div>
            <div className='aa'>
                <label className="label-style"> Copy </label>
                <input className="input-style_1" type="number" min={0} value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} onKeyPress={(e) => {
                    if (e.key === '-' || e.key === 'e' || e.key === 'E') {
                        e.preventDefault();
                    }
                }} />

            </div>


            <div className="grid-container">
                {categorys.map((category, index) =>
                    <div className="grid-item" key={index}>
                        <p className="p-style">{category.name}</p>
                        {category.bedrooms.map((bedroom, bedIndex) =>
                            <div key={bedIndex} className="div-input-style">
                                <div className="grid_div">
                                    <label className="label-style"> Bedroom </label>
                                    <input className="input-style" type="number" min={0} max={category.maxNormalValue ?? 10} value={bedroom.bedroom} onChange={(e) => handleInputChanges(Math.min(parseInt(e.target.value), (category.maxNormalValue ?? 10)), 'bedroom', bedroom)} />
                                </div>
                                <div className="grid_div">
                                    <label className="label-style">Total</label>
                                    <input className="input-style" type="number" min={0} max={999} value={bedroom.total} onChange={(e) => handleInputChanges(Math.min(parseInt(e.target.value), 999), 'total', bedroom)} />
                                </div>
                                <div className="grid_div">
                                    <label className="label-style"> Level </label>
                                    <select className="select-style" value={bedroom.level} onChange={(e) => handleInputChanges(e.target.value, 'level', bedroom)}>
                                        <option value="EASY">EASY</option>
                                        <option value="MEDIUM">MEDIUM</option>
                                        <option value="HARD">HARD</option>
                                    </select>
                                </div>
                                <div className="grid_div">
                                    <label className="label-style"> Del </label>
                                    <button className="image-button">
                                        <img src={image_drash} alt="Button Icon" onClick={() => deleteItem(category.name, bedroom.id)} />
                                    </button>
                                    {/* <h1 className='h1_style'>{bedroom.id}</h1> */}
                                </div>
                            </div>
                        )}
                        <button className="image-button" onClick={() => addNewItem(category)}>
                            <img src={plusAdd2} alt="Button Icon" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
