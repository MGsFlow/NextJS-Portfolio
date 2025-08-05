'use client'
import React, { useState } from 'react'
import '@/css/MainCenterText.css'
import BlurText from './BlurText'

const MainCenterText = () => {
    const [currentText, setCurrentText] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    
    const texts = [
        "Who is Next?",
        "미안 that's me",
        "Who are you?",
        "I am",
        "Capital MGs trendsetter",
        "역사에 남은 fronter",
        "Welcome to my flow!",
    ];

    const handleAnimationComplete = () => {
        if (currentText < texts.length - 1) {
            // 마지막 텍스트가 아니면 다음으로
            setTimeout(() => {
                setCurrentText(prev => prev + 1);
            }, 2000);
        } else {
            // 마지막 텍스트면 완료 표시
            setIsComplete(true);
        }
    };

    return (
        <div className="main-center-container">
            <div className="text-content">
                {!isComplete && (
                    <BlurText
                        key={currentText}
                        text={texts[currentText]}
                        delay={200}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-3xl-large mb-8"
                    />
                )}
                
                {isComplete && (
                    <div className="text-3xl-large mb-8">
                        {texts[texts.length - 1]}
                    </div>
                )}
            </div>
            
            {isComplete && (
                <div className="button-container">
                    <button className="btn btn-primary">
                        Get Started
                    </button>
                    <button className="btn btn-secondary">
                        Learn More
                    </button>
                </div>
            )}
        </div>
    )
}

export default MainCenterText