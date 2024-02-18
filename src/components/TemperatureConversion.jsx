import { useState } from 'react';


const TemperatureConversion = () => {
    const [temperature, setTemperature] = useState('');
    const [degree, setDegree] = useState('');
    const [result, setResult] = useState(undefined);

    const handleConversion = (e) => {
        e.preventDefault()

        if (!degree) return setResult('Enter degree');

        //  convert string to a numerical value
        const parsedDegree = Number(degree);
        let converted;
        switch (temperature) {
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
            <div>
                <input
                    type="radio"
                    name="temperature"
                    value="celsius"
                    checked={temperature === 'celsius'}
                    onChange={(e) => setTemperature(e.target.value)}
                />
                <label>Fahrenheit ➡️ Celsius</label>
            </div>

            <div>
                <input
                    type="radio"
                    name="temperature"
                    value="fahrenheit"
                    checked={temperature === 'fahrenheit'}
                    onChange={(e) => setTemperature(e.target.value)}
                />
                <label>Celsius ➡️ Fahrenheit</label>
            </div>
            <button onClick={handleConversion}>Convert</button>
            {result && <p className='result'>{result}</p>}
        </form>
    );



}

export default TemperatureConversion;