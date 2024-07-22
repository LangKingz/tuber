export const getData = async (url) => {
  const res = await fetch(url, {
    cache: "force-cache",
    next: {
      revalidate: 10,
    },
  });
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
