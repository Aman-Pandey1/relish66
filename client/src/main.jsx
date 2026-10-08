import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import faviconUrl from './assets/relishlogo.jpg';
import './index.css';

function applyFavicon(href) {
	const icon =
		document.querySelector("link[rel='icon']") || document.createElement('link');
	icon.rel = 'icon';
	icon.type = 'image/jpeg';
	icon.href = href;
	if (!icon.parentNode) document.head.appendChild(icon);

	const apple =
		document.querySelector("link[rel='apple-touch-icon']") ||
		document.createElement('link');
	apple.rel = 'apple-touch-icon';
	apple.href = href;
	if (!apple.parentNode) document.head.appendChild(apple);
}

applyFavicon(faviconUrl);
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
