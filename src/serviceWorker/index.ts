import { urlB64ToUint8Array } from "./helpers";

function register(): Promise<PushManager> {
  return new Promise<PushManager>((resolve) => {
    navigator.serviceWorker.register("sw.js")
      .then((swReg) => {
        console.log("Service Worker is registered", swReg);
        resolve(swReg.pushManager);
      });
  });
}

export function subscribeUser(key: string) {
  const applicationServerKey = urlB64ToUint8Array(key);

  register().then((pushManager) => {
    pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey,
    }).then((subscription) => {
      console.log(JSON.stringify(subscription));
    });
  });
}
