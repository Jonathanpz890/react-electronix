import React, { useEffect, useState } from "react";
import { useStyles, StartupProps } from '.'

export const Startup = ({
    show
}: StartupProps) => {
    const [macShow, setMacShow] = useState(show)
    const [animation, setAnimation] = useState(show)
    const styles = useStyles({ animation });

    useEffect(() => {
        if (show) {
            setTimeout(() => setAnimation(false), 2000)
            setTimeout(() => setMacShow(false), 2500)
        }
    })
    return (
        <>
            {macShow &&
                <div
                    className='startup'
                    //@ts-ignore - using 'position' property should be legal but ts is screaming at me fsr
                    style={styles.startup}
                >
                    <svg style={styles.startupSvg} id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 842.32 1000"><path id="path4" d="M824.67,779.3A544.21,544.21,0,0,1,770.9,876q-42.4,60.45-69.25,83.7-41.49,38.15-89,39.19c-22.78,0-50.25-6.48-82.22-19.62s-61.56-19.57-88.52-19.57q-42.4,0-91,19.57t-78.65,20.67q-45.65,2-91-40.24-29-25.27-72.43-86.67-46.59-65.55-76.6-152.15Q0,627.24,0,539.51,0,439,43.49,366.25q34.19-58.35,91.07-92.12c38-22.53,79-34,123.14-34.75,24.16,0,55.85,7.48,95.23,22.17s64.49,22.21,75.54,22.21c8.27,0,36.28-8.74,83.77-26.16q67.35-24.24,113.85-20.22,126.21,10.19,189.38,99.71Q702.6,405.48,703.74,528.45q1,95.71,69.32,159.07A227.93,227.93,0,0,0,842.32,733Q834,757.11,824.67,779.3ZM631.71,20q0,75-54.69,139.92c-43.95,51.38-97.11,81.08-154.75,76.39a154.5,154.5,0,0,1-1.17-18.95c0-48,20.91-99.39,58-141.4q27.79-31.9,70.68-53.07Q592.58,2.05,630.66,0a181.89,181.89,0,0,1,1.05,20Z" /></svg>
                </div>
            }
        </>
    )
}