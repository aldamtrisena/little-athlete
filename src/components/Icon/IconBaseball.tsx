// import * as React from 'react'
// import { SVGProps } from 'react'
// const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
// 	<svg {...props} xmlns="http://www.w3.org/2000/svg" width={63} height={63} fill="none">
// 		<path
// 			fill="#FC8A00"
// 			d="M6.83 49.508c-1.316-1.315-3.57-1.315-4.791 0a3.402 3.402 0 0 0 0 4.79l6.2 6.2a3.402 3.402 0 0 0 4.79 0 3.402 3.402 0 0 0 0-4.79l-.187-.188 45.654-40.3c3.382-2.912 3.664-8.267.376-11.555-3.288-3.287-8.642-3.1-11.648.376L13.875 41.9l-6.858 7.797-.187-.188ZM48.633 5.262c2.254-2.63 6.293-2.724 8.83-.281 2.442 2.442 2.348 6.481-.282 8.83L19.887 46.69l-4.133-4.134L48.633 5.262Zm-34.1 38.61 3.945 3.945-7.045 6.2-3.1-3.1 6.2-7.046ZM11.62 59.09c-.564.563-1.598.563-2.161 0l-6.106-6.106c-.564-.564-.564-1.597 0-2.161.563-.564 1.597-.564 2.16 0l6.2 6.2a1.398 1.398 0 0 1-.094 2.067ZM29.657 12.87c0-5.354-4.415-9.675-9.77-9.675a9.662 9.662 0 0 0-9.676 9.675 9.662 9.662 0 0 0 9.676 9.676c5.355.094 9.77-4.321 9.77-9.676Zm-1.879 0c0 2.067-.752 3.946-2.067 5.261a7.915 7.915 0 0 1 0-10.615c1.222 1.503 2.067 3.382 2.067 5.354Zm-3.57-6.481c-3.381 3.663-3.381 9.3 0 13.057-1.22.846-2.724 1.315-4.32 1.315-1.598 0-3.1-.47-4.322-1.315 3.382-3.663 3.382-9.3 0-13.057 1.221-.846 2.724-1.316 4.321-1.316 1.597 0 3.1.47 4.321 1.316ZM12.09 12.87c0-2.066.752-3.945 2.067-5.26a7.915 7.915 0 0 1 0 10.615c-1.315-1.41-2.067-3.288-2.067-5.355Z"
// 		/>
// 	</svg>
// )
// export { SvgComponent as Baseball }

import React, { CSSProperties } from 'react'

interface BaseballIconProps {
	width?: number | string
	height?: number | string
	color?: string
	className?: string
	style?: CSSProperties
}

const BaseballIcon: React.FC<BaseballIconProps> = ({
	width = 63,
	height = 63,
	color = '#FC8A00',
	className = '',
	style = {},
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 63 63"
			className={className}
			style={style}
			fill="none"
			{...props}
		>
			<path
				fill={color}
				d="M6.83 49.508c-1.316-1.315-3.57-1.315-4.791 0a3.402 3.402 0 0 0 0 4.79l6.2 6.2a3.402 3.402 0 0 0 4.79 0 3.402 3.402 0 0 0 0-4.79l-.187-.188 45.654-40.3c3.382-2.912 3.664-8.267.376-11.555-3.288-3.287-8.642-3.1-11.648.376L13.875 41.9l-6.858 7.797-.187-.188ZM48.633 5.262c2.254-2.63 6.293-2.724 8.83-.281 2.442 2.442 2.348 6.481-.282 8.83L19.887 46.69l-4.133-4.134L48.633 5.262Zm-34.1 38.61 3.945 3.945-7.045 6.2-3.1-3.1 6.2-7.046ZM11.62 59.09c-.564.563-1.598.563-2.161 0l-6.106-6.106c-.564-.564-.564-1.597 0-2.161.563-.564 1.597-.564 2.16 0l6.2 6.2a1.398 1.398 0 0 1-.094 2.067ZM29.657 12.87c0-5.354-4.415-9.675-9.77-9.675a9.662 9.662 0 0 0-9.676 9.675 9.662 9.662 0 0 0 9.676 9.676c5.355.094 9.77-4.321 9.77-9.676Zm-1.879 0c0 2.067-.752 3.946-2.067 5.261a7.915 7.915 0 0 1 0-10.615c1.222 1.503 2.067 3.382 2.067 5.354Zm-3.57-6.481c-3.381 3.663-3.381 9.3 0 13.057-1.22.846-2.724 1.315-4.32 1.315-1.598 0-3.1-.47-4.322-1.315 3.382-3.663 3.382-9.3 0-13.057 1.221-.846 2.724-1.316 4.321-1.316 1.597 0 3.1.47 4.321 1.316ZM12.09 12.87c0-2.066.752-3.945 2.067-5.26a7.915 7.915 0 0 1 0 10.615c-1.315-1.41-2.067-3.288-2.067-5.355Z"
			/>
		</svg>
	)
}

export default BaseballIcon
