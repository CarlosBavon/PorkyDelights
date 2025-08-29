// src/utils/storageUtils.js

export const addToFavorites = (dish) => {
  const current = JSON.parse(localStorage.getItem("favorites")) || [];
  const updated = [...current, dish];
  localStorage.setItem("favorites", JSON.stringify(updated));
};

export const addToCart = (dish) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.name === dish.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...dish, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};


export const getFavorites = () =>
  JSON.parse(localStorage.getItem("favorites")) || [];

export const getCart = () =>
  JSON.parse(localStorage.getItem("cart")) || [];

export const removeFromFavorites = (dish) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const updated = favorites.filter((item) => item.name !== dish.name);
  localStorage.setItem("favorites", JSON.stringify(updated));
};

export const removeFromCart = (dish) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updated = cart.filter((item) => item.name !== dish.name);
  localStorage.setItem("cart", JSON.stringify(updated));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
