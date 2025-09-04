import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { SeoProvider } from './components/Seo.jsx';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<CartProvider>
				<WishlistProvider>
					<BrowserRouter>
						<SeoProvider>
							<App />
							<Toaster position="top-right" />
						</SeoProvider>
					</BrowserRouter>
				</WishlistProvider>
			</CartProvider>
		</AuthProvider>
	</React.StrictMode>
);
