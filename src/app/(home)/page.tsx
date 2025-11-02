import Link from "next/link";
import { BookOpen, Github, Users, Gamepad2, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center flex-1 min-h-screen px-4 py-16">
      <div className="max-w-4xl w-full space-y-8">
        {/* Beta Notice */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                Beta Documentation - Unofficial
              </h3>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                This documentation is currently in beta and is not officially
                endorsed by Legacy Roleplay. Information may be incomplete or
                subject to change. Please verify important details with official
                sources.
              </p>
            </div>
          </div>
        </div>

        {/* Logo/Branding Section */}
        <div className="text-center space-y-4 mb-12">
          {/* <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#006A44] to-[#F42A41] mb-6 shadow-lg">
            <span className="text-4xl font-bold text-white">LP</span>
          </div> */}
          <div className="flex items-center justify-center">
            <Image
              src="/lrbd_logo.png"
              alt="Legacy Roleplay Bangladesh"
              className="w-24 h-24 rounded-full"
              width={100}
              height={100}
            />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#006A44] to-[#F42A41] bg-clip-text text-transparent">
            Legacy Roleplay Bangladesh
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Another "subdivision" of Legacy Roleplay: Bangladesh. A
            community-driven GTA V roleplay server focused on creating
            immersive, realistic roleplay experiences for the Bengali community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Link
            href="/docs"
            className="group p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-foreground transition-colors">
                  Documentation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Browse our comprehensive guides and documentation
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/docs/getting-started/new-player-guide"
            className="group p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="flex items-start gap-4">
              <Gamepad2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-foreground transition-colors">
                  Get Started
                </h3>
                <p className="text-sm text-muted-foreground">
                  New to the server? Start here to learn the basics
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg border bg-card">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Community Driven</h3>
            <p className="text-sm text-muted-foreground">
              Open source documentation maintained by the community
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border bg-card">
            <Github className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Open Source</h3>
            <p className="text-sm text-muted-foreground">
              Contribute and improve our docs on GitHub
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border bg-card">
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Always Updated</h3>
            <p className="text-sm text-muted-foreground">
              Latest information about server features and rules
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-card border rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://steamdb.info/calculator/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Find Steam Hex
            </a>
            <a
              href="https://status.cfx.re/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              FiveM Status
            </a>
            <a
              href="https://discord.gg/N65kDSV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Join Discord
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-card border rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">About the Community</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Legacy Roleplay is an English community founded in early 2018. We
              have been asked to create a subdivision, aimed at players from
              Bangladesh. As we are open and intrigued by the new possibilities
              and opportunities.
            </p>
            <p>
              This "subdivision" of Legacy is owned by the main community, but
              is fully managed and controlled by others.
            </p>
            <p>
              We hope this allows for a better and more enjoyable experience for
              the Bengali part of our community, and provides a better
              environment for role play and growth.
            </p>
            <p>
              FiveM servers are still hosted by the main community. This discord
              is also owned by the main community, but is controlled by another
              person.
            </p>
            <p>
              The FiveM server database is not synchronized between the main
              server and this division.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            Explore Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
