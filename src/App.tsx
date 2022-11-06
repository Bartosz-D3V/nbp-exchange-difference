import React from 'react';
import './index.css';
import {ChakraProvider, Grid, GridItem} from "@chakra-ui/react";
import {InputPanel} from "./components/InputPanel/InputPanel";

function App() {
    return (
        <ChakraProvider>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} height='100%'>
                <GridItem w='100%'/>
                <GridItem w='100%' h='100%'>
                    <InputPanel/>
                </GridItem>
                <GridItem w='100%'/>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
