import * as firebase from "firebase/app";
import "firebase/auth";

export default class AuthorizeService {
    constructor(private firebaseApp: firebase.app.App) {

    }

    login(login: string, password: string): Promise<void> {
        return this.firebaseApp.auth().signInWithEmailAndPassword(login, password);
    }

    logout(): Promise<void> {
        return this.firebaseApp.auth().signOut();
    }

    statusChanged(action: (currentUser: Services.Authorize.IUser | null) => void): void {
        this.firebaseApp.auth().onAuthStateChanged((user: any) => {
            if (!!user) {
                const bxUser: Services.Authorize.IUser = {
                    email: user.email, login: user.displayName, uid: user.uid,
                };

                action(bxUser);
            } else {
                action(null);
            }
        });
    }
}
