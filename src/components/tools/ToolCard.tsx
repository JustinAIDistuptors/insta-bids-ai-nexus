
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from 'sonner';
import { Wrench, Star, ExternalLink, Calendar, Settings } from 'lucide-react';

export interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  complexityLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  lastUpdated: string;
  integration: string;
  isFavorite?: boolean;
  url?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  id,
  title,
  description,
  category,
  complexityLevel,
  lastUpdated,
  integration,
  isFavorite = false,
  url,
}) => {
  const handleToggleFavorite = () => {
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  const getComplexityColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="card-hover h-full flex flex-col">
      <CardContent className="flex-1 p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="bg-green-100 p-2 rounded-md text-green-700">
            <Wrench className="h-5 w-5" />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={isFavorite ? "text-amber-500 hover:text-amber-600" : "text-muted-foreground hover:text-amber-500"}
                  onClick={handleToggleFavorite}
                >
                  <Star className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-3">{description}</p>
        
        <div className="flex gap-2 flex-wrap mb-4">
          <Badge variant="outline" className="bg-green-50">{category}</Badge>
          <Badge variant="outline" className={getComplexityColor(complexityLevel)}>
            {complexityLevel}
          </Badge>
          {integration && (
            <Badge variant="outline" className="bg-blue-50 text-blue-800">
              {integration}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-5 py-3 border-t flex justify-between bg-muted/20">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>Updated {lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="h-3.5 w-3.5" />
            <span>Setup guide</span>
          </div>
        </div>
        {url && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open tool website</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
