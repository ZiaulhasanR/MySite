<template>
  <div class="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
       style="background-image: url('/bg-portfolio.jpg');">

    <!-- Animated background overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70"></div>

    <!-- Animated particles/dots -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
      <div class="particle particle-5"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 py-20">

      <!-- Profile Section -->
      <div class="flex flex-col items-center mb-16">
        <!-- Profile Image with decorative elements -->
        <div data-aos="fade-down" class="profile-wrapper mb-8">
          <div class="profile-ring"></div>
          <div class="profile-ring-2"></div>
          <img src="/mypic1.png" alt="Ziaul Hassan" class="profile-image"/>
          <div class="status-badge">
            <span class="status-dot"></span>
            Available for work
          </div>
        </div>

        <!-- Name and Title -->
        <div data-aos="fade-up" data-aos-delay="200" class="text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="gradient-text">About Me</span>
          </h1>
          <p class="text-xl md:text-2xl text-purple-300 font-light tracking-wide">
            Full Stack Developer & Creative Designer
          </p>
        </div>
      </div>

      <!-- Bio Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <div data-aos="fade-up" data-aos-delay="300" class="glass-card p-8 md:p-12">
          <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span class="icon-wrapper">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            My Story
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-4">
            Hi there! I'm Ziaul Hassan, a passionate Full Stack Developer with a keen eye for design and a love for creating seamless digital experiences. With several years of experience in web development, I specialize in building modern, scalable applications that make a difference.
          </p>
          <p class="text-gray-300 text-lg leading-relaxed">
            I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="max-w-6xl mx-auto mb-16">
        <h2 data-aos="fade-up" class="text-4xl font-bold text-center mb-12">
          <span class="gradient-text">Skills & Expertise</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Frontend -->
          <div data-aos="fade-up" data-aos-delay="100" class="skill-card">
            <div class="skill-icon frontend-icon">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="tech-badge">React</span>
              <span class="tech-badge">Vue.js</span>
              <span class="tech-badge">Next.js</span>
              <span class="tech-badge">TypeScript</span>
              <span class="tech-badge">Tailwind</span>
            </div>
          </div>

          <!-- Backend -->
          <div data-aos="fade-up" data-aos-delay="200" class="skill-card">
            <div class="skill-icon backend-icon">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="tech-badge">Node.js</span>
              <span class="tech-badge">Express</span>
              <span class="tech-badge">Python</span>
              <span class="tech-badge">PostgreSQL</span>
              <span class="tech-badge">MongoDB</span>
            </div>
          </div>

          <!-- Tools -->
          <div data-aos="fade-up" data-aos-delay="300" class="skill-card">
            <div class="skill-icon tools-icon">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Tools & More</h3>
            <div class="flex flex-wrap gap-2">
              <span class="tech-badge">Git</span>
              <span class="tech-badge">Docker</span>
              <span class="tech-badge">AWS</span>
              <span class="tech-badge">Figma</span>
              <span class="tech-badge">CI/CD</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="max-w-5xl mx-auto mb-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div data-aos="zoom-in" data-aos-delay="100" class="stat-card">
            <div class="stat-number">5+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" class="stat-card">
            <div class="stat-number">30+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" class="stat-card">
            <div class="stat-number">15+</div>
            <div class="stat-label">Awards Won</div>
          </div>
        </div>
      </div>

      <!-- Services/What I Do -->
      <div class="max-w-6xl mx-auto">
        <h2 data-aos="fade-up" class="text-4xl font-bold text-center mb-12">
          <span class="gradient-text">What I Do</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-aos="fade-right" data-aos-delay="100" class="service-card">
            <div class="service-icon">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Web Development</h3>
            <p class="text-gray-300 leading-relaxed">
              Building responsive, high-performance web applications using modern frameworks and best practices.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" class="service-card">
            <div class="service-icon">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Mobile Apps</h3>
            <p class="text-gray-300 leading-relaxed">
              Creating cross-platform mobile applications with seamless user experiences and native performance.
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="300" class="service-card">
            <div class="service-icon">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">UI/UX Design</h3>
            <p class="text-gray-300 leading-relaxed">
              Designing intuitive and beautiful interfaces that provide exceptional user experiences.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="400" class="service-card">
            <div class="service-icon">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Performance Optimization</h3>
            <p class="text-gray-300 leading-relaxed">
              Optimizing applications for speed, efficiency, and scalability to deliver the best performance.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div data-aos="fade-up" data-aos-delay="200" class="text-center mt-20">
        <h3 class="text-3xl font-bold text-white mb-6">Let's Work Together</h3>
        <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Have a project in mind? Let's collaborate and bring your ideas to life.
        </p>
        <a href="#contact" class="cta-button">
          <span>Get In Touch</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Animated Particles */
.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s infinite ease-in-out;
}

.particle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 15%;
  animation-delay: 5s;
}

.particle-3 {
  width: 250px;
  height: 250px;
  bottom: 10%;
  left: 20%;
  animation-delay: 10s;
}

.particle-4 {
  width: 150px;
  height: 150px;
  top: 40%;
  right: 30%;
  animation-delay: 7s;
}

.particle-5 {
  width: 180px;
  height: 180px;
  bottom: 30%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

/* Profile Section */
.profile-wrapper {
  position: relative;
  display: inline-block;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid rgba(139, 92, 246, 0.5);
  box-shadow: 0 0 50px rgba(139, 92, 246, 0.4);
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-ring {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  animation: pulse-ring 3s ease-in-out infinite;
}

.profile-ring-2 {
  position: absolute;
  top: -25px;
  left: -25px;
  right: -25px;
  bottom: -25px;
  border: 2px solid rgba(139, 92, 246, 0.2);
  border-radius: 50%;
  animation: pulse-ring 3s ease-in-out infinite 1.5s;
}

@keyframes pulse-ring {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
}

.status-badge {
  position: absolute;
  bottom: 10px;
  right: -10px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
  z-index: 3;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
}

.icon-wrapper {
  display: inline-flex;
  padding: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
}

/* Skill Cards */
.skill-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.skill-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
}

.frontend-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.backend-icon {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.tools-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.tech-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  font-size: 0.9rem;
  color: #c4b5fd;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(139, 92, 246, 0.4);
  transform: scale(1.05);
}

/* Stats Cards */
.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.5);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  color: #d1d5db;
  font-size: 1rem;
  font-weight: 500;
}

/* Service Cards */
.service-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

.service-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 768px) {
  .profile-image {
    width: 150px;
    height: 150px;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>