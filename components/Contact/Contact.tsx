import { Github, Instagram, Youtube, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <section id='contact'>
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      {/* Centered Header at the Top */}
      <h2 className="text-[8vw] md:text-[6vw] font-bold text-center text-gray-700 mb-10">
        CONTACT
      </h2>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold leading-tight">
              Hire Me
              <br />
              For The Next Projects.
            </h1>
            <p className="text-muted-foreground">Let&apos;s Work Together</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Youtube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <Card className="bg-white text-black">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-6">Contact Me</h2>
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Full Name"
                  className="bg-transparent border-gray-200"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-gray-200"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-transparent border-gray-200"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Comment Here"
                  className="bg-transparent border-gray-200 min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-gray-500 hover:bg-orange-500 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
    </section>
  );
}
