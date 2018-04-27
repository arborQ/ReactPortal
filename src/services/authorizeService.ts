import * as firebase from "firebase/app";
import "firebase/auth";

export default class AuthorizeService {
    constructor(private firebaseApp: firebase.app.App) {

    }

    login(login: string, password: string): Promise<void> {
        return new Promise<void>((resolve) => {
            this.firebaseApp.auth().signInWithEmailAndPassword(login, password).then((result) => {
                console.log(result);
                resolve();
            });
        });
    }

    statusChanged(action: () => void): void {
       this.firebaseApp.auth().onAuthStateChanged((user) => {
           action();
       });
    }
}
