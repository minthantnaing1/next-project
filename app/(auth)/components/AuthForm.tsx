import google from "@/public/google.webp";
import github from "@/public/github.png";
import Button from "@/components/Button";

function AuthForm() {
  return (
    <div className="flex gap-4">
      <Button image={google} type="outline">
        Sign in with Google
      </Button>

      <Button image={github} type="outline">
        Sign in with GitHub
      </Button>
    </div>
  );
}

export default AuthForm;
