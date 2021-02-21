import React from 'react'
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import battleNames from './json/battle_names'

const CharacterList = ({ characters, battle }) => {
    return (
        <Grid container spacing={1}>
            {characters.map((character, index) => {
                return (
                    <Grid item xs={6} md={3} key={character.id}>
                        <Box border={1} borderColor="white" borderRadius={8} padding={2}>
                            <Grid container>
                                <Grid item xs>{character.name}</Grid>
                                <Grid item xs align="right">
                                    {(battle[index]) && battleNames[battle[index].type]}
                                </Grid>
                            </Grid>
                            <Box mt={2}>
                                <Grid container>
                                    <Grid item xs>Lv.{character.level}</Grid>
                                    <Grid item xs align="right">{character.job}</Grid>
                                </Grid>
                            </Box>
                            <Box mt={2}>
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
    );
};

export default CharacterList;
