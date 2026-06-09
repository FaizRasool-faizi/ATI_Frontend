"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InteractionForms() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Main Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Get in <span style={{ color: "#237E41" }}>Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you are a new student looking to join or an active member sharing feedback.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Join ATI Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-t-8 border-[#237E41]">
            <h2 className="text-3xl font-black mb-2">Join ATI</h2>
            <p className="text-gray-600 mb-8">Become a part of the revolutionary student movement.</p>
            <form className="space-y-4">
              <Input placeholder="Student Name" className="h-12" />
              <Input placeholder="Class" className="h-12" />
              <Input placeholder="School / College / University" className="h-12" />
              <Input placeholder="Contact Number" className="h-12" />
              <Input placeholder="City" className="h-12" />
              <Textarea placeholder="Home Address" className="h-24" />
              <Button className="w-full bg-[#237E41] hover:bg-green-700 h-12 text-lg font-bold">Submit Application</Button>
            </form>
          </div>

          {/* Suggestions/Complain Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-t-8 border-red-600">
            <h2 className="text-3xl font-black mb-2 text-red-600">Suggestions</h2>
            <p className="text-gray-600 mb-8">Share your feedback or register a complaint.</p>
            <form className="space-y-4">
              <Input placeholder="Member Name" className="h-12" />
              <Input placeholder="Tanzeemi Hesiyat" className="h-12" />
              <Input placeholder="Tanzeemi Zemdari" className="h-12" />
              <Input placeholder="Contact Number / Email" className="h-12" />
              <Textarea placeholder="Message / Complain" className="h-32" />
              <Button className="w-full bg-red-600 hover:bg-red-700 h-12 text-lg font-bold">Submit Feedback</Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}