const rect = {
  perimeter: (x: number, y: number) => 2 * (x + y),
  area: (x: number, y: number) => x * y
};

const solveRectangle = (l: number, b: number) => {
  console.log("Solving rectangle with l=" + l + " and b=" + b);

  if (l <= 0 || b <= 0)
    return console.warn("Rectangle dimensions should be greater than zero");
  else {
    console.log("The area rectangle is", rect.area(l, b));
    console.log("The permiter rectangle is", rect.perimeter(l, b));
  }
};

solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(-3, 5);
