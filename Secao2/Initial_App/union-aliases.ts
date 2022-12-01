type Combinable = number | string;

type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  //   resultConversion: string
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }

  return result;
}

const combinedAges = combine(30, 27, "as-number");
console.log(combinedAges);

const combineStringdAges = combine("30", "27", "as-number");
console.log(combineStringdAges);

const combinedNames = combine("John", "Doe", "as-text");
console.log(combinedNames);
