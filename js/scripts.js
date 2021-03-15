/* message for the social share icon */
document.querySelectorAll("a.btns-share").forEach((item) =>
  item.addEventListener("click", (event) => {
    alert("Shared to the Social Mediaverse!");
    event.preventDefault();
  })
);

/* message for the save icon */
document.querySelectorAll("a.btns-save").forEach((item) =>
  item.addEventListener("click", (event) => {
    alert("Saved succesfully!");
    event.preventDefault();
  })
);

/* stars rating mechanic */
document.querySelectorAll("a.stars-icons").forEach((item) => {
  let itemID = item.children[0].id;

  item.addEventListener("click", (event) => {
    alert("THANKS for voting!\n;-)");
    event.preventDefault();
  });
});