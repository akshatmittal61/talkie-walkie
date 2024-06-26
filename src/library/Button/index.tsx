import React, { forwardRef } from "react";
import { IButtonProps } from "./types";
import { stylesConfig } from "../../utils/functions";
import styles from "./styles.module.scss";

const classNames = stylesConfig(styles);

const BUTON_SIZES: { [key: string]: string } = {
	small: "button--size--small",
	medium: "button--size--medium",
	large: "button--size--large",
};

const BUTTON_VARIANTS: { [key: string]: string } = {
	filled: "button--variant--filled",
	outlined: "button--variant--outlined",
	text: "button--variant--text",
};

const Button: React.ForwardRefRenderFunction<
	HTMLButtonElement,
	IButtonProps
> = (
	{
		children,
		className,
		variant = "filled",
		size = "medium",
		loading = false,
		icon,
		iconPosition = "left",
		...props
	},
	ref
) => {
	return (
		<button
			className={[
				classNames(
					"button",
					BUTON_SIZES[size],
					BUTTON_VARIANTS[variant],
					{ "button--loading": loading },
					{ "button--disabled": props.disabled || loading }
				),
				className,
			].join(" ")}
			disabled={props.disabled || loading}
			ref={ref}
			{...props}
		>
			{loading ? (
				<div className={classNames("button__loader")}></div>
			) : (
				<>
					{icon && iconPosition === "left" ? (
						<div
							className={classNames(
								"button__icon",
								"button__icon--left"
							)}
						>
							{icon}
						</div>
					) : null}
					{children}
					{icon && iconPosition === "right" ? (
						<div
							className={classNames(
								"button__icon",
								"button__icon--right"
							)}
						>
							{icon}
						</div>
					) : null}
				</>
			)}
		</button>
	);
};

export default forwardRef<HTMLButtonElement, IButtonProps>(Button);
