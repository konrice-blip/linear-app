'use client';

import { useRef } from 'react';
import styles from './BuildInt.module.css';

export default function BuildInt() {
    const boxRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = boxRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        boxRef.current.style.setProperty('--x', `${x}px`);
        boxRef.current.style.setProperty('--y', `${y}px`);
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.bgTransition}
                ref={boxRef}
                onMouseMove={handleMouseMove}
            >
                <div className={styles.containerBox}>
                    <span className={styles.plus}>+</span>
                </div>
                <div className={styles.text}>
                    <h2 className={styles.title}>Build your own integration</h2>
                    <p className={styles.desc}>Create your own integration with Linear’s API <br/> and submit it to the directory.</p>
                    <button className={styles.btn}>Start Building</button>
                </div>
            </div>
        </div>
    );
}