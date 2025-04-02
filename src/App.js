
import './App.css';
import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

import { viewport, init, isTMA } from "@telegram-apps/sdk";

import Loader from 'react-loader-spinner';

async function initTg() {
    if (await isTMA()) {
        init(); // init tg app

        if (viewport.mount.isAvailable()) {
            await viewport.mount();
            viewport.expand(); // first it would be better to expand
        }

        if (viewport.requestFullscreen.isAvailable()) {
            await viewport.requestFullscreen(); // then request full screen mode
        }
    }
}

(async () => {
    await initTg();
})();

function App() {
  const [isHapticSoft, setIsHapticSoft] = useState(false);
  const [isHapticMedium, setIsHapticMedium] = useState(false);

  const { unityProvider, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: "assets/WebGL.loader.js",
    dataUrl: "assets/WebGL.data.unityweb",
    frameworkUrl: "assets/WebGL.framework.js.unityweb",
    codeUrl: "assets/WebGL.wasm.unityweb",
  });
  const [impactOccurred, notificationOccurred, selectionChanged] =
    useHapticFeedback();

    function hapticSoft() {
      notificationOccurred('success');
    }
  function hapticMedium() {
    notificationOccurred('error');
  }

  const handleHapticSoft = useCallback(() => {
     hapticSoft();
   }, []);

   const handleHapticMedium = useCallback(() => {
      hapticMedium();
    }, []);

   useEffect(() => {
     addEventListener("HapticSoft", handleHapticSoft);
     addEventListener("HapticMedium", handleHapticMedium);

     return () => {
       removeEventListener("HapticSoft", handleHapticSoft);
       removeEventListener("HapticMedium", handleHapticMedium);
     };
   }, [addEventListener, removeEventListener, handleHapticSoft]);


  return (
    <Fragment >
      <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
      <Unity
      style ={{
        width: "100vw",   // Full viewport width
        height: "100vh",  // Full viewport height
        position: "absolute",
        top: 0,
        left: 0,
        }}
         unityProvider={unityProvider} />
    </Fragment>
  );
}

export default App;
