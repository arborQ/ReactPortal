import * as firebase from "firebase";
import { database } from "firebase";
// import "firebase/database";

export default class UsersService {
  private collection: firebase.database.Reference;

  constructor(firebaseApp: firebase.app.App) {
    this.collection = firebase.database().ref("temperature");
  }

  // add(newRecord: Services.Temperature.ITemperature): Promise<any> {
  //   return this.collection.
  // }

  list(): Promise<any[]> {
    // firebase.database().ref("temperature");
    return new Promise<any[]>((resolve) => {
      this.collection.limitToFirst(50);
    });
  }
}
