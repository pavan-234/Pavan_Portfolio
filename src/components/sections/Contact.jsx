import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
          centered
        />

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          {/* Contact Info - Left Side */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium">varanasipavankalyan07@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium">Visakhapatnam, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                    <p className="text-gray-900 dark:text-white font-medium">+91 93914 64269</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
    Follow Me
  </h4>

  <div className="flex space-x-4">
    {/* GitHub Link */}
    <a 
      href="https://github.com/vpavankalyan77" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
    >
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.801 8.207 11.387.6.111.827-.26.827-.577 0-.29-.011-1.055-.017-2.073-3.338.725-4.04-1.61-4.04-1.61-.544-1.378-1.33-1.745-1.33-1.745-1.088-.743.082-.729.082-.729 1.204.085 1.832 1.237 1.832 1.237 1.067 1.827 2.807 1.298 3.496.994.107-.773.417-1.297.76-1.598-2.665-.303-5.467-1.333-5.467-5.932 0-1.308.469-2.384 1.238-3.219-.124-.302-.536-.93.119-1.019 0 0 1.006-.032 3.31 1.251.96-.267 1.982-.399 3.004-.399 1.022 0 2.043.132 3.004.399 2.302-1.283 3.309-1.251 3.309-1.251.657.089.244.717.119 1.019.769.835 1.238 1.911 1.238 3.219 0 4.607-2.804 5.628-5.475 5.926.43.376.82 1.121.82 2.26 0 1.633-.011 2.948-.017 3.344 0 .319.223.692.834.576 4.77-1.585 8.208-6.084 8.208-11.387 0-6.627-5.373-12-12-12z" />
      </svg>
    </a>

    {/* LinkedIn Link */}
    <a 
      href="https://www.linkedin.com/in/vpavankalyan77/" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
    >
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-7 19h-3v-7h3v7zm-1.5-8.2c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75c.964 0 1.75.785 1.75 1.75s-.786 1.75-1.75 1.75zm6.5 8.2h-3v-4.8c0-1.2-.428-2.2-1.5-2.2-1.033 0-1.5.84-1.5 1.8v5.2h-3v-7h3v.9c.57-.9 1.5-1.5 2.5-1.5 1.933 0 3.5 1.567 3.5 3.5v4.6z" />
      </svg>
    </a>
  </div>
                </div>

            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="md:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  icon={<Send className="w-5 h-5" />}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
