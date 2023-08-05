const perimeter = (x: number, y: number) => 2 * (x + y);
const area = (x: number, y: number) => 2 * (x + y);

const solveRectangle = (l: number, b: number) => {
  console.log("Solving rectangle with l=", l , " and b=", b);

  if (l <= 0 || b <= 0)
    return console.warn("Rectangle dimensions should be greater than zero");
  else {
    console.log("The area rectangle is", area(l, b));
    console.log("The permiter rectangle is", perimeter(l, b));
  }
};

export default solveRectangle;
