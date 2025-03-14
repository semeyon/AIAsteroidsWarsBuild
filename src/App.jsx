import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from "Components/TestButton"

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
    <div>
      <h1>
        fdfdffd
      </h1>
    </div>
    <Fragment>
      <Button onClick={handleClickSpawnEnemies}/>
      <Unity unityProvider={unityProvider} />
    </Fragment>
  );

}
export default App;
