import { SignIn } from "@clerk/nextjs";


export default function SignUpPage() {
  return (
    <div>
      <SignIn afterSignUpUrl={'/landingpage'}/>
    </div>
  )
}