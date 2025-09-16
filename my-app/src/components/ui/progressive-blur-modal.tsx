"use client";

import React, { useState, useEffect, useRef } from 'react';

// SVG components for cleanliness
const MoreOptionsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white"/>
  </svg>
);

const AddIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.667 11.666H5.66699M11.667 5.66602V17.666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EditIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.0696 4.83911C19 4.76937 18.9173 4.71405 18.8262 4.67631C18.7352 4.63857 18.6376 4.61914 18.539 4.61914C18.4405 4.61914 18.3429 4.63857 18.2518 4.67631C18.1608 4.71405 18.078 4.76937 18.0084 4.83911L17.3544 5.49311C16.9344 5.29256 16.4625 5.22721 16.0038 5.30606C15.5451 5.38491 15.1221 5.60407 14.7931 5.93336L6.83789 13.8879L11.0806 18.1306L19.0366 10.1769C19.3658 9.84782 19.5848 9.42481 19.6635 8.9661C19.7423 8.50738 19.6768 8.03555 19.4761 7.61561L20.1309 6.96086C20.2715 6.82021 20.3505 6.62948 20.3505 6.43061C20.3505 6.23173 20.2715 6.041 20.1309 5.90036L19.0696 4.83911ZM15.8686 11.2216L11.0806 16.0096L8.95964 13.8879L13.7469 9.10061L15.8686 11.2216ZM17.2321 9.85811L17.9746 9.11561C18.0444 9.04595 18.0997 8.96323 18.1374 8.87219C18.1752 8.78114 18.1946 8.68354 18.1946 8.58498C18.1946 8.48642 18.1752 8.38882 18.1374 8.29778C18.0997 8.20673 18.0444 8.12401 17.9746 8.05436L16.9149 6.99386C16.8452 6.92412 16.7625 6.8688 16.6715 6.83106C16.5804 6.79332 16.4828 6.77389 16.3843 6.77389C16.2857 6.77389 16.1881 6.79332 16.0971 6.83106C16.006 6.8688 15.9233 6.92412 15.8536 6.99386L15.1111 7.73636L17.2321 9.85811Z" fill="white" fillOpacity="0.45"/>
        <path d="M4.62207 20.3315L6.21357 14.498L10.4556 18.7408L4.62207 20.3315Z" fill="white" fillOpacity="0.45"/>
    </svg>
);

const MusicIcon = () => (
    <svg style={{marginLeft: '40px'}} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.70039 20.1004C5.20539 20.1004 4.78179 19.9243 4.42959 19.5721C4.07739 19.2199 3.90099 18.796 3.90039 18.3004V5.70039C3.90039 5.20539 4.07679 4.78179 4.42959 4.42959C4.78239 4.07739 5.20599 3.90099 5.70039 3.90039H18.3004C18.7954 3.90039 19.2193 4.07679 19.5721 4.42959C19.9249 4.78239 20.101 5.20599 20.1004 5.70039V18.3004C20.1004 18.7954 19.9243 19.2193 19.5721 19.5721C19.2199 19.9249 18.796 20.101 18.3004 20.1004H5.70039ZM5.70039 18.3004H8.62539V14.2504H8.40039C8.14539 14.2504 7.93179 14.164 7.75959 13.9912C7.58739 13.8184 7.50099 13.6048 7.50039 13.3504V5.70039H5.70039V18.3004ZM15.3754 18.3004H18.3004V5.70039H16.5004V13.3504C16.5004 13.6054 16.414 13.8193 16.2412 13.9921C16.0684 14.1649 15.8548 14.251 15.6004 14.2504H15.3754V18.3004ZM9.97539 18.3004H14.0254V14.2504H13.8004C13.5454 14.2504 13.3318 14.164 13.1596 13.9912C12.9874 13.8184 12.901 13.6048 12.9004 13.3504V5.70039H11.1004V13.3504C11.1004 13.6054 11.014 13.8193 10.8412 13.9921C10.6684 14.1649 10.4548 14.251 10.2004 14.2504H9.97539V18.3004Z" fill="white" fillOpacity="0.45"/>
    </svg>
);

const GradientBlur = () => (
    <div className="gradient-blur">
        {[...Array(8)].map((_, i) => <div key={i}></div>)}
    </div>
);

export const MusicPlayerUI = () => {
    const [isArtistModalActive, setIsArtistModalActive] = useState(false);
    const [isSongModalActive, setIsSongModalActive] = useState(false);
    const [songModalTop, setSongModalTop] = useState(0);
    const [songModalTransform, setSongModalTransform] = useState('translateY(0px)');

    const contentRef = useRef<HTMLDivElement>(null);
    const songOpenRef = useRef<HTMLDivElement>(null);
    
    const anyModalActive = isArtistModalActive || isSongModalActive;

    useEffect(() => {
        const updateSongModalPosition = () => {
            if (songOpenRef.current && contentRef.current) {
                const top = songOpenRef.current.getBoundingClientRect().top - contentRef.current.offsetTop - 2;
                setSongModalTop(top);
            }
        };

        updateSongModalPosition();
        window.addEventListener('resize', updateSongModalPosition);

        return () => {
            window.removeEventListener('resize', updateSongModalPosition);
        };
    }, []);

    const handleArtistToggle = () => {
        setIsArtistModalActive(!isArtistModalActive);
    };

    const handleSongOpen = () => {
        if (songOpenRef.current && contentRef.current) {
            const distanceY = window.innerHeight - songOpenRef.current.getBoundingClientRect().bottom + contentRef.current.offsetTop - 390;
            setSongModalTransform(`translateY(${distanceY}px)`);
        }
        setIsSongModalActive(true);
    };

    const handleSongClose = () => {
        setSongModalTransform('translateY(0px)');
        setIsSongModalActive(false);
    };

    return (
        <main>
            <div className="content-wrapper">
                <div ref={contentRef} className={`content ${anyModalActive ? 'active' : ''}`}>
                    <div className="main-content">
                        <div className="photo-wrapper">
                            <img className="photo" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt="Доктор Дрожжина Карина Тагировна"/>
                            <img className="photo" style={{filter: 'brightness(1.5) saturate(1) blur(48px)', zIndex: 'auto'}} src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt=""/>
                        </div>
                        <div className="main-info">
                            <div className="title-container">
                                <h1>Дрожжина Карина Тагировна</h1>
                                <div className="title-info">
                                    <p className="light">Косметолог</p>
                                    <div className="divider"></div>
                                    <p className="light">15+ лет опыта</p>
                                    <div className="divider"></div>
                                    <p className="light">Эксперт</p>
                                </div>
                            </div>
                            <div className="songs">
                                <div ref={songOpenRef} className="song" onClick={handleSongOpen}>
                                    <p className="bold">Консультация и диагностика</p>
                                    <div className="end">
                                        <MoreOptionsIcon/>
                                        <p className="light">30 мин</p>
                                    </div>
                                </div>
                                <div className="song"><p className="bold">Ботокс и диспорт</p><p className="light">15 мин</p></div>
                                <div className="song"><p className="bold">Контурная пластика</p><p className="light">45 мин</p></div>
                                <div className="song"><p className="bold">Биоревитализация</p><p className="light">30 мин</p></div>
                                <div className="song"><p className="bold">Пилинги</p><p className="light">60 мин</p></div>
                                <div className="song"><p className="bold">Чистка лица</p><p className="light">90 мин</p></div>
                                <div className="song"><p className="bold">Мезотерапия</p><p className="light">45 мин</p></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`song-modal ${isSongModalActive ? 'active' : ''}`} style={{top: `${songModalTop}px`, transform: songModalTransform}}>
                        <div className="song">
                            <p className="bold">Консультация и диагностика</p>
                            <div className="end">
                                <div onClick={handleSongClose}><AddIcon /></div>
                                <p className="light">30 мин</p>
                            </div>
                        </div>
                        <div className="song-modal-info">
                            <div className="song-credits">
                                <EditIcon />
                                <p className="light">Первичная консультация включает в себя <u>подробный анализ</u></p>
                                <MusicIcon />
                                <p className="light">Индивидуальный план лечения <u>для каждого клиента</u></p>
                            </div>
                            <br />
                            <p className="bold">Первичная консультация - это важный этап в процессе лечения и омоложения кожи. Во время консультации я провожу тщательный анализ состояния кожи, выявляю проблемы и составляю индивидуальный план лечения.</p>
                            <br />
                            <p className="bold">Диагностика включает в себя визуальный осмотр, определение типа кожи, выявление возрастных изменений и проблемных зон. На основе полученных данных я подбираю наиболее эффективные процедуры и препараты для достижения желаемого результата.</p>
                            <br />
                            <p className="bold">Каждый клиент уникален, поэтому подход к лечению должен быть индивидуальным. Я учитываю возраст, тип кожи, образ жизни, наличие противопоказаний и пожелания клиента при составлении плана лечения.</p>
                        </div>
                        <GradientBlur />
                    </div>

                    <div className={`modal ${isArtistModalActive ? 'active' : ''}`} style={{display: isSongModalActive ? 'none' : 'flex'}}>
                        <div className="toggle" onClick={handleArtistToggle}>
                           <AddIcon/>
                        </div>
                        <div className="modal-content">
                            <div className="photo-wrapper">
                                <h1>Дрожжина Карина Тагировна</h1>
                                <img className="photo" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt="Доктор Дрожжина Карина Тагировна"/>
                                <img className="photo" style={{filter: 'brightness(1.5) saturate(1) blur(48px)', zIndex: 'auto'}} src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt=""/>
                            </div>
                            <div className="info">
                                <div className="info-top">
                                    <div className="info-top-left">
                                        <p className="genre light">Косметология</p>
                                        <div className="divider"></div>
                                        <p className="light">15+ лет опыта</p>
                                    </div>
                                    <p className="light">1000+ клиентов</p>
                                </div>
                                <p className="bold">
                                    Дрожжина Карина Тагировна - опытный врач-косметолог с более чем 15-летним стажем работы в области эстетической медицины. Специализируется на инъекционных методиках омоложения, аппаратной косметологии и индивидуальном подходе к каждому клиенту. Постоянно совершенствует свои навыки, посещая международные конференции и мастер-классы ведущих специалистов в области косметологии.
                                </p>
                            </div>
                        </div>
                        <GradientBlur/>
                        <div className="shade"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}; 