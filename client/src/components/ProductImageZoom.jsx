import { useState } from 'react';

export default function ProductImageZoom({ src, alt }){
	const [open,setOpen]=useState(false);
	if(!src) return null;
	return (
		<div>
			<img src={src} alt={alt} className="w-full rounded cursor-zoom-in" onClick={()=>setOpen(true)} />
			{open && (
				<div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6" onClick={()=>setOpen(false)}>
					<img src={src} alt={alt} className="max-h-full max-w-full rounded shadow" />
				</div>
			)}
		</div>
	);
}