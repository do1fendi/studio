import React, { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";

type videoType = {
  vidUrl: string;
};
const Video = forwardRef((props: videoType, ref) => {
  const [isPlay, setIsPlay] = useState(false);
  const close = () => {
    setIsPlay(false);
  };

    // useImperativeHandle(ref, () =>{
    //    open(){
    //       setIsPlay(true);
    //     };
    // },[]);

  return (
    <>
      {isPlay ? (
        <div className="fixed top-0 left-0 right-0 h-screen w-screen flex justify-center items-center bg-gray-900 z-50">
          <button
            className="fixed top-5 right-10 text-gray-200 text-5xl"
            onClick={() => close()}
          >
            X
          </button>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZHpHg1kPBCs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        ""
      )}
    </>
  );
});

export default Video;
