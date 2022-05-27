import React, {useState} from 'react';
import WatchItem from "./WatchItem";

const Watches = () => {
    const [name, setName] = useState(' ');
    const [zone, setZone] = useState(' ');
    const [watchesArr, setWatchesArr] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            'name': name,
            'zone': zone
        };
        setWatchesArr([...watchesArr, newItem]);
        setName('')
        setZone('')
    }
    const handleName = e => {
        setName(e.target.value)
    };
    const handleTimezone = e => {
        setZone(+e.target.value)
    };

    const deleteItem = (item) => {
        let delArr = watchesArr;
        let delItem = delArr.findIndex(el => el.name === item)
        delArr.splice(delItem, 1)
        setWatchesArr([...delArr])
    }

    return (
        <div>
            <form className='inputForm' onSubmit={handleSubmit}>
                <div className="nameInput">
                <label htmlFor="name">Название</label>
                <input name='name' value={name} type="text" onChange={handleName}/>
                </div>
                <div className="timezoneInput">
                <label htmlFor="timezone">Временная зона</label>
                <input name='timezone' value={zone} type="text" onChange={handleTimezone}/>
                </div>
                <button>Добавить</button>
            </form>
            <div className="watchesBlock">
            {watchesArr.map((item, index) =>
                <WatchItem key={index} name={item.name} timezone={item.zone} delete={deleteItem}/>
            )}
            </div>
        </div>
    );
};

export default Watches;