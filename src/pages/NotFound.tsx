
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center space-y-4 max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-instabids-blue">404</h1>
        <h2 className="text-2xl font-semibold">Resource Not Found</h2>
        <p className="text-muted-foreground pb-2">
          The page at <code className="bg-muted px-1 py-0.5 rounded">{location.pathname}</code> could not be found.
          It might have been moved or doesn't exist.
        </p>
        <Button asChild>
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
