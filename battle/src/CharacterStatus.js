import React from 'react'
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './Character.css';

const CharacterList = ({ character }) => {

    return (
        <Box padding={1}>
            <Box padding={1} align="center">
                <img src={character.image} alt={character.name} height="150" />
                <Box>
                    <Box width={25} display="inline-block">力</Box>
                    <Box width={25} display="inline-block" align="right" mr={3}>{character.power}</Box>
                    <Box width={25} display="inline-block">守</Box>
                    <Box width={25} display="inline-block" align="right" mr={3}>{character.deffence}</Box>
                    <Box width={25} display="inline-block">速</Box>
                    <Box width={25} display="inline-block" align="right">{character.speed}</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CharacterList;
