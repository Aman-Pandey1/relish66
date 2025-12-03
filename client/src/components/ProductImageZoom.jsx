import { useState } from 'react';

const fallbackImg = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c76ef?q=80&w=800&auto=format&fit=crop';

export default function ProductImageZoom({ src, alt }){
	const [open,setOpen]=useState(false);
    const safeSrc = typeof src === 'string' && src.trim() ? src : fallbackImg;
	return (
		<div>
            <img 
                src={safeSrc} 
                alt={alt} 
                className="w-full rounded cursor-zoom-in" 
                onClick={()=>setOpen(true)} 
                onError={(e)=>{ if(e.currentTarget.src !== fallbackImg){ e.currentTarget.src = fallbackImg; } }}
            />
			{open && (
				<div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6" onClick={()=>setOpen(false)}>
                    <img 
                        src={safeSrc} 
                        alt={alt} 
                        className="max-h-full max-w-full rounded shadow" 
                        onError={(e)=>{ if(e.currentTarget.src !== fallbackImg){ e.currentTarget.src = fallbackImg; } }}
                    />
				</div>
			)}
		</div>
	);
}