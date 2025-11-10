import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EducationResourcesPage() {
  return (
    <>
      <Navbar mode="education" />
      <main>
        <section className="pt-32 pb-20 bg-section-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-heading">Education Resources</h1>
            <p className="text-lg text-subheading max-w-2xl mx-auto">
              Download guides, lesson plans, and reference material for educators and students.
            </p>
          </div>
        </section>
      </main>
      <Footer mode="education" />
    </>
  )
}






