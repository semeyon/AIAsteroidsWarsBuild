import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "Build/WebGL.loader.js",
    dataUrl: "Build/WebGL.data.unityweb",
    frameworkUrl: "Build/WebGL.framework.js.unityweb",
    codeUrl: "Build/WebGL.wasm.unityweb",
  });

  function handleClickSpawnEnemies() {
    sendMessage("TESTtext", "SpawnEnemies", 100);
  }

  return (
    <Fragment>
      <button type="button" onClick={handleClickSpawnEnemies}>Spawn Enemies</button>
      <Unity unityProvider={unityProvider} />
    </Fragment>
  );

}
export default App;
