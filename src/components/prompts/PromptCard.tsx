
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Star, Copy, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from 'sonner';

export interface PromptCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  interface: string;
  useCount: number;
  lastUpdated: string;
  isFavorite?: boolean;
}

const PromptCard: React.FC<PromptCardProps> = ({
  id,
  title,
  description,
  tags,
  interface: aiInterface,
  useCount,
  lastUpdated,
  isFavorite = false,
}) => {
  const handleCopyPrompt = () => {
    // In a real app, this would copy the actual prompt content
    toast.success('Prompt copied to clipboard');
  };

  const handleToggleFavorite = () => {
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  return (
    <Card className="card-hover h-full flex flex-col">
      <CardContent className="flex-1 p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="bg-blue-100 p-2 rounded-md text-blue-700">
            <BookOpen className="h-5 w-5" />
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
        <div className="flex gap-1.5 flex-wrap mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-muted/50 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-5 py-3 border-t flex justify-between bg-muted/20">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" />
            <span>{aiInterface}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{useCount} uses</span>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleCopyPrompt}>
                <Copy className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy prompt</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default PromptCard;
