import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle,
  AlertCircle,
  Linkedin,
  Facebook,
  Twitter,
  Send
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
    contactMethod: '',
    urgency: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        serviceInterest: '',
        message: '',
        contactMethod: '',
        urgency: ''
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Hoofdstraat 123', '6961 AB Eerbeek', 'Netherlands']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+31 (0)313 123 456', 'Emergency: +31 (0)6 1234 5678']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@icteerbeek.nl']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM', 'Sun: Emergency support only']
    }
  ]

  const whyContactUs = [
    {
      title: 'Free Consultation',
      description: 'Every new client relationship begins with a complimentary consultation where we assess your current IT environment.'
    },
    {
      title: 'Rapid Response',
      description: 'We understand that IT issues can\'t wait. Our team is committed to rapid response times with 24/7 emergency support.'
    },
    {
      title: 'Local Service',
      description: 'Being locally based means we can provide on-site support quickly when needed in the Eerbeek area.'
    }
  ]

  const serviceAreas = [
    'Eerbeek and surrounding areas',
    'Apeldoorn region',
    'Gelderland province',
    'Remote support available nationwide'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Ready to transform your business with professional IT solutions? 
            We're here to help with immediate support, new projects, or any questions about our services.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-gray-600">
                    Use the form below to send us a message directly. We typically respond to all inquiries 
                    within 2 business hours during regular business hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="serviceInterest">Service Interest</Label>
                        <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange('serviceInterest', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">IT Support</SelectItem>
                            <SelectItem value="network">Network Solutions</SelectItem>
                            <SelectItem value="security">Data Security</SelectItem>
                            <SelectItem value="cloud">Cloud Services</SelectItem>
                            <SelectItem value="managed">Managed IT</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="emergency">Emergency</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                      <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange('contactMethod', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="How would you like us to contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="meeting">In-person meeting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Tell us about your IT needs or questions..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Emergency Support */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Support</h3>
                      <p className="text-red-700 mb-2">
                        For urgent technical issues that are impacting your business operations, 
                        please call our emergency support line.
                      </p>
                      <p className="font-semibold text-red-800">+31 (0)6 1234 5678</p>
                      <p className="text-sm text-red-600">Available 24/7 for critical issues</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Contact Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyContactUs.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Alternative Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Areas */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Areas</h2>
              <p className="text-lg text-gray-600 mb-6">
                While our main office is located in Eerbeek, we proudly serve businesses throughout the region:
              </p>
              <ul className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alternative Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative Contact Methods</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold">ICT Eerbeek Assistant</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Don't forget about our AI-powered assistant! Available 24/7 on our website for:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Basic technical questions</li>
                    <li>• Service information</li>
                    <li>• Appointment scheduling</li>
                    <li>• Emergency contact routing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                  <p className="text-gray-600 mb-4">
                    Stay connected with us on social media for IT tips, company updates, and industry news:
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
                      <Facebook className="h-5 w-5 mr-2" />
                      Facebook
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-700">
                      <Twitter className="h-5 w-5 mr-2" />
                      Twitter
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What to Expect When You Contact ICT Eerbeek
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Prompt Response</h3>
              <p className="text-blue-100 text-sm">We respond to all inquiries within 2 business hours</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Professional Assessment</h3>
              <p className="text-blue-100 text-sm">We'll discuss your needs and provide honest recommendations</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Clear Pricing</h3>
              <p className="text-blue-100 text-sm">Transparent pricing with no hidden costs</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-blue-100 text-sm">We work around your business schedule</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="font-semibold mb-2">Follow-up</h3>
              <p className="text-blue-100 text-sm">We ensure you're satisfied with our service and support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

