import { config } from "dotenv";
import { getBoolean, getNumber, getString } from "../utils/safety";

config();

class ConfigService {
	constructor(private env: { [k: string]: string | undefined }) {
		this.env = env;
	}

	public get(key: string): string {
		if (!this.env[key]) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getString(this.env[key]);
	}

	public getNumber(key: string): number {
		const value = this.env[key];
		if (!value) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getNumber(this.env[key]);
	}

	public getBoolean(key: string): boolean {
		const value = this.env[key];
		if (!value) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getBoolean(this.env[key]);
	}
}

const configService = new ConfigService(process.env);

export default configService;

export const PORT = (() => {
	try {
		return configService.getNumber("PORT");
	} catch (error) {
		return 5000;
	}
})();
export const dbUri = configService.get("DB_URI");
