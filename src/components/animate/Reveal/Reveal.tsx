import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type RevealProps = {
    children: JSX.Element;
    width?: 'fit-content' | '100%';
};

const Reveal: React.FC<RevealProps> = (props) => {
    const { children } = props;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControl = useAnimation();
    const slideControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start('visible');
            slideControl.start('visible');
        } else {
            mainControl.start('hidden');
            slideControl.start('hidden');
        }
    }, [mainControl, isInView, slideControl]);

    return (
        <div ref={ref} style={{ height: '100%' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControl}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{ height: '100%' }}
            >
                {children}
            </motion.div>

            {/* <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: '100%' }
                }}
                initial='hidden'
                animate={slideControl}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: '#fff2ea',
                    zIndex: 1
                }}
            ></motion.div> */}
        </div>
    );
};

export default Reveal;
