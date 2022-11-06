import React, {useState} from "react";
import {FormControl, FormLabel, Box, Input, Flex, Spacer} from "@chakra-ui/react";
import {CurrencySelector} from "../CurrencySelector/CurrencySelector";

export const InputPanel = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [startDate, setStartDate] = useState<string | null>(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [endDate, setEndDate] = useState<string | null>(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
