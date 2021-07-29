import React from 'react';

export default function RenderingArrays() {
    const cities = ["Chennai", "Delhi", "Calcutta", "Mumbai", "Nagpur", "Ahmadabad"];
    const country = {
        country1: {
            name: "India",
            capital: "Delhi"
        },
        country2: {
            name: "New Zealand",
            capital: "Wellington"
        },
        country3: {
            name: "Japan",
            capital: "Tokyo"
        }
    }

    return (
        <div>
            {cities.map((city, index) => (
                <div key={index}>{city}</div>
            ))}
            {Object.keys(country).map(obj => {
                return (
                    <div>
                        <div>country is : {country[obj].name}</div>
                        <div>capital is : {country[obj].capital}</div>
                    </div>
                )
            })}
        </div>
    )
}