"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'

const SmoothScrollWraper = ({children}:{children:React.ReactNode}) => {
    const scrollContainerRef = React.useRef(null);
    useEffect(()=>{
        const initLocomotiveScroll = async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            let locomotiveScroll: any;

            if (scrollContainerRef?.current) {
                locomotiveScroll = new LocomotiveScroll({
                    el: scrollContainerRef.current,
                    smooth: true,
                });
            }

            return () => {
                if (locomotiveScroll) {
                    locomotiveScroll.destroy();
                }
            };
        };

        initLocomotiveScroll();
    }, []);
  return (
    <div ref={scrollContainerRef} >{children}</div>
  )
}

export default SmoothScrollWraper