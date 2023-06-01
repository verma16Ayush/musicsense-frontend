export async function getResults(): Promise<IResType[]> {
  return fetch("http://musicsense-backend:8000/", {
    method: "GET",
    redirect: "follow",
  }).then(res=>res.json()).catch((error) => console.log(error));
}
