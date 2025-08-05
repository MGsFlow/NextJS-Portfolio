'use client'
import Image from "next/image";
import styles from "./page.module.css";
import GalaxyBackground from "@/component/GalaxyBackground";
import Hyperspeed from "@/component/HyperspeedBackground";
import Orb from "@/component/OrbBackground";
import ProfileCard from "@/component/ProfileCard";

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' , overflow: 'hidden'}}>
      {/* 검은색 배경 */}
      {/* <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'black',
        zIndex: 1 
      }} /> */}
      
      {/* Galaxy 배경 */}
      {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
        <GalaxyBackground 
          transparent={true}
          twinkleIntensity={1}
        />
      </div> */}
      
      {/* Hyperspeed 배경 */}
      {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 4 }}>
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div> */}

      {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}>
        <Orb 
           hoverIntensity={0.5}
           rotateOnHover={true}
           hue={0}
           forceHoverState={false}
        />
      </div> */}

      <div style={{ width: '500px', height: '500px' }}>
        <ProfileCard 
          name="Javi A. Torres"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/mgflow.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
          showBehindGradient={false}
          iconUrl = '/dot-icon.png'
          
        />
      </div>
      
    </div>
  );
}
