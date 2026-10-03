"use client";

import * as PopoverPrimitives from "@radix-ui/react-popover";
import { ComponentProps, useState } from "react";
import { ChatWindow } from "./chat-window";

export function AiChatFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ai-chat-container">
      <PopoverPrimitives.Root open={isOpen} onOpenChange={setIsOpen}>
        <PopoverPrimitives.Trigger asChild>
          <button
            className="flex size-14 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-lg transition-all duration-200 hover:bg-neutral-50 fixed bottom-8 right-8 z-40"
            aria-label="Open AI Assistant"
            title="AI Assistant"
          >
            <SparklesIcon className="fill-blue-600 size-7" />
          </button>
        </PopoverPrimitives.Trigger>
        <PopoverPrimitives.Portal>
          <PopoverPrimitives.Content
            sideOffset={16}
            side="top"
            align="end"
            onInteractOutside={(e: Event) => e.preventDefault()}
            className="fixed bottom-0 right-0 z-50 h-[600px] max-h-[75vh] w-[420px] max-w-[90vw] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl"
          >
            <ChatWindow onClose={() => setIsOpen(false)} />
          </PopoverPrimitives.Content>
        </PopoverPrimitives.Portal>
      </PopoverPrimitives.Root>
    </div>
  );
}

function SparklesIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M17.617 14.034c-4.172 1.378-5.561 2.768-6.94 6.94a.375.375 0 0 1-.711 0c-1.379-4.172-2.768-5.561-6.94-6.94a.375.375 0 0 1 0-.712c4.172-1.378 5.561-2.767 6.94-6.939a.375.375 0 0 1 .711 0c1.379 4.172 2.768 5.561 6.94 6.94a.375.375 0 0 1 0 .711ZM21.102 6.723c-2.085.689-2.78 1.384-3.47 3.47a.187.187 0 0 1-.356 0c-.688-2.085-1.383-2.78-3.47-3.47-.17-.056-.17-.298 0-.355 2.086-.689 2.781-1.384 3.47-3.47.057-.172.3-.172.356 0 .689 2.085 1.384 2.78 3.47 3.47.171.056.171.298 0 .355Z" />
    </svg>
  );
}
