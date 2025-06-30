import { Sidebar } from "@/components/ui/sidebar";

export default function Matches() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Your Matches</h1>
          <p className="text-muted-foreground">
            Coming soon - View all your roommate matches here
          </p>
        </div>
      </div>
    </div>
  );
}
