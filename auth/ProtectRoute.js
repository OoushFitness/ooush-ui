import LoadingPage from '../pages/loading/loading'

export const ProtectRoute = ({ children }) => {
	const { isAuthenticated, isLoading } = useAuth();
	if (isLoading || (!isAuthenticated && window.location.pathname !== '/login')){
		return <LoadingPage />;
	}
	return children;
};