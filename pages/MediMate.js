import { useState, useEffect, useRef } from 'react';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import GoogleGenerativeAI

const MediMate = () => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const modelRef = useRef(null); // Define modelRef

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Initialize GoogleGenerativeAI model
    const apiKey = 'AIzaSyCCMu8d6y4K_B-YLNTJbfAY2ktG7SEEB5c'; // Replace with your actual API key
    modelRef.current = new GoogleGenerativeAI(apiKey).getGenerativeModel({ model: "gemini-pro" });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const prompt = inputRef.current.value.trim();

    if (prompt === "") return;

    setMessages(prevMessages => [...prevMessages, { role: "user", content: prompt }]);
    inputRef.current.value = "";

    // Request the response from Gemini AI
    const chat = await modelRef.current.startChat();
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = await response.text();

    // Add the bot response to the messages state
    setMessages(prevMessages => [...prevMessages, { role: "bot", content: text }]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col justify-between p-8" style={{ paddingTop:"10rem"}}>
        <h1 className="text-2xl text-dark mb-4 text-center font-bold">Chat with MediMate</h1>
        <div style={{ marginTop: "2px" }}>
          <div
            style={{ height: "30rem", background:"#F0F9EB", borderRadius: "10px"}}
            id="messages"
            ref={chatContainerRef}
            className="flex flex-col p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch shadow-md"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.role === "user" ? "user-message" : "ai-message"}`}
                style={{ flexDirection: message.role === "user" ? "row-reverse" : "row", backgroundColor: message.role === "bot" ? "#57BB8A" : "#FFFFFF", color: message.role === "bot" ? "#FFFFFF" : "#000000", borderRadius: "10px", padding: "10px", marginBottom: "10px" }}
              >
                <div className="flex items-start"> {/* Changed alignment to 'start' */}
                  <img
                    src={message.role === "user" ? "https://cdn-icons-png.flaticon.com/512/1430/1430453.png" : "https://cdn3.iconfinder.com/data/icons/healthcare-37/64/bot-512.png"}
                    alt={message.role === "user" ? "User Icon" : "Chatbot Icon"}
                    className="w-8 h-8"
                  />
                  <span className="text-lg ml-2" style={{ whiteSpace: 'pre-wrap' }}>{message.content}</span>
                </div>
              </div>
            ))}
          </div>
          <form
            id="chat-form"
            onSubmit={handleSubmit}
            className="mt-4 flex items-center"
          >
            <input
              type="text"
              id="prompt"
              ref={inputRef}
              className="mr-2 p-2 text-md flex-grow focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 pr-16 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 rounded-full py-2"
              placeholder="Say something..."
              autoComplete="off"
              autoFocus
            />
            <button
            style={{ background: "#2FAB73" ,width:"5rem",height:"3rem"}}
              type="submit"
              className="px-4 py-2text-white rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediMate;
