import { firebase } from "../firebase";

export function createTimeEntry({ title, start }) {
  firebase().firestore().collection("entries").add({
    title,
    start,
  });
}
