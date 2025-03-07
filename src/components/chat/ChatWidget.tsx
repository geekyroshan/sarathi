
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Message } from "@/lib/types";
import { Send, Paperclip, X, ThumbsUp, ThumbsDown } from "lucide-react";

// We need to manually import framer-motion
import { AnimatePresence, motion } from "framer-motion";

interface ChatWidgetProps {
  position?: "right" | "left";
  primaryColor?: string;
  initialMessage?: string;
}

export default function ChatWidget({
  position = "right",
  primaryColor = "#9b87f5",
  initialMessage = "Hello! How can I help you today?",
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Track if this is first render to animate the widget
  const [isFirstRender, setIsFirstRender] = useState(true);
  
  // Add initial bot message
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      
      // Add a small delay for the initial chat button animation
      setTimeout(() => {
        setMessages([
          {
            id: "1",
            text: initialMessage,
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  }, [initialMessage, isFirstRender]);

  // Auto scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. I'm Sarathi, an AI assistant. How else can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Handle Enter key to send message
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed ${
              position === "right" ? "right-4" : "left-4"
            } bottom-20 w-[360px] h-[520px] shadow-2xl rounded-2xl flex flex-col bg-white overflow-hidden z-50 border`}
          >
            {/* Chat Header */}
            <div
              className="p-4 flex justify-between items-center"
              style={{ backgroundColor: primaryColor }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-semibold">S</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Sarathi Support</h3>
                  <p className="text-white/80 text-xs">We typically reply in a few minutes</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/90 hover:text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-white rounded-tr-none"
                          : "bg-white shadow-sm border rounded-tl-none"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-[10px] mt-1 text-right ${
                          message.sender === "user" ? "text-white/70" : "text-gray-400"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </motion.div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-lg bg-white shadow-sm border rounded-tl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Empty div for auto-scrolling */}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              {messages.length > 1 && messages[messages.length - 1].sender === "bot" && (
                <div className="flex justify-center mb-2 space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full h-8 px-3 text-xs gap-1 hover:bg-green-50 hover:text-green-600 hover:border-green-200"
                  >
                    <ThumbsUp className="h-3 w-3" />
                    Helpful
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full h-8 px-3 text-xs gap-1 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                  >
                    <ThumbsDown className="h-3 w-3" />
                    Not helpful
                  </Button>
                </div>
              )}
              
              <div className="flex items-end space-x-2">
                <Button variant="outline" size="icon" className="shrink-0 rounded-full">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Textarea
                  placeholder="Type a message..."
                  className="min-h-10 resize-none rounded-xl"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  rows={1}
                />
                <Button
                  size="icon"
                  className="shrink-0 rounded-full"
                  onClick={handleSendMessage}
                  style={{ backgroundColor: primaryColor }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        initial={isFirstRender ? { scale: 0.8, opacity: 0 } : false}
        animate={isFirstRender ? { scale: 1, opacity: 1 } : undefined}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`fixed ${
          position === "right" ? "right-4" : "left-4"
        } bottom-4 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 focus:outline-none`}
        style={{ backgroundColor: primaryColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
