import rectangle, { RectangleFunctions } from "./rectangle";

const solveRectangle = async (l: number, b: number) => {
  const rectangleFunctions: RectangleFunctions = await new Promise(
    (resolve, reject) => {
      rectangle(
        l,
        b,
        (error: Error | null, functions: RectangleFunctions | null) => {
          if (error) {
            console.error("Error:", error.message);
            reject(error);
          } else if (functions) {
            resolve(functions);
          }
        }
      );
    }
  );

  const { area, perimeter } = rectangleFunctions;
  console.log("The area rectangle is", area(l, b));
  console.log("The perimeter rectangle is", perimeter(l, b));
  console.log();
};

(async () => {
  await solveRectangle(2, 4);
  await solveRectangle(3, 5);
  await solveRectangle(0, 5);
  await solveRectangle(-3, 5);
})();
