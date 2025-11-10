import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EngineeringProjectsPage() {
  return (
    <>
      <Navbar mode="engineering" />
      <main>
        <section className="pt-32 pb-20 bg-gray-950">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Projects</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A selection of engineering projects and case studies.
            </p>
          </div>
        </section>
      </main>
      <Footer mode="engineering" />
    </>
  )
}






