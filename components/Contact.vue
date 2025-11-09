<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const errorMessage = ref('');

const handleSubmit = async () => {
  // Reset messages
  submitSuccess.value = false;
  errorMessage.value = '';

  // Validate required fields
  if (!formData.value.name.trim() || !formData.value.subject.trim() || !formData.value.message.trim()) {
    errorMessage.value = 'Please fill in all required fields (name, subject, and message).';
    return;
  }

  // Validate email format if provided
  if (formData.value.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.value.email)) {
      errorMessage.value = 'Please enter a valid email address.';
      return;
    }
  }

  isSubmitting.value = true;

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: formData.value.name.trim(),
        email: formData.value.email.trim(),
        subject: formData.value.subject.trim(),
        message: formData.value.message.trim()
      }
    });

    if (response.success) {
      submitSuccess.value = true;

      // Reset form
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Hide success message after 5 seconds
      setTimeout(() => {
        submitSuccess.value = false;
      }, 5000);
    } else {
      errorMessage.value = response.message || 'Failed to send message. Please try again.';
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    errorMessage.value = 'An error occurred while sending your message. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
};

const contactInfo = [
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email',
    value: 'ziaulhasanf@gmail.com',
    link: 'mailto:ziaulhasanf@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    title: 'Phone',
    value: '+880 1756-392618',
    link: 'tel:+8801756392618',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Location',
    value: 'Merul Badda, Dhaka, Bangladesh',
    link: '#',
    color: 'from-purple-500 to-pink-500'
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    url: 'https://github.com/ZiaulhasanR',
    color: 'hover:bg-gray-700'
  },
  {
    name: 'LinkedIn',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    url: 'https://www.linkedin.com/in/ziaul-hassan-6a5236207/',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Twitter',
    icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
    url: '#',
    color: 'hover:bg-blue-400'
  },
  {
    name: 'Instagram',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    url: 'https://www.instagram.com/ziaulhasan.11/',
    color: 'hover:bg-pink-600'
  }
];
</script>

<template>
  <div id="lets-work-together" class="contact-page">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
    </div>

    <div class="container">
      <!-- Header Section -->
      <div class="header-section">
        <div data-aos="fade-down" class="text-center mb-6">
          <span class="section-badge">Get In Touch</span>
        </div>
        <h1 data-aos="fade-up" class="section-title">
          Let's Work <span class="gradient-text">Together</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" class="section-description">
          Have a project in mind? I'd love to hear about it. Feel free to reach out and let's create something amazing together.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="content-grid">
        <!-- Contact Information Cards -->
        <div class="contact-info-section">
          <h2 data-aos="fade-right" class="info-title">Contact Information</h2>

          <div class="contact-cards">
            <div
                v-for="(info, index) in contactInfo"
                :key="index"
                data-aos="fade-right"
                :data-aos-delay="100 * (index + 1)"
                class="contact-card"
            >
              <div class="contact-icon" :class="`bg-gradient-to-br ${info.color}`">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon" />
                </svg>
              </div>
              <div class="contact-details">
                <h3 class="contact-title">{{ info.title }}</h3>
                <a :href="info.link" class="contact-value">{{ info.value }}</a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div data-aos="fade-right" data-aos-delay="400" class="social-section">
            <h3 class="social-title">Follow Me</h3>
            <div class="social-links">
              <a
                  v-for="(social, index) in socialLinks"
                  :key="index"
                  :href="social.url"
                  :aria-label="social.name"
                  class="social-link"
                  :class="social.color"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Additional Info Card -->
          <div data-aos="fade-right" data-aos-delay="500" class="availability-card">
            <div class="availability-header">
              <div class="status-dot"></div>
              <span class="status-text">Available for freelance</span>
            </div>
            <p class="availability-description">
              I'm currently available for freelance work and exciting new projects. Let's build something great!
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="form-section">
          <div data-aos="fade-left" class="form-container">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <!-- Name Input -->
              <div class="form-group">
                <label for="name" class="form-label">
                  <svg class="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Full Name <span class="required">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    placeholder="John Doe"
                    required
                    class="form-input"
                />
              </div>

              <!-- Email Input (Optional) -->
              <div class="form-group">
                <label for="email" class="form-label">
                  <svg class="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Address <span class="optional">(Optional)</span>
                </label>
                <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    placeholder="john@example.com"
                    class="form-input"
                />
              </div>

              <!-- Subject Input -->
              <div class="form-group">
                <label for="subject" class="form-label">
                  <svg class="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Subject <span class="required">*</span>
                </label>
                <input
                    type="text"
                    id="subject"
                    v-model="formData.subject"
                    placeholder="Project Inquiry"
                    required
                    class="form-input"
                />
              </div>

              <!-- Message Textarea -->
              <div class="form-group">
                <label for="message" class="form-label">
                  <svg class="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Message <span class="required">*</span>
                </label>
                <textarea
                    id="message"
                    v-model="formData.message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                    class="form-textarea"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                <span class="button-gradient"></span>
                <span class="button-shine"></span>
                <span v-if="!isSubmitting" class="button-content">
                  <span>Send Message</span>
                  <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
                <span v-else class="button-content loading-spinner">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>

            <!-- Error Message -->
            <transition name="fade">
              <div v-if="errorMessage" class="error-message">
                <svg class="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 class="error-title">Error</h4>
                  <p class="error-description">{{ errorMessage }}</p>
                </div>
              </div>
            </transition>

            <!-- Success Message -->
            <transition name="fade">
              <div v-if="submitSuccess" class="success-message">
                <svg class="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 class="success-title">Message Sent Successfully!</h4>
                  <p class="success-description">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
}

/* Animated Particles */
.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s infinite ease-in-out;
  pointer-events: none;
}

.particle-1 {
  width: 400px;
  height: 400px;
  top: -10%;
  right: -10%;
  animation-delay: 0s;
}

.particle-2 {
  width: 300px;
  height: 300px;
  bottom: -5%;
  left: -5%;
  animation-delay: 5s;
}

.particle-3 {
  width: 250px;
  height: 250px;
  top: 40%;
  left: 10%;
  animation-delay: 10s;
}

.particle-4 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  right: 20%;
  animation-delay: 7s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
}

/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 80px;
}

.section-badge {
  display: inline-block;
  padding: 8px 24px;
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 50px;
  color: #c4b5fd;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin: 20px 0;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  align-items: start;
}

/* Contact Info Section */
.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
}

.contact-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
}

.contact-title {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #a78bfa;
}

/* Social Section */
.social-section {
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

.social-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}

/* Availability Card */
.availability-card {
  padding: 24px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 16px;
}

.availability-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.status-dot {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  50% { opacity: 0.8; box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
}

.status-text {
  font-size: 1rem;
  font-weight: 600;
  color: #10b981;
}

.availability-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Form Section */
.form-section {
  position: sticky;
  top: 100px;
}

.form-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.label-icon {
  width: 18px;
  height: 18px;
  color: #a78bfa;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.12);
  border-color: #8b5cf6;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
}

/* Submit Button */
.submit-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-size: 200% 200%;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow:
    0 4px 15px rgba(102, 126, 234, 0.4),
    0 10px 40px rgba(118, 75, 162, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.submit-button:hover::before {
  left: 100%;
}

.submit-button:active {
  transform: translateY(1px) scale(0.98);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  animation: none;
}

.button-gradient {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #667eea);
  background-size: 300% 300%;
  border-radius: 16px;
  z-index: -1;
  opacity: 0;
  filter: blur(8px);
  transition: opacity 0.4s ease;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.submit-button:hover:not(:disabled) .button-gradient {
  opacity: 1;
  animation: gradientShift 2s ease infinite, pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.button-shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  border-radius: 16px 16px 0 0;
  z-index: 1;
  pointer-events: none;
}

.button-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 3;
  transition: transform 0.3s ease;
}

.button-icon {
  width: 22px;
  height: 22px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.02);
  background-position: 100% 0;
  box-shadow:
    0 6px 25px rgba(102, 126, 234, 0.6),
    0 15px 50px rgba(118, 75, 162, 0.5),
    0 0 60px rgba(240, 147, 251, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  animation: buttonFloat 3s ease infinite;
}

@keyframes buttonFloat {
  0%, 100% { transform: translateY(-3px) scale(1.02) rotateX(0deg); }
  50% { transform: translateY(-5px) scale(1.03) rotateX(2deg); }
}

.submit-button:hover:not(:disabled) .button-icon {
  transform: translateX(5px) rotate(15deg) scale(1.1);
}

.submit-button:hover:not(:disabled) .button-content {
  transform: translateZ(10px);
}

.loading-spinner {
  display: flex;
  align-items: center;
  gap: 12px;
}

.loading-spinner svg {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}

/* Ripple effect on click */
.submit-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  opacity: 0;
}

.submit-button:active::after {
  width: 300px;
  height: 300px;
  opacity: 0;
  transition: 0s;
}

/* Glow animation */
@keyframes glow {
  0%, 100% {
    box-shadow:
      0 4px 15px rgba(102, 126, 234, 0.4),
      0 10px 40px rgba(118, 75, 162, 0.3);
  }
  50% {
    box-shadow:
      0 6px 25px rgba(102, 126, 234, 0.7),
      0 15px 60px rgba(118, 75, 162, 0.6),
      0 0 80px rgba(240, 147, 251, 0.4);
  }
}

.submit-button:not(:disabled) {
  animation: glow 3s ease-in-out infinite;
}

.loading-spinner {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
