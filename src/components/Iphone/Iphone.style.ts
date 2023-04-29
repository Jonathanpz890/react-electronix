export const useStyles = ({
    width
}: StyleProps) => ({
    iphone: {
        margin: '20px',
        width,
        height: width * 2.07,
        position: 'relative',
        borderRadius: `${width / 5.8}px`,
        zIndex: '1'
    },
    display: {
        borderRadius: `${width / 5.8}px`,
        boxShadow: `inset 0 0 0 ${width * 0.001}px #8C826A, inset 0 0 0 ${width * 0.002}px #2C250C, inset 0 0 0 ${width * 0.003}px #77725B, inset 0 0 0 ${width * 0.004}px #E1D8C4, inset 0 0 0 ${width * 0.006}px #FFFBE7, inset 0 0 0 ${width * 0.007}px #E4DBC1, inset 0 0 0 ${width * 0.008}px #B5A586, inset 0 0 0 ${width * 0.009}px #A3906D, inset 0 0 0 ${width * 0.010}px #907F5E, inset 0 0 0 ${width * 0.012}px #928769, inset 0 0 0 ${width * 0.013}px #383624, inset 0 0 0 ${width * 0.014}px #404037, inset 0 0 0 ${width * 0.015}px #101109, inset 0 0 0 ${width * 0.04}px black`,
        width: '100%',
        height: '100%',
        background: 'rgb(10, 10, 10)',
        zIndex: '-1',
        overflow: 'hidden'
    },
    children: {
        width: `${width * 0.917}px`,
        height: `${width * 1.989}px`,
        overflow: 'scroll',
        borderRadius: `${width / 7.5}px`,
        margin: `${width * 0.0415}px auto`,
    },
    floatinIsland: {
        width: `${width * 0.267}px`,
        height: `${width * 0.078}px`,
        background: 'black',
        borderRadius: `${width * 0.040}px`,
        position: 'absolute',
        top: `${width * 0.064}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '1'
    },
    camera: {
        width: `${width * 0.022}px`,
        height: `${width * 0.022}px`
    },
    buttons: {
        width: `${width * 0.0050}px`,
        position: 'absolute',
        top: `${width * 0.364}px`,
        left: `-${width * 0.0050}px`,
    },
    silencer: {
        width: '100%',
        height: `${width * 0.0729}px`,
        borderRadius: `${width * 0.002}px 0 0 ${width * 0.002}px`,
        border: `${width * 0.001}px solid #9D947A`,
        borderRight: 'none',
        backgroundImage: 'linear-gradient(to bottom, #AEA289 0%, #FFFCE0 2%, #5D5032 4%, #E6D5B4 10%, #E6D5B4 90%, #5D5032 94%, #FFFCE0 98%, #AEA289 100%)',
        boxShadow: `inset ${width * 0.001}px 0 0 #E5D6B4`
    },
    volumeUp: {
        width: '100%',
        height: `${width * 0.144}px`,
        borderRadius: `${width * 0.002}px 0 0 ${width * 0.002}px`,
        border: `${width * 0.001}px solid #9D947A`,
        borderRight: 'none',
        backgroundImage: 'linear-gradient(to bottom, #AEA289 0%, #FFFCE0 2%, #5D5032 4%, #E6D5B4 10%, #E6D5B4 90%, #5D5032 94%, #FFFCE0 98%, #AEA289 100%)',
        boxShadow: `inset ${width * 0.001}px 0 0 #E5D6B4`,
        position: 'absolute',
        top: `${width * 0.137}px`
    },
    volumeDown: {
        width: '100%',
        height: `${width * 0.144}px`,
        borderRadius: `${width * 0.002}px 0 0 ${width * 0.002}px`,
        border: `${width * 0.001}px solid #9D947A`,
        borderRight: 'none',
        backgroundImage: 'linear-gradient(to bottom, #AEA289 0%, #FFFCE0 2%, #5D5032 4%, #E6D5B4 10%, #E6D5B4 90%, #5D5032 94%, #FFFCE0 98%, #AEA289 100%)',
        boxShadow: `inset ${width * 0.001}px 0 0 #E5D6B4`,
        position: 'absolute',
        top: `${width * 0.316}px`
    },
    powerButton: {
        width: `${width * 0.0050}px`,
        height: `${width * 0.225}px`,
        position: 'absolute',
        top: `${width * 0.605}px`,
        right: `-${width * 0.0050}px`,
        borderRadius: `${width * 0.002}px ${width * 0.002}px 0 0`,
        border: `${width * 0.001}px solid #9D947A`,
        borderRight: 'none',
        backgroundImage: 'linear-gradient(to bottom, #AEA289 0%, #FFFCE0 2%, #5D5032 4%, #E6D5B4 10%, #E6D5B4 90%, #5D5032 94%, #FFFCE0 98%, #AEA289 100%)',
        boxShadow: `inset -${width * 0.001}px 0 0 #E5D6B4`,
    },
    statusBar: {
        backgroundColor: 'white'
    },
    timeContainer: {

    },
    iconContainer: {
        
    }
})

interface StyleProps {
    width: number;
}
