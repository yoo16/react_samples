import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import battleNames from './json/battle_names'

import './Character.css';

console.log(battleNames);

const CharacterList = ({ characters, battle }) => {
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                {characters.map((character) => {
                    return (
                        <Grid item xs={6} md={3} key={character.id}>
                            <Box border={1} borderColor="white" borderRadius={8} padding={2}>
                                <Grid container>
                                    <Grid item xs>{character.name}</Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs>Lv.{character.level}</Grid>
                                    <Grid item xs align="right">
                                        {battle[character.id] ? battleNames[battle[character.id]] : ''}
                                    </Grid>
                                </Grid>
                                <Box>
                                    <Box width={25} display="inline-block">HP</Box>
                                    <Box width={25} display="inline-block" align="right" mr={3}>{character.hp}</Box>
                                    <Box width={25} display="inline-block">MP</Box>
                                    <Box width={25} display="inline-block" align="right">{character.mp}</Box>
                                </Box>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </React.Fragment>
    );
};

export default CharacterList;
