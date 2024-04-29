export const url: Record<"frontend" | "backend", string> = {
	frontend: process.env.REACT_APP_FRONTEND_BASE_URL || "",
	backend: process.env.REACT_APP_BACKEND_BASE_URL || "",
};
