import { Box } from '@mui/material';
import React from 'react';
import { IphoneProps } from '.';
import { useStyles } from './Iphone.style';

export const Iphone = ({
    width,
    children
}: IphoneProps) => {
    const style = useStyles({ width })
    // const [time, setTime] = useState(new Date())

    // useEffect(() => {
    //     setInterval(() => setTime(new Date()), 1000)
    // }, [])

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
                <Box sx={style.children}>
                    {/* <Box sx={style.statusBar}>
                        <Box sx={style.timeContainer}>
                            {time.getHours()}:{time.getMinutes()}
                        </Box>
                        <Box sx={style.iconContainer}>
                            <MdSignalCellularAlt />
                        </Box>
                    </Box> */}
                    {children}
                </Box>
            </Box>
        </Box>
    )
}
