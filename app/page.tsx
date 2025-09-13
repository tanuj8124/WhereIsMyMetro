"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Train, MapPin, Clock, Bell, Smartphone, Star, ArrowRight, Navigation, Zap, Shield } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Real-Time Tracking",
      description: "Get live updates on metro arrivals and departures with precise timing information.",
    },
    {
      icon: <Navigation className="h-8 w-8 text-primary" />,
      title: "Route Planning",
      description: "Plan your journey with the most efficient routes and transfer information.",
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Smart Notifications",
      description: "Receive alerts about delays, service updates, and your upcoming stops.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Station Locator",
      description: "Find nearby metro stations with walking directions and accessibility info.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Offline Support",
      description: "Access essential route information even when you're offline.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Reliable Data",
      description: "Trust in accurate, up-to-date information from official metro sources.",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Daily Commuter",
      content: "This app has made my daily commute so much easier. I never miss my metro anymore!",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "Tourist",
      content: "As a visitor to Ahmedabad, this app was a lifesaver for navigating the metro system.",
      rating: 5,
    },
    {
      name: "Anita Desai",
      role: "Business Professional",
      content: "The real-time updates help me plan my meetings better. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/fvu.png" alt="WhereIsMyMetro Logo" width={32} height={32} className="h-8 w-8 rounded-md" />
            <span className="text-xl font-bold">WhereIsMyMetro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Reviews
            </Link>
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 py-24 md:py-32">
          <div className={`text-center space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <Badge variant="secondary" className="animate-pulse-glow">
              <Zap className="h-3 w-3 mr-1" />
              Real-Time Metro Tracking
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              Track Your <span className="text-primary">Metro</span> in Real-Time
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Stay updated with live Ahmedabad metro information. Never miss your train again with accurate arrival
              times and smart notifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="animate-pulse-glow text-lg px-8 py-6">
                <Link href="/ahmedabad">
                  <Train className="mr-2 h-5 w-5" />
                  Track Ahmedabad Metro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Smartphone className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="animate-float">
              <div className="mx-auto max-w-4xl rounded-lg border bg-card p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Metro Stations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Happy Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive metro tracking features designed to make your commute seamless and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">About WhereIsMyMetro</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Making Metro Travel Simple and Reliable</h2>
              <p className="text-lg text-muted-foreground">
                WhereIsMyMetro was built with a simple mission: to make public transportation more accessible and
                reliable for everyone in Ahmedabad. Our app provides real-time information that helps you plan your
                journey with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time data from official metro sources</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>User-friendly interface designed for all ages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Continuous updates and improvements</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 animate-float">
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Train className="h-8 w-8 text-primary" />
                    <div>
                      <div className="font-semibold">Next Metro</div>
                      <div className="text-sm text-muted-foreground">Platform 1</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">2 minutes</div>
                  <div className="text-sm text-muted-foreground">Destination: Apparel Park</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied commuters who trust WhereIsMyMetro for their daily travels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Commute?</h2>
            <p className="text-xl opacity-90">
              Join thousands of commuters who rely on WhereIsMyMetro for accurate, real-time metro information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/ahmedabad">
                  <Train className="mr-2 h-5 w-5" />
                  Start Tracking Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.jpg"
                  alt="WhereIsMyMetro Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-md"
                />
                <span className="font-bold">WhereIsMyMetro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making metro travel simple and reliable for everyone in Ahmedabad.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Real-Time Tracking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Route Planning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Station Locator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Report Issue
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 WhereIsMyMetro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
