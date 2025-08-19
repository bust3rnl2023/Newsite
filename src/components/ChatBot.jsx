import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import {
  MessageCircle,
  Send,
  X,
  Minimize2,
  Maximize2,
  Bot,
  User
} from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I'm the ICT Eerbeek Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize Gemini API
  const genAI = new GoogleGenerativeAI("AIzaSyBI1qTYk4xOQWlNhtI_w5a2yb0KZ523Vas")
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  const getAIResponse = async (userMessage) => {
    try {
      setIsTyping(true)
      
      // Enhanced context for ICT Eerbeek
      const context = `You are the ICT Eerbeek Assistant, a helpful AI assistant for ICT Eerbeek, a professional IT company located in Eerbeek, Netherlands. 

Company Information:
- Company Name: ICT Eerbeek
- Location: Hoofdstraat 123, 6961 AB Eerbeek, Netherlands
- Phone: +31 (0)313 123 456
- Emergency: +31 (0)6 1234 5678
- Email: info@icteerbeek.nl
- Business Hours: Mon-Fri 8:00 AM - 6:00 PM, Sat 9:00 AM - 1:00 PM, Sun Emergency support only

Services Offered:
1. IT Support & Help Desk (24/7)
2. Network Solutions
3. Data Security & Cybersecurity
4. Cloud Computing Services
5. Managed IT Services
6. Business Continuity & Disaster Recovery

Key Features:
- 24/7 emergency support available
- Local expertise in Eerbeek and surrounding areas
- Certified professionals with industry expertise
- Free initial consultation
- Transparent pricing with no hidden costs
- Proactive support to prevent issues

Please respond as a knowledgeable, professional, and helpful assistant representing ICT Eerbeek. Keep responses concise but informative. Always be ready to help with IT-related questions and provide contact information when appropriate.

User question: ${userMessage}`

      const result = await model.generateContent(context)
      const response = await result.response
      const text = response.text()
      setIsTyping(false)
      return text
    } catch (error) {
      console.error("Error generating content from Gemini API:", error)
      setIsTyping(false)
      
      // Fallback responses for common questions
      const lowerMessage = userMessage.toLowerCase()
      
      if (lowerMessage.includes('services') || lowerMessage.includes('offer')) {
        return "We offer comprehensive IT services including:\n\n• IT Support & Help Desk (24/7)\n• Network Solutions\n• Data Security & Cybersecurity\n• Cloud Computing Services\n• Managed IT Services\n• Business Continuity & Disaster Recovery\n\nWould you like to know more about any specific service?"
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('address')) {
        return "You can contact ICT Eerbeek:\n\n📍 Office: Hoofdstraat 123, 6961 AB Eerbeek\n📞 Phone: +31 (0)313 123 456\n🚨 Emergency: +31 (0)6 1234 5678\n📧 Email: info@icteerbeek.nl\n\n🕒 Business Hours:\nMon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 1:00 PM\nSun: Emergency support only"
      }
      
      if (lowerMessage.includes('support') || lowerMessage.includes('24/7')) {
        return "Yes! We provide 24/7 support including:\n\n• Remote and on-site support\n• Hardware troubleshooting and repair\n• Software installation and configuration\n• System maintenance and updates\n• Emergency response services\n\nFor emergencies, call: +31 (0)6 1234 5678"
      }
      
      if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
        return "Our pricing is transparent with no hidden costs:\n\n• Free initial consultation\n• Competitive hourly rates\n• Flexible service packages\n• Custom enterprise solutions\n\nWould you like to schedule a free consultation to discuss your specific needs? Call us at +31 (0)313 123 456"
      }
      
      return "I apologize, but I'm having trouble connecting to the AI at the moment. However, I can still help you with information about ICT Eerbeek's services. Please try asking about our services, contact information, support options, or pricing. For immediate assistance, call +31 (0)313 123 456."
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = inputMessage
    setInputMessage('')

    const aiResponse = await getAIResponse(currentInput)
    const botMessage = {
      id: messages.length + 2,
      text: aiResponse,
      sender: 'bot',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, botMessage])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "What services do you offer?",
    "How can I contact you?",
    "Do you provide 24/7 support?",
    "What are your pricing options?"
  ]

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <CardTitle className="text-lg">ICT Eerbeek Assistant</CardTitle>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-blue-700 p-1"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {!isMinimized && (
            <p className="text-sm text-blue-100 mt-1">
              Available 24/7 for instant support
            </p>
          )}
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[536px]">
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                        {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left justify-start text-xs p-2 h-auto"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

export default ChatBot

