// ===== Configuración =====
// Cambia este número por el WhatsApp real (código de país 504 + número, sin espacios ni signos)
const WHATSAPP = '50400000000';
const MENSAJE_BASE = 'Hola Copan Water, quisiera hacer un pedido.';

const linkWhatsApp = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

document.querySelectorAll('.js-whatsapp').forEach((a) => {
  a.href = linkWhatsApp(MENSAJE_BASE);
  a.target = '_blank';
  a.rel = 'noopener';
});

// ===== Menú móvil =====
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const abierto = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', abierto);
});

// Cerrar el menú al pulsar un enlace
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Sombra del encabezado al hacer scroll =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== Resaltar el enlace de la sección visible =====
const secciones = document.querySelectorAll('main section[id]');
const enlaces = nav.querySelectorAll('a');

const observadorNav = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      enlaces.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entrada.target.id);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

secciones.forEach((s) => observadorNav.observe(s));

// ===== Animación de aparición =====
const elementosReveal = document.querySelectorAll('.section h2, .card, .two-cols > *');
elementosReveal.forEach((el) => el.classList.add('reveal'));

const observadorReveal = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observadorReveal.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

elementosReveal.forEach((el) => observadorReveal.observe(el));

// ===== Formulario de contacto (validación simple) =====
const form = document.getElementById('contact-form');
const estado = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valido = true;

  form.querySelectorAll('input, textarea').forEach((campo) => {
    const ok = campo.value.trim() !== '' && campo.checkValidity();
    campo.classList.toggle('error', !ok);
    if (!ok) valido = false;
  });

  if (!valido) {
    estado.textContent = 'Por favor escribe tu nombre y tu mensaje.';
    estado.className = 'form__status fail';
    return;
  }

  // Arma el mensaje y abre WhatsApp con el texto listo para enviar
  const texto =
    `Hola Copan Water, soy ${form.nombre.value.trim()}.\n` +
    `Producto: ${form.producto.value}\n` +
    `${form.mensaje.value.trim()}`;

  window.open(linkWhatsApp(texto), '_blank', 'noopener');
  estado.textContent = 'Abriendo WhatsApp con tu mensaje…';
  estado.className = 'form__status ok';
  form.reset();
});

// ===== Año actual en el pie =====
document.getElementById('year').textContent = new Date().getFullYear();
