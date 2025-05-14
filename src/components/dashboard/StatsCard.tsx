
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Wrench, Database, Rss } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  growth?: string;
  positive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, growth, positive }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="rounded-full bg-primary/10 p-1 text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {growth && (
          <p className="text-xs text-muted-foreground mt-1">
            <span className={positive ? "text-green-500" : "text-red-500"}>
              {positive ? '↑' : '↓'} {growth}
            </span>{' '}
            from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const StatsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="Total Prompts" 
        value="142" 
        icon={<BookOpen className="h-4 w-4" />}
        growth="12%"
        positive={true}
      />
      <StatCard 
        title="Tools Documented" 
        value="53" 
        icon={<Wrench className="h-4 w-4" />}
        growth="8%"
        positive={true}
      />
      <StatCard 
        title="MCP Components" 
        value="27" 
        icon={<Database className="h-4 w-4" />}
        growth="5%"
        positive={true}
      />
      <StatCard 
        title="Intelligence Articles" 
        value="35" 
        icon={<Rss className="h-4 w-4" />}
        growth="3%"
        positive={false}
      />
    </div>
  );
};

export default StatsCard;
