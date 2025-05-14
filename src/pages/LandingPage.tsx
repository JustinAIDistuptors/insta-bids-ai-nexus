
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Wrench, Database, Rss, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-instabids-blue rounded-md flex items-center justify-center">
              <span className="text-white font-bold">IB</span>
            </div>
            <span className="font-bold text-lg">InstaBids</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-instabids-blue">Home</Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-instabids-blue">Dashboard</Link>
            <Link to="/prompts" className="text-sm font-medium hover:text-instabids-blue">Prompts</Link>
            <Link to="/tools" className="text-sm font-medium hover:text-instabids-blue">Tools</Link>
            <Link to="/mcp" className="text-sm font-medium hover:text-instabids-blue">MCP Repository</Link>
            <Link to="/intelligence" className="text-sm font-medium hover:text-instabids-blue">AI Intelligence</Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                Enter Hub <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              AI Engineering Hub
            </h1>
            <p className="text-xl md:text-2xl font-medium text-instabids-blue">
              "AI Engineering - We do not do the work. We create the systems that do the work."
            </p>
            <p className="text-muted-foreground text-lg">
              The central knowledge repository and resource center for our AI engineering team.
              Find and contribute to our growing library of prompts, tools, workflows, and intelligence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/dashboard">
                <Button size="lg" className="gap-2">
                  Enter Dashboard <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 bg-gradient-to-br from-instabids-blue to-instabids-darkblue rounded-2xl shadow-xl overflow-hidden border border-white/10">
              <AspectRatio ratio={4/3} className="bg-muted">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                  <div className="max-w-md space-y-4">
                    <h3 className="text-2xl font-bold">Collective AI Intelligence</h3>
                    <p className="opacity-90">Building systems that leverage AI to create exponential value through structured knowledge and reproducible workflows</p>
                  </div>
                </div>
              </AspectRatio>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-instabids-blue/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Hub Resources</h2>
            <p className="text-muted-foreground">
              Explore our comprehensive collection of AI engineering resources designed to empower your workflow.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-instabids-blue" />}
              title="Prompts Library" 
              description="A comprehensive collection of optimized prompts for various AI models and use cases."
              count="142"
              link="/prompts"
            />
            <FeatureCard 
              icon={<Wrench className="h-8 w-8 text-instabids-blue" />}
              title="Tools Catalog" 
              description="Documentation and guides for all AI tools used across our organization."
              count="53"
              link="/tools"
            />
            <FeatureCard 
              icon={<Database className="h-8 w-8 text-instabids-blue" />}
              title="MCP Repository" 
              description="Model Context Protocol tools and workflows for agentic operations."
              count="27"
              link="/mcp"
            />
            <FeatureCard 
              icon={<Rss className="h-8 w-8 text-instabids-blue" />}
              title="AI Intelligence" 
              description="Curated feed of relevant AI advancements, updates, and insights."
              count="35"
              link="/intelligence"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-instabids-blue to-instabids-darkblue p-1 rounded-2xl">
              <div className="bg-card rounded-xl p-8 h-full">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-instabids-blue">Our Philosophy</h3>
                  <p className="text-2xl font-bold">
                    "AI Engineering - We do not do the work. We create the systems that do the work."
                  </p>
                  <p className="text-muted-foreground">
                    At InstaBids, we believe in building robust, scalable systems that leverage AI 
                    to create exponential value. Our engineering approach focuses on creating reproducible 
                    workflows and structured knowledge repositories.
                  </p>
                  <p className="text-muted-foreground">
                    This hub embodies that philosophy by organizing our collective intelligence
                    and making it accessible, shareable, and continuously improvable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Built for AI Engineers</h2>
              <p className="text-xl text-muted-foreground">
                Designed to enhance your productivity and collaboration
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  title: "Knowledge Management", 
                  description: "Centralized repository for all AI engineering knowledge and resources"
                },
                { 
                  title: "Workflow Optimization", 
                  description: "Standardized processes and tools for consistent, high-quality results"
                },
                { 
                  title: "Collaborative Innovation", 
                  description: "Platform for sharing insights and building upon each other's work"
                },
                { 
                  title: "Continuous Learning", 
                  description: "Stay updated with the latest AI advancements relevant to our work"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-instabids-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-instabids-blue to-instabids-darkblue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Explore the Hub?</h2>
            <p className="text-lg opacity-90">
              Access our comprehensive collection of AI resources and start building powerful systems.
            </p>
            <div className="pt-4">
              <Link to="/dashboard">
                <Button variant="secondary" size="lg" className="text-instabids-blue">
                  Enter the Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-instabids-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">IB</span>
              </div>
              <span className="font-semibold">InstaBids AI Engineering Hub</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 InstaBids. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  count: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, count, link }) => {
  return (
    <Link to={link}>
      <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div className="rounded-full bg-primary/10 p-3">
              {icon}
            </div>
            <div className="text-2xl font-bold text-instabids-blue">{count}</div>
          </div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center text-sm font-medium text-instabids-blue">
            Explore {title} <ChevronRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LandingPage;
