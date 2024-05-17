import { getString } from "../../utils/safety";

export const url: Record<"frontend" | "backend", string> = {
	frontend: getString(process.env.REACT_APP_FRONTEND_BASE_URL),
	backend: getString(process.env.REACT_APP_FRONTEND_BASE_URL),
};
