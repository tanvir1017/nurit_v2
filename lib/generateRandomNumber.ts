export function generateRandomId(user: string) {
  const timestamp = Date.now().toString(16); // Convert current timestamp to hexadecimal string
  const randomValue = Math.floor(Math.random() * 16777215).toString(16); // Generate random number and convert to hexadecimal string
  const objectId = timestamp + "0".repeat(6 - randomValue.length) + randomValue; // Combine timestamp and random value
  return `${user}_${objectId}`;
}
