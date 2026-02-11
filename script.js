const noBtn = document.getElementById("no");
// const yesBtn = document.getElementById("yes");

// Position the "No" button initially
noBtn.style.left = "50%";
noBtn.style.top = "50%";

// Make the "No" button run away when hovered
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});


// Show a sweet message when "Yes" is clicked
// yesBtn.addEventListener("click", () => {
//   alert("Yay! ❤️ You’re my Valentine!");
// });
