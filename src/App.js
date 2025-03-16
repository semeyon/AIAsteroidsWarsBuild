import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

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
    <div className="App">
      <Unity
      style ={{
          width: "80%",

          justifySelf: "center",
          alignSelf: "center",
        }}
         unityProvider={unityProvider} />
        <button type="button"  onClick={hapticMedium}>hapticMedium</button>
    </div>
  );
}

export default App;
