import React from 'react'
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import './Character.css';

const BattleControl = ({ character, handleBattle, handleShowStatus }) => {

    const handleAttack = (e) => {
        handleBattle('attack')
    };

    const handleMagic = (e) => {
        handleBattle('magic')
    };

    const handleEscape = (e) => {
        handleBattle('escape')
    };

    return (
        <Box border={1} borderColor="white" borderRadius={8} paddingLeft={2} paddingBottom={2}>
            <p>{character.name}</p>
            <Box>
                <Button
                    onClick={handleAttack}
                    color="inherit"
                    disableElevation>たたかう</Button>
            </Box>
            <Box>
                <Button
                    onClick={handleMagic}
                    color="inherit"
                    disabled={(character.mp === 0)}
                    disableElevation>まほう</Button>
            </Box>
            <Box>
                <Button
                    onClick={handleEscape}
                    color="inherit"
                    disabled={(character.id > 1)}
                    disableElevation>にげる</Button>
            </Box>
        </Box>
    );
};

export default BattleControl;
