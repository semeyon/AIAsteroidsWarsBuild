import React, {Fragment} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { hapticFeedback } from '@telegram-apps/sdk';

function haptic(){
  if (hapticFeedback.impactOccurred.isAvailable()) {
    hapticFeedback.impactOccurred('medium');
  }
}

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/assets/WebGL.loader.js",
    dataUrl: "/assets/WebGL.data.unityweb",
    frameworkUrl: "/assets/WebGL.framework.js.unityweb",
    codeUrl: "/assets/WebGL.wasm.unityweb",
  });

  return (
    <Fragment>
      <Unity style ={{
        width: "80%",

        justifySelf: "center",
        alignSelf: "center",
      }}
       unityProvider={unityProvider} />
      <button onClick ={haptic}>Spawn Enemies</button>
    </Fragment>
  );
}

export default App
