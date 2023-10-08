import React from 'react';

const InputMagic = ({key, title, max = 10, min = 0, type, obj}) => {
    switch (type) {
        case "number":
            return (
                <div className="grid_div">
                    <label className="label-style"> Bedroom </label>
                    <input className="input-style" type="number" min={min}
                           max={max}
                    />
                </div>
            )
        case "checkbox":
            return (
                <div className="grid_div">
                    <label className="label-style"> Bedroom </label>
                    <input className="input-style" type="number" min={min}
                           max={max}
                    />
                </div>
            )
        case "select":
            return (
                <div className="grid_div">
                    <label className="label-style"> Level </label>
                    <select className="select-style" value={villa.bedrooms.level}
                            onChange={(e) => handleInputChanges(e.target.value, 'level', villa.bedrooms.bedroom)}>
                        <option value="EASY">EASY</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HARD">HARD</option>
                    </select>
                </div>
            )
    }
}

export default InputMagic;