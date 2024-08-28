import React, { Component } from "react";
import "./Verses.css";
import QuranApi from "./api/QuranApi";
import Button from "./component/Button";
import VerseCard from "./component/VerseCard";

class Verses extends Component {
  state = {
    surah: {},
    randomAyat: null,
  };

  getSurah = async (id) => {
    const data = await QuranApi.getData(id);
    if (data && !id) {
      this.setState({
        surah: data,
        randomAyat: Math.floor(Math.random() * data.number_of_ayah + 1),
      });
    }
  };

  componentDidMount() {
    this.getSurah();
  }

  render() {
    const { surah, randomAyat } = this.state;
    return (
      <div>
        <h1>Random Qur'an Verses</h1>
        <Button onClick={() => this.getSurah()} className="button">
          Generate
        </Button>
        <VerseCard
          text={surah.text?.[randomAyat]}
          translation={surah.translations?.id?.text?.[randomAyat]}
          tafsir={surah.tafsir?.id?.kemenag?.text?.[randomAyat]}
          surahName={surah.name_latin}
          translationName={surah.translations?.id?.name}
          surahNumber={surah.number}
          randomAyat={randomAyat}
        />
      </div>
    );
  }
}

export default Verses;

/*
function Verses() {
  const [surah, setSurah] = useState([]);
  const [randomAyat, setRandomAyat] = useState();

  const getSurah = async (id) => {
    const data = await QuranApi.getData(id);
    if (data && !id) {
      setSurah(data);
      setRandomAyat(Math.floor(Math.random() * data.number_of_ayah + 1));
    }
  };

  useEffect(() => {
    getSurah();
  }, []);

  return (
    <div>
      <h1>Random Qur'an Verse</h1>
      <button
        onClick={() => {
          getSurah();
        }}
        className="button"
      >
        Generate
      </button>
      <figure className="content">
        <div className="card_content">
          <p>
            <span style={{ fontFamily: "AlQuran", fontSize: "40px" }}>
              {surah.text?.[randomAyat]}
            </span>
          </p>
          <div className="translate_indo">
            <p>~ {surah.translations?.id?.text?.[randomAyat]} ~</p>
          </div>
          <div className="line"></div>
          <div className="tafsir">
            <p>{surah.tafsir?.id?.kemenag?.text?.[randomAyat]}</p>
          </div>

          <figcaption>
            The Holy Qur'an |{" "}
            <cite>
              {surah.name_latin} ({surah.translations?.id?.name})
            </cite>{" "}
            | {surah.number} : {randomAyat}
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Verses;*/
