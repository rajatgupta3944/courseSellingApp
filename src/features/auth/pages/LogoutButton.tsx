import { useAuth } from "react-oidc-context";
import CourseButton from "../../../components/common/CourseButton";

const LogoutButton = () => {
  const auth = useAuth();

  const logout = () => {
    const clientId = "38h4mk3scdp6ve3kpjckg8mba7";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain =
      "https://ap-south-1b3tmswmrq.auth.ap-south-1.amazoncognito.com";

    // clear local tokens
    auth.removeUser();

    // redirect to Cognito logout
    window.location.href =
      `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`
  };

  return <CourseButton onClick={logout} label="Logout" type="primary" danger />;
};

export default LogoutButton;
