export const getGifs = async (category) => {
  const key = "yuG4tpzyR6NQ3946Dcj1XpaUNqn1uCsj";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=20`;
  const resp = fetch(url).then((res) => res.json());
  const { data } = await resp;
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  // console.log(gifs);
  return gifs;
};
