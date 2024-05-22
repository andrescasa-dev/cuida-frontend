export default async function fetchHelper(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return [new Error(response.statusText)];
    }
    const data = await response.json();
    return [undefined, data];
  } catch (e) {
    const error = e as Error;
    return [new Error(error.message)];
  }
}
