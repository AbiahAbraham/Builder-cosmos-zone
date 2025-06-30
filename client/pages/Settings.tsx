import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Bell,
  Shield,
  Eye,
  Camera,
  MapPin,
  DollarSign,
  Users,
  Home,
  AlertTriangle,
  CheckCircle,
  X,
} from "lucide-react";

export default function Settings() {
  const [profileData, setProfileData] = useState({
    firstName: "Abiah",
    lastName: "Abraham",
    email: "abiah@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Software engineer who loves hiking and good coffee. Looking for a clean, respectful roommate.",
    age: "24",
    gender: "Male",
    occupation: "Software Engineer",
    university: "University of Washington",
  });

  const [preferences, setPreferences] = useState({
    maxBudget: "1200",
    preferredLocation: "Capitol Hill",
    roomType: "Private Room",
    smokingOk: false,
    petsOk: true,
    guestsOk: true,
    cleanlinessLevel: "Very Clean",
    noiseLevel: "Quiet",
    preferredGender: "No Preference",
    preferredAge: "22-28",
  });

  const [notifications, setNotifications] = useState({
    newMatches: true,
    messages: true,
    emailUpdates: false,
    pushNotifications: true,
    weeklyDigest: true,
    safetyAlerts: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showAge: true,
    showLocation: true,
    showOccupation: true,
    allowMessages: true,
    onlineStatus: false,
  });

  const [interests, setInterests] = useState([
    "Hiking",
    "Coffee",
    "Tech",
    "Photography",
    "Cooking",
    "Gaming",
  ]);

  const [newInterest, setNewInterest] = useState("");

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile" className="gap-2">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="preferences" className="gap-2">
                <Home className="w-4 h-4" />
                Preferences
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="w-4 h-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="gap-2">
                <Eye className="w-4 h-4" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="safety" className="gap-2">
                <Shield className="w-4 h-4" />
                Safety
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Photo */}
                  <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" />
                      <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" className="gap-2">
                        <Camera className="w-4 h-4" />
                        Change Photo
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        JPG, PNG or GIF. Max size 5MB.
                      </p>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        value={profileData.age}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            age: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select
                        value={profileData.gender}
                        onValueChange={(value) =>
                          setProfileData({ ...profileData, gender: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Non-binary">Non-binary</SelectItem>
                          <SelectItem value="Prefer not to say">
                            Prefer not to say
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        value={profileData.occupation}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            occupation: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell potential roommates about yourself..."
                      value={profileData.bio}
                      onChange={(e) =>
                        setProfileData({ ...profileData, bio: e.target.value })
                      }
                      className="min-h-24"
                    />
                    <p className="text-sm text-muted-foreground">
                      {profileData.bio.length}/500 characters
                    </p>
                  </div>

                  {/* Interests */}
                  <div className="space-y-3">
                    <Label>Interests & Hobbies</Label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
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
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Living Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxBudget">Maximum Budget</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="maxBudget"
                          placeholder="1200"
                          value={preferences.maxBudget}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              maxBudget: e.target.value,
                            })
                          }
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredLocation">
                        Preferred Location
                      </Label>
                      <Select
                        value={preferences.preferredLocation}
                        onValueChange={(value) =>
                          setPreferences({
                            ...preferences,
                            preferredLocation: value,
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Capitol Hill">
                            Capitol Hill
                          </SelectItem>
                          <SelectItem value="Downtown">Downtown</SelectItem>
                          <SelectItem value="Fremont">Fremont</SelectItem>
                          <SelectItem value="Ballard">Ballard</SelectItem>
                          <SelectItem value="Queen Anne">Queen Anne</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Room Type</Label>
                      <Select
                        value={preferences.roomType}
                        onValueChange={(value) =>
                          setPreferences({ ...preferences, roomType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Private Room">
                            Private Room
                          </SelectItem>
                          <SelectItem value="Shared Room">
                            Shared Room
                          </SelectItem>
                          <SelectItem value="Studio">Studio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Cleanliness Level</Label>
                      <Select
                        value={preferences.cleanlinessLevel}
                        onValueChange={(value) =>
                          setPreferences({
                            ...preferences,
                            cleanlinessLevel: value,
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Very Clean">Very Clean</SelectItem>
                          <SelectItem value="Moderately Clean">
                            Moderately Clean
                          </SelectItem>
                          <SelectItem value="Casual">Casual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Toggle Preferences */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Smoking Allowed</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow smoking in the living space
                        </p>
                      </div>
                      <Switch
                        checked={preferences.smokingOk}
                        onCheckedChange={(checked) =>
                          setPreferences({ ...preferences, smokingOk: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Pets Allowed</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow pets in the living space
                        </p>
                      </div>
                      <Switch
                        checked={preferences.petsOk}
                        onCheckedChange={(checked) =>
                          setPreferences({ ...preferences, petsOk: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Guests Allowed</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow overnight guests occasionally
                        </p>
                      </div>
                      <Switch
                        checked={preferences.guestsOk}
                        onCheckedChange={(checked) =>
                          setPreferences({ ...preferences, guestsOk: checked })
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Roommate Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Gender</Label>
                      <Select
                        value={preferences.preferredGender}
                        onValueChange={(value) =>
                          setPreferences({
                            ...preferences,
                            preferredGender: value,
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="No Preference">
                            No Preference
                          </SelectItem>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Non-binary">Non-binary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Age Range</Label>
                      <Select
                        value={preferences.preferredAge}
                        onValueChange={(value) =>
                          setPreferences({
                            ...preferences,
                            preferredAge: value,
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-22">18-22</SelectItem>
                          <SelectItem value="22-28">22-28</SelectItem>
                          <SelectItem value="28-35">28-35</SelectItem>
                          <SelectItem value="35+">35+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notification Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New Matches</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when you have new roommate matches
                      </p>
                    </div>
                    <Switch
                      checked={notifications.newMatches}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          newMatches: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Messages</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when you receive new messages
                      </p>
                    </div>
                    <Switch
                      checked={notifications.messages}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          messages: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications for important updates
                      </p>
                    </div>
                    <Switch
                      checked={notifications.emailUpdates}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          emailUpdates: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications on your device
                      </p>
                    </div>
                    <Switch
                      checked={notifications.pushNotifications}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          pushNotifications: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Digest</Label>
                      <p className="text-sm text-muted-foreground">
                        Get a weekly summary of your activity and matches
                      </p>
                    </div>
                    <Switch
                      checked={notifications.weeklyDigest}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          weeklyDigest: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Safety Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Important safety and security notifications
                      </p>
                    </div>
                    <Switch
                      checked={notifications.safetyAlerts}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          safetyAlerts: checked,
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Privacy Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Profile Visibility</Label>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to other users
                      </p>
                    </div>
                    <Switch
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) =>
                        setPrivacy({ ...privacy, profileVisible: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Age</Label>
                      <p className="text-sm text-muted-foreground">
                        Display your age on your profile
                      </p>
                    </div>
                    <Switch
                      checked={privacy.showAge}
                      onCheckedChange={(checked) =>
                        setPrivacy({ ...privacy, showAge: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Location</Label>
                      <p className="text-sm text-muted-foreground">
                        Display your general location
                      </p>
                    </div>
                    <Switch
                      checked={privacy.showLocation}
                      onCheckedChange={(checked) =>
                        setPrivacy({ ...privacy, showLocation: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Occupation</Label>
                      <p className="text-sm text-muted-foreground">
                        Display your job or occupation
                      </p>
                    </div>
                    <Switch
                      checked={privacy.showOccupation}
                      onCheckedChange={(checked) =>
                        setPrivacy({ ...privacy, showOccupation: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Allow Messages</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow other users to send you messages
                      </p>
                    </div>
                    <Switch
                      checked={privacy.allowMessages}
                      onCheckedChange={(checked) =>
                        setPrivacy({ ...privacy, allowMessages: checked })
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Safety & Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Email Verified</p>
                          <p className="text-sm text-muted-foreground">
                            Your email has been verified
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">Verified</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        <div>
                          <p className="font-medium">Phone Verification</p>
                          <p className="text-sm text-muted-foreground">
                            Verify your phone number for added security
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Verify
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        <div>
                          <p className="font-medium">ID Verification</p>
                          <p className="text-sm text-muted-foreground">
                            Upload a government-issued ID for verification
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Upload
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Safety Tips</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        • Always meet potential roommates in public places first
                      </p>
                      <p>• Trust your instincts and don't ignore red flags</p>
                      <p>• Verify identity and background when possible</p>
                      <p>
                        • Keep personal information private until you feel
                        comfortable
                      </p>
                      <p>• Report any suspicious or inappropriate behavior</p>
                    </div>
                  </div>

                  <Button variant="destructive" className="w-full">
                    Report a Safety Issue
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="flex justify-end gap-3 pt-6 border-t">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
