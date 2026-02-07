import { useAuth } from "react-oidc-context";
import CourseButton from "../../../components/common/CourseButton";

const LoginButton = () => {
  const auth = useAuth();


return <CourseButton label="Login" type="primary" onClick={() => auth.signinRedirect()} />
}

export default LoginButton;