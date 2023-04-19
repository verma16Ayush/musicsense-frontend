export async function getResults(): Promise<IResType[]> {

  return fetch("http://192.168.106.203:8000", {
    method: "GET",
    redirect: "follow",
  }).then(res=>res.json()).catch((error) => console.log(error));
}
