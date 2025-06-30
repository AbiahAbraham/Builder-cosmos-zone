import { Sidebar } from "@/components/ui/sidebar";

export default function Nearby() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Near You</h1>
          <p className="text-muted-foreground">
            Coming soon - Discover roommates and rooms in your area
          </p>
        </div>
      </div>
    </div>
  );
}
