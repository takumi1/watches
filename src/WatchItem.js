import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

const WatchItem = (props) => {

    let showTime =
        [new Date().getHours() + new Date().getTimezoneOffset()/60 + props.timezone,
        new Date().getMinutes(),
        new Date().getSeconds()]

    const [date, setDate] = useState(showTime);

    const refreshClock = () => {
        setDate(
            [new Date().getHours() + new Date().getTimezoneOffset()/60 + props.timezone,
            new Date().getMinutes(),
            new Date().getSeconds()]);
    }
    //не смог понять, почему таймер не запускается, если в функции refreshClock сделать setDate(showTime). Пришлось дублировать переменную. Объясните, пожалуйста )

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (<div>
            <div className='cross' onClick={() => props.delete(props.name)}>✘</div>
        <div className='timeItem'>
            <div className="watchName">{props.name}</div>
            <div className="watch">{`${date[0]}:${date[1]}:${date[2]}`}</div>

        </div>
        </div>
    );
};

WatchItem.propTypes = {
    name: PropTypes.string,
    timezone: PropTypes.number,
    delete: PropTypes.func
}

export default WatchItem;