"use client";

import { contactInfo, socialLinks } from "@/data/personal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, "_blank");
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-enterprise-blue-50 via-white to-success-green-50 dark:from-enterprise-blue-950 dark:via-background dark:to-success-green-950">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss enterprise architecture, backend systems, or development automation? 
            I&apos;m always open to interesting conversations and opportunities.
          </p>
        </div>

        {/* Availability Status */}
        <div className="text-center mb-12 animate-slide-up">
          <Card className="inline-flex p-4 bg-success-green-50 border-success-green-200 dark:bg-success-green-950 dark:border-success-green-800">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success-green-500 rounded-full animate-pulse" />
              <span className="text-success-green-700 dark:text-success-green-300 font-medium">
                {contactInfo.availability} • Remote • {contactInfo.timezone}
              </span>
            </div>
          </Card>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Primary Contact */}
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-slide-up">
            <div className="mb-6">
              <div className="w-16 h-16 bg-enterprise-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Me Directly</h3>
              <p className="text-muted-foreground text-sm mb-4">
                For project discussions, collaboration opportunities, or technical consultations
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-sm">
                <div className="text-muted-foreground mb-1">Email Address</div>
                <div className="font-mono text-enterprise-blue-600 dark:text-enterprise-blue-400">
                  {contactInfo.email}
                </div>
              </div>
              
              <Button 
                onClick={handleEmailClick}
                className="w-full bg-enterprise-blue-600 hover:bg-enterprise-blue-700"
              >
                Send Email
              </Button>
            </div>
          </Card>

          {/* Professional Networks */}
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6">
              <div className="w-16 h-16 bg-success-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Networks</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with me on professional platforms and explore my work
              </p>
            </div>
            
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={link.platform}
                  variant="outline"
                  onClick={() => handleSocialClick(link.url)}
                  className="w-full justify-start text-left hover:bg-muted/50"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <span className="mr-3">{getIconForPlatform(link.platform)}</span>
                  <div className="flex-1">
                    <div className="font-medium">{link.platform}</div>
                    {link.username && (
                      <div className="text-xs text-muted-foreground">
                        {link.username}
                      </div>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Location & Timezone Info */}
        <Card className="p-8 text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-2xl">🌍</div>
              <div className="font-semibold">Location</div>
              <div className="text-muted-foreground text-sm">{contactInfo.location}</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl">⏰</div>
              <div className="font-semibold">Timezone</div>
              <div className="text-muted-foreground text-sm">{contactInfo.timezone}</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl">💼</div>
              <div className="font-semibold">Status</div>
              <Badge className="bg-success-green-500 text-white">
                {contactInfo.availability}
              </Badge>
            </div>
          </div>
        </Card>

        {/* Technologies I'm Excited About */}
        <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-xl font-bold mb-6">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Bun Runtime",
              "Event Sourcing",
              "Kubernetes Operators",
              "Zero-Trust Architecture",
              "ML-Powered DevOps",
              "EdgeDB",
              "Temporal Workflows",
              "WebAssembly"
            ].map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="hover:bg-enterprise-blue-50 hover:border-enterprise-blue-300 dark:hover:bg-enterprise-blue-950 dark:hover:border-enterprise-blue-700 transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <Card className="p-8 bg-gradient-to-r from-enterprise-blue-600 to-success-green-600 text-white border-none">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Enterprise Solutions?
            </h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Whether you need enterprise architecture consultation, backend system design, 
              or development automation solutions, I&apos;m here to help turn your vision into reality.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={handleEmailClick}
              className="bg-white text-enterprise-blue-600 hover:bg-gray-100"
            >
              Start a Conversation
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

function getIconForPlatform(platform: string): string {
  switch (platform.toLowerCase()) {
    case "github":
      return "🐙";
    case "linkedin":
      return "💼";
    case "email":
      return "📧";
    case "twitter":
      return "🐦";
    default:
      return "🔗";
  }
}