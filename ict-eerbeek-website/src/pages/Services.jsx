import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Headphones, 
  Network, 
  Shield, 
  Cloud, 
  Settings, 
  HardDrive,
  Building,
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const coreServices = [
    {
      icon: Headphones,
      title: 'IT Support & Help Desk',
      description: 'Professional technical support when you need it most.',
      features: [
        '24/7 remote and on-site support',
        'Hardware troubleshooting and repair',
        'Software installation and configuration',
        'System maintenance and updates',
        'User training and guidance',
        'Emergency response services'
      ],
      badge: 'Most Popular'
    },
    {
      icon: Network,
      title: 'Network Solutions',
      description: 'Robust networking infrastructure to keep your business connected.',
      features: [
        'Network design and implementation',
        'Wireless network setup and optimization',
        'Router and switch configuration',
        'Network security implementation',
        'Performance monitoring and optimization',
        'Structured cabling solutions'
      ]
    },
    {
      icon: Shield,
      title: 'Data Security & Cybersecurity',
      description: 'Protect your valuable business data with comprehensive security services.',
      features: [
        'Firewall configuration and management',
        'Antivirus and anti-malware protection',
        'Data backup and disaster recovery',
        'Security audits and assessments',
        'Employee cybersecurity training',
        'Compliance consulting (GDPR, ISO 27001)'
      ],
      badge: 'Essential'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing Services',
      description: 'Leverage the power of cloud technology for enhanced flexibility.',
      features: [
        'Cloud migration planning and execution',
        'Microsoft 365 and Google Workspace setup',
        'Cloud backup and storage solutions',
        'Virtual server deployment',
        'Cloud security implementation',
        'Hybrid cloud architecture design'
      ]
    },
    {
      icon: Settings,
      title: 'Managed IT Services',
      description: 'Complete IT management so you can focus on your business.',
      features: [
        'Proactive system monitoring',
        'Regular maintenance and updates',
        'IT strategy and planning',
        'Technology consulting',
        'Vendor management',
        'IT budget planning and optimization'
      ]
    },
    {
      icon: HardDrive,
      title: 'Business Continuity & Disaster Recovery',
      description: 'Ensure your business stays operational during unexpected events.',
      features: [
        'Business impact analysis',
        'Disaster recovery planning',
        'Data backup strategies',
        'System redundancy implementation',
        'Recovery testing and validation',
        'Emergency response procedures'
      ]
    }
  ]

  const specializedSolutions = [
    {
      icon: Building,
      title: 'Small Business IT Packages',
      description: 'Tailored IT solutions for small and medium enterprises',
      features: ['Essential IT support packages', 'Scalable service plans', 'Cost-effective technology solutions']
    },
    {
      icon: Smartphone,
      title: 'Enterprise Solutions',
      description: 'Comprehensive IT services for larger organizations',
      features: ['Complex network infrastructure', 'Advanced security implementations', 'Multi-location support']
    }
  ]

  const deliveryMethods = [
    {
      title: 'On-site Support',
      description: 'Direct assistance at your location for complex issues and installations'
    },
    {
      title: 'Remote Support',
      description: 'Efficient problem resolution via secure connections for quick fixes'
    },
    {
      title: 'Hybrid Approach',
      description: 'Combination of on-site and remote services for optimal efficiency'
    },
    {
      title: 'Preventive Maintenance',
      description: 'Proactive system care to prevent issues before they occur'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our IT Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Comprehensive information and communication technology services designed to meet 
            the diverse needs of modern businesses.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team delivers reliable, secure, and innovative solutions that help 
              your organization operate efficiently and stay competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 relative">
                {service.badge && (
                  <Badge className="absolute -top-2 -right-2 bg-green-500 hover:bg-green-600">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored IT services designed for specific business sizes and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <solution.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Delivery Model
            </h2>
            <p className="text-xl text-gray-600">
              Flexible service delivery options to meet your specific needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{method.title}</h3>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services Stand Out */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Our Services Stand Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Presence</h3>
              <p className="text-blue-100">Quick response times in the Eerbeek area</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Expertise</h3>
              <p className="text-blue-100">Industry-certified professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
              <p className="text-blue-100">Services tailored to your specific needs</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-blue-100">Clear, competitive pricing with no hidden costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Enhance Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how ICT Eerbeek 
            can transform your technology experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

