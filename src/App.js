import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import { hapticFeedback } from '@telegram-apps/sdk';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/WebGL.loader.js",
    dataUrl: "assets/WebGL.data",
    frameworkUrl: "assets/WebGL.framework.js",
    codeUrl: "assets/WebGL.wasm",
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

  return (
    <div className="App">

      <Unity
      style ={{
          width: "80%",

          justifySelf: "center",
          alignSelf: "center",
        }}
         unityProvider={unityProvider} />

      <header className="App-header">
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
      <button onClick={haptic}>Haptic</button>
    </div>
  );
}

export default App;
