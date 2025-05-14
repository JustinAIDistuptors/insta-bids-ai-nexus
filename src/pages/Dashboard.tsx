
import React from 'react';
import StatsCard from '@/components/dashboard/StatsCard';
import ActivityCard from '@/components/dashboard/ActivityCard';
import FeaturedResources from '@/components/dashboard/FeaturedResources';
import { Button } from '@/components/ui/button';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-instabids-blue to-instabids-darkblue rounded-lg p-8 text-white mb-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">AI Engineering Hub</h1>
          <p className="text-xl mb-6 opacity-90">
            "AI Engineering - We do not do the work. We create the systems that do the work."
          </p>
          <p className="mb-6 opacity-80">
            Welcome to the central knowledge repository and resource center for our AI engineering team.
            Find and contribute to our growing library of prompts, tools, workflows, and intelligence.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button variant="secondary" className="text-instabids-blue">
              Explore Resources
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View Latest Updates
            </Button>
          </div>
        </div>
      </div>

      <StatsCard />

      <div className="grid gap-6 md:grid-cols-2">
        <ActivityCard />
        <FeaturedResources />
      </div>
    </div>
  );
};

export default Dashboard;
