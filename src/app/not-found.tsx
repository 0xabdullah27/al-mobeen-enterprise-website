import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 bg-base min-h-[70vh] flex items-center justify-center">
      <div className="section-container text-center max-w-md mx-auto">
        <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 font-bold text-3xl">
          404
        </div>
        <h1 className="text-3xl font-bold mb-3">Page Not Found</h1>
        <p className="text-sm text-neutral leading-relaxed mb-8">
          The page or product you are looking for does not exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="primary" size="default" asChild>
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button variant="outline" size="default" asChild>
            <Link href="/products">
              Browse Products
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
