import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import clsx from 'clsx'
import Link from 'next/link'

type Props = {
  dark?: boolean
}

const SignInUserButton: React.FC<Props> = ({ dark }) => {
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
            className={clsx(
              `rounded-full px-4 py-2 hover:shadow-md border`,
              dark
                ? 'text-primary border-primary hover:bg-black/10'
                : 'text-white  border-white   hover:shadow-white'
            )}
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
