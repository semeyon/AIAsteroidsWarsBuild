import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import { hapticFeedbackNotificationOccurred } from '@telegram-apps/sdk';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/WebGL.loader.js",
    dataUrl: "assets/WebGL.data",
    frameworkUrl: "assets/WebGL.framework.js",
    codeUrl: "assets/WebGL.wasm",
  });

  function haptic() {
      if (hapticFeedbackNotificationOccurred.isAvailable()) {
        hapticFeedbackNotificationOccurred('success');
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
        <button type="button" onClick={haptic}>Haptic test</button>
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
