<template>
  <div>
    <!-- Navbar -->
    <header class="fixed top-0 left-0 w-full z-50">
      <nav class="nav-container">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Logo -->
            <div class="logo-wrapper">
              <div class="logo-icon">
                <span class="logo-letter">Z</span>
              </div>
              <span class="logo-text">Ziaul Hassan</span>
            </div>

            <!-- Desktop Menu -->
            <ul class="hidden md:flex items-center space-x-1">
              <li v-for="(item, index) in menuItems" :key="index">
                <a
                    :href="item.href"
                    class="nav-link"
                    :class="{ 'active': item.active }"
                >
                  <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                  </svg>
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>

            <!-- CTA Button (Desktop) -->
            <div class="hidden md:block">
              <a href="#contact" class="cta-button">
                <span>Hire Me</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button
                @click="toggleMenu"
                class="md:hidden mobile-menu-btn"
                aria-label="Toggle menu"
            >
              <div class="hamburger" :class="{ 'active': isOpen }">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <transition name="fade">
        <div
            v-if="isOpen"
            class="mobile-overlay"
            @click="toggleMenu"
        ></div>
      </transition>

      <!-- Mobile Menu Sidebar -->
      <transition name="slide">
        <div v-if="isOpen" class="mobile-menu">
          <div class="mobile-menu-header">
            <div class="logo-icon small">
              <span class="logo-letter">Z</span>
            </div>
            <h3 class="text-xl font-bold text-white">Ziaul Hassan</h3>
          </div>

          <nav class="mobile-nav">
            <a
                v-for="(item, index) in menuItems"
                :key="index"
                :href="item.href"
                class="mobile-nav-link"
                @click="toggleMenu"
            >
              <svg class="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
              </svg>
              <span>{{ item.name }}</span>
              <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </nav>

          <div class="mobile-menu-footer">
            <a href="#lets-work-together" class="mobile-cta-button" @click="toggleMenu">
              <span>Get In Touch</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div class="social-links-mobile">
              <a href="#" class="social-link-mobile" aria-label="GitHub">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="social-link-mobile" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" class="social-link-mobile" aria-label="Twitter">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <!-- Page Content -->
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const menuItems = ref([
  {
    name: 'Home',
    href: '#',
    active: true,
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    name: 'About',
    href: '#about',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    name: 'What I Do',
    href: '#what-i-do',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    name: 'Skills',
    href: '#skills',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    name: 'Contact',
    href: '#lets-work-together',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
]);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  // Prevent body scroll when menu is open
  if (isOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
/* Navigation Container */
.nav-container {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

/* Logo */
.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-wrapper:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(45deg);
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0%, 100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.logo-icon.small {
  width: 40px;
  height: 40px;
}

.logo-letter {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  position: relative;
  z-index: 1;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.5px;
}

/* Desktop Navigation Links */
.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.nav-link:hover::before {
  width: 80%;
}

.nav-link.active {
  color: white;
  background: rgba(102, 126, 234, 0.2);
}

.nav-link.active::before {
  width: 80%;
}

.nav-icon {
  width: 20px;
  height: 20px;
}

/* CTA Button */
.cta-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.cta-button:hover::before {
  left: 100%;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* Hamburger Animation */
.hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 40;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(30, 27, 75, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px;
  overflow-y: auto;
  z-index: 50;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Mobile Navigation */
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(180deg, #667eea, #764ba2);
  transition: height 0.3s ease;
}

.mobile-nav-link:hover {
  background: rgba(102, 126, 234, 0.2);
  color: white;
  transform: translateX(5px);
}

.mobile-nav-link:hover::before {
  height: 100%;
}

.mobile-nav-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover .arrow-icon {
  opacity: 1;
  transform: translateX(0);
}

/* Mobile Menu Footer */
.mobile-menu-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
}

.mobile-cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 12px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.mobile-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

/* Social Links Mobile */
.social-links-mobile {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.social-link-mobile {
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

.social-link-mobile svg {
  width: 20px;
  height: 20px;
}

.social-link-mobile:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Main Content */
.main-content {
  min-height: 100vh;
  padding-top: 80px;
}

/* Responsive */
@media (max-width: 768px) {
  .logo-text {
    font-size: 1.1rem;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
  }

  .logo-letter {
    font-size: 1.25rem;
  }
}
</style>