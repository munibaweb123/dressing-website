import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportSection = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h4 className="text-sm uppercase tracking-widest text-gray-500">Visit Our Office</h4>
      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        We help small businesses with big ideas
      </h2>

      {/* Support Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Support */}
        <div className="flex flex-col items-center border border-gray-300 rounded-lg p-6">
          <Phone className="h-12 w-12 text-blue-500" />
          <p className="mt-3 text-gray-700">georgia.young@example.com</p>
          <p className="text-gray-500">georgia.young@ple.com</p>
          <h4 className="mt-2 font-semibold text-gray-800">Get Support</h4>
          <Button variant="outline" className="mt-4">Submit Request</Button>
        </div>

        {/* Location Support (Highlighted) */}
        <div className="flex flex-col items-center bg-gray-900 text-white rounded-lg p-6">
          <MapPin className="h-12 w-12 text-blue-400" />
          <p className="mt-3">georgia.young@example.com</p>
          <p>georgia.young@ple.com</p>
          <h4 className="mt-2 font-semibold">Get Support</h4>
          <Button variant="ghost" className="mt-4 border border-white text-white">Submit Request</Button>
        </div>

        {/* Email Support */}
        <div className="flex flex-col items-center border border-gray-300 rounded-lg p-6">
          <Mail className="h-12 w-12 text-blue-500" />
          <p className="mt-3 text-gray-700">georgia.young@example.com</p>
          <p className="text-gray-500">georgia.young@ple.com</p>
          <h4 className="mt-2 font-semibold text-gray-800">Get Support</h4>
          <Button variant="outline" className="mt-4">Submit Request</Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <div className="relative inline-block">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 h-10 w-10 border-t border-l border-gray-400 rotate-45 bg-white"></div>
        </div>
        <h4 className="mt-6 text-sm uppercase tracking-widest text-gray-500">
          We Can't Wait to Meet You
        </h4>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Let’s Talk</h2>
        <Button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">Try it free now</Button>
      </div>
    </section>
  );
};

export default SupportSection;
