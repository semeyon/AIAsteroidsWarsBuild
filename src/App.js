import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';
function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/WebGL.loader.js",
    dataUrl: "assets/WebGL.data",
    frameworkUrl: "assets/WebGL.framework.js",
    codeUrl: "assets/WebGL.wasm",
  });
  const [notificationOccurred] =
    useHapticFeedback();

    function haptic2() {
        notificationOccurred('success');
      }
  return (
    impactOccurred('heavy');
    <div className="App">

      <Unity
      style ={{
          width: "80%",

          justifySelf: "center",
          alignSelf: "center",
        }}
         unityProvider={unityProvider} />

      <header className="App-header">
<<<<<<< HEAD
      <button type="button"  onClick={haptic2}>Haptic2</button>
=======
      <button type="button" style={{"background-color": "#04AA6D";"font-size": "24px"}} onClick={haptic2}>Haptic2</button>
        <button type="button" onClick={haptic}>Haptic test</button>
>>>>>>> parent of 2f903b6 (12)
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
