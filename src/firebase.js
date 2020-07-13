import * as firebaseApp from "firebase";
import { firebaseConfig } from "./environment";

let app;
export function firebase() {
  if (!app) {
    // Configure Firebase.
    app = firebaseApp.initializeApp(firebaseConfig);
  }
  return app;
}
