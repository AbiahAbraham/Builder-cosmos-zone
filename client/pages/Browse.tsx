import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RoommateCard } from "@/components/roommate-card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  MapPin,
  Grid3X3,
  List,
  SlidersHorizontal,
} from "lucide-react";

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState("");
  const [location, setLocation] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");

  // Mock data for all roommates
  const allRoommates = [
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
    {
      id: "5",
      name: "Emma",
      age: 25,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
      location: "University District, Seattle",
      budget: "$600-900",
      rating: 4.6,
      bio: "PhD student in environmental science. Love outdoor activities and sustainable living.",
      interests: ["Environment", "Biking", "Books", "Gardening"],
      isLiked: false,
    },
    {
      id: "6",
      name: "Tyler",
      age: 28,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      location: "Queen Anne, Seattle",
      budget: "$1200-1800",
      rating: 4.9,
      bio: "Tech consultant who travels frequently. Looking for responsible roommate to share luxury apartment.",
      interests: ["Travel", "Tech", "Wine", "Cooking"],
      isLiked: false,
    },
  ];

  const activeFilters = [
    ...(priceRange ? [`Budget: ${priceRange}`] : []),
    ...(location ? [`Location: ${location}`] : []),
    ...(ageRange ? [`Age: ${ageRange}`] : []),
    ...(gender ? [`Gender: ${gender}`] : []),
    ...(race ? [`Race: ${race}`] : []),
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
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name, interests, location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted border-0 focus-visible:ring-1"
                />
              </div>

              {/* Filters */}
              <div className="hidden md:flex items-center gap-2">
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="$500-800">$500-800</SelectItem>
                    <SelectItem value="$800-1200">$800-1200</SelectItem>
                    <SelectItem value="$1200-1600">$1200-1600</SelectItem>
                    <SelectItem value="$1600+">$1600+</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Capitol Hill">Capitol Hill</SelectItem>
                    <SelectItem value="Downtown">Downtown</SelectItem>
                    <SelectItem value="Fremont">Fremont</SelectItem>
                    <SelectItem value="Ballard">Ballard</SelectItem>
                    <SelectItem value="Queen Anne">Queen Anne</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={ageRange} onValueChange={setAgeRange}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18-22">18-22</SelectItem>
                    <SelectItem value="23-27">23-27</SelectItem>
                    <SelectItem value="28-32">28-32</SelectItem>
                    <SelectItem value="33+">33+</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Non-binary">Non-binary</SelectItem>
                    <SelectItem value="Prefer not to say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select value={race} onValueChange={setRace}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Ethnicity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Asian">Asian</SelectItem>
                    <SelectItem value="Black">Black</SelectItem>
                    <SelectItem value="Hispanic/Latino">
                      Hispanic/Latino
                    </SelectItem>
                    <SelectItem value="White">White</SelectItem>
                    <SelectItem value="Mixed">Mixed</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Prefer not to say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 ml-4">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="px-6 pb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">Filters:</span>
                {activeFilters.map((filter, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {filter}
                    <button
                      onClick={() => {
                        if (filter.startsWith("Budget:")) setPriceRange("");
                        if (filter.startsWith("Location:")) setLocation("");
                        if (filter.startsWith("Age:")) setAgeRange("");
                        if (filter.startsWith("Gender:")) setGender("");
                        if (filter.startsWith("Race:")) setRace("");
                      }}
                      className="ml-1 hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">Browse Roommates</h1>
                <p className="text-muted-foreground">
                  {allRoommates.length} roommates found in Seattle
                </p>
              </div>
            </div>

            {/* Results Grid */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {allRoommates.map((roommate) => (
                <RoommateCard
                  key={roommate.id}
                  {...roommate}
                  className={viewMode === "list" ? "flex-row" : ""}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">Load More Roommates</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
