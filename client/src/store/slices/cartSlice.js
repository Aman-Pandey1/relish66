import { createSlice } from '@reduxjs/toolkit';

const load = () => {
  try {
    const raw = localStorage.getItem('kh_cart');
    return raw ? JSON.parse(raw) : { items: [] };
  } catch {
    return { items: [] };
  }
};

const save = (state) => localStorage.setItem('kh_cart', JSON.stringify(state));

const calcTotals = (items) =>
  items.reduce((s, it) => s + it.price * it.quantity, 0);

const cartSlice = createSlice({
  name: 'cart',
  initialState: typeof window !== 'undefined' ? load() : { items: [] },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find((i) => i.slug === item.slug);
      if (existing) existing.quantity += item.quantity || 1;
      else state.items.push({ ...item, quantity: item.quantity || 1 });
      save(state);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.slug !== action.payload);
      save(state);
    },
    updateQuantity(state, action) {
      const { slug, quantity } = action.payload;
      const item = state.items.find((i) => i.slug === slug);
      if (item) item.quantity = Math.max(1, quantity);
      save(state);
    },
    clearCart(state) {
      state.items = [];
      save(state);
    },
  },
});

// ✅ Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

// ✅ Manual selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartSubtotal = (state) =>
  calcTotals(state.cart.items);
export const selectCartCount = (state) =>
  state.cart.items.reduce((n, it) => n + it.quantity, 0);

// ✅ Export reducer
export default cartSlice.reducer;
