import { get } from "./axios";

export async function getBanner(url: string) {
  //   let banners: InterFaceBanner[] = [];
  const result = await get(url).then((res) => res.data);
  return result;

  //   axios
  //     .get("http://localhost:4000/banner")
  //     .then((res) => {
  //       console.log(1234);
  //       console.log(res.status);
  //       if (res.status === 200) {
  //         banners = res.data.banners;
  //         console.log(banners);
  //         return banners;
  //       }
  //       return null;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}
