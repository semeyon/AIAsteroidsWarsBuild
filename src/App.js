import './App.css';
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const {unityProvider} = useUnityContext({
    loaderUrl: "/assets/WebGL.loader.js",
    dataUrl: "/assets/WebGL.data.unityweb",
    frameworkUrl: "/assets/WebGL.framework.js.unityweb",
    codeUrl: "/assets/WebGL.wasm.unityweb",
  });
  return (
      <Unity
        style ={{
          width: "80%",

          justifySelf: "center",
          alignSelf: "center",
        }}
        unityProvider={unityProvider}
      />
      <h1>Haptic</h1>
  );
}
export default App;
