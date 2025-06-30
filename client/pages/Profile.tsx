import { Sidebar } from "@/components/ui/sidebar";

export default function Profile() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Your Profile</h1>
          <p className="text-muted-foreground">
            Coming soon - Manage your profile and preferences here
          </p>
        </div>
      </div>
    </div>
  );
}
