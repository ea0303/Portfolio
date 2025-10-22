"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Mail,
  Linkedin,
  BarChart3,
  Users,
  TrendingUp,
  Database,
  LineChart,
  Brain,
  MessageSquare,
  ExternalLink,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-navy">
            <div className="h-8 w-8 rounded-full bg-coral flex items-center justify-center text-white text-sm">MS</div>
            <span className="hidden sm:inline">Melissa Smith</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-sage">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-sage">
              Projects
            </Link>
            <Link href="#case-studies" className="text-sm font-medium transition-colors hover:text-sage">
              Case Studies
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-sage">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-sage">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-coral hover:bg-coral/90">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-lavender via-background to-lavender/50">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-sage rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-96 h-96 bg-coral rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy">
                    Turning customer data into actionable insight and growth.
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Melissa Smith | Data, Insights & Customer Experience Strategist
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" asChild className="bg-coral hover:bg-coral/90">
                    <Link href="#projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                  >
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-navy">10+</div>
                    <div className="text-sm text-muted-foreground">Years in Insights</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-navy">50+</div>
                    <div className="text-sm text-muted-foreground">CX Campaigns</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-navy">3</div>
                    <div className="text-sm text-muted-foreground">SaaS Platforms</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage to-coral rounded-full blur-2xl opacity-30"></div>
                  <img
                    src="/professional-woman-portrait-data-analyst.jpg"
                    width={500}
                    height={500}
                    alt="Melissa Smith"
                    className="relative rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-navy">
                Human-Centered Data Strategy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Melissa Smith is a customer insights strategist focused on bridging data analytics with brand
                experience. With experience across SaaS, DTC, and digital media, she builds frameworks that translate
                complex datasets into stories that drive retention, loyalty, and growth.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <Card className="border-sage/20 hover:border-sage transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Database className="h-8 w-8 mx-auto mb-2 text-sage" />
                    <p className="text-sm font-medium">Data Visualization & BI</p>
                  </CardContent>
                </Card>
                <Card className="border-sage/20 hover:border-sage transition-colors">
                  <CardContent className="pt-6 text-center">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 text-sage" />
                    <p className="text-sm font-medium">Voice of Customer</p>
                  </CardContent>
                </Card>
                <Card className="border-sage/20 hover:border-sage transition-colors">
                  <CardContent className="pt-6 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-sage" />
                    <p className="text-sm font-medium">Campaign Optimization</p>
                  </CardContent>
                </Card>
                <Card className="border-sage/20 hover:border-sage transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-sage" />
                    <p className="text-sm font-medium">CX Journey Mapping</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-lavender/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-navy">
                Featured Work & Interactive Projects
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-lg">Data and insights come to life.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
              {/* Project 1 */}
              <Card className="group overflow-hidden border-2 hover:border-sage transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64 bg-gradient-to-br from-navy/10 to-sage/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="h-32 w-32 text-sage/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button asChild className="bg-coral hover:bg-coral/90">
                      <Link
                        href="https://melissasmith-insights-portfolio.streamlit.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-navy">CX Sentiment Analyzer</CardTitle>
                  <Badge className="w-fit bg-sage/10 text-sage border-sage/20">Live App</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    An NLP-driven app analyzing customer comments for sentiment and key themes in real-time. Used to
                    identify drivers of satisfaction and churn in digital product feedback.
                  </p>
                  <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">[Sentiment Distribution Chart Preview]</p>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="group overflow-hidden border-2 hover:border-sage transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64 bg-gradient-to-br from-navy/10 to-coral/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LineChart className="h-32 w-32 text-coral/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button asChild className="bg-coral hover:bg-coral/90">
                      <Link
                        href="https://melissasmith-promo-impact.streamlit.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-navy">Promo Impact Forecaster</CardTitle>
                  <Badge className="w-fit bg-sage/10 text-sage border-sage/20">Live App</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Interactive model to forecast revenue, conversion, and margin based on promotional elasticity. Helps
                    marketing teams balance growth and profitability through scenario planning.
                  </p>
                  <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">[Revenue vs Discount Chart Preview]</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-navy">Case Studies & Insights</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-coral transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-sage" />
                  </div>
                  <CardTitle className="text-lg text-navy">Driving Retention Through Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    CX SaaS platform case study demonstrating how sentiment analysis reduced churn by 23%.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-coral transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                    <BarChart3 className="h-6 w-6 text-coral" />
                  </div>
                  <CardTitle className="text-lg text-navy">Predicting Promo Lift in Omnichannel Retail</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    eCommerce optimization case showing 18% improvement in promotional ROI.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-coral transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-navy/20 transition-colors">
                    <Brain className="h-6 w-6 text-navy" />
                  </div>
                  <CardTitle className="text-lg text-navy">Building Feedback Loops Between Product & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Customer Journey integration that improved NPS scores by 15 points.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-lavender/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-navy">Skills & Tools</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-sage transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">Data Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>SQL</span>
                      <span className="text-sage font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Python</span>
                      <span className="text-sage font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Pandas</span>
                      <span className="text-sage font-medium">88%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>GA4</span>
                      <span className="text-sage font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-sage transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">Visualization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tableau</span>
                      <span className="text-sage font-medium">92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Looker</span>
                      <span className="text-sage font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Power BI</span>
                      <span className="text-sage font-medium">87%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "87%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-sage transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">CX & CRM</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Salesforce</span>
                      <span className="text-sage font-medium">88%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>HubSpot</span>
                      <span className="text-sage font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Gainsight</span>
                      <span className="text-sage font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-sage transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">Strategy & Ops</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Journey Mapping</span>
                      <span className="text-sage font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>VoC Programs</span>
                      <span className="text-sage font-medium">92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>A/B Testing</span>
                      <span className="text-sage font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-navy">What Clients Say</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-2 border-lavender/50 hover:border-sage transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sage to-coral"></div>
                    <div>
                      <CardTitle className="text-base text-navy">Senior Director, Bitmovin</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "Melissa brings an analytical rigor to creative strategy that few can match. Her insights
                    transformed how we approach customer segmentation."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-lavender/50 hover:border-sage transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-coral to-navy"></div>
                    <div>
                      <CardTitle className="text-base text-navy">Marketing VP, SaaS Client</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "Her insights transformed how we measure and act on customer sentiment. ROI on campaigns improved by
                    40% in just 6 months."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-lavender via-background to-sage/10"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center max-w-2xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-navy">
                  Let's Build Insight-Driven Growth
                </h2>
                <p className="text-muted-foreground text-lg">
                  Ready to transform your data into actionable strategies? Let's connect.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-coral hover:bg-coral/90">
                  <Link href="mailto:melissa.smith@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                >
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-navy text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-sm">© 2025 Melissa Smith | Built with V0 + Streamlit + Data ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
