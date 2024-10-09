export function checkIfEmailIsValid(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexResult = regex.test(email);

  if (!regexResult) {
    return false;
  }

  if (!email.includes("@") || !email.includes(".") || email.length < 5 || email.includes(" ")) {
    return false;
  }

  return true;
}
