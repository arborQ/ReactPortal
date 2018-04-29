import * as firebase from "firebase/app";
import "firebase/auth";

export default class AuthorizeService {
    constructor(private firebaseApp: firebase.app.App) {

    }

    login(login: string, password: string): Promise<void> {
        return new Promise<void>((resolve) => {
            return this.firebaseApp.auth().signInWithEmailAndPassword(login, password);
        });
    }

    statusChanged(action: (currentUser: Services.Authorize.IUser) => void): void {
       this.firebaseApp.auth().onAuthStateChanged((user) => {
           const bxUser: Services.Authorize.IUser = {};
           action(bxUser);
       });
    }
}
