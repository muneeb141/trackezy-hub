
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/ui/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
          <p className="text-xl text-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <a href="/" className="inline-flex items-center">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Return to Dashboard
            </a>
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
