import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, MapPin, Star, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoommateCardProps {
  id: string;
  name: string;
  age: number;
  avatar: string;
  location: string;
  budget: string;
  rating: number;
  bio: string;
  interests: string[];
  isLiked?: boolean;
  className?: string;
}

export function RoommateCard({
  id,
  name,
  age,
  avatar,
  location,
  budget,
  rating,
  bio,
  interests,
  isLiked = false,
  className,
}: RoommateCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
        className,
      )}
    >
      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            className={cn(
              "w-9 h-9 rounded-full p-0 backdrop-blur-sm bg-background/50 hover:bg-background/70",
              isLiked &&
                "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            )}
          >
            <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="w-9 h-9 rounded-full p-0 backdrop-blur-sm bg-background/50 hover:bg-background/70"
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg leading-none">
              {name}, {age}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-primary font-semibold">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm">{budget}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{bio}</p>

        <div className="flex flex-wrap gap-1">
          {interests.slice(0, 3).map((interest) => (
            <Badge key={interest} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
          {interests.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{interests.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
