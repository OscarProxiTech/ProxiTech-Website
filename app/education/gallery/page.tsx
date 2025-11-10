import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GalleryList } from "@/components/gallery-list"
import { getAllImagesFromSubfolders } from "@/lib/images"

export default function GalleryPage() {
  // Get all images from workshops folder, sorted chronologically
  const allImages = getAllImagesFromSubfolders("workshops")

  return (
    <>
      <Navbar mode="education" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Education Gallery</h1>
              <p className="text-lg text-muted-foreground">
                Explore our programs, workshops, and student achievements
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {allImages.length} images from workshops and events
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <GalleryList allImages={allImages} />
          </div>
        </section>
      </main>
      <Footer mode="education" />
    </>
  )
}
