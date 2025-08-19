import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Shield, 
  Cloud, 
  Headphones, 
  Network, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Comprehensive cybersecurity solutions to protect your business data'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud services for enhanced flexibility and performance'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support when you need it most'
    },
    {
      icon: Network,
      title: 'Network Solutions',
      description: 'Robust networking infrastructure to keep your business connected'
    }
  ]

  const benefits = [
    'Local expertise in Eerbeek and surrounding areas',
    'Comprehensive IT solutions under one roof',
    'Proactive support to prevent issues',
    'Certified professionals with industry expertise',
    'Flexible solutions that grow with your business'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Trusted IT Partner in Eerbeek
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional IT solutions tailored for your business needs. 
                Get instant support with our AI-powered assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with ICT Eerbeek Assistant
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg"
                  asChild
                >
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Chatbot Preview */}
            <div className="lg:flex justify-center">
              <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-lg font-semibold">ICT Eerbeek Assistant</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">👋 Hello! I'm your AI assistant. How can I help you today?</p>
                    </div>
                    <div className="bg-blue-500 rounded-lg p-3 ml-8">
                      <p className="text-sm">What IT services do you offer?</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">We offer IT support, network solutions, data security, and cloud services. Would you like to know more about any specific service?</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-blue-100">Available 24/7 for instant support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From network infrastructure to cybersecurity, we provide end-to-end IT services 
              designed to streamline your operations and protect your valuable data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose ICT Eerbeek?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience in the information and communication technology sector, 
                we understand the unique challenges that modern businesses face in today's digital landscape.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-600">Emergency Support</p>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </Card>
              <Card className="text-center p-6">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </Card>
              <Card className="text-center p-6">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
                <p className="text-gray-600">Uptime Guarantee</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your IT Experience?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get started with our AI-powered assistant or contact us directly for a free consultation. 
            Let's discuss how ICT Eerbeek can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Chatting Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

