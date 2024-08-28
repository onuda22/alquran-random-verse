import React from "react";
import "../Verses.css";
import "../../assets/fonts/Alquran_Ali/AlQuranAli-L3A83.ttf";
import "../../assets/fonts/Ayat_Alquran/AyatQuran11-m2Lj9.ttf";

function VerseCard({
  text,
  translation,
  tafsir,
  surahName,
  translationName,
  surahNumber,
  randomAyat,
}) {
  return (
    <figure className="content">
      <div className="card_content">
        <p>
          <span style={{ fontFamily: "AlQuran", fontSize: "40px" }}>
            {text}
          </span>
        </p>
        <div className="translate_indo">
          <p>~ {translation} ~</p>
        </div>
        <div className="line" />
        <div className="tafsir">
          <p>{tafsir}</p>
        </div>
        <figcaption>
          Al-Qur'an |{"  "}
          <cite>
            {surahName} ({translationName})
          </cite>
          {"  "}| {surahNumber} : {randomAyat}
        </figcaption>
      </div>
    </figure>
  );
}

export default VerseCard;
