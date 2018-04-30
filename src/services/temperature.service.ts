import * as firebase from "firebase/app";
// import "firebase/firestore";

export default class UsersService {
  constructor(private firebaseApp: firebase.app.App) {

  }

  list(): Promise<any[]> {
    return Promise.resolve([]);
    // return firebase.firestore().collection("temperature").get().then(snap => snap.forEach(;
    // const items = firebase.database().ref("temperature").orderByChild("date");

    // return items.once("value").then((snapshot) => {
    //   console.log("snap", snapshot);
    //   return snapshot.val();
    // });
  }

  add(newRecord: Services.Temperature.ITemperature): Promise<Services.Temperature.ITemperature> {
    return Promise.resolve(newRecord);
  }
}
