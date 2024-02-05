import { SignIn } from "@clerk/nextjs";


export default function SignInPage() {
  return (
    <div>
      <SignIn afterSignUpUrl={'/landingpage'} />
    </div>
  )
}