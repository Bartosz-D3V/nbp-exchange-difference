import {Select} from "@chakra-ui/react";
import React from "react";
import {CurrencyOption} from "./CurrencyOption";
import {CurrencySelectorProps} from "./CurrencySelectorProps";

export const CurrencySelector = ({setCurrency}: CurrencySelectorProps) => {
    const options: Array<CurrencyOption> = [
        {
            value: 'usd',
            description: 'Dolar amerykański'
        },
        {
            value: 'eur',
            description: 'Euro'
        },
        {
            value: 'gbp',
            description: 'Funt brytyjski'
        }
    ]

    return (
        <Select onChange={event  => setCurrency(event.target.value)}>
            {options.map(({value, description}) => (
                <option key={value} value={value}>
                    {description}
                </option>
            ))}
        </Select>
    )
}
