function __palette() {
  let k = 0;

  COLORS.forEach((value) => {
    let x = k;

    if (k === 10) x = "A";
    if (k === 11) x = "B";
    if (k === 12) x = "C";
    if (k === 13) x = "D";
    if (k === 14) x = "E";
    if (k === 15) x = "F";

    $("#guide").append(`<span style="color: ${value}">${x}: █ </span>`);

    k++;
  });
}
