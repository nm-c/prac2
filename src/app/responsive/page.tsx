"use client";

import { useState, useEffect } from 'react';
import DesktopComponent from './components/DesktopComponent';
import MobileComponent from './components/MobileComponent';
import { Etf } from './components/type';

export default function ResponsiveComponent() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px 이하를 모바일로 가정
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [data, setData] = useState<Etf[]>([]);

  useEffect(() => {
    console.log('fetching data...');
    fetch('https://carrotade.com/ytmscanner/published/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  // 화면 크기에 따라 다른 컴포넌트 렌더링
  return isMobile ? <MobileComponent data={data} /> : <DesktopComponent data={data} />;
}