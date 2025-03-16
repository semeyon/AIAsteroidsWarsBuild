import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
    const [userName, setUserName] = useState();
    const [score, setScore] = useState();

  const { unityProvider, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: "assets/WebGL.loader.js",
    dataUrl: "assets/WebGL.data.unityweb",
    frameworkUrl: "assets/WebGL.framework.js.unityweb",
    codeUrl: "assets/WebGL.wasm.unityweb",
  });
  const [impactOccurred, notificationOccurred, selectionChanged] =
    useHapticFeedback();

  function haptic() {
    impactOccurred('heavy');
  }
  function haptic2() {
    notificationOccurred('success');
  }

  const handleGameOver = useCallback((userName, score) => {
     setIsGameOver(true);
     setUserName(userName);
     setScore(score);
     haptic2();
   }, []);

   useEffect(() => {
     addEventListener("GameOver", handleGameOver);

     return () => {
       removeEventListener("GameOver", handleGameOver);
     };
   }, [addEventListener, removeEventListener, handleGameOver]);


  return (
    <div className="App">
      <Unity
      style ={{
          width: "80%",

          justifySelf: "center",
          alignSelf: "center",
        }}
         unityProvider={unityProvider} />
      {isGameOver === true && (
            <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
        )}

      <header className="App-header">
        <button type="button"  onClick={haptic2}>Haptic2</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
