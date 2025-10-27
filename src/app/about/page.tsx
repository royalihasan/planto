import Image from 'next/image';
import { Leaf, Heart, Award, Users, Truck, Shield } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Green',
      role: 'Founder & CEO',
      bio: 'Plant enthusiast with 15+ years of experience in horticulture.',
      image: '/images/team/sarah.svg'
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Plant Care',
      bio: 'Expert botanist specializing in indoor plant cultivation.',
      image: '/images/team/mike.svg'
    },
    {
      name: 'Emma Wilson',
      role: 'Content Manager',
      bio: 'Passionate writer helping people learn about plant care.',
      image: '/images/team/emma.svg'
    },
    {
      name: 'David Chen',
      role: 'Operations Manager',
      bio: 'Ensures every plant arrives healthy and happy.',
      image: '/images/team/david.svg'
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source our plants responsibly and use eco-friendly packaging materials.'
    },
    {
      icon: Heart,
      title: 'Plant Health',
      description: 'Every plant is carefully inspected and nurtured before reaching your home.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We maintain the highest standards in plant selection and customer service.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of plant lovers who support each other\'s green journey.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Growing Together
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              At Planto, we believe everyone deserves to experience the joy and benefits 
              of living with plants. Our mission is to make plant parenthood accessible, 
              enjoyable, and successful for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Planto was born from a simple observation: too many people were intimidated 
                  by the idea of caring for plants. Our founder, Sarah, noticed that friends 
                  and family often wanted to bring greenery into their homes but were afraid 
                  of killing their plants.
                </p>
                <p>
                  Starting in 2020 with just a small collection of hardy houseplants, we've 
                  grown into a trusted source for plant lovers everywhere. We don't just sell 
                  plants – we provide the knowledge, support, and community that helps them thrive.
                </p>
                <p>
                  Today, we've helped over 50,000 customers successfully grow their plant 
                  collections, and we're just getting started. Every plant we send out comes 
                  with our promise: we're here to help you succeed.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/story.svg"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The plant experts behind Planto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Plant Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-green-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-green-100">Plant Survival Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Planto?</h2>
            <p className="text-lg text-gray-600">
              We're more than just a plant shop – we're your partners in plant parenthood
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Plant Guarantee</h3>
              <p className="text-gray-600">
                30-day guarantee on all plants. If your plant doesn't thrive, we'll replace it or refund you.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our plant experts are always here to help with care advice, troubleshooting, and guidance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe Delivery</h3>
              <p className="text-gray-600">
                Specially designed packaging ensures your plants arrive healthy and undamaged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Plant Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of happy plant parents who trust Planto for their green companions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Shop Plants
            </a>
            <a
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}