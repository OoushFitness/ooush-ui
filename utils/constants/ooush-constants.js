export const LOGIN_MESSAGE_TIMEOUT_MILLISECONDS = 5000;

export const REGISTRATION_FORM_EMAIL_ADDRESS_NOT_VALID = "Please enter a valid email address";
export const REGISTRATION_FORM_PASSWORD_NOT_VALID = "Please confirm your password confirmation matches your chosen password";

export const VERIFICATION_SUCCESS = "Your account has been successfully verified";

export const NAVIGATION_ITEM_ACCOUNT = "ACCOUNT";

export const UNAUTHENTICATED_URLS = ['/login', '/registerUser', '/', '/about'];

export const NAV_ITEMS = [
	{
		authenticatedOnly: false,
		text: "ABOUT",
		title: "About",
		url: "/about",
		icon: "about"
	},
	{
		authenticatedOnly: false,
		text: "HOME",
		title: "Home",
		url: "/",
		icon: "home"
	},
	{
		authenticatedOnly: true,
		text: "DASHBOARD",
		title: "Dashboard",
		url: "/dashboard",
		icon: "dashboard"
	},
	{
		authenticatedOnly: true,
		text: "ROUTINES",
		title: "Routines",
		url: "/routines",
		icon: "routines"
	},
	{
		authenticatedOnly: false,
		text: "REGISTER",
		title: "Register",
		url: "/registerUser",
		icon: "register"
	},
	{
		authenticatedOnly: false,
		text: "LOGIN",
		title: "Login",
		url: "/login",
		icon: "login"
	},
	{
		authenticatedOnly: true,
		text: "ACCOUNT",
		title: "Account",
		url: "",
		icon: "account",
	},
];

export const WEEKDAYS = [
    {id: 0, name: "MONDAY"},
    {id: 1, name: "TUESDAY"},
    {id: 2, name: "WEDNESDAY"},
    {id: 3, name: "THURSDAY"},
    {id: 4, name: "FRIDAY"},
    {id: 5, name: "SATURDAY"},
    {id: 6, name: "SUNDAY"}
];

export const KEYBOARD_ENTER_KEY = "Enter";