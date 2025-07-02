'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/app/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    whatBringsYou: '',
    preferredTime: '',
    preferredMethod: '',
    agreeToContact: false
  });
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.whatBringsYou.trim()) {
      newErrors.whatBringsYou = 'Please tell us what brings you here';
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Dr. Blake will get back to you within one business day.",
    });

    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      whatBringsYou: '',
      preferredTime: '',
      preferredMethod: '',
      agreeToContact: false
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-blue-900">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-blue-400 rounded-full mx-auto"></div>
          <p className="text-base md:text-lg text-blue-700 max-w-2xl mx-auto">
            Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8 md:w-1/3 w-full">
          
            <div className="bg-white border border-blue-100 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-blue-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm text-blue-700">
                <p>📍 1287 Maplewood Drive</p>
                <p>Los Angeles, CA 90026</p>
                <p>📞 (323) 555-0192</p>
                <p>✉️ serena@blakepsychology.com</p>
              </div>
            </div>
            {/* Office Hours */}
            <div className="bg-white border border-blue-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-blue-900 mb-3">Office Hours</h3>
              <div className="space-y-3 text-blue-700">
                <div>
                  <p className="font-medium text-blue-900">In-Person Sessions:</p>
                  <p>Tuesday & Thursday: 10:00 AM – 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-blue-900">Virtual Sessions (Zoom):</p>
                  <p>Monday, Wednesday & Friday: 1:00 PM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <Card className="bg-blue-100 border-2 border-blue-100 shadow-lg rounded-2xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5 text-black">
                  <div>
                    <label htmlFor="name" className="block text-base md:text-lg font-medium text-blue-900 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`bg-white border-2 rounded-xl px-4 py-3 text-base  ${
                        errors.name ? 'border-red-500' : 'border-blue-300'
                      } focus:border-blue-500 focus-visible:ring-0`}
                      placeholder="Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base md:text-lg font-medium text-blue-900 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`bg-white border-2 rounded-xl px-4 py-3 text-base ${
                        errors.email ? 'border-red-500' : 'border-blue-300'
                      } focus:border-blue-500 focus-visible:ring-0`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-base md:text-lg font-medium text-blue-900 mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-white border-2 border-blue-300 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus-visible:ring-0"
                      placeholder="(555) 234-5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-base md:text-lg font-medium text-blue-900 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="bg-white border-2 border-blue-300 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus-visible:ring-0 resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatBringsYou" className="block text-base md:text-lg font-medium text-blue-900 mb-2">
                      What brings you here?
                    </label>
                    <Textarea
                      id="whatBringsYou"
                      value={formData.whatBringsYou}
                      onChange={(e) => handleInputChange('whatBringsYou', e.target.value)}
                      rows={4}
                      className={`bg-white border-2 rounded-xl px-4 py-3 text-base ${
                        errors.whatBringsYou ? 'border-red-500' : 'border-blue-300'
                      } focus:border-blue-500 focus-visible:ring-0 resize-none`}
                      placeholder="Tell me a bit about what brings you here today..."
                    />
                    {errors.whatBringsYou && <p className="text-red-500 text-sm mt-1">{errors.whatBringsYou}</p>}
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-base md:text-lg font-medium text-blue-900 mb-2">
                      Preferred Contact Time
                    </label>
                    <Input
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                      className="bg-white border-2 border-blue-300 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus-visible:ring-0"
                      placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                    />
                    <p className="text-sm text-blue-700 mt-1">Let us know when you&#39;re typically available for a call or consultation</p>
                  </div>
                  <div>
                    <label htmlFor="preferredMethod" className="block text-base md:text-lg font-medium text-blue-900 mb-2">
                      Preferred Contact Method
                    </label>
                    <Select value={formData.preferredMethod} onValueChange={(value) => handleInputChange('preferredMethod', value)}>
                      <SelectTrigger className="bg-white border-2 border-blue-300 rounded-xl px-4 py-3 text-base focus:border-blue-500 focus-visible:ring-0">
                        <SelectValue placeholder="Select preferred method" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-2 border-blue-300 rounded-xl">
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                        <SelectItem value="either">Either Phone or Email</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToContact"
                      checked={formData.agreeToContact}
                      onCheckedChange={(checked) => handleInputChange('agreeToContact', checked as boolean)}
                      className={`mt-1 ${errors.agreeToContact ? 'border-red-500' : 'border-blue-500'}`}
                    />
                    <div className="flex flex-col">
                      <label htmlFor="agreeToContact" className="text-sm text-blue-900 cursor-pointer">
                        I agree to be contacted
                      </label>
                      {errors.agreeToContact && <p className="text-red-500 text-sm mt-1">{errors.agreeToContact}</p>}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl text-lg font-medium transition-colors"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
