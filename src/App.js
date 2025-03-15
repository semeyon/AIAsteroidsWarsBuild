import './App.css';
import React, { Fragment, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { hapticFeedback } from '@telegram-apps/sdk';

function App() {
  const { unityProvider, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: "/assets/WebGL.loader.js",
    dataUrl: "/assets/WebGL.data",
    frameworkUrl: "/assets/WebGL.framework.js",
    codeUrl: "/assets/WebGL.wasm",
  });
  function haptic() {
    if (window.Telegram.WebApp) {

      const haptic = window.Telegram.WebApp.HapticFeedback;

    // Trigger haptic feedback on a click event

      document.querySelector('#clickerButton').addEventListener('click', function() {
      haptic.impactOccurred('light');

           // Other game logic

       });

     }
  }
  // const handleHaptic = useCallback((userName, score) => {
  //   setIsGameOver(true);
  //   setUserName(userName);
  //   setScore(score);
  // }, []);
  //
  // useEffect(() => {
  //   addEventListener("GameOver", handleHaptic);
  //   return () => {
  //     removeEventListener("GameOver", handleHaptic);
  //   };
  // }, [addEventListener, removeEventListener, handleHaptic]);

  return (
    <Fragment>
      <Unity
        style ={{
          width: "80%",

          justifySelf: "center",
          alignSelf: "center",
        }}
        unityProvider={unityProvider}
      />
      <button onClick={haptic}>Haptic</button>
    </Fragment>
  );
}
export default App;
