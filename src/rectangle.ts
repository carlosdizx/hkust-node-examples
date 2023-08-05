const perimeter = (x: number, y: number) => 2 * (x + y);
const area = (x: number, y: number) => x * y;

const rectangle = (l: number, b: number, callback: Function) => {
  if (l <= 0 || b <= 0)
    setTimeout(
      () =>
        callback(
          new Error("Rectangle dimensions should be greater than zero"),
          null
        ),
      2000
    );
  else setTimeout(() => callback(null, { perimeter, area }), 2000);
};

export default rectangle;
