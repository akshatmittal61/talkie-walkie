import React, { useState } from "react";
import styles from "./styles.module.scss";
import Wrapper from "./Wrapper";
import { notify, sleep, stylesConfig } from "../../utils/functions";
import { Button } from "../../library";

const classes = stylesConfig(styles, "auth");

interface LoginValues {
	email: string;
	password: string;
}

export const AuthLogin: React.FC = () => {
	const [inputCred, setInputCred] = useState<LoginValues>({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputCred((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setLoading(true);
			console.log(inputCred);
			await sleep(2);
			notify.success("Login successful!");
		} catch (error) {
			console.error(error);
			notify.error("Login failed!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Wrapper title="Login" subtitle="Welcome back again!">
			<form className={classes("-content-form")} onSubmit={handleSubmit}>
				<Input
					type="email"
					name="email"
					variant="line"
					placeholder="Email"
					value={inputCred.email}
					onChange={handleInputChange}
				/>
				<Input
					type={showPassword ? "text" : "password"}
					name="password"
					variant="line"
					placeholder="Password"
					value={inputCred.password}
					onChange={handleInputChange}
					icon={
						showPassword ? (
							<BiHide onClick={() => setShowPassword(false)} />
						) : (
							<BiShow onClick={() => setShowPassword(true)} />
						)
					}
				/>
				<Button type="submit" variant="filled" loading={loading}>
					Login
				</Button>
			</form>
		</Wrapper>
	);
};

export default AuthLogin;
