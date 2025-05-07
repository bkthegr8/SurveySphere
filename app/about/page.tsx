import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { Mail, Linkedin, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-16">
      <AnimatedBackground />
      <Navbar />

      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SurveySphere</h1>
            <div className="relative">
              <div className="absolute -z-10 inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-fuchsia-900/20 to-purple-900/20 rounded-full blur-3xl opacity-30"></div>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A community-driven platform connecting survey creators with willing participants through goodwill and
                mutual support.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-1 bg-purple-500 rounded-full"></div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <Card className="bg-black/40 border-purple-900/30">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  SurveySphere was created with a simple yet powerful mission: to break down barriers between survey
                  creators and participants. We believe that research and data collection shouldn't be limited by
                  financial constraints or complex registration processes.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Our platform operates on the principle of community support—researchers get the participants they
                  need, and community members can contribute to meaningful projects without the friction of creating
                  accounts or navigating complicated platforms.
                </p>
                <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-300 font-medium">Core Values:</p>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Accessibility: No barriers to entry for creators or participants</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Community: Building a supportive ecosystem for research and feedback</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Simplicity: Streamlined experience without unnecessary complexity</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Transparency: Clear information about all surveys and their purposes</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How It Works */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-1 bg-purple-500 rounded-full"></div>
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>
            <Card className="bg-black/40 border-purple-900/30">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative">
                    <div className="absolute -z-10 w-full h-full">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent rounded-lg opacity-50"></div>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 relative">
                        <span className="text-2xl font-bold text-purple-400">1</span>
                        <div className="absolute inset-0 rounded-full border border-purple-500/30"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Share Your Survey</h3>
                      <p className="text-muted-foreground">
                        Add your survey link and details without creating an account or paying fees
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -z-10 w-full h-full">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent rounded-lg opacity-50"></div>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 relative">
                        <span className="text-2xl font-bold text-purple-400">2</span>
                        <div className="absolute inset-0 rounded-full border border-purple-500/30"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Reach Participants</h3>
                      <p className="text-muted-foreground">
                        Your survey becomes available to our community of willing participants
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -z-10 w-full h-full">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent rounded-lg opacity-50"></div>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 relative">
                        <span className="text-2xl font-bold text-purple-400">3</span>
                        <div className="absolute inset-0 rounded-full border border-purple-500/30"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Help Others</h3>
                      <p className="text-muted-foreground">
                        Browse and participate in surveys to help fellow researchers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg mb-6">Ready to get started with SurveySphere?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link href="/add-survey">Add Your Survey</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950">
                      <Link href="/browse">Browse Surveys</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* About the Creator */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-1 bg-purple-500 rounded-full"></div>
              <h2 className="text-3xl font-bold">About the Creator</h2>
            </div>
            <Card className="bg-black/40 border-purple-900/30">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-4xl font-bold text-white">
                    BD
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">B K Danush</h3>
                    <p className="text-lg text-muted-foreground mb-4">Creator & Developer of SurveySphere</p>
                    <p className="mb-4">
                      B K Danush created SurveySphere to address the challenges faced by researchers and survey creators
                      in finding willing participants. With a passion for community-driven solutions, Danush built this
                      platform to connect people and facilitate research without traditional barriers.
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-5 w-5" />
                      <a href="mailto:danushbk16@gmail.com" className="hover:text-purple-400 transition-colors">
                        danushbk16@gmail.com
                      </a>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button variant="outline" size="icon" className="rounded-full" asChild>
                        <a
                          href="https://www.linkedin.com/in/danush-bk-5795a5299/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact & Support */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-1 bg-purple-500 rounded-full"></div>
              <h2 className="text-3xl font-bold">Contact & Support</h2>
            </div>
            <Card className="bg-black/40 border-purple-900/30">
              <CardContent className="p-6">
                <p className="mb-6">
                  Have questions, suggestions, or need assistance with SurveySphere? We're here to help! Feel free to
                  reach out using the contact information below.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-black/30 rounded-lg border border-purple-900/50">
                    <h3 className="text-xl font-semibold mb-3">General Inquiries</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-5 w-5" />
                      <a href="mailto:danushbk16@gmail.com" className="hover:text-purple-400 transition-colors">
                        danushbk16@gmail.com
                      </a>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      For general questions about SurveySphere, partnership opportunities, or feedback.
                    </p>
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg border border-purple-900/50">
                    <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-5 w-5" />
                      <a href="mailto:danushbk16@gmail.com" className="hover:text-purple-400 transition-colors">
                        danushbk16@gmail.com
                      </a>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      For technical issues, bug reports, or help with using the platform.
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground">We typically respond to all inquiries within 24-48 hours.</p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  )
}
