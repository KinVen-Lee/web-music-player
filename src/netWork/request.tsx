import { get } from "./axios";

export async function getBanner(url: string) {
  const result = await get(url).then((res) => res);
  return result;
}
