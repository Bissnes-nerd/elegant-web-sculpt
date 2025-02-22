
import { Mail, Phone, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating digital solutions that help businesses succeed in the modern world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Business Street, Suite 100<br />City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Calendar Booking */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
            <div className="aspect-video w-full bg-white rounded-lg">
              {/* Note: Replace this iframe with your actual Google Calendar booking widget */}
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=your-calendar-id"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
