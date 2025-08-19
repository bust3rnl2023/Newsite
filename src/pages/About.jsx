import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  Target, 
  Heart, 
  Lightbulb, 
  Handshake, 
  MapPin,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, every interaction, and every solution we deliver. Our commitment to quality ensures that our clients receive nothing less than the best possible service and outcomes.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honesty and transparency form the foundation of our business relationships. We provide clear communication, honest assessments, and ethical business practices in all our dealings.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends and continuously invest in learning and development to bring cutting-edge solutions to our clients.'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We view our client relationships as long-term partnerships. Your success is our success, and we\'re committed to growing alongside your business.'
    },
    {
      icon: MapPin,
      title: 'Local Commitment',
      description: 'As a local business, we understand the unique challenges and opportunities in our community. We\'re invested in the success of Eerbeek\'s business ecosystem.'
    }
  ]

  const teamRoles = [
    {
      title: 'Leadership Team',
      description: 'Our experienced leadership team brings decades of combined expertise in information technology, business management, and customer service.',
      icon: Users
    },
    {
      title: 'Technical Specialists',
      description: 'Our certified IT professionals hold industry-recognized certifications and continuously update their skills to stay current with emerging technologies.',
      icon: Award
    },
    {
      title: 'Customer Support Team',
      description: 'Our dedicated support team is trained not just in technical skills, but also in customer service excellence.',
      icon: Heart
    }
  ]

  const approachSteps = [
    {
      step: '01',
      title: 'Discovery Process',
      description: 'Every client relationship begins with a comprehensive discovery process where we learn about your current IT infrastructure, business processes, and future goals.'
    },
    {
      step: '02',
      title: 'Customized Solutions',
      description: 'Based on our discovery findings, we develop customized IT strategies and solutions that align with your specific needs and budget.'
    },
    {
      step: '03',
      title: 'Implementation Excellence',
      description: 'Our implementation process is designed to minimize disruption to your business while ensuring that new systems and processes are properly integrated and tested.'
    },
    {
      step: '04',
      title: 'Ongoing Partnership',
      description: 'After implementation, we maintain an ongoing partnership through regular check-ins, proactive monitoring, and continuous optimization of your IT environment.'
    }
  ]

  const stats = [
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ICT Eerbeek
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Your trusted local IT partner providing comprehensive technology solutions 
              for businesses in Eerbeek and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the technology gap for businesses in Eerbeek and the surrounding region, 
                ICT Eerbeek has established itself as a trusted partner in the information and communication technology landscape.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are more than just an IT service provider – we are your technology advocates, working tirelessly to ensure 
                that your business has the digital foundation it needs to succeed.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Established local presence in Eerbeek</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To empower local businesses with reliable, innovative, and secure IT solutions that drive growth, 
              enhance productivity, and provide peace of mind. We believe that technology should be an enabler, 
              not a barrier, and we're committed to making advanced IT services accessible and understandable 
              for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at ICT Eerbeek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts behind ICT Eerbeek's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <role.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in a consultative approach to IT services. Rather than simply implementing solutions, 
              we take the time to understand your business, your goals, and your challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Future */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Community Involvement & Looking Forward
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                ICT Eerbeek is proud to be an active member of the local business community. 
                We participate in local business associations, support community events, and contribute 
                to initiatives that promote technological literacy and digital inclusion in our region.
              </p>
              <p className="text-lg text-blue-100">
                As technology continues to evolve, so do we. We're constantly exploring new ways to serve 
                our clients better, whether through emerging technologies like artificial intelligence and 
                machine learning, or through improved service delivery methods.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-green-400 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
                  <p className="text-blue-100">
                    Constantly exploring emerging technologies to provide cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-green-400 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Community Partnership</h3>
                  <p className="text-blue-100">
                    Active participation in local business associations and community events.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience the ICT Eerbeek Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At ICT Eerbeek, we're not just managing your technology – we're helping to shape your digital future. 
            We invite you to experience the difference that a truly committed local IT partner can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start Your Partnership
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

