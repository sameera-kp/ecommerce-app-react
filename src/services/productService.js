export const fetchAllProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/1`);
  return await res.json();
};
