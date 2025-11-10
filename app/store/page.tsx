import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function StorePage() {
  return (
    <>
      <Navbar mode="education" />
      <main>
        <section className="pt-32 pb-20 bg-section-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-heading">Store</h1>
            <p className="text-lg text-subheading max-w-2xl mx-auto">
              Our store is coming soon. Browse kits, components, and course bundles here.
            </p>
          </div>
        </section>
      </main>
      <Footer mode="education" />
    </>
  )
}






