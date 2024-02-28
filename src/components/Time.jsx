import { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const currentDate = time.toLocaleDateString();
    const currentTime = time.toLocaleTimeString();

    return (
        <div className="time">
            <div className="lead">This is the current time:</div>
            <div className="time-info">
                <span className="date">{currentDate}</span> - <span className="time">{currentTime}</span>
            </div>
        </div>
    );
}

export default Time;
