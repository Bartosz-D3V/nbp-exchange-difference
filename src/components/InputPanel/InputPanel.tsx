import React, {useState} from "react";
import {FormControl, FormLabel, Box, Input, Flex, Select, Spacer} from "@chakra-ui/react";
import {CurrencySelector} from "../CurrencySelector/CurrencySelector";

export const InputPanel = () => {
    const [startDate, setStartDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    const [currency, setCurrency] = useState<string | null>(null)

    return (
        <FormControl marginY='40%'>
            <Flex direction='column' wrap='wrap' justify='space-evenly'>
                <Box>
                    <Flex direction='row' wrap='wrap' justify='space-between'>
                        <Box width='45%'>
                            <FormLabel>Data wystawienia faktury</FormLabel>
                            <Input
                                size="md"
                                type="date"
                                onChange={event => setStartDate(event.target.value)}
                            />
                        </Box>
                        <Box width='45%'>
                            <FormLabel>Data otrzymania zapłaty</FormLabel>
                            <Input
                                size="md"
                                type="date"
                                onChange={event => setEndDate(event.target.value)}
                            />
                        </Box>
                    </Flex>
                </Box>
                <Spacer/>
                <Box>
                    <CurrencySelector setCurrency={setCurrency}/>
                </Box>
            </Flex>
        </FormControl>
    )
}
