const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://test-skyg-lottery-default-rtdb.asia-southeast1.firebasedatabase.app",
});
const db = admin.database();
const ref = db.ref();
const userRef = ref.child("users");
userRef.set({
  tu: {
    name: "nguyen anh tu",
    age: 26,
  },
  toan: {
    name: "tran quoc toan",
    age: 15,
  },
});
ref.once("value", function (snapshot) {
  console.log(snapshot.val());
});
