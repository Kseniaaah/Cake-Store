import { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
	from { background-position: 200% 0; }
	to { background-position: -200% 0; }
`;

const Image = styled.img`
	&[data-loading='true'] {
		background: linear-gradient(100deg, #f4ece6 25%, #fffaf7 50%, #f4ece6 75%);
		background-size: 200% 100%;
		animation: ${shimmer} 1.2s linear infinite;
	}

	&[data-failed='true'] {
		background: #f4ece6;
		color: #75695f;
		font-size: 12px;
	}

	@media (prefers-reduced-motion: reduce) {
		&[data-loading='true'] {
			animation: none;
		}
	}
`;

const ImageWithLoading = ({ src, alt, onLoad, onError, ...props }) => {
	const [status, setStatus] = useState('loading');
	const checkCachedImage = useCallback((image) => {
		if (image?.complete) setStatus(image.naturalWidth ? 'loaded' : 'error');
	}, []);

	return (
		<Image
			{...props}
			ref={checkCachedImage}
			src={src}
			alt={alt}
			data-loading={status === 'loading'}
			data-failed={status === 'error'}
			aria-busy={status === 'loading'}
			onLoad={(event) => {
				setStatus('loaded');
				onLoad?.(event);
			}}
			onError={(event) => {
				setStatus('error');
				onError?.(event);
			}}
		/>
	);
};

export const LoadingImage = ({ src, ...props }) => (
	<ImageWithLoading key={src} src={src} {...props} />
);
