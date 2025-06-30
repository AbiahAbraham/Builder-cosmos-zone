import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  MessageCircle,
  MapPin,
  Star,
  DollarSign,
  Bed,
  Bath,
  Wifi,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RoomCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  images: string[];
  rating: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  isLiked?: boolean;
  className?: string;
}

export function RoomCard({
  id,
  title,
  location,
  price,
  images,
  rating,
  bedrooms,
  bathrooms,
  amenities,
  isLiked = false,
  className,
}: RoomCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
        className,
      )}
    >
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={images[0]}
            alt={title}
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
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
        <div className="absolute bottom-3 right-3">
          <div className="bg-background/80 backdrop-blur-sm rounded px-2 py-1">
            <span className="text-sm font-semibold">{price}/mo</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-lg leading-none mb-1">{title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{bathrooms} bath</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{amenities.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
