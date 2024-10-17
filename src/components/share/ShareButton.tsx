import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Share2 } from 'lucide-react'
import { FacebookIcon, PinterestIcon, XIcon } from '../icons'
import LinkedinIcon from '../icons/Linkedin'
import FacebookShare from './FacebookShare'
import LinkedinShare from './LinkedinShare'
import PinterestShare from './PinterestShare'
import XShare from './XShare'

export function ShareButton({ data }: { data: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-white">
          Share
          <Share2 className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuLabel>Social Media</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FacebookIcon className="mr-2 h-4 w-4" />
            <FacebookShare data={data} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <XIcon className="mr-2 h-4 w-4" />
            <XShare data={data} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LinkedinIcon className="mr-2 h-4 w-4" />
            <LinkedinShare data={data} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PinterestIcon className="mr-2 h-4 w-4" />
            <PinterestShare data={data} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
