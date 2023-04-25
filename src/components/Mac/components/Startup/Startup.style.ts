export const useStyles = ({animation}: StylesProps) => ({
    startup: {
        position: 'absolute',
        top: 0, left: 0,
        opacity: animation ? 1 : 0,
        width: '100%',
        height: '100%',
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        transition: 'opacity 0.5s'
    },
    startupSvg: {
        fill: 'white',
        width: '10%',
        height: 'auto'
    }
})

interface StylesProps {
    animation?: boolean
}