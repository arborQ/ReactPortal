import * as firebase from "firebase/app";

export default class UsersService {
  private collection: firebase.database.Reference;

  constructor(firebaseApp: any) {
    this.collection = firebase.database().ref("temperature");
  }

  add(newRecord: Services.Temperature.ITemperature): Promise<any> {
    return new Promise<any>((resolve) => {
      this.collection.push(newRecord, () => {
        resolve();
      });
    });
  }

  list(): Promise<any[]> {
    return new Promise<any[]>((resolve) => {
      this.collection.limitToFirst(50).once("value", (snap) => {
        snap.forEach((a) => {
          /* */

          return true;
        });
      });
    });
  }
}
