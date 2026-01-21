/**
 * Main initialization module
 * Imports and initializes all site functionality
 */

import { initTypewriter } from './typewriter.js';
import { initPortraitReveal } from './portrait.js';
import { initParticles } from './particles.js';
import { initScrollAnimation } from './scroll-animation.js';

// Initialize typewriter effect
const heroTitle = document.getElementById('hero-title');
const titleText = "Hello, I'm Patrick!";
initTypewriter(heroTitle, titleText, 100, 500);

// Initialize portrait reveal
initPortraitReveal('portrait-container', 'reveal-canvas', 'assets/SeniorPortrait.png');

// Initialize particles
const labels = ['Photography', 'Rocketry', 'Robotics', 'Projects'];
initParticles('particle-canvas', 'hero', 'hero-title', 'portrait-container', labels);

// Initialize scroll animation
initScrollAnimation();
