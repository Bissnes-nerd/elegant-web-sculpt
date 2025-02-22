
import { Code, Share2, Palette } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Website Development</h3>
            <p className="text-gray-600 text-center">
              Custom, responsive websites built with modern technologies to deliver exceptional user experiences.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Share2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Social Media Management</h3>
            <p className="text-gray-600 text-center">
              Strategic social media solutions to boost your brand's presence and engage with your audience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Graphic Design</h3>
            <p className="text-gray-600 text-center">
              Creative design solutions that communicate your brand's message and captivate your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
