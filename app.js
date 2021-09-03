// http://numbersapi.com/
const factBtn = document.querySelector("button");
const factInput = document.querySelector("input");
const factPara = document.querySelector("p");

factBtn.addEventListener("click", () => {
  const number = factInput.value;
  const numberFact = parseInt(number);

  fetchFact(numberFact);
});

async function fetchFact(number) {
  const factURL = "http://numbersapi.com/";
  //const proxyURL = "http://cors-anywhere.herokuapp.com/";

  const response = await fetch(`${factURL}${number}`, {
    method: "GET",
    headers: {
      "x-requested-with": "text/plain",
    },
  });

  const responseData = await response.text();
  console.log(responseData);

  factPara.innerText = responseData;
}
