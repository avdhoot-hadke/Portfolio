// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Send, Sparkles, Bot, User, Loader2 } from "lucide-react";
// import { sendMessageToGemini } from "@/services/geminiService";

// /* ---------------------------------- */
// /* Types                               */
// /* ---------------------------------- */

// export interface ChatMessage {
//     id: string;
//     role: "user" | "model";
//     text: string;
//     timestamp: Date;
// }

// /* ---------------------------------- */
// /* Component                           */
// /* ---------------------------------- */

// export default function AIChat() {
//     const [messages, setMessages] = useState<ChatMessage[]>([
//         {
//             id: "1",
//             role: "model",
//             text:
//                 "System Online. I am the Architect's Digital Twin. Ask me about his tech stack, experience, or availability.",
//             timestamp: new Date(),
//         },
//     ]);

//     const [input, setInput] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     const scrollRef = useRef<HTMLDivElement>(null);
//     const containerRef = useRef<HTMLDivElement>(null);

//     /* Spotlight */
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [opacity, setOpacity] = useState(0);

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//         if (!containerRef.current) return;
//         const rect = containerRef.current.getBoundingClientRect();
//         setPosition({
//             x: e.clientX - rect.left,
//             y: e.clientY - rect.top,
//         });
//     };

//     /* Auto-scroll */
//     useEffect(() => {
//         scrollRef.current?.scrollTo({
//             top: scrollRef.current.scrollHeight,
//             behavior: "smooth",
//         });
//     }, [messages, isLoading]);

//     /* Send message */
//     const handleSend = async () => {
//         if (!input.trim() || isLoading) return;

//         const userMessage: ChatMessage = {
//             id: Date.now().toString(),
//             role: "user",
//             text: input,
//             timestamp: new Date(),
//         };

//         setMessages((prev) => [...prev, userMessage]);
//         setInput("");
//         setIsLoading(true);

//         try {
//             const responseText = await sendMessageToGemini(
//                 [...messages, userMessage],
//                 input
//             );

//             const aiMessage: ChatMessage = {
//                 id: (Date.now() + 1).toString(),
//                 role: "model",
//                 text: responseText,
//                 timestamp: new Date(),
//             };

//             setMessages((prev) => [...prev, aiMessage]);
//         } catch (err) {
//             setMessages((prev) => [
//                 ...prev,
//                 {
//                     id: (Date.now() + 2).toString(),
//                     role: "model",
//                     text:
//                         "⚠️ Something went wrong while contacting the AI. Please try again.",
//                     timestamp: new Date(),
//                 },
//             ]);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <section className="bg-black py-24">
//             <div className="mx-auto max-w-4xl px-6">
//                 {/* Header */}
//                 <div className="mb-12 text-center">
//                     <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-800 bg-blue-900/20 px-3 py-1 font-mono text-xs text-blue-400">
//                         <Sparkles size={12} />
//                         POWERED BY GEMINI 2.5
//                     </div>
//                     <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
//                         Ask the Digital Twin
//                     </h2>
//                     <p className="text-zinc-400">
//                         Not just a portfolio. Interact with my AI agent to learn more.
//                     </p>
//                 </div>

//                 {/* Chat Window */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <div
//                         ref={containerRef}
//                         onMouseMove={handleMouseMove}
//                         onMouseEnter={() => setOpacity(1)}
//                         onMouseLeave={() => setOpacity(0)}
//                         className="group relative rounded-xl bg-zinc-900/50"
//                     >
//                         {/* Spotlight Border */}
//                         <div
//                             className="absolute -inset-[1px] rounded-xl transition-opacity duration-300"
//                             style={{
//                                 opacity,
//                                 background: `radial-gradient(
//                   800px circle at ${position.x}px ${position.y}px,
//                   rgba(255,255,255,0.25),
//                   transparent 40%
//                 )`,
//                             }}
//                         />

//                         {/* Content */}
//                         <div className="relative m-[1px] flex h-[500px] flex-col overflow-hidden rounded-[11px] bg-black">
//                             {/* Header Bar */}
//                             <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900/50 p-4">
//                                 <div className="flex gap-1.5">
//                                     <span className="h-3 w-3 rounded-full bg-red-500/50" />
//                                     <span className="h-3 w-3 rounded-full bg-yellow-500/50" />
//                                     <span className="h-3 w-3 rounded-full bg-green-500/50" />
//                                 </div>
//                                 <div className="flex-1 text-center font-mono text-xs text-zinc-500">
//                                     gemini-2.5-flash --stream
//                                 </div>
//                             </div>

//                             {/* Messages */}
//                             <div
//                                 ref={scrollRef}
//                                 className="flex-1 space-y-6 overflow-y-auto p-6 font-mono text-sm"
//                             >
//                                 {messages.map((msg) => (
//                                     <motion.div
//                                         key={msg.id}
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""
//                                             }`}
//                                     >
//                                         <div
//                                             className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${msg.role === "model"
//                                                     ? "bg-blue-600/20 text-blue-400"
//                                                     : "bg-zinc-700/20 text-zinc-400"
//                                                 }`}
//                                         >
//                                             {msg.role === "model" ? (
//                                                 <Bot size={16} />
//                                             ) : (
//                                                 <User size={16} />
//                                             )}
//                                         </div>

//                                         <div
//                                             className={`max-w-[80%] rounded-lg p-3 ${msg.role === "model"
//                                                     ? "border border-blue-900/30 bg-blue-950/10 text-blue-100"
//                                                     : "bg-zinc-800 text-white"
//                                                 }`}
//                                         >
//                                             {msg.text}
//                                         </div>
//                                     </motion.div>
//                                 ))}

//                                 {isLoading && (
//                                     <div className="flex gap-4">
//                                         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
//                                             <Bot size={16} />
//                                         </div>
//                                         <div className="flex items-center gap-2 text-zinc-500">
//                                             <Loader2 size={16} className="animate-spin" />
//                                             Thinking…
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Input */}
//                             <div className="border-t border-zinc-800 bg-zinc-900/30 p-4">
//                                 <div className="relative">
//                                     <input
//                                         value={input}
//                                         onChange={(e) => setInput(e.target.value)}
//                                         onKeyDown={(e) => e.key === "Enter" && handleSend()}
//                                         placeholder="Type a message..."
//                                         className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3 pr-12 font-mono text-white transition-colors focus:border-blue-500 focus:outline-none"
//                                     />
//                                     <button
//                                         onClick={handleSend}
//                                         disabled={!input.trim() || isLoading}
//                                         className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-zinc-400 transition-colors hover:text-white disabled:opacity-50"
//                                     >
//                                         <Send size={16} />
//                                     </button>
//                                 </div>

//                                 <p className="mt-2 text-center text-[10px] text-zinc-600">
//                                     AI can make mistakes. Please verify important information.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }
