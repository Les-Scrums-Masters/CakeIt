import React, { useState, useEffect } from "react";

/**
 * Paramêtrage de son : composant qui permet de muter et démuter un son
 *
 * @component MusicSound
 *
 * @param  {Howl} sound  Son à manipuler
 * @param  {string} [additionnalStyle]  Css
 *
 * @example
 * <MusicSound sound={props.sound} />
 *
 * @return {JSX} Le rendu jsx du paramêtrage de son
 */

function MusicSound(props) {
  const size = 35;

  const logoPlaying = (
    <svg
      className="decoration-black opacity-50 hover:opacity-100"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="#291334"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M147.6 9.60009C147.599 8.23949 147.296 6.89601 146.714 5.66644C146.131 4.43687 145.283 3.35183 144.231 2.48948C143.178 1.62713 141.948 1.00894 140.628 0.679462C139.308 0.349981 137.931 0.317407 136.597 0.584084L44.5967 18.9841C42.5119 19.4008 40.6357 20.5267 39.2873 22.1704C37.9388 23.8141 37.2012 25.874 37.1999 28.0001V111.849C34.1839 111.146 31.0967 110.794 27.9999 110.8C12.7555 110.8 0.399902 119.034 0.399902 129.2C0.399902 139.366 12.7555 147.6 27.9999 147.6C43.2443 147.6 55.5999 139.366 55.5999 129.2V53.9441L129.2 39.2241V93.4489C126.184 92.7461 123.097 92.3942 120 92.4001C104.756 92.4001 92.3999 100.634 92.3999 110.8C92.3999 120.966 104.756 129.2 120 129.2C135.244 129.2 147.6 120.966 147.6 110.8V9.60009Z"
        fill="#291334"
      />
    </svg>
  );

  const logoStop = (
    <svg
      className="decoration-black opacity-50 hover:opacity-100"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="#291334"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="37.5938"
        y1="56.3165"
        x2="182.179"
        y2="148.428"
        stroke="#291334"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.714 31.6664C173.296 32.896 173.599 34.2395 173.6 35.6001V123.255L155.2 111.533V65.2241L99.877 76.2887L63.2594 52.9607C63.4596 51.2094 64.16 49.5444 65.2873 48.1704C66.6357 46.5267 68.5119 45.4008 70.5967 44.9841L162.597 26.5841C163.931 26.3174 165.308 26.35 166.628 26.6795C167.948 27.0089 169.178 27.6271 170.231 28.4895C171.283 29.3518 172.131 30.4369 172.714 31.6664ZM63.1999 65.9654V137.849C60.1839 137.146 57.0967 136.794 53.9999 136.8C38.7555 136.8 26.3999 145.034 26.3999 155.2C26.3999 165.366 38.7555 173.6 53.9999 173.6C69.2443 173.6 81.5999 165.366 81.5999 155.2V79.9441L84.2958 79.4049L63.1999 65.9654ZM145.51 118.403C130.492 118.577 118.4 126.743 118.4 136.8C118.4 146.966 130.756 155.2 146 155.2C161.244 155.2 173.6 146.966 173.6 136.8V136.298L145.51 118.403Z"
        fill="#291334"
      />
    </svg>
  );

  const [musicLogo, setMusicLogo] = useState(logoPlaying);

  useEffect(() => {
    // Affiche le bon état de la musique, (attente pour que la musique ai le temps de charger)
    setTimeout(() => {
      if (props.sound !== null) {
        if (!props.sound.playing()) {
          setMusicLogo(logoStop);
        }
      }
    }, 150);
  }, [setMusicLogo, logoStop, props.sound]);

  const playStop = () => {
    if (props.sound.playing()) {
      props.sound.pause();
      setMusicLogo(logoStop);
    } else {
      props.sound.play();
      setMusicLogo(logoPlaying);
    }
  };

  return (
    <button
      type="button"
      className={" " + props.additionnalStyle}
      onClick={() => {
        playStop();
      }}
    >
      {musicLogo}
    </button>
  );
}

export default MusicSound;
