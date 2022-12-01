let userInput: unknown;
let userName: string;

userInput = 7;
userInput = "Paulo";

if (typeof userInput === "string") {
  userName = userInput;
  console.log(userName);
}

function generateErrors(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateErrors("An error occurred", 500);
