import React, { CSSProperties } from 'react'

interface TennisIconProps {
	width?: number | string
	height?: number | string
	color?: string
	className?: string
	style?: CSSProperties
}

const TennisIcon: React.FC<TennisIconProps> = ({
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
				fill="#FC8A00"
				d="M53.768 9.33c-3.305-3.305-7.926-4.855-13.013-4.368-4.908.471-9.684 2.804-13.45 6.57-3.766 3.767-6.1 8.542-6.57 13.45a18.96 18.96 0 0 0-.084 2.188c-1.605 7.959-3.716 13.714-5.981 16.34l-9.594 9.593a2.058 2.058 0 0 0 0 2.911l2.008 2.008a2.061 2.061 0 0 0 2.911 0l9.595-9.594c2.626-2.265 8.38-4.376 16.338-5.98.73.013 1.46-.015 2.188-.084 4.907-.471 9.684-2.805 13.45-6.57 3.766-3.767 6.1-8.543 6.57-13.45.489-5.087-1.063-9.71-4.368-13.014Zm-44.8 47.665a.606.606 0 0 1-.856 0l-2.009-2.008a.606.606 0 0 1 0-.857l8.692-8.692 2.865 2.865-8.692 8.692Zm47.722-34.79c-.44 4.572-2.624 9.033-6.152 12.56-3.527 3.528-7.989 5.713-12.56 6.152-.697.067-1.397.092-2.096.076a.692.692 0 0 0-.161.014c-5.856 1.176-13.416 3.201-17.028 6.274l-1.205-1.206a.726.726 0 0 0 .671-.116c2.385-1.852 6.306-3.523 11.653-4.966a.728.728 0 0 0 .119-1.36 13.42 13.42 0 0 1-6.466-6.466.727.727 0 0 0-1.36.12c-1.443 5.346-3.114 9.267-4.965 11.652a.726.726 0 0 0-.117.672l-1.206-1.206c3.073-3.612 5.099-11.172 6.274-17.028a.725.725 0 0 0 .015-.16c-.017-.7.008-1.4.075-2.096.439-4.573 2.624-9.034 6.152-12.561 3.528-3.528 7.988-5.713 12.56-6.152 4.647-.447 8.855.957 11.848 3.95 2.992 2.992 4.395 7.2 3.949 11.846ZM20.038 43.06c1.077-2.043 2.074-4.609 2.984-7.675a14.882 14.882 0 0 0 4.691 4.691c-3.066.91-5.632 1.907-7.675 2.984Z"
			/>
			<path
				fill="#FC8A00"
				d="M29.8 14.027c-6.528 6.527-7.516 16.16-2.203 21.474 2.237 2.237 5.285 3.425 8.707 3.425.552 0 1.104-.03 1.653-.09 4.03-.434 7.977-2.4 11.114-5.538 6.528-6.527 7.516-16.16 2.203-21.473C45.96 6.512 36.327 7.5 29.8 14.027Zm17.119-3.36a9.96 9.96 0 0 1 2.792 1.693l-1.914 1.914-2.243-2.243 1.365-1.365ZM35.743 21.841l2.243-2.243 2.243 2.243-2.243 2.243-2.243-2.243Zm1.215 3.27-2.243 2.244-2.243-2.243 2.243-2.243 2.243 2.243Zm4.298-2.242 2.243 2.243-2.243 2.243-2.243-2.243 2.243-2.243Zm1.027-1.028 2.244-2.243 2.242 2.243-2.242 2.243-2.244-2.243Zm2.243-4.298-2.242-2.242 2.242-2.244 2.243 2.243-2.243 2.243ZM43.5 18.572l-2.243 2.243-2.243-2.243 2.243-2.243 2.243 2.243Zm-5.513-1.028-2.244-2.242 2.244-2.244 2.243 2.244-2.243 2.242Zm-1.028 1.028-2.243 2.243-2.243-2.243 2.243-2.243 2.243 2.243Zm-3.27 3.27-2.243 2.243-2.243-2.243 2.243-2.243 2.243 2.243Zm0 6.541-2.243 2.243-2.243-2.243 2.243-2.243 2.243 2.243Zm1.027 1.028 2.243 2.242-2.243 2.244-2.243-2.243 2.243-2.243Zm1.028-1.028 2.243-2.243 2.243 2.243-2.243 2.243-2.243-2.243Zm5.513 1.028 2.243 2.242-2.243 2.244-2.243-2.243 2.243-2.243Zm1.027-1.028 2.244-2.243 2.242 2.243-2.242 2.243-2.244-2.243Zm3.27-3.27 2.244-2.243 2.243 2.243-2.243 2.243-2.243-2.243Zm0-6.541 2.244-2.243 2.243 2.243-2.243 2.243-2.243-2.243Zm-.194-8.4-.832.832-1.123-1.123c.658.042 1.312.14 1.954.29Zm-4.241-.246c.085-.009.17-.014.255-.02l2.126 2.125-2.243 2.243-2.243-2.243 2.105-2.105Zm-2.553.499-.58.579-.3-.3c.29-.102.584-.195.88-.28Zm-2.347.866.74.74-2.243 2.243-1.349-1.349a17.942 17.942 0 0 1 2.852-1.634Zm-5.39 3.764c.442-.443.898-.857 1.37-1.244l1.49 1.49-2.243 2.243-1.52-1.519c.29-.334.59-.657.902-.97Zm-1.82 2.108 1.41 1.409-2.244 2.243-.875-.875a18.18 18.18 0 0 1 1.71-2.777Zm-2.335 4.205.474.475-.95.95c.135-.477.294-.952.476-1.425Zm1.501 1.502 2.243 2.243-2.243 2.243-2.243-2.243 2.243-2.243Zm-2.548 3.992 1.52 1.522-1.202 1.202a12.204 12.204 0 0 1-.318-2.723Zm2.139 6.625a10.02 10.02 0 0 1-1.325-2.342l1.734-1.734 2.243 2.243-2.243 2.243-.41-.41Zm1.843 1.843-.406-.406 2.243-2.243 2.242 2.243-1.735 1.736a10.014 10.014 0 0 1-2.344-1.33Zm3.906 1.823 1.2-1.201 1.518 1.517a12.161 12.161 0 0 1-2.718-.316Zm4.471.014-2.243-2.243 2.244-2.243 2.242 2.243-2.243 2.243Zm2.323-.267.948-.948.474.474c-.469.181-.943.339-1.422.474Zm2.851-1.1-.876-.876 2.243-2.243 1.41 1.41a18.076 18.076 0 0 1-2.777 1.71Zm4.885-3.529c-.313.312-.637.613-.97.903l-1.52-1.52 2.243-2.243 1.489 1.488c-.388.47-.8.93-1.242 1.372Zm2.13-2.538-1.35-1.35 2.243-2.243.742.742a17.945 17.945 0 0 1-1.635 2.85Zm2.225-4.316-.304-.304.579-.58c-.083.297-.175.592-.275.884Zm.772-3.436-2.104 2.104-2.243-2.243 2.243-2.243 2.127 2.127c-.007.085-.014.17-.023.255Zm.046-2.287-1.122-1.122.832-.832c.15.642.248 1.296.29 1.954Zm-2.15-2.15-2.243-2.242 1.915-1.915a9.96 9.96 0 0 1 1.692 2.794l-1.364 1.364Zm-6.904 25.832a8.152 8.152 0 1 0 11.53 0 8.16 8.16 0 0 0-11.53 0Zm1.028 1.027a6.675 6.675 0 0 1 4.68-1.957 6.684 6.684 0 0 1-6.638 6.637 6.677 6.677 0 0 1 1.958-4.68Zm9.474 9.474a6.685 6.685 0 0 1-5.049 1.952 6.69 6.69 0 0 1 7-7 6.682 6.682 0 0 1-1.951 5.048Zm-4.125-4.124a8.125 8.125 0 0 0-2.382 5.845 6.676 6.676 0 0 1-4.78-5.066 8.13 8.13 0 0 0 7.941-7.94 6.675 6.675 0 0 1 5.067 4.779 8.124 8.124 0 0 0-5.846 2.382Z"
			/>
		</svg>
	)
}

export default TennisIcon
