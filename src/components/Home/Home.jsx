import { Link } from "react-router-dom";
import { Button } from "../AnimatedComponents";
import "./Home.css";
import emotionRecognitionChart from "../../assets/emotionRecognitionChart.jpg";
import overallEmotionAnalysis from "../../assets/overallEmotionAnalysis-1.jpg";

const Home = () => {
  return(
    <>
      <section className="banner w-full flex flex-col items-center justify-between min-h-fit">
        <div className="flex flex-col-reverse md:flex-row items-center justify-end md:justify-between bg-bg-1 lg:min-h-screen min-w-full">
          <div className="banner-left w-11/12 mt-8 md:ml-20 flex flex-col items-start justify-start">
            <p className="banner-title font-dmMono text-3xl lg:text-5xl text-gray-600 p-2 lg:p-4 border-none rounded-lg bg-bg-2">Face Emotion Recognition</p>
            <p className="banner-description font-dmMono text-lg lg:text-2xl text-gray-600 mt-4 ml-2">
              Recognizes the faces in a Video Stream.
            </p>
            <p className="banner-description font-dmMono text-lg lg:text-2xl text-gray-600 ml-2">
              Can also detect the facial expressions.
            </p>
            <div className="banner-run mt-8 flex flex-row">
              <a href={"https://github.com/Eessh/face-emotion-recognition"} target={"_blank"} rel="noreferrer">
                <Button
                  onClick={() => {}}
                  rotateAnimation={false}
                >
                  <div className="banner-run-github rounded-lg border-none px-4 py-2 mr-8 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all drop-shadow-[0_5px_4px_rgba(254,143,143,1)] hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(254,143,143,1)]">
                    <span className="text-gray-700 text-lg">Github</span>
                    <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </div>
                </Button>
              </a>
              <Link to={"/dashboard"}>
                <Button
                  onClick={() => {}}
                  rotateAnimation={false}
                >
                  <div className="banner-run-github rounded-lg border-none px-4 py-2 mr-8 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all drop-shadow-[0_5px_4px_rgba(254,143,143,1)] hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(254,143,143,1)]">
                    <span className="text-gray-700 text-lg">Run</span>
                    <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="17" y1="7" x2="7" y2="17" />
                      <polyline points="8 7 17 7 17 16" />
                    </svg>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="banner-right mt-10 lg:mt-30 md:mr-20">
            <svg className="w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]" viewBox="0 0 24 24" strokeWidth="1" stroke="gray" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
              <path d="M4 16v2a2 2 0 0 0 2 2h2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v2" />
              <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
              <line x1="9" y1="10" x2="9.01" y2="10" />
              <line x1="15" y1="10" x2="15.01" y2="10" />
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
            </svg>
          </div>
        </div>
        <div className="min-w-full h-24 bg-gradient-to-b from-bg-1 to-bg-2"></div>
      </section>


      <section className="face-emotion w-full flex flex-col lg:flex-row items-center lg:pt-16 justify-start lg:justify-between lg:pr-10 bg-bg-2">
        <div className="face-emotion-left w-full h-auto flex flex-row items-center justify-center lg:ml-20 flex-1">
          <img className="w-11/12 lg:w-[640px] lg:h-[480px]" src={emotionRecognitionChart} alt=""></img>
        </div>
        <div className="face-emotion-right mt-4 w-11/12 lg:mt-20 flex-1 flex flex-col items-start justify-start">
          <p className="face-emotion-title font-dmMono text-2xl lg:text-3xl p-2 border-none rounded-lg text-gray-600 bg-bg-1">Real Time Emotion Recognition</p>
          <p className="face-emotion-description font-dmMono text-base lg:text-lg text-gray-600 ml-2 mt-2">
            Detects the faces from the Video Stream.
          </p>
          <p className="face-emotion-description font-dmMono text-base lg:text-lg text-gray-600 ml-2">
            Recognizes the facial landmarks.
          </p>
          <p className="face-emotion-description font-dmMono text-base lg:text-lg text-gray-600 ml-2">
            Hence predicts the facial expression from the landmarks.
          </p>
        </div>
      </section>

      
      <section className="emotion-analysis w-full flex flex-col lg:flex-row items-center pt-16 pb-16 justify-start lg:justify-between lg:pr-10 bg-bg-2">
        <div className="face-emotion-left w-full h-auto flex flex-row items-center justify-center flex-1 lg:ml-20">
          <img className="w-11/12 lg:w-[640px] lg:h-[480px]" src={overallEmotionAnalysis} alt=""></img>
        </div>
        <div className="emotion-analysis-right mt-4 w-11/12 lg:mt-20 flex-1 flex flex-col items-start justify-start">
          <p className="emotion-analysis-title font-dmMono text-2xl lg:text-3xl p-2 border-none rounded-lg text-gray-600 bg-bg-1">Overall Emotion Analysis</p>
          <p className="emotion-analysis-description font-dmMono text-base lg:text-lg text-gray-700 ml-2 mt-2">
            While the webcam is on, the expressions detected will be recorded.
          </p>
          <p className="emotion-analysis-description font-dmMono text-base lg:text-lg text-gray-700 ml-2">
            When the webcam is turned off (for example when the video call is completed), the recorded expressions will be plotted on a Area Chart.
          </p>
          <p className="emotion-analysis-description font-dmMono text-base lg:text-lg text-gray-700 ml-2">
            This is an interactive Area Chart, it is also downloadable :)
          </p>
          <p className="emotion-analysis-description font-dmMono text-base lg:text-lg text-gray-700 ml-2">
            This analysis helps teacher, analyse the student's expressions, mood for one whole video call.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;