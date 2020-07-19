import { firebase } from "../firebase";

export function createTimeEntry({ title, start }) {
  console.log("title", title);
  console.log("start", start);
  return firebase().firestore().collection("entries").add({
    title,
    start,
  });
}

export async function updateTimeEntry(timeEntry) {
  console.log("updateTimeEntry", timeEntry);
  const { id, ...data } = timeEntry;
  await firebase()
    .firestore()
    .collection("entries")
    .doc(timeEntry.id)
    .update(data);
}

export async function getCurrent() {
  const entries = await firebase()
    .firestore()
    .collection("entries")
    .where("tracking", "==", true)
    .get()
    .then((snapshot) => snapshot.docs);
  if (entries[0]) {
    return { ...entries[0].data(), id: entries[0].id };
  }
  return null;
}
