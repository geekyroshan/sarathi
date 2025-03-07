import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { 
  Globe, 
  ArrowRight, 
  Play,
  Calendar,
  BrainCircuit,
  MessageSquare,
  BarChart,
  Users,
  RefreshCw
} from "lucide-react";

export default function Index() {
  const { user, signOut } = useAuth();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header Section */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-bold text-white">S</span>
          </div>
          <span className="text-xl font-semibold">Sarathi</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">How it works</a>
          <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <Button variant="outline" onClick={() => signOut()}>
              Sign Out
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="outline">
                Sign In
              </Button>
            </Link>
          )}
          <Link to="/login">
            <Button>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
          AI-Powered Customer Support
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Sarathi helps businesses automate customer support with AI while maintaining the human touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            Watch Demo <Play className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 h-full w-full rounded-xl"></div>
          <img
            src="https://placehold.co/1200x600/2a3a4a/FFFFFF/png?text=Sarathi+Dashboard+Preview"
            alt="Sarathi Dashboard"
            className="rounded-xl shadow-2xl mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to deliver exceptional customer support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <BrainCircuit className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Responses</h3>
            <p className="text-slate-300">
              Automatically generate human-like responses to common customer queries.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Omnichannel Support</h3>
            <p className="text-slate-300">
              Manage conversations across email, chat, social media, and more from a single dashboard.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
            <p className="text-slate-300">
              Track performance metrics and gain insights to improve your customer support.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-slate-300">
              Seamlessly collaborate with your team to resolve complex customer issues.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
            <p className="text-slate-300">
              Communicate with customers in their preferred language with automatic translation.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all">
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Automation Workflows</h3>
            <p className="text-slate-300">
              Create custom workflows to automate repetitive tasks and improve efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get started with Sarathi in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 h-full">
              <div className="bg-primary text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Your Channels</h3>
              <p className="text-slate-300">
                Integrate your email, chat, and social media channels with Sarathi.
              </p>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 h-full">
              <div className="bg-primary text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Train Your AI Assistant</h3>
              <p className="text-slate-300">
                Customize your AI assistant with your brand voice and knowledge base.
              </p>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 h-full">
              <div className="bg-primary text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Automating Support</h3>
              <p className="text-slate-300">
                Let Sarathi handle routine queries while your team focuses on complex issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-slate-300">/month</span>
            </div>
            <p className="text-slate-300 mb-6">Perfect for small businesses just getting started.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Up to 500 conversations/month</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>2 team members</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Basic AI responses</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Email + Chat support</span>
              </li>
            </ul>
            <Button className="mt-auto w-full">Get Started</Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-primary relative flex flex-col">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-semibold py-1 px-3 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-slate-300">/month</span>
            </div>
            <p className="text-slate-300 mb-6">Ideal for growing businesses with moderate support volume.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Up to 2,000 conversations/month</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>5 team members</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Advanced AI with custom training</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>All channels + priority support</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <Button className="mt-auto w-full">Get Started</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <p className="text-slate-300 mb-6">For large organizations with complex support needs.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Unlimited conversations</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Custom AI model development</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>SLA guarantees</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-auto w-full">Contact Sales</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-20">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your customer support?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Join thousands of businesses using Sarathi to deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Schedule a Demo <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-10 border-t border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Features</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Pricing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Integrations</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Guides</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">API Reference</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">About</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Contact</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary text-sm">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-bold text-white text-sm">S</span>
            </div>
            <span className="text-lg font-semibold">Sarathi</span>
          </div>
          <div className="text-slate-300 text-sm">
            © {new Date().getFullYear()} Sarathi AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
