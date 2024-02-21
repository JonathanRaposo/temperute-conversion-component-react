import { useState } from 'react';

const TemperatureConversion = () => {
    const [unit, setUnit] = useState('');
    const [degree, setDegree] = useState('');
    const [result, setResult] = useState(undefined);


    const items = [
        { value: 'celsius', label: 'Fahrenheit ➡️ Celsius' },
        { value: 'fahrenheit', label: 'Celsius ➡️ Fahrenheit' }
    ];

    const handleConversion = (e) => {
        e.preventDefault();

        if (!degree) return setResult('Enter degree');

        //  convert string to a numerical value
        const parsedDegree = Number(degree);

        let converted;
        switch (unit) {
            case 'celsius':
                converted = `${Math.round((parsedDegree - 32) * 5 / 9)}ºC`;
                setResult(converted);
                break;

            case 'fahrenheit':
                converted = `${Math.round((degree * 9 / 5) + 32)}ºF`;
                setResult(converted);
                break;

            default:
                converted = 'Select a unit';
                setResult(converted);
        }
    }

    return (
        <form className='TemperatureConversion'>
            <h3>Temperature conversion</h3>
            <label htmlFor='degree' className='degree-label'>Enter degree</label>
            <input
                type="number"
                name="degree"
                id="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
            />
            {items.map((item) => (
                <div key={item.value}>
                    <input
                        type="radio"
                        name="unit"
                        value={item.value}
                        id={item.value}
                        checked={unit === item.value}
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    <label htmlFor={item.value}>{item.label}</label>
                </div>
            ))}
            <button onClick={handleConversion}>Convert</button>
            {result && <p className='result'>{result}</p>}
        </form>
    );

}

export default TemperatureConversion;
