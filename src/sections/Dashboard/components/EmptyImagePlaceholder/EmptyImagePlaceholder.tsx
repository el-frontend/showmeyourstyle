import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function DashboardEmptyImagePlaceholder() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <div className="relative overflow-hidden rounded-lg border border-dashed p-12">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
          <div className="relative flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Upload className="h-10 w-10 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold">No images uploaded yet</h3>
            <p className="text-sm text-gray-500">Upload your first image to start your gallery</p>
            <Button className="mt-4">
              Upload Image
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}