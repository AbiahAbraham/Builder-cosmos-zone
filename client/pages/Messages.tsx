import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Check,
  CheckCheck,
  Clock,
  Star,
  Archive,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isFromMe: boolean;
  isRead?: boolean;
  type?: "text" | "image" | "system";
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  isVerified: boolean;
  location: string;
}

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >("1");
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const conversations: Conversation[] = [
    {
      id: "1",
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b79e8c97?w=400&h=400&fit=crop&crop=face",
      lastMessage: "That sounds perfect! When can we schedule a video call?",
      timestamp: "2 min ago",
      unreadCount: 2,
      isOnline: true,
      isVerified: true,
      location: "Capitol Hill",
    },
    {
      id: "2",
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      lastMessage:
        "I'm also a software engineer! We should definitely meet up.",
      timestamp: "1 hour ago",
      unreadCount: 0,
      isOnline: true,
      isVerified: true,
      location: "Downtown",
    },
    {
      id: "3",
      name: "Maya Patel",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      lastMessage:
        "Thanks for reaching out! I'd love to learn more about the space.",
      timestamp: "3 hours ago",
      unreadCount: 1,
      isOnline: false,
      isVerified: false,
      location: "Fremont",
    },
    {
      id: "4",
      name: "Jordan Kim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      lastMessage: "The room looks great in the photos. Is it still available?",
      timestamp: "Yesterday",
      unreadCount: 0,
      isOnline: false,
      isVerified: true,
      location: "Ballard",
    },
    {
      id: "5",
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      lastMessage: "I'm really interested in environmental sustainability too!",
      timestamp: "2 days ago",
      unreadCount: 0,
      isOnline: false,
      isVerified: true,
      location: "University District",
    },
  ];

  const messages: Record<string, Message[]> = {
    "1": [
      {
        id: "1",
        text: "Hi Abiah! I saw your profile and we seem like a great match. I'm also looking for a place in Capitol Hill.",
        timestamp: "10:30 AM",
        isFromMe: false,
        isRead: true,
      },
      {
        id: "2",
        text: "Hey Sarah! Nice to meet you. I checked out your profile too and I think we'd be compatible roommates. What's your timeline for moving?",
        timestamp: "10:45 AM",
        isFromMe: true,
        isRead: true,
      },
      {
        id: "3",
        text: "I'm hoping to move in within the next month. I work as a UX designer and I'm pretty clean and organized. What about you?",
        timestamp: "11:02 AM",
        isFromMe: false,
        isRead: true,
      },
      {
        id: "4",
        text: "Perfect timing! I'm a software engineer and also value cleanliness. I love cooking and would be happy to share meals sometimes. Do you have any questions about lifestyle preferences?",
        timestamp: "11:15 AM",
        isFromMe: true,
        isRead: true,
      },
      {
        id: "5",
        text: "That sounds amazing! I love cooking too. I'm wondering about your schedule - do you work from home or in an office?",
        timestamp: "2:20 PM",
        isFromMe: false,
        isRead: true,
      },
      {
        id: "6",
        text: "I work hybrid - mostly from home but go into the office 2-3 times per week. Pretty flexible schedule. What about noise levels? I sometimes take calls but I have a dedicated office space.",
        timestamp: "2:25 PM",
        isFromMe: true,
        isRead: true,
      },
      {
        id: "7",
        text: "That sounds perfect! When can we schedule a video call?",
        timestamp: "4:18 PM",
        isFromMe: false,
        isRead: false,
      },
    ],
    "2": [
      {
        id: "1",
        text: "Hey! I saw you're also in tech. What do you work on?",
        timestamp: "Yesterday",
        isFromMe: false,
        isRead: true,
      },
      {
        id: "2",
        text: "I'm a software engineer working on web applications. What about you?",
        timestamp: "Yesterday",
        isFromMe: true,
        isRead: true,
      },
      {
        id: "3",
        text: "I'm also a software engineer! We should definitely meet up.",
        timestamp: "1 hour ago",
        isFromMe: false,
        isRead: true,
      },
    ],
  };

  const currentConversation = conversations.find(
    (c) => c.id === selectedConversation,
  );
  const currentMessages = selectedConversation
    ? messages[selectedConversation] || []
    : [];

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-border flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Messages</h2>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-0"
              />
            </div>
          </div>

          {/* Conversations */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {filteredConversations.map((conversation) => (
                <Card
                  key={conversation.id}
                  className={cn(
                    "p-3 mb-2 cursor-pointer transition-colors hover:bg-accent",
                    selectedConversation === conversation.id && "bg-accent",
                  )}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback>
                          {conversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-sm truncate">
                            {conversation.name}
                          </span>
                          {conversation.isVerified && (
                            <CheckCheck className="w-3 h-3 text-primary" />
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-muted-foreground">
                            {conversation.timestamp}
                          </span>
                          {conversation.unreadCount > 0 && (
                            <Badge
                              variant="default"
                              className="w-5 h-5 text-xs p-0 flex items-center justify-center"
                            >
                              {conversation.unreadCount}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground truncate mb-1">
                        {conversation.lastMessage}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        📍 {conversation.location}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation && currentConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={currentConversation.avatar} />
                      <AvatarFallback>
                        {currentConversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {currentConversation.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold">
                        {currentConversation.name}
                      </h3>
                      {currentConversation.isVerified && (
                        <CheckCheck className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {currentConversation.isOnline
                        ? "Online"
                        : "Last seen 2 hours ago"}
                      {" • "}
                      {currentConversation.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {currentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.isFromMe ? "justify-end" : "justify-start",
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[70%] rounded-lg px-3 py-2",
                          message.isFromMe
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted",
                        )}
                      >
                        <p className="text-sm">{message.text}</p>
                        <div
                          className={cn(
                            "flex items-center gap-1 mt-1",
                            message.isFromMe ? "justify-end" : "justify-start",
                          )}
                        >
                          <span className="text-xs opacity-70">
                            {message.timestamp}
                          </span>
                          {message.isFromMe && (
                            <div className="text-xs opacity-70">
                              {message.isRead ? (
                                <CheckCheck className="w-3 h-3" />
                              ) : (
                                <Check className="w-3 h-3" />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!messageText.trim()}
                    className="gap-2"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            /* No Conversation Selected */
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Welcome to Messages
                  </h3>
                  <p className="text-muted-foreground">
                    Select a conversation to start chatting with potential
                    roommates
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
