import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';
import uiReducer from './slices/uiSlice';
import authReducer from './slices/authSlice';
import wishlistReducer from './slices/wishlistSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productsReducer,
		ui: uiReducer,
		auth: authReducer,
		wishlist: wishlistReducer,
	},
});

export default store;
