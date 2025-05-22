import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const EventTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();
            
            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        // Initial calculation
        setTimeLeft(calculateTimeLeft());

        // Update every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) ? (
            <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-green-500">LIVE RIGHT NOW</span>
            </div>
        ) : (
            <div className="flex gap-5 sm:gap-3">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">{timeLeft.days}</span>
                    <span className="text-sm">Days</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">{timeLeft.hours}</span>
                    <span className="text-sm">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">{timeLeft.minutes}</span>
                    <span className="text-sm">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">{timeLeft.seconds}</span>
                    <span className="text-sm">Seconds</span>
                </div>
            </div>
        )
    );
};

EventTimer.propTypes = {
    targetDate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired
};

export default EventTimer;