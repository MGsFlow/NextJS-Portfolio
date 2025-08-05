'use client'
import Image from "next/image";
import styles from "./page.module.css";
import GalaxyBackground from "@/component/GalaxyBackground";
import Hyperspeed from "@/component/HyperspeedBackground";
import Orb from "@/component/OrbBackground";
import ProfileCard from "@/component/ProfileCard";
import CardSwap, { Card } from '@/component/CardSwap'
import SplashCursor from "@/component/SplashCursor";
import MagicBento from "@/component/MagicBento";


export default function Home() {
  return (
    // <div style={{ width: '100vw', height: '100vh', position: 'relative' , overflow: 'hidden'}}>
    //   {/* 검은색 배경 */}
    //   {/* <div style={{ 
    //     position: 'absolute', 
    //     top: 0, 
    //     left: 0, 
    //     width: '100%', 
    //     height: '100%', 
    //     backgroundColor: 'black',
    //     zIndex: 1 
    //   }} /> */}
      
    //   {/* Galaxy 배경 */}
    //   {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
    //     <GalaxyBackground 
    //       transparent={true}
    //       twinkleIntensity={1}
    //     />
    //   </div> */}
      
    //   {/* Hyperspeed 배경 */}
    //   {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 4 }}>
    //     <Hyperspeed
    //       effectOptions={{
    //         distortion: 'turbulentDistortion',
    //         length: 400,
    //         roadWidth: 10,
    //         islandWidth: 2,
    //         lanesPerRoad: 4,
    //         fov: 90,
    //         fovSpeedUp: 150,
    //         speedUp: 2,
    //         carLightsFade: 0.4,
    //         totalSideLightSticks: 20,
    //         lightPairsPerRoadWay: 40,
    //         shoulderLinesWidthPercentage: 0.05,
    //         brokenLinesWidthPercentage: 0.1,
    //         brokenLinesLengthPercentage: 0.5,
    //         lightStickWidth: [0.12, 0.5],
    //         lightStickHeight: [1.3, 1.7],
    //         movingAwaySpeed: [60, 80],
    //         movingCloserSpeed: [-120, -160],
    //         carLightsLength: [400 * 0.03, 400 * 0.2],
    //         carLightsRadius: [0.05, 0.14],
    //         carWidthPercentage: [0.3, 0.5],
    //         carShiftX: [-0.8, 0.8],
    //         carFloorSeparation: [0, 5],
    //         colors: {
    //           roadColor: 0x080808,
    //           islandColor: 0x0a0a0a,
    //           background: 0x000000,
    //           shoulderLines: 0xFFFFFF,
    //           brokenLines: 0xFFFFFF,
    //           leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
    //           rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
    //           sticks: 0x03B3C3,
    //         }
    //       }}
    //     />
    //   </div> */}

    //   {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}>
    //     <Orb 
    //        hoverIntensity={0.5}
    //        rotateOnHover={true}
    //        hue={0}
    //        forceHoverState={false}
    //     />
    //   </div> */}

    //   {/* <div style={{ width: '500px', height: '500px' }}>
    //     <ProfileCard 
    //       name="Javi A. Torres"
    //       title="Software Engineer"
    //       handle="javicodes"
    //       status="Online"
    //       contactText="Contact Me"
    //       avatarUrl="/mgflow.png"
    //       showUserInfo={true}
    //       enableTilt={true}
    //       enableMobileTilt={false}
    //       onContactClick={() => console.log('Contact clicked')}
    //       showBehindGradient={false}
    //       iconUrl = '/dot-icon.png'
          
    //     />
    //   </div> */}

      
      
    // </div>

    // <div style={{ 
    //   height: '600px', 
    //   position: 'relative', 
    //   width: '1200px', 
    //   overflow: 'hidden',
    //   background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    //   display: 'flex',
    //   alignItems: 'center',
    //   padding: '0 80px'
    // }}>
    //   {/* 왼쪽 텍스트 */}
    //   <div style={{ 
    //     flex: 1, 
    //     color: 'white',
    //     zIndex: 10
    //   }}>
    //     <h1 style={{
    //       fontSize: '48px',
    //       fontWeight: '700',
    //       margin: '0 0 16px 0',
    //       lineHeight: '1.2'
    //     }}>
    //       Card stacks have never<br />
    //       looked so good
    //     </h1>
    //     <p style={{
    //       fontSize: '18px',
    //       color: 'rgba(255, 255, 255, 0.8)',
    //       margin: '0'
    //     }}>
    //       Just look at it go!
    //     </p>
    //   </div>

    //   {/* 오른쪽 카드 스택 */}
    //   <div style={{ 
    //     flex: 1, 
    //     position: 'relative',
    //     height: '100%'
    //   }}>
    //     <CardSwap
    //       cardDistance={60}
    //       verticalDistance={70}
    //       delay={5000}
    //       pauseOnHover={false}
    //     >
    //       <Card>
    //         <div className="card-header">
    //           <div className="card-icon">
    //             &lt; /&gt;
    //           </div>
    //           <h3 className="card-title">Reliable</h3>
    //         </div>
    //         <div className="card-content">
    //           <div style={{ fontSize: '24px', color: '#00d4ff' }}>
    //             ✓
    //           </div>
    //         </div>
    //       </Card>
          
    //       <Card>
    //         <div className="card-header">
    //           <div className="card-icon" style={{ 
    //             width: '20px', 
    //             height: '20px', 
    //             borderRadius: '50%',
    //             background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)'
    //           }}>
    //             ●
    //           </div>
    //           <h3 className="card-title">Smooth</h3>
    //         </div>
    //         <div className="card-content">
    //           <div style={{ fontSize: '24px', color: '#4ecdc4' }}>
    //             ~
    //           </div>
    //         </div>
    //       </Card>
          
    //       <Card>
    //         <div className="card-header">
    //           <div className="card-icon" style={{ 
    //             fontSize: '18px',
    //             color: '#ff6b6b'
    //           }}>
    //             ⚙
    //           </div>
    //           <h3 className="card-title">Customizable</h3>
    //         </div>
    //         <div className="card-content">
    //           <div className="card-number">3</div>
    //         </div>
    //       </Card>
    //     </CardSwap>
    //     <SplashCursor />
    //   </div>
    // </div>

    <MagicBento 
      textAutoHide={true}
      enableStars={true}
      enableSpotlight={true}
      enableBorderGlow={true}
      enableTilt={true}
      enableMagnetism={true}
      clickEffect={true}
      spotlightRadius={300}
      particleCount={12}
      glowColor="132, 0, 255"
    />
  );
}
