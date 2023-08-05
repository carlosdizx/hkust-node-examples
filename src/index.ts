import rectangle from "./rectangle";

const solveRectangle = (l: number, b: number) => {
  rectangle(l, b, (error: any, rectangle: any) => {
    if (error) console.error(error.message);
    else {
      console.log("The area rectangle is", rectangle.area(l, b));
      console.log("The permiter rectangle is", rectangle.perimeter(l, b));
    }
  });
};

solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(-3, 5);
