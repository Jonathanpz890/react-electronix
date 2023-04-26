import { Box } from '@mui/material'
import React from 'react'
import { IphoneProps } from '.'
import { useStyles } from './Iphone.style'

export const Iphone = ({
    width
}: IphoneProps) => {
    const style = useStyles({ width })
    return (
        <Box sx={style.iphone}>
            <Box sx={style.buttons}>
                <Box sx={style.silencer}></Box>
                <Box sx={style.volumeUp}></Box>
                <Box sx={style.volumeDown}></Box>
            </Box>
            <Box sx={style.powerButton}></Box>
            <Box sx={style.display}>
                <Box sx={style.floatinIsland}>
                    <Box sx={style.camera}></Box>
                </Box>
            </Box>
        </Box>
    )
}
