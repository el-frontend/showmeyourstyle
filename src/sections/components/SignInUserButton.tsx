import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const SignInUserButton = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button className="rounded-full" variant="outline">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-full text-background px-4 py-2  border-background border  hover:shadow-md"
          >
            Dashboard
          </Link>
          <UserButton />
        </div>
      </SignedIn>
    </>
  )
}
export default SignInUserButton
