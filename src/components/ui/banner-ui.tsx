"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Example() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-2xl w-full text-center rounded-2xl py-12 md:py-16 font-montserrat bg-black/30 backdrop-blur-sm border border-white/20">
                <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">Ошибка 404. Страница не найдена.</h1>
                <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-white"></div>
                <p className="text-sm md:text-base text-white max-w-xl">
                    Нажмите на кнопку ниже, чтобы вернуться на<br />
                    существующую страницу.
                </p>
                <button 
                    onClick={() => window.location.href = '/'}
                    className="px-10 py-3 mt-4 text-sm bg-white hover:bg-gray-100 hover:shadow-lg transition-all duration-300 rounded-full cursor-pointer transform hover:scale-105 active:scale-95"
                >
                    Вернуться
                </button>
            </section>
        );
    }

    return (
        <>
            <motion.section 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                    duration: 0.8, 
                    delay: 0.3, 
                    ease: "easeOut"
                }}
                className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-2xl w-full text-center rounded-2xl py-12 md:py-16 font-montserrat bg-black/30 backdrop-blur-sm border border-white/20"
            >
                {/* Заголовок с анимацией - появляется после плашки */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="text-2xl md:text-3xl font-medium text-white max-w-2xl"
                >
                    Ошибка 404. Страница не найдена.
                </motion.h1>
                
                {/* Разделитель с анимацией */}
                <motion.div 
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-white"
                />
                
                {/* Описание с анимацией */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                    className="text-sm md:text-base text-white max-w-xl"
                >
                    Нажмите на кнопку ниже, чтобы вернуться на<br />
                    существующую страницу.
                </motion.p>
                
                {/* Кнопка с анимацией */}
                <motion.button 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: 1.9,
                        ease: "easeOut"
                    }}
                    onClick={() => window.location.href = '/'}
                    className="px-10 py-3 mt-4 text-sm bg-white hover:bg-gray-100 hover:shadow-lg transition-all duration-300 rounded-full cursor-pointer transform hover:scale-105 active:scale-95"
                >
                    Вернуться
                </motion.button>
            </motion.section>
        </>
    );
};








