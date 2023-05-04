import React, { useState } from 'react';
import './App.css';
import {TemperatureBox} from './components/TemperatureBox';
import { 
  celsiusToKelvin,
  celsiusToFahrenheit,
  kelvinToCelsius,
  kelvinToFahrenheit, 
  fahrenheitToCelsius,
  fahrenheitToKelvin, } from './utils/conversionFormulas';
import { TemperatureUnitType } from './utils/types';

const temperatureTypes = {
  celsius: {
    name: 'Celsius',
    symbol: '°C',
    conversionMethods: {
      toKelvin: celsiusToKelvin,
      toFahrenheit: celsiusToFahrenheit
    }
  },
  kelvin: {
    name: 'Kelvin',
    symbol: '°K',
    conversionMethods: {
      toCelsius: kelvinToCelsius,
      toFahrenheit: kelvinToFahrenheit
    }
  },
  fahrenheit: {
    name: 'Fahrenheit',
    symbol: '°F',
    conversionMethods: {
      toCelsius: fahrenheitToCelsius,
      toKelvin: fahrenheitToKelvin
    }
  },

}


const App = () => {
  const [temperatureValue, setTemperatureValue] = useState<number>(0);
  const [currentUnit, setCurrentUnit] = useState<TemperatureUnitType>(temperatureTypes.celsius);

  const handleChangeTemperature = (e: any) => {
    setTemperatureValue(+e.target.value);
  }

  const handleSelect = (e: any) => {
    const unitName = e.target.value as keyof typeof temperatureTypes;
    setCurrentUnit(temperatureTypes[unitName])
  }

  const renderTemperatureBoxes = () => {
    let items = [] as any[];
    let key: keyof typeof temperatureTypes;
    let convertedTemperatureValue: number;
    for(key in temperatureTypes) {
      if(temperatureTypes[key].name !== currentUnit.name) {
        convertedTemperatureValue = currentUnit.conversionMethods['to' + temperatureTypes[key].name](temperatureValue)
        items.push(
          <TemperatureBox
            key={Math.random()}
            name={temperatureTypes[key].name}
            value={convertedTemperatureValue}
            symbol={temperatureTypes[key].symbol}
          />
        )
      }
    }
    return items;
  }

  return (
    <div className="wrapper">
      <h1>Temperature Converter</h1>
      <select className='temperatureUnitName' onChange={handleSelect}>
        <option value='celsius'>Celsius</option>
        <option value='kelvin'>Kelvin</option>
        <option value='fahrenheit'>Fahrenheit</option>
      </select>
      <div className="temperatureInputBox">
        <input type='number' value={temperatureValue} onChange={(e) => handleChangeTemperature(e)} />
        <span>{currentUnit.symbol}</span>
      </div>
      <p style={{
        display: 'block',
        textAlign: 'center',
        margin: '15px 0',
      }}>is</p>
      <div className='temperatureBoxWrap'>
        {renderTemperatureBoxes()}
      </div>
    </div>
  );
}

export default App;
