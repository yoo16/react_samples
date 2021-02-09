import React from 'react'
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

import './Character.css';

const CharacterList = ({ character, handleCloseStatus }) => {

    return (
        <Box padding={1} align="center">
            <p className="name">{character.name}（{character.job}）</p>
            <img src={character.image} alt={character.name} height="150" />

            <Box>
                <Box width={25} display="inline-block">力</Box>
                <Box width={25} display="inline-block" align="right" mr={3}>{character.power}</Box>
                <Box width={25} display="inline-block">守</Box>
                <Box width={25} display="inline-block" align="right" mr={3}>{character.deffence}</Box>
                <Box width={25} display="inline-block">速</Box>
                <Box width={25} display="inline-block" align="right">{character.speed}</Box>
            </Box>

            <Box mt={1}>
                <Button onClick={handleCloseStatus} className="btn" size="small" variant="outlined" color="inherit" disableElevation>Close</Button>
            </Box>
        </Box>
    );
};

export default CharacterList;
