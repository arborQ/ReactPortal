import * as firebase from "firebase/app";
import "firebase/auth";

export default class AuthorizeService {
    private auth: firebase.auth.Auth;

    constructor(firebaseApp: firebase.app.App) {
        this.auth = firebase.auth();
    }

    login(login: string, password: string): Promise<void> {
        return this.auth.signInWithEmailAndPassword(login, password);
    }

    logout(): Promise<void> {
        return this.auth.signOut();
    }

    statusChanged(action: (currentUser: Services.Authorize.IUser | null) => void): void {
        this.auth.onAuthStateChanged((user: any) => {
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
