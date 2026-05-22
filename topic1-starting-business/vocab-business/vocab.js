function reveal(cell, text) {

  // already revealed
  if (cell.classList.contains("revealed")) {
    return;
  }

  // change text
  cell.textContent = text;

  // add revealed style
  cell.classList.add("revealed");

}