"use client"; // เพิ่มบรรทัดนี้

import Head from 'next/head';
import React, { useState } from 'react';
import './select.css';

export default function Page() {
  const [selectedRanks, setSelectedRanks] = useState<string[]>([]);

  const handleRankClick = (rank: string) => {
    // สลับสถานะการเลือก (ถ้าเลือกแล้วจะลบออก ถ้ายังไม่เลือกจะเพิ่มเข้าไป)
    setSelectedRanks((prevSelectedRanks) => 
      prevSelectedRanks.includes(rank)
        ? prevSelectedRanks.filter(r => r !== rank)  // ลบออกถ้าถูกเลือกแล้ว
        : [...prevSelectedRanks, rank]  // เพิ่มเข้าไปถ้ายังไม่ถูกเลือก
    );
  };

  return (
    <div className="container">
      <Head>
        <title>Buyticket</title>
      </Head>

      <div className="header">
        <h1></h1>
      </div>

      {/* Movie Poster Section */}
      <div className="posterSection">
        <div className="posterPlaceholder">
          <p>Movie Poster Here</p>
        </div>
        <div className="detailsSection">
          <h2>Movie Title</h2>
          <p>Director: Name Here</p>
          <p>Genre: Add Genre</p>
          <p>Duration: 110 mins</p>
        </div>
      </div>

      <div className="namerank">
        <div className="ranking">
          <button
            className={`rankButton1 ${selectedRanks.includes('THEATER 1') ? 'selected' : ''}`}
            onClick={() => handleRankClick('THEATER 1')}
          >
            THEATER<br />1
          </button>
          <button
            className={`rankButton2 ${selectedRanks.includes('Normal') ? 'selected' : ''}`}
            onClick={() => handleRankClick('Normal')}
          >
            Normal<br />90 THB
          </button>
          <button
            className={`rankButton2 ${selectedRanks.includes('Premium') ? 'selected' : ''}`}
            onClick={() => handleRankClick('Premium')}
          >
            Premium<br />160 THB
          </button>
          <button
            className={`rankButton3 ${selectedRanks.includes('Honeymoon') ? 'selected' : ''}`}
            onClick={() => handleRankClick('Honeymoon')}
          >
            Honeymoon<br />280 THB
          </button>
        </div>
      </div>

      <div>
        <div className="screen">
          <p>SCREEN</p>
        </div>
      </div>

      <div className="confirmSection">
        <button className="confirmButton">Confirm</button>
      </div>
    </div>
  );
}