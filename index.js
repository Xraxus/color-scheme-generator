const colorForm = document.querySelector("#color-form");

colorForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const colorInputVal = document.querySelector("#color-input").value.slice(1);
  const selectedMode = document.getElementById("mode-selector").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInputVal}&mode=${selectedMode}`
  )
    .then((res) => res.json())
    .then((data) => {
      const colorPalette = data.colors.map((item) => item.hex.value);
      const colorElArray = document.querySelectorAll(".color");

      colorElArray.forEach(function (item, index) {
        item.innerHTML = `<span>${colorPalette[index]}</span>`;
        item.style.backgroundColor = colorPalette[index];
      });
    });
});
