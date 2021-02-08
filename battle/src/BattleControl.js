import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

import CharacterStatus from './CharacterStatus';
import InfoIcon from '@material-ui/icons/Info';

import './Character.css';

const BattleControl = ({ character, message, handleBattle, handleShowStatus }) => {

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
        <React.Fragment>
            <Grid container spacing={1}>

                <Grid item>
                    <p>{character.name}</p>
                    <Box border={1} borderColor="white" borderRadius={8} padding={2}>
                        <Button
                            onClick={handleAttack}
                            type="attack"
                            color="inherit"
                            size="small"
                            disableElevation>たたかう</Button>
                        <Button
                            onClick={handleMagic}
                            type="attack"
                            color="inherit"
                            size="small"
                            disabled={(character.mp == 0)}
                            disableElevation>まほう</Button>
                        <Button
                            onClick={handleEscape}
                            type="attack"
                            color="inherit"
                            size="small"
                            disabled={(character.id > 1)}
                            disableElevation>にげる</Button>
                        <Button
                            onClick={handleShowStatus}
                            data-character-id={character.id}
                            color="inherit"
                            size="small"
                            disableElevation>
                            <InfoIcon fontSize="small" />ステータス</Button>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default BattleControl;
