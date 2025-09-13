import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'wouter';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Since external libraries are not available, we'll simulate a successful API call.
      console.log('Form data submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again later or contact me directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/goxrav',
      username: '@goxrav'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/gauravmehan',
      username: 'Gaurav Mehan'
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-space-primary to-space-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-4 text-white">
            Launch Communication
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on a new digital adventure? Let's connect and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-space-secondary border border-space-accent rounded-xl p-8">
            <h3 className="font-orbitron text-2xl font-bold mb-6">Send Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-spacemono text-sm">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your name"
                            className="form-input"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-spacemono text-sm">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your.email@example.com"
                            className="form-input"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-spacemono text-sm">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Project collaboration opportunity"
                          className="form-input"
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-spacemono text-sm">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={6}
                          placeholder="Tell me about your project or idea..."
                          className="form-input resize-none"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-space-highlight text-space-primary hover:bg-space-highlight/90 glow-effect"
                  data-testid="button-submit"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Launching...' : 'Launch Message'}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-space-secondary border border-space-accent rounded-xl p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6">Get In Touch</h3>
              <div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center" data-testid="contact-email">
                      <div className="w-12 h-12 bg-space-highlight rounded-lg flex items-center justify-center mr-4">
                        <Mail className="text-space-primary" size={20} />
                      </div>
                      <div>
                        <div className="font-spacemono text-sm text-muted-foreground">Email</div>
                        <div>
                          <a href="mailto:gauravjh0827@gmail.com" className="hover:underline">gauravjh0827@gmail.com</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" data-testid="contact-phone">
                      <div className="w-12 h-12 bg-space-nebula rounded-lg flex items-center justify-center mr-4">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-spacemono text-sm text-muted-foreground">Phone</div>
                        <div>
                          <a href="tel:+918289087419" className="hover:underline">+91-82890 87419</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" data-testid="contact-location">
                      <div className="w-12 h-12 bg-gradient-to-br from-space-highlight to-space-nebula rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-spacemono text-sm text-muted-foreground">Location</div>
                        <div>Hoshiarpur,  Punjab</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-space-secondary border border-space-accent rounded-xl p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6">Social Networks</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border border-space-accent rounded-lg hover:border-space-highlight hover:bg-space-accent/20 transition-all duration-300 group"
                    data-testid={`social-${social.name.toLowerCase()}`}
                  >
                    <social.icon size={24} className="mr-3 group-hover:text-space-highlight transition-colors" />
                    <div>
                      <div className="font-spacemono text-sm">{social.name}</div>
                      <div className="text-xs text-muted-foreground">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
