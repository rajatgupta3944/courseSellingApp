import { useAuth } from "react-oidc-context";
import CourseButton from "../../../components/common/CourseButton";

const SignupButton = () => {
  const auth = useAuth();

  const handleSignup = () => {
    auth.signinRedirect({
      extraQueryParams: {
        screen_hint: "signup",   // tells Cognito to open signup page
      },
    });
  };

  return (
    <CourseButton onClick={handleSignup} label="Sign up" type="primary" />
  );
};

export default SignupButton;
