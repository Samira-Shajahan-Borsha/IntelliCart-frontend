"use client";

import { ComponentProps, useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const INITIAL_SUGGESTIONS = [
  "Tell me about your products",
  "How can I track my order?",
  "What's your return policy?",
  "Help me find a product",
];

export function ChatWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! 👋 I'm your AI shopping assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (text: string = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with real API later)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getMockResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50">
            <span className="text-lg">✨</span>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">AI Assistant</h3>
            <p className="text-xs text-neutral-500">Always here to help</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Close chat"
        >
          <CloseIcon className="size-4 opacity-70" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-neutral-500">
              Suggested questions:
            </p>
            <div className="space-y-2">
              {INITIAL_SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSendMessage(suggestion)}
                  className="w-full text-left px-3 py-2 rounded-lg border border-neutral-200 text-sm hover:bg-neutral-50 transition-colors text-neutral-700"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            {message.role === "assistant" && (
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <span className="text-xs">🤖</span>
              </div>
            )}
            <div
              className={`flex max-w-xs gap-2 rounded-lg px-3 py-2 text-sm ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-100 text-neutral-900"
              }`}
            >
              <p className="break-words">{message.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <span className="text-xs">🤖</span>
            </div>
            <div className="flex gap-1 items-center bg-neutral-100 px-3 py-2 rounded-lg">
              <div className="size-2 rounded-full bg-neutral-400 animate-bounce" />
              <div className="size-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]" />
              <div className="size-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="shrink-0 border-t border-neutral-200 bg-neutral-50 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Type your question..."
            className="flex-1 rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isLoading || !input.trim()}
            className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <SendIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function getMockResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();

  if (
    lowerQuestion.includes("product") ||
    lowerQuestion.includes("find") ||
    lowerQuestion.includes("looking")
  ) {
    return "We have a great selection of products! You can browse our collections by category or use the search feature. Is there a specific type of product you're interested in?";
  }

  if (
    lowerQuestion.includes("order") ||
    lowerQuestion.includes("track") ||
    lowerQuestion.includes("shipping")
  ) {
    return "You can track your order in your account dashboard. Enter your order number to see real-time shipping updates. If you have any issues, our support team is here to help!";
  }

  if (
    lowerQuestion.includes("return") ||
    lowerQuestion.includes("refund") ||
    lowerQuestion.includes("exchange")
  ) {
    return "We offer a 30-day return policy on most items. You can initiate a return directly from your order page. For more details, check our Return Policy in the footer.";
  }

  if (
    lowerQuestion.includes("price") ||
    lowerQuestion.includes("cost") ||
    lowerQuestion.includes("discount")
  ) {
    return "Our prices are competitive and updated regularly. Check for seasonal sales and promotions! Sign up for our newsletter to get exclusive deals.";
  }

  if (
    lowerQuestion.includes("hello") ||
    lowerQuestion.includes("hi") ||
    lowerQuestion.includes("hey")
  ) {
    return "Hi there! 👋 How can I assist you with your shopping today?";
  }

  return "That's a great question! I'm here to help. Could you provide more details so I can give you the best answer?";
}

function CloseIcon(props: ComponentProps<"svg">) {
  return (
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
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function SendIcon(props: ComponentProps<"svg">) {
  return (
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
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="m16.862 4.487 1.414-1.414" />
      <path d="M16.22 7.239l1.414-1.414" />
    </svg>
  );
}
