const container = document.querySelector(".container");
let printHtml;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    printHtml = "FizzBuzz";
    classColor = "fizz-buzz-color";
  } else if (i % 5 === 0) {
    console.log("Buzz");
    printHtml = "Buzz";
    classColor = "buzz-color";
  } else if (i % 3 === 0) {
    console.log("Fizz");
    printHtml = "Fizz";
    classColor = "fizz-color";
  } else {
    console.log(i);
    printHtml = i;
    classColor = "standard-color";
  }

  if (i === 1 || i % 7 === 1) {
    container.innerHTML += `<br/>`;
  }

  container.innerHTML += `<div class="d-inline-block px-0">
  <div class="square ${classColor}">${printHtml}</div>
</div>`;

}