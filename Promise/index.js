const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("Promise Rejected..");
  });
});

// p.then(() => {
//   console.log("Called then");
// }).catch(() => {
//   console.log("Catch the error");
// });

p.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log("Catch the error", err);
  })
  .finally(() => console.log("Finally"));

/*
// Making Custom promise example
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });
*/
