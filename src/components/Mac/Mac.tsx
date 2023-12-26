import React, { useEffect, useState } from 'react';
import { MacProps, useStyles } from '.';
import { Startup } from './components/Startup';

export const Mac = ({
    startup,
    animateOpen,
    open,
    width,
    openAngle,
    children,
    perspective = 120
}: MacProps) => {
    const [macOpen, setMacOpen] = useState(animateOpen ? false : open)
    const styles = useStyles({ width, macOpen, openAngle, perspective })

    useEffect(() => {
        if (animateOpen) {
            setTimeout(() => setMacOpen(open), 100)
        } else {
            setMacOpen(open)
        }
    }, [open, animateOpen])
    return (
        <div style={styles.mac}>
            <div className='top-portion' style={styles.topPortion}>
                <div className='lid' style={styles.lid}></div>
                <div className='top' style={styles.top}>
                    <div className='screen' style={styles.screen}>
                        <div className="camera" style={styles.camera}></div>
                        <Startup show={startup} />
                        <div style={styles.screenContent}>
                            {children}
                        </div>
                    </div>
                    <div className='engraving' style={styles.engraving}>Macbook Pro</div>
                    <div className='after-screen' style={styles.afterScreen}></div>
                </div>
            </div>
            <div className='bottom-portion' style={styles.bottomPortion}>
                <div className='bottom-cover' style={styles.bottomCover}></div>
                <div className='bottom' style={styles.bottom}>
                    <div className="opener" style={styles.opener}></div>
                    <div className="bottom-after" style={styles.bottomAfter}></div>
                </div>
            </div>
        </div>
    )
}