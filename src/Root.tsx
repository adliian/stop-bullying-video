import React from 'react';
import { Composition, Sequence, Audio, staticFile } from 'remotion';
import { Background } from './components/Background';
import { Scene1Opening } from './scenes/Scene1Opening';
import { Scene2Definition } from './scenes/Scene2Definition';
import { Scene3Types } from './scenes/Scene3Types';
import { Scene4Impacts } from './scenes/Scene4Impacts';
import { Scene5Prevention } from './scenes/Scene5Prevention';
import { Scene6Closing } from './scenes/Scene6Closing';

export const StopBullyingVideo: React.FC = () => {
  return (
    <>
      {/* Background Dinamis Sepanjang Video */}
      <Background />

      {/* Track Backsound Instrumental (Letakkan di folder public/audio/bgm.mp3 jika tersedia) */}
      {/* <Audio src={staticFile('audio/bgm.mp3')} volume={0.25} /> */}

      {/* Bagian 1: Opening (10s) */}
      <Sequence from={0} durationInFrames={300} name="Opening">
        <Scene1Opening />
      </Sequence>

      {/* Bagian 2: Pengertian Bullying (12s) */}
      <Sequence from={300} durationInFrames={360} name="Definition">
        <Scene2Definition />
      </Sequence>

      {/* Bagian 3: 4 Jenis Bullying (15s) */}
      <Sequence from={660} durationInFrames={450} name="4 Types of Bullying">
        <Scene3Types />
      </Sequence>

      {/* Bagian 4: Dampak Nyata Bullying (12s) */}
      <Sequence from={1110} durationInFrames={360} name="Impacts">
        <Scene4Impacts />
      </Sequence>

      {/* Bagian 5: 5 Cara Mencegah (15s) */}
      <Sequence from={1470} durationInFrames={450} name="Prevention">
        <Scene5Prevention />
      </Sequence>

      {/* Bagian 6: Closing & Call To Action (11s) */}
      <Sequence from={1920} durationInFrames={330} name="Closing CTA">
        <Scene6Closing />
      </Sequence>
    </>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="StopBullyingMain"
      component={StopBullyingVideo}
      durationInFrames={2250} // 75 Detik total
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
