import './bootstrap';
import Alpine from 'alpinejs';
import { toDarkMode, toLightMode, toSystemMode } from './components/theme';
import './components/accessibility';
import './clipboard';

window.Alpine = Alpine;
Alpine.start();

window.toDarkMode = toDarkMode;
window.toLightMode = toLightMode;
window.toSystemMode = toSystemMode;
