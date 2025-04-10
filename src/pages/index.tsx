import { useState } from "react";
import Typist from "react-typist-component";
import { MainLayout } from "../components/layout/MainLayout";


export async function getStaticProps() {
  return {
    props: {},
  };
}

function Home() {
  return (
    <MainLayout>
      <div className="container px-10 mx-auto">
        <div className="flex h-screen">
          <div className="self-end w-full pb-20 sm:w-1/2">
            <h1 className="mb-10 leading-relaxed font-body">
              We are making <br />
              <Typist
                typingDelay={100}
                cursor={<span className="no-underline cursor">|</span>}
                loop={true}
              >
                <span>
                  onchain
                  <Typist.Delay ms={1500} />
                  <Typist.Backspace count={8} />
                  <Typist.Delay ms={1500} />
                  eternal gaming
                  <Typist.Delay ms={1500} />
                  <Typist.Backspace count={14} />
                  <Typist.Delay ms={1500} />
                  composable
                  <Typist.Delay ms={4000} />
                </span>
              </Typist>
              <br />
              realities.
            </h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
