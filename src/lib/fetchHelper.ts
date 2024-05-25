type Response<T> = [Error] | [undefined, T];

export default async function fetchHelper<T>(url: string): Promise<Response<T>> {
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
