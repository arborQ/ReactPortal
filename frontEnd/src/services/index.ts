import "@firebase/database/dist/index.cjs";
import { initializeApp } from "firebase/app";
import AuthorizeService from "./authorize.service";
import TemperatureService from "./temperature.service";

const app = initializeApp({
    apiKey: "AIzaSyDYsTvG2uKUZO-cLinGa0V2plqIVyaDU9c",
    authDomain: "reactportal.firebaseapp.com",
    databaseURL: "https://reactportal.firebaseio.com",
    projectId: "reactportal",
    storageBucket: "reactportal.appspot.com",
    messagingSenderId: "616442721992",
});

export const authorizeService = new AuthorizeService(app);
export const temperatureService = new TemperatureService(app);
