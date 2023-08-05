import rectangle, { RectangleFunctions } from "./rectangle";

const solveRectangle = (l: number, b: number) => {
  rectangle(l, b, (error: Error | null, result: RectangleFunctions | null) => {
    if (error) {
      console.error(error.message);
    } else if (result) {
      const { area, perimeter } = result;
      console.log("The area rectangle is", area(l, b));
      console.log("The perimeter rectangle is", perimeter(l, b));
    }
  });
};

solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(-3, 5);
