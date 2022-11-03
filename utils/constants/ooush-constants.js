export const LOGIN_MESSAGE_TIMEOUT_MILLISECONDS = 5000;

export const REGISTRATION_FORM_EMAIL_ADDRESS_NOT_VALID = "Please enter a valid email address";
export const REGISTRATION_FORM_PASSWORD_NOT_VALID = "Please confirm your password confirmation matches your chosen password";

export const VERIFICATION_SUCCESS = "Your account has been successfully verified";

export const NAVIGATION_ITEM_ACCOUNT = "Account";

export const UNAUTHENTICATED_URLS = ['/login', '/registerUser', '/', '/about'];

export const NAV_ITEMS = [
	{
		authenticatedOnly: false,
		text: "About",
		title: "About",
		url: "/about",
		icon: "about"
	},
	{
		authenticatedOnly: false,
		text: "Home",
		title: "Home",
		url: "/",
		icon: "home"
	},
	{
		authenticatedOnly: true,
		text: "Dashboard",
		title: "Dashboard",
		url: "/dashboard",
		icon: "dashboard"
	},
	{
		authenticatedOnly: true,
		text: "Routines",
		title: "Routines",
		url: "/routines",
		icon: "routines"
	},
	{
		authenticatedOnly: false,
		text: "Register",
		title: "Register",
		url: "/registerUser",
		icon: "register"
	},
	{
		authenticatedOnly: false,
		text: "Login",
		title: "Login",
		url: "/login",
		icon: "login"
	},
	{
		authenticatedOnly: true,
		text: "Account",
		title: "Account",
		url: "",
		icon: "account",
	},
];

export const WEEKDAYS = [
    {id: 1, name: "Monday"},
    {id: 2, name: "Tuesday"},
    {id: 3, name: "Wednesday"},
    {id: 4, name: "Thursday"},
    {id: 5, name: "Friday"},
    {id: 6, name: "Saturday"},
    {id: 7, name: "Sunday"}
]