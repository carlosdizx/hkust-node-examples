import rectangle, { RectangleFunctions } from "./rectangle";

const solveRectangle = (l: number, b: number) => {
  rectangle(
    l,
    b,
    (error: Error | null, rectangleFunctions: RectangleFunctions | null) => {
      if (error) {
        console.error("Error:", error.message);
      } else if (rectangleFunctions) {
        const { area, perimeter } = rectangleFunctions;
        console.log("The area rectangle is", area(l, b));
        console.log("The perimeter rectangle is", perimeter(l, b));
      }
    }
  );
  console.log("This statement after the call to rect()");
};

solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(-3, 5);
