import { Button } from "../AnimatedComponents";
import "./Home.css";

const Home = () => {
  return(
    <>
      <section className="banner flex flex-col items-center justify-between min-h-fit min-w-full">
        <div className="flex flex-row items-center justify-between bg-bg-1 min-h-fit min-w-full">
          <div className="banner-left m-20 flex flex-col items-start justify-start">
            <p className="banner-title font-dmMono text-4xl p-4 border-none rounded-lg bg-bg-2">Face Emotion Recognition</p>
            <p className="banner-description font-dmMono text-base p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro quasi iste dolorem quis, debitis adipisci, praesentium earum quibusdam modi in alias. Optio consequatur nesciunt, ipsum earum dignissimos in dolorem?
            </p>
            <div className="banner-run mt-8 flex flex-row">
              <Button
                onClick={() => console.log("clicked")}
                rotateAnimation={false}
              >
                <div className="banner-run-github rounded-lg border-none px-4 py-2 mr-8 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(254,143,143,1)]">
                  Github
                  <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </div>
              </Button>
              <button className="banner-run-github px-4 py-2 mr-8 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(254,143,143,1)]">
                Github
                <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </button>
              <button className="banner-run-run px-4 py-2 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(254,143,143,1)]">
                Run
                <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="17" y1="7" x2="7" y2="17" />
                  <polyline points="8 7 17 7 17 16" />
                </svg>
              </button>
            </div>
          </div>
          <div className="banner-right m-20">
            {/* <img width={640} height={480} src="" alt=""></img> */}
            <svg width={640} height={480} viewBox="0 0 24 24" strokeWidth="1" stroke="gray" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="min-w-full h-24 bg-gradient-to-b from-bg-1 to-fg-1"></div>
      </section>
      <section className="face-emotion flex flex-row items-center justify-between p-8 bg-fg-1 min-h-fit min-w-full">
        <div className="face-emotion-left m-20">
          <img width={640} height={480} src="" alt=""></img>
        </div>
        <div className="face-emotion-right m-20 flex flex-col items-start justify-start">
          <p className="face-emotion-title font-dmMono text-2xl p-2 border-none rounded-lg bg-bg-1">Real Time Emotion Recognition</p>
          <p className="face-emotion-description font-dmMono text-base pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum nam molestiae quisquam? Natus dolore corrupti facere quis. Doloribus quia laborum rem vero similique officiis sunt placeat quibusdam unde minima.
          </p>
        </div>
      </section>
      <section className="emotion-analysis flex flex-row items-center justify-between p-8 bg-fg-1 min-h-fit min-w-full">
        <div className="emotion-analysis-left m-20">
          <img width={640} height={480} src="" alt=""></img>
        </div>
        <div className="emotion-analysis-right m-20 flex flex-col items-start justify-start">
          <p className="emotion-analysis-title font-dmMono text-2xl p-2 border-none rounded-lg bg-bg-1">Real Time Analysis</p>
          <p className="emotion-analysis-description font-dmMono text-base pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, id, voluptatum accusamus sunt doloremque unde itaque excepturi odit voluptas inventore ut ad, enim quae repellendus eaque nemo tempora velit minima!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;