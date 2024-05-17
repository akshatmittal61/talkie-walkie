import React from "react";
import { stylesConfig } from "../../utils/functions";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Typography } from "../../library";
import { Avatar } from "../../components";

const classes = stylesConfig(styles, "auth-wrapper");

const AuthWrapper: React.FC<{
	title: string;
	subtitle: string;
	children: any;
}> = ({ title, subtitle, children }) => {
	const navigate = useNavigate();

	return (
		<main className={classes("")}>
			<section className={classes("-graphic")}>
				<Typography
					size="head-1"
					weight="medium"
					className={classes("-graphic__text")}
				>
					Talkie-Walkie
				</Typography>
			</section>
			<section className={classes("-content")}>
				<div className={classes("-content-head")}>
					<h1 className={classes("-content-head__icon")}>
						<Avatar
							src="/favicon.png"
							alt="favicon"
							onClick={() => navigate("/")}
							size={50}
						/>
					</h1>
					<h1 className={classes("-content-head__title")}>{title}</h1>
					<h3 className={classes("-content-head__subtitle")}>
						{subtitle}
					</h3>
				</div>
				{children}
			</section>
		</main>
	);
};

export default AuthWrapper;
