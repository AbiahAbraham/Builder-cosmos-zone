import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RoommateCard } from "@/components/roommate-card";
import { RoomCard } from "@/components/room-card";
import {
  Search,
  Filter,
  TrendingUp,
  MapPin,
  Users,
  ChevronRight,
} from "lucide-react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for featured roommates
  const featuredRoommates = [
    {
      id: "1",
      name: "Sarah",
      age: 24,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b79e8c97?w=400&h=500&fit=crop&crop=face",
      location: "Downtown, Seattle",
      budget: "$800-1200",
      rating: 4.8,
      bio: "Graduate student looking for a clean, quiet roommate. Love cooking and weekend hikes!",
      interests: ["Cooking", "Hiking", "Reading", "Yoga"],
      isLiked: false,
    },
    {
      id: "2",
      name: "Alex",
      age: 26,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      location: "Capitol Hill, Seattle",
      budget: "$900-1400",
      rating: 4.9,
      bio: "Software engineer who loves gaming and good coffee. Looking for someone chill to share space with.",
      interests: ["Gaming", "Coffee", "Tech", "Music"],
      isLiked: true,
    },
    {
      id: "3",
      name: "Maya",
      age: 23,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      location: "Fremont, Seattle",
      budget: "$700-1000",
      rating: 4.7,
      bio: "Artist and barista seeking creative roommate. Plant parent with great taste in music!",
      interests: ["Art", "Plants", "Music", "Coffee"],
      isLiked: false,
    },
    {
      id: "4",
      name: "Jordan",
      age: 27,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      location: "Ballard, Seattle",
      budget: "$1000-1500",
      rating: 4.8,
      bio: "Marketing professional who enjoys fitness and exploring the city. Clean and respectful.",
      interests: ["Fitness", "Travel", "Food", "Photography"],
      isLiked: false,
    },
  ];

  // Mock data for featured rooms
  const featuredRooms = [
    {
      id: "1",
      title: "Modern 2BR Apartment",
      location: "Capitol Hill, Seattle",
      price: "$1,200",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=450&fit=crop",
      ],
      rating: 4.8,
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["WiFi", "Gym", "Parking", "Laundry"],
      isLiked: false,
    },
    {
      id: "2",
      title: "Cozy Studio Downtown",
      location: "Downtown, Seattle",
      price: "$900",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=450&fit=crop",
      ],
      rating: 4.6,
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["WiFi", "Kitchen", "Views", "AC"],
      isLiked: true,
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search roommates, rooms, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted border-0 focus-visible:ring-1"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-8">
            {/* Welcome Section */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Good evening,&nbsp; Abiah! 👋
              </h1>
              <p className="text-muted-foreground">
                Discover your perfect roommate or room match in Seattle
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">New Matches</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Near You</p>
                    <p className="text-2xl font-bold">48</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Trending</p>
                    <p className="text-2xl font-bold">Capitol Hill</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Roommates */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Perfect Matches</h2>
                  <p className="text-muted-foreground">
                    Roommates that match your preferences
                  </p>
                </div>
                <Button variant="ghost" className="gap-2">
                  See all
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredRoommates.map((roommate) => (
                  <RoommateCard key={roommate.id} {...roommate} />
                ))}
              </div>
            </section>

            {/* Featured Rooms */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Available Rooms</h2>
                  <p className="text-muted-foreground">
                    Great spaces ready for you to move in
                  </p>
                </div>
                <Button variant="ghost" className="gap-2">
                  See all
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredRooms.map((room) => (
                  <RoomCard key={room.id} {...room} />
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold">
                  Ready to find your perfect match?
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Complete your profile and start connecting with roommates who
                  share your lifestyle
                </p>
                <div className="flex gap-3 justify-center">
                  <Button className="gap-2">
                    Complete Profile
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline">Browse Roommates</Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
