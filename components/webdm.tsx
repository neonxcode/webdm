'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Code, Laptop, Smartphone, Users, Star, Mail, ChevronDown, Menu, Briefcase, Award, Coffee, Globe,
  Rocket, Target, Zap, Layers, Shield, Cpu, Sun, Moon, Plus, Minus, Clock
} from 'lucide-react'

// ✅ Add this type definition
type SectionId = 'services' | 'about' | 'portfolio' | 'blog' | 'faq' | 'contact'

export default function Website() {
  const { scrollYProgress } = useScroll()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  // ✅ Strongly type your sectionRefs
  const sectionRefs: Record<SectionId, React.RefObject<HTMLElement>> = {
    services: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    blog: useRef(null),
    faq: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  // ✅ Enforce sectionId type
  const scrollToSection = (sectionId: SectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ]

  const portfolioProjects = [
    { id: 1, title: 'E-commerce Platform', description: 'A scalable online store with integrated payment systems', image: '/placeholder.svg?height=300&width=400', category: 'Web Development' },
    { id: 2, title: 'Fitness Tracking App', description: 'iOS and Android app for tracking workouts and nutrition', image: '/placeholder.svg?height=300&width=400', category: 'Mobile App' },
    { id: 3, title: 'AI-Powered Chatbot', description: 'Customer service bot with natural language processing', image: '/placeholder.svg?height=300&width=400', category: 'AI & Machine Learning' },
    { id: 4, title: 'Virtual Reality Game', description: 'Immersive VR experience for entertainment', image: '/placeholder.svg?height=300&width=400', category: 'VR & AR' },
    { id: 5, title: 'IoT Smart Home System', description: 'Connected devices for home automation and energy efficiency', image: '/placeholder.svg?height=300&width=400', category: 'IoT' },
    { id: 6, title: 'Data Visualization Dashboard', description: 'Interactive charts and graphs for big data analysis', image: '/placeholder.svg?height=300&width=400', category: 'Data Science' },
  ]

  const blogPosts = [
    { 
      title: 'The Future of AI in Web Development', 
      date: 'May 15, 2023', 
      image: '/placeholder.svg?height=200&width=300', 
      icon: <Cpu className="w-8 h-8 text-[#5772ff]" />,
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and interact with websites.',
      author: 'Jane Doe',
      authorImage: '/placeholder.svg?height=50&width=50'
    },
    { 
      title: '10 Tips for Optimizing Mobile App Performance', 
      date: 'June 2, 2023', 
      image: '/placeholder.svg?height=200&width=300', 
      icon: <Smartphone className="w-8 h-8 text-[#5772ff]" />,
      excerpt: 'Learn key strategies to enhance the speed and efficiency of your mobile applications.',
      author: 'John Smith',
      authorImage: '/placeholder.svg?height=50&width=50'
    },
    { 
      title: 'Why User Experience Should Be Your Top Priority', 
      date: 'June 20, 2023', 
      image: '/placeholder.svg?height=200&width=300', 
      icon: <Users className="w-8 h-8 text-[#5772ff]" />,
      excerpt: 'Discover the importance of UX design and its impact on user engagement and conversion rates.',
      author: 'Emily Johnson',
      authorImage: '/placeholder.svg?height=50&width=50'
    },
  ]

  const faqItems = [
    { 
      question: "What services do you provide?",
      answer: "We offer a wide range of digital services including web development, mobile app development, UI/UX design, digital marketing, and custom software solutions.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      question: "What are the benefits of digital agencies over freelancers?",
      answer: "Digital agencies offer several advantages over freelance developers/designers. They typically have a team of professionals with diverse skill sets, specialized expertise, and access to resources that may not be available to individual freelancers.",
      icon: <Users className="w-6 h-6" />
    },
    {
      question: "Do you have examples of your projects?",
      answer: "Yes, we have a portfolio section on our website showcasing some of our recent projects. These include e-commerce platforms, mobile apps, AI-powered chatbots, and more.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      question: "Can you provide services to early-stage startups?",
      answer: "We love working with startups and have experience in helping early-stage companies build their digital presence. We offer scalable solutions that can grow with your business.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      question: "Do you offer SEO services?",
      answer: "Yes, we provide comprehensive SEO services as part of our digital marketing offerings. This includes on-page optimization, content strategy, link building, and technical SEO.",
      icon: <Target className="w-6 h-6" />
    },
    {
      question: "How can I be sure that I will get my design in time?",
      answer: "We have a robust project management process in place to ensure timely delivery. We provide regular updates, stick to agreed-upon milestones, and maintain open communication throughout the project.",
      icon: <Clock className="w-6 h-6" />
    },
  ]

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0e1116] text-white' : 'bg-white text-[#0e1116]'} transition-colors duration-300`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#5772ff] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <nav className={`${isDarkMode ? 'bg-[#0e1116] text-white' : 'bg-white text-[#0e1116]'} py-4 px-6 sticky top-0 z-40 transition-colors duration-300 shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#5772ff]">NEON</a>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="hover:text-[#5772ff] transition-colors text-sm uppercase tracking-wider">
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
              className="data-[state=checked]:bg-[#5772ff]"
            />
            {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            <Button className="hidden md:inline-flex bg-[#5772ff] text-white hover:bg-[#3b4fd7]">Work with us</Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 ${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'} rounded-lg p-4`}
          >
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="block py-2 hover:text-[#5772ff] transition-colors w-full text-left">
                {item.label}
              </button>
            ))}
            <Button className="w-full mt-4 bg-[#5772ff] text-white hover:bg-[#3b4fd7]">Work with us</Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#5772ff]">We Craft Digital Experiences</h1>
          <p className="text-xl md:text-2xl mb-8">Your vision, our expertise. Let's create something extraordinary.</p>
          <Link href="/work-with-us">
            <Button size="lg" className="bg-[#5772ff] text-white hover:bg-[#4a61d6] transition-all duration-200 transform hover:scale-105 shadow-lg">
              Work with Us
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#5772ff] opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={40} className="text-[#5772ff]" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={sectionRefs.services} className={`py-20 px-4 ${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5772ff]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Code size={40} />, title: "Web Development", description: "We create stunning, responsive websites that captivate your audience and drive results." },
            { icon: <Smartphone size={40} />, title: "Mobile App Development", description: "We build intuitive, high-performance mobile apps that users love." },
            { icon: <Laptop size={40} />, title: "Software Solutions", description: "We develop custom software that streamlines your business processes and boosts productivity." },
          ].map((service, index) => (
            <motion.div
              key={index}
              className={`${isDarkMode ? 'bg-[#0e1116]' : 'bg-white'} p-6 rounded-lg shadow-lg relative overflow-hidden group transition-all duration-300 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5772ff] to-[#3b4fd7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                <div className="mb-4 text-[#5772ff] group-hover:text-white">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#5772ff] group-hover:text-white">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className={`py-20 px-4 ${isDarkMode ? 'bg-[#0e1116]' : 'bg-white'}`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-[#5772ff]">About Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className={`${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'} p-6 rounded-lg shadow-lg relative overflow-hidden group transition-all duration-300 hover:shadow-2xl`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#5772ff] to-[#3b4fd7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  <Rocket size={40} className="mb-4 text-[#5772ff] group-hover:text-white" />
                  <h3 className="text-xl font-semibold mb-4 text-[#5772ff] group-hover:text-white">Our Mission</h3>
                  <p className="mb-4">To empower businesses with innovative digital solutions that drive growth and success in the ever-evolving technological landscape.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Zap size={16} className="mr-2 text-[#5772ff] group-hover:text-white" />Deliver cutting-edge technology</li>
                    <li className="flex items-center"><Zap size={16} className="mr-2 text-[#5772ff] group-hover:text-white" />Foster digital transformation</li>
                    <li className="flex items-center"><Zap size={16} className="mr-2 text-[#5772ff] group-hover:text-white" />Exceed client expectations</li>
                  </ul>
                </div>
              </div>
              <div className={`${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'} p-6 rounded-lg shadow-lg relative overflow-hidden group transition-all duration-300 hover:shadow-2xl`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#5772ff] to-[#3b4fd7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  <Target size={40} className="mb-4 text-[#5772ff] group-hover:text-white" />
                  <h3 className="text-xl font-semibold mb-4 text-[#5772ff] group-hover:text-white">Our Vision</h3>
                  <p className="mb-4">To be the go-to agency for businesses seeking transformative digital experiences that set new industry standards.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Zap size={16} className="mr-2 text-[#5772ff] group-hover:text-white" />Lead in technological innovation</li>
                    <li className="flex items-center"><Zap size={16} className="mr-2 text-[#5772ff] group-hover:text-white" />Create impactful digital solutions</li>
                    <li className="flex items-center"><Zap size={16} className="mr-2 text-[#5772ff] group-hover:text-white" />Build long-lasting client relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={sectionRefs.portfolio} className={`py-20 px-4 ${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5772ff]">Our Portfolio</h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['All', 'Web Development', 'Mobile App', 'AI & Machine Learning', 'VR & AR', 'IoT', 'Data Science'].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-[#5772ff] text-[#5772ff] hover:bg-[#5772ff] hover:text-white transition-colors duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${isDarkMode ? 'bg-[#0e1116]' : 'bg-white'} rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-75 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <span className="text-white text-sm font-semibold bg-[#5772ff] px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#5772ff]">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <Link href={`/portfolio/${project.id}`}>
                    <Button variant="outline" className="border-[#5772ff] text-[#5772ff] hover:bg-[#5772ff] hover:text-white transition-colors duration-300">
                      View Project
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={sectionRefs.blog} className={`py-20 px-4 ${isDarkMode ? 'bg-[#0e1116]' : 'bg-white'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5772ff]">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className={`${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'} rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#5772ff] bg-opacity-80">
                  {post.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#5772ff]">{post.title}</h3>
                <p className="text-gray-500 mb-4">{post.date}</p>
                <p className="mb-4">{post.excerpt}</p>
                
                <Button variant="outline" className="border-[#5772ff] text-[#5772ff] hover:bg-[#5772ff] hover:text-white transition-colors duration-300">
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={sectionRefs.faq} className={`py-20 px-4 ${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5772ff]">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-4 rounded-lg overflow-hidden ${isDarkMode ? 'bg-[#0e1116]' : 'bg-white'} transition-all duration-300 hover:shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex items-center justify-between w-full p-4 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <div className="mr-4 text-[#5772ff]">{item.icon}</div>
                  <span className="font-semibold">{item.question}</span>
                </div>
                {activeAccordion === index ? (
                  <Minus className="w-6 h-6 text-[#5772ff]" />
                ) : (
                  <Plus className="w-6 h-6 text-[#5772ff]" />
                )}
              </button>
              {activeAccordion === index && (
                <div className="p-4 pt-0">
                  <p>{item.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-[#0e1116]' : 'bg-white'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5772ff]">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`text-center ${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'} p-8 rounded-lg shadow-lg`}
          >
            <p className="text-xl italic mb-4">"{['Their approach brought our project to life!', 'The team\'s creativity knows no bounds. Absolutely fantastic!', 'They turned our vision into a reality. Highly recommended!'][currentTestimonial]}"</p>
            <p className="font-semibold text-[#5772ff]">- Satisfied Client {currentTestimonial + 1}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className={`py-20 px-4 ${isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-100'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5772ff]">Let's Create Something Amazing Together</h2>
        <div className={`max-w-4xl mx-auto ${isDarkMode ? 'bg-[#0e1116]' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 md:p-12 bg-gradient-to-br from-[#5772ff] to-[#3b4fd7]">
              <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
              <p className="mb-4 text-gray-200">Fill out the form and our team will get back to you within 24 hours.</p>
              <div className="flex items-center mb-4">
                <Mail className="mr-2 text-white" />
                <p className="text-gray-200">contact@neon.com</p>
              </div>
              <div className="flex items-center mb-4">
                <Smartphone className="mr-2 text-white" />
                <p className="text-gray-200">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2 text-white" />
                <p className="text-gray-200">123 Tech Street, Digital City</p>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-12">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className={`${isDarkMode ? 'bg-[#1a1d23] text-white placeholder-gray-400 border-gray-700' : 'bg-gray-100 text-[#0e1116] placeholder-gray-500 border-gray-300'}`} />
                <Input type="email" placeholder="Your Email" className={`${isDarkMode ? 'bg-[#1a1d23] text-white placeholder-gray-400 border-gray-700' : 'bg-gray-100 text-[#0e1116] placeholder-gray-500 border-gray-300'}`} />
                <Input type="tel" placeholder="Your Phone" className={`${isDarkMode ? 'bg-[#1a1d23] text-white placeholder-gray-400 border-gray-700' : 'bg-gray-100 text-[#0e1116] placeholder-gray-500 border-gray-300'}`} />
                <Textarea placeholder="Your Message" className={`${isDarkMode ? 'bg-[#1a1d23] text-white placeholder-gray-400 border-gray-700' : 'bg-gray-100 text-[#0e1116] placeholder-gray-500 border-gray-300'}`} rows={4} />
                <Button type="submit" className="w-full bg-[#5772ff] text-white hover:bg-[#3b4fd7] transition-all duration-200 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${isDarkMode ? 'bg-[#0e1116] text-white' : 'bg-gray-100 text-[#0e1116]'}`}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#5772ff]">ModernDev</h3>
            <p>Crafting digital experiences that inspire and innovate.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#5772ff]">Connect With Us</h3>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="hover:text-[#5772ff] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 neon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}