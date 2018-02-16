export default function() {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    console.log("Service Worker and Push is supported");

    navigator.serviceWorker.register("sw.js")
      .then((swReg) => {
        console.log("Service Worker is registered", swReg);

        // swRegistration = swReg;
      })
      .catch((error) => {
        console.error("Service Worker Error", error);
      });
  } else {
    console.warn("Push messaging is not supported");
  }
}
