import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  X,
  MapPin,
  DollarSign,
  Home,
  Users,
  Camera,
  Calendar,
  Check,
  Wifi,
  Car,
  Coffee,
  Tv,
  Zap,
  Waves,
  Dog,
  Cigarette,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CreateListing() {
  const [listingType, setListingType] = useState<"room" | "roommate">("room");
  const [step, setStep] = useState(1);

  // Room/Space Information
  const [roomData, setRoomData] = useState({
    title: "",
    description: "",
    address: "",
    neighborhood: "",
    city: "Manhattan",
    state: "NY",
    zipCode: "",
    rent: "",
    deposit: "",
    moveInDate: "",
    leaseTerm: "",
    roomType: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    furnished: false,
    petsAllowed: false,
    smokingAllowed: false,
    guestsAllowed: true,
  });

  // Amenities
  const [amenities, setAmenities] = useState<string[]>([]);
  const availableAmenities = [
    { icon: Wifi, label: "WiFi", value: "wifi" },
    { icon: Car, label: "Parking", value: "parking" },
    { icon: Coffee, label: "Kitchen", value: "kitchen" },
    { icon: Tv, label: "TV", value: "tv" },
    { icon: Zap, label: "AC", value: "ac" },
    { icon: Waves, label: "Pool", value: "pool" },
    { icon: Home, label: "Gym", value: "gym" },
    { icon: Dog, label: "Pet Friendly", value: "pet_friendly" },
  ];

  // Roommate Preferences
  const [preferences, setPreferences] = useState({
    ageRange: "",
    gender: "",
    occupation: "",
    lifestyle: "",
    cleanliness: "",
    socialLevel: "",
    workSchedule: "",
  });

  // Images
  const [images, setImages] = useState<string[]>([]);

  // About You (for roommate listing)
  const [aboutYou, setAboutYou] = useState({
    name: "Abiah Abraham",
    age: "24",
    occupation: "Software Engineer",
    bio: "",
    interests: [] as string[],
    lifestyle: "",
    workSchedule: "",
  });

  const [newInterest, setNewInterest] = useState("");

  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  const addInterest = () => {
    if (
      newInterest.trim() &&
      !aboutYou.interests.includes(newInterest.trim())
    ) {
      setAboutYou((prev) => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()],
      }));
      setNewInterest("");
    }
  };

  const removeInterest = (interest: string) => {
    setAboutYou((prev) => ({
      ...prev,
      interests: prev.interests.filter((i) => i !== interest),
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, this would handle file upload
    const files = e.target.files;
    if (files) {
      // Mock image URLs for demo
      const newImages = Array.from(files).map(
        (_, index) =>
          `https://images.unsplash.com/photo-${1500000000000 + index}?w=600&h=400&fit=crop`,
      );
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // In a real app, this would submit to backend
    console.log("Submitting listing:", {
      type: listingType,
      roomData,
      amenities,
      preferences,
      images,
      aboutYou,
    });
    alert("Listing created successfully!");
  };

  const canProceed = () => {
    if (step === 1) {
      return roomData.title && roomData.description && roomData.address;
    }
    if (step === 2) {
      return roomData.rent && roomData.moveInDate;
    }
    return true;
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Create Listing
            </h1>
            <p className="text-muted-foreground">
              Post your room or find a roommate
            </p>
          </div>

          {/* Listing Type Selection */}
          <Card>
            <CardHeader>
              <CardTitle>What are you looking for?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Card
                  className={cn(
                    "cursor-pointer transition-all border-2",
                    listingType === "room"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50",
                  )}
                  onClick={() => setListingType("room")}
                >
                  <CardContent className="p-6 text-center">
                    <Home className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">I have a room</h3>
                    <p className="text-sm text-muted-foreground">
                      Post a room or apartment you want to rent out
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={cn(
                    "cursor-pointer transition-all border-2",
                    listingType === "roommate"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50",
                  )}
                  onClick={() => setListingType("roommate")}
                >
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">I need a room</h3>
                    <p className="text-sm text-muted-foreground">
                      Find someone to share a place with
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    step >= stepNum
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {step > stepNum ? <Check className="w-4 h-4" /> : stepNum}
                </div>
                {stepNum < 4 && (
                  <div
                    className={cn(
                      "w-8 h-0.5 mx-2",
                      step > stepNum ? "bg-primary" : "bg-muted",
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  {listingType === "room" ? "Property Details" : "About You"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {listingType === "room" ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="title">Listing Title *</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Spacious room in Manhattan apartment"
                        value={roomData.title}
                        onChange={(e) =>
                          setRoomData({ ...roomData, title: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your space, neighborhood, and what you're looking for in a roommate..."
                        value={roomData.description}
                        onChange={(e) =>
                          setRoomData({
                            ...roomData,
                            description: e.target.value,
                          })
                        }
                        className="min-h-24"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        placeholder="Street address"
                        value={roomData.address}
                        onChange={(e) =>
                          setRoomData({ ...roomData, address: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="neighborhood">Neighborhood</Label>
                        <Select
                          value={roomData.neighborhood}
                          onValueChange={(value) =>
                            setRoomData({ ...roomData, neighborhood: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select area" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Upper West Side">
                              Upper West Side
                            </SelectItem>
                            <SelectItem value="Upper East Side">
                              Upper East Side
                            </SelectItem>
                            <SelectItem value="Midtown">Midtown</SelectItem>
                            <SelectItem value="Lower East Side">
                              Lower East Side
                            </SelectItem>
                            <SelectItem value="Greenwich Village">
                              Greenwich Village
                            </SelectItem>
                            <SelectItem value="SoHo">SoHo</SelectItem>
                            <SelectItem value="Tribeca">Tribeca</SelectItem>
                            <SelectItem value="Chelsea">Chelsea</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={roomData.city}
                          onChange={(e) =>
                            setRoomData({ ...roomData, city: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          placeholder="10001"
                          value={roomData.zipCode}
                          onChange={(e) =>
                            setRoomData({
                              ...roomData,
                              zipCode: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={aboutYou.name}
                          onChange={(e) =>
                            setAboutYou({ ...aboutYou, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          value={aboutYou.age}
                          onChange={(e) =>
                            setAboutYou({ ...aboutYou, age: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        value={aboutYou.occupation}
                        onChange={(e) =>
                          setAboutYou({
                            ...aboutYou,
                            occupation: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">About Me</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell potential roommates about yourself, your lifestyle, and what you're looking for..."
                        value={aboutYou.bio}
                        onChange={(e) =>
                          setAboutYou({ ...aboutYou, bio: e.target.value })
                        }
                        className="min-h-24"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Interests & Hobbies</Label>
                      <div className="flex flex-wrap gap-2">
                        {aboutYou.interests.map((interest) => (
                          <Badge
                            key={interest}
                            variant="secondary"
                            className="gap-1"
                          >
                            {interest}
                            <button
                              onClick={() => removeInterest(interest)}
                              className="ml-1 hover:text-destructive"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add an interest..."
                          value={newInterest}
                          onChange={(e) => setNewInterest(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && addInterest()}
                        />
                        <Button onClick={addInterest} variant="outline">
                          Add
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  {listingType === "room"
                    ? "Pricing & Availability"
                    : "Budget & Timeline"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rent">
                      {listingType === "room"
                        ? "Monthly Rent *"
                        : "Budget Range"}
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="rent"
                        placeholder="2000"
                        value={roomData.rent}
                        onChange={(e) =>
                          setRoomData({ ...roomData, rent: e.target.value })
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deposit">Security Deposit</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="deposit"
                        placeholder="1000"
                        value={roomData.deposit}
                        onChange={(e) =>
                          setRoomData({ ...roomData, deposit: e.target.value })
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="moveInDate">Move-in Date *</Label>
                    <Input
                      id="moveInDate"
                      type="date"
                      value={roomData.moveInDate}
                      onChange={(e) =>
                        setRoomData({ ...roomData, moveInDate: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="leaseTerm">Lease Term</Label>
                    <Select
                      value={roomData.leaseTerm}
                      onValueChange={(value) =>
                        setRoomData({ ...roomData, leaseTerm: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="month-to-month">
                          Month-to-Month
                        </SelectItem>
                        <SelectItem value="6-months">6 Months</SelectItem>
                        <SelectItem value="12-months">12 Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {listingType === "room" && (
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Select
                        value={roomData.bedrooms}
                        onValueChange={(value) =>
                          setRoomData({ ...roomData, bedrooms: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4+">4+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                      <Select
                        value={roomData.bathrooms}
                        onValueChange={(value) =>
                          setRoomData({ ...roomData, bathrooms: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="1.5">1.5</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="2.5+">2.5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roomType">Room Type</Label>
                      <Select
                        value={roomData.roomType}
                        onValueChange={(value) =>
                          setRoomData({ ...roomData, roomType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private Room</SelectItem>
                          <SelectItem value="shared">Shared Room</SelectItem>
                          <SelectItem value="master">Master Suite</SelectItem>
                          <SelectItem value="studio">Studio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Amenities & Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  {availableAmenities.map((amenity) => (
                    <Card
                      key={amenity.value}
                      className={cn(
                        "cursor-pointer transition-all border-2 hover:border-primary/50",
                        amenities.includes(amenity.value)
                          ? "border-primary bg-primary/5"
                          : "border-border",
                      )}
                      onClick={() => toggleAmenity(amenity.value)}
                    >
                      <CardContent className="p-4 text-center">
                        <amenity.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">{amenity.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Property Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Furnished</Label>
                        <p className="text-sm text-muted-foreground">
                          Room comes with furniture
                        </p>
                      </div>
                      <Switch
                        checked={roomData.furnished}
                        onCheckedChange={(checked) =>
                          setRoomData({ ...roomData, furnished: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Pets Allowed</Label>
                        <p className="text-sm text-muted-foreground">
                          Pets are welcome
                        </p>
                      </div>
                      <Switch
                        checked={roomData.petsAllowed}
                        onCheckedChange={(checked) =>
                          setRoomData({ ...roomData, petsAllowed: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Smoking Allowed</Label>
                        <p className="text-sm text-muted-foreground">
                          Smoking is permitted
                        </p>
                      </div>
                      <Switch
                        checked={roomData.smokingAllowed}
                        onCheckedChange={(checked) =>
                          setRoomData({ ...roomData, smokingAllowed: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Guests Allowed</Label>
                        <p className="text-sm text-muted-foreground">
                          Overnight guests welcome
                        </p>
                      </div>
                      <Switch
                        checked={roomData.guestsAllowed}
                        onCheckedChange={(checked) =>
                          setRoomData({ ...roomData, guestsAllowed: checked })
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Photos & Final Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Upload Photos</Label>
                  <div className="grid grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Property ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <label className="w-full h-32 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
                      <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">
                        Add Photo
                      </span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Add photos to make your listing stand out. First photo will
                    be the cover image.
                  </p>
                </div>

                {listingType === "room" && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Roommate Preferences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Preferred Age Range</Label>
                          <Select
                            value={preferences.ageRange}
                            onValueChange={(value) =>
                              setPreferences({
                                ...preferences,
                                ageRange: value,
                              })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Any age" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="18-25">18-25</SelectItem>
                              <SelectItem value="25-30">25-30</SelectItem>
                              <SelectItem value="30-35">30-35</SelectItem>
                              <SelectItem value="35+">35+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Gender</Label>
                          <Select
                            value={preferences.gender}
                            onValueChange={(value) =>
                              setPreferences({ ...preferences, gender: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="No preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="non-binary">
                                Non-binary
                              </SelectItem>
                              <SelectItem value="no-preference">
                                No preference
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Review Your Listing</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Type:</strong>{" "}
                      {listingType === "room"
                        ? "Room Available"
                        : "Looking for Room"}
                    </p>
                    <p>
                      <strong>Title:</strong>{" "}
                      {roomData.title || "Not specified"}
                    </p>
                    <p>
                      <strong>Location:</strong>{" "}
                      {roomData.neighborhood
                        ? `${roomData.neighborhood}, `
                        : ""}
                      {roomData.city}
                    </p>
                    <p>
                      <strong>Rent:</strong> ${roomData.rent || "Not specified"}
                      /month
                    </p>
                    <p>
                      <strong>Move-in:</strong>{" "}
                      {roomData.moveInDate || "Not specified"}
                    </p>
                    <p>
                      <strong>Amenities:</strong> {amenities.length} selected
                    </p>
                    <p>
                      <strong>Photos:</strong> {images.length} uploaded
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Previous
            </Button>
            <div className="flex gap-3">
              <Button variant="outline">Save as Draft</Button>
              {step < 4 ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                >
                  Next Step
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="gap-2">
                  <Check className="w-4 h-4" />
                  Publish Listing
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
