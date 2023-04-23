export const useStyles = ({ 
    width, 
    macOpen, 
    openAngle
}: StylesProps): Styles => ({
    mac: {
        width,
        height: width * 0.683,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '2000px',
        perspectiveOrigin: '50% 100%',
        transition: 'right 1s',
        margin: '0 150px',
    },
    topPortion: {
        transformStyle: 'preserve-3d',
        transform: `rotateX(-${macOpen ? openAngle ?? 0 : 90}deg)`,
        transformOrigin: '50% 100%',
        transition: 'transform 0.6s  cubic-bezier(0.35, 0.01, 1, 0.99)'
    },
    lid: {
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height: width * 0.009,
        transform: `translate3d(0, 0, -${width * 0.009}px ) rotateX(90deg) scale(1, 1)`,
        transformOrigin: '50% 0',
        backfaceVisibility: 'hidden',
        borderTopRightRadius: `${width / 8}px ${width * 0.0075}px`,
        borderTopLeftRadius: `${width / 8}px ${width * 0.0075}px`,
        borderBottomRightRadius: 2,
        borderBottomLeftRadius: 2,
        borderBottom: '1px solid black',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(92,92,92,1)',
        background: 'linear-gradient(to right, rgba(92,92,92,1) 0%, rgba(200,200,200,1) 2%, rgba(105,105,105,1) 4%, rgba(200,200,200,1) 10%, rgba(200,200,200,1) 90%, rgba(112,112,112,1) 94%, rgba(200,200,200,1) 98%, rgba(112,112,112,1) 100%)',
        filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c5c5c', endColorstr='#707070', GradientType=1 )`
    },
    top: {
        width,
        height: width * 0.683,
        background: 'black',
        borderRadius: `${width / 22.8}px ${width / 22.8}px 0 0`,
        border: `${width / 300}px solid rgb(129, 129, 129)`,
        borderBottom: 'none',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        top: 1,
    },
    engraving: {
        zIndex: 1,
        color: 'rgb(178, 178, 178)',
        fontSize: `${width * 0.017075}px`,
        position: 'absolute',
        top: `${(width * 0.683) - (width * 0.023222)}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: `'SF Pro Display', sans-serif`

    },
    screen: {
        width: `${width * 0.95}px`,
        height: `${width * 0.59421}px`,
        background: 'rgb(13, 13, 13)',
        margin: '0 auto',
        marginTop: `${width * 0.04997560976}px`,
        position: 'relative',
        color: 'white'
    },
    camera: {
        position: 'absolute',
        width: width / 160, 
        height: width / 160,
        borderRadius: '50%',
        backgroundImage: 'linear-gradient(to bottom right, rgb(34, 33, 33), black)',
        top: -(width * 0.683 * 0.073170731707317) / 2,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: `${width / 266.66} solid rgb(20, 20, 20)`,
    },
    innerScreen: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },
    screenContent: {
        width: '100%',
        height: '100%'
    },
    afterScreen: {
        background: 'rgb(28, 28, 28)',
        width: '100%',
        height: `${width * 0.023222}px`,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    bottomPortion: {
        transform: 'rotateX(-90deg)',
        position: 'absolute',
        top: 0,
        left: 0,
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 100%',
        display: 'inline-block',
        transition: 'transform 0.5s'
    },
    bottomCover: {
        width,
        height: width * 0.683,
        backfaceVisibility: 'hidden'
    },
    bottom: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'rotateX(90deg)',
        transformOrigin: '50% 0',
        width,
        borderRadius: '2px 2px 0 0',
        height: width * 0.0249,
        backgroundColor: 'rgba(92,92,92,1)',
        background: 'linear-gradient(to right, rgba(92,92,92,1) 0%, rgba(200,200,200,1) 2%, rgba(105,105,105,1) 4%, rgba(200,200,200,1) 10%, rgba(200,200,200,1) 90%, rgba(112,112,112,1) 94%, rgba(200,200,200,1) 98%, rgba(112,112,112,1) 100%)',
        filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c5c5c', endColorstr='#707070', GradientType=1 )`
    },
    opener: {
        width: width * 0.15,
        height: (width * 0.023905) * 0.5,
        background: 'rgb(207, 207, 207)',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: `0 0 ${width * 0.02}px ${width * 0.02}px`,
        boxShadow: 'inset 0 3px 10px -2px black'
    },
    bottomAfter: {
        width: '100%',
        height: '80%',
        background: 'rgb(113, 113, 113)',
        position: 'absolute',
        top: 'calc(100% - 1px)',
        left: 0,
        borderBottomRightRadius: `${width * 0.25}px 100%`,
        borderBottomLeftRadius: `${width * 0.25}px 100%`,
        boxShadow: 'inset 0 -5px 10px black, 0 5px 10px',
    }

})

interface StylesProps {
    width: number;
    macOpen: boolean;
    openAngle: number;
}

interface Styles {
    [key: string]: React.CSSProperties;
}