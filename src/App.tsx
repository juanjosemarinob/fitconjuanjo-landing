import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Scale, 
  Target, 
  Award,
  ChevronRight, 
  TrendingUp, 
  Clock, 
  Flame, 
  Lock,
  Workflow, 
  Utensils, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle,
  HelpCircle,
  TrendingDown,
  Sparkles,
  PhoneCall,
  Camera,
  FileText,
  X,
  Compass,
  Video
} from 'lucide-react';

// Modular Components
import ApplicationWizard from './components/ApplicationWizard';
import FaqSection from './components/FaqSection';

import { ClientCase } from './types';
// @ts-ignore
import juanjoPhoto from './assets/images/mi_nueva_foto.jpg';

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [currentDateString, setCurrentDateString] = useState('');
  
  // Scarcity counter simulation based on current date
  useEffect(() => {
    const monthsEs = [
      'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 
      'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
    ];
    const monthsEn = [
      'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
      'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];
    
    const now = new Date();
    const monthName = lang === 'es' ? monthsEs[now.getMonth()] : monthsEn[now.getMonth()];
    setCurrentDateString(monthName + ' ' + now.getFullYear());
  }, [lang]);

  const clientCases: ClientCase[] = [
    {
      id: 'case-1',
      name: 'Carlos Mendoza',
      role: lang === 'es' ? 'Director Regional de Ventas' : 'Regional Director of Sales',
      age: 34,
      duration: lang === 'es' ? '12 Semanas' : '12 Weeks',
      metricDelta: lang === 'es' ? '-18 lbs de grasa' : '-18 lbs of fat',
      secondaryMetric: lang === 'es' ? '+15% Fuerza en Sentadilla' : '+15% Squat Strength',
      quote: lang === 'es' 
        ? 'El check-in de datos semanal me obligó a ser honesto conmigo mismo. No hay magia, hay consistencia que se mide. Juanjo me dio la estructura que mi apretada agenda laboral necesitaba.'
        : 'The custom metrics sheet forced me to be honest and objective. No magic, just measured consistency. Juanjo provided the precise parameters my busy corporate schedule needed.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600',
      pillarFocus: lang === 'es' ? 'Ingeniería Nutricional' : 'Nutritional Logic'
    },
    {
      id: 'case-2',
      name: 'Andrés Rosales',
      role: lang === 'es' ? 'Arquitecto Líder de Sistemas' : 'Lead Systems Architect',
      age: 29,
      duration: lang === 'es' ? '10 Semanas (En progreso)' : '10 Weeks (Ongoing)',
      metricDelta: lang === 'es' ? '+8 lbs Masa Muscular' : '+8 lbs Muscle Mass',
      secondaryMetric: lang === 'es' ? '-4% Porcentaje de Grasa' : '-4% Body Fat Ratio',
      quote: lang === 'es' 
        ? 'Llevaba dos años en el gimnasio sintiéndome estancado. Bastaron seis semanas con el plan de macros precisos y la sobrecarga progresiva registrada en mi hoja de control para reescribir mi físico por completo.'
        : 'I felt stuck in my gym routine for two years. Six weeks using custom macros and a structured loading progression diary completely rewrote my body composition.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
      pillarFocus: lang === 'es' ? 'Sobrecarga Progresiva' : 'Progressive Overload'
    },
    {
      id: 'case-3',
      name: 'Sebastián Loor',
      role: lang === 'es' ? 'Socio de Firma Legal' : 'Senior Law Partner',
      age: 38,
      duration: lang === 'es' ? '12 Semanas Completas' : '12 Full Weeks',
      metricDelta: lang === 'es' ? '-22 lbs peso neto' : '-22 lbs net weight',
      secondaryMetric: lang === 'es' ? 'Récord de Media Maratón (1h48m)' : 'Half-Marathon PR (1h48m)',
      quote: lang === 'es' 
        ? 'Pensé que perder peso reduciría mi rendimiento al correr. Al revés: Juanjo equilibró mis macros para optimizar el glucógeno. Soy más ligero, definido y resistente que nunca.'
        : 'I feared calorie restriction would sap my running stamina. On the contrary, Juanjo fine-tuned my carb budget to keep glycogen optimal. I am lighter, faster, and stronger than ever.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
      pillarFocus: lang === 'es' ? 'Entrenamiento Híbrido' : 'Hybrid Training'
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-neutral-200 font-sans antialiased selection:bg-brand selection:text-white">
      
      {/* Decorative Top Accent Rule */}
      <div className="h-1.5 w-full bg-gradient-to-r from-neutral-800 via-brand to-neutral-800" />

      {/* DYNAMIC SCARCITY HEADER TICKER */}
      <div className="bg-neutral-900 border-b border-neutral-850/80 text-center py-2 px-4 flex items-center justify-center gap-2 relative z-50">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
        </span>
        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
          {lang === 'es' ? (
            <>PERÍODO DE ADMISIÓN {currentDateString || 'ACTUAL'}: Quedan <strong className="text-white font-bold">4 cupos mensuales</strong> disponibles.</>
          ) : (
            <>ADMISSION INTAKE FOR {currentDateString || 'CURRENT'}: ONLY <strong className="text-white font-bold">4 monthly slots</strong> remain.</>
          )}
        </span>
      </div>

      {/* FIXED NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-900/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo Brand with athletic Swiss style */}
          <a href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity flex-shrink-0">
            <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white uppercase italic">
              fitcon<span className="text-brand">juanjo</span>
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-8 text-[11px] xl:text-xs text-neutral-400 font-mono uppercase tracking-wider flex-shrink bg-neutral-900/40 px-6 py-2 rounded-full border border-neutral-800/40">
            <a href="#avatares" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? '¿Para quién es?' : 'Who is this for?'}
            </a>
            <a href="#sistema" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'El Sistema' : 'The System'}
            </a>
            <a href="#historia" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'Mi Historia' : 'My Story'}
            </a>
            <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'Preguntas Frecuentes' : 'FAQs'}
            </a>
          </div>

          {/* Action Call and Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            
            {/* Language Switcher Pill */}
            <div className="flex bg-neutral-900 border border-neutral-800 p-0.5 rounded font-mono text-[10px]">
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2 py-1 rounded transition-all ${lang === 'es' ? 'bg-brand text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded transition-all ${lang === 'en' ? 'bg-brand text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <a 
              href="https://forms.gle/tsTqytC5trs7GoPy7" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-extrabold text-[10px] sm:text-xs uppercase tracking-widest text-[#0a0a0a] bg-white hover:bg-brand hover:text-white px-3 sm:px-5 py-2.5 rounded-sm transition-all duration-200 shadow-md inline-flex items-center gap-1 whitespace-nowrap flex-shrink-0"
            >
              {lang === 'es' ? 'Aplica Ahora' : 'Apply Now'} <ChevronRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative min-h-[calc(100vh-120px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 grid-bg border-b border-neutral-900">
        
        {/* Subtle engineering guide lines in background */}
        <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text information */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2.5 bg-neutral-900/50 border border-neutral-800 rounded-full px-3.5 py-1 text-xs text-neutral-400">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="font-mono tracking-widest uppercase text-[10px]">
                {lang === 'es' ? 'COACHING 1-ON-1 PERSONALIZADO Y DE ALTO COMPROMISO' : 'HIGH-COMMITMENT CUSTOM 1-ON-1 COACHING'}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-[54px] sm:text-[72px] lg:text-[88px] leading-[0.92] uppercase italic text-white tracking-tighter">
              {lang === 'es' ? (
                <>
                  DEJA DE <br />
                  ADIVINAR. <br />
                  <span className="text-transparent border-t border-b border-neutral-800" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}>
                    INVIERTE.
                  </span>
                </>
              ) : (
                <>
                  STOP <br />
                  GUESSING. <br />
                  <span className="text-transparent border-t border-b border-neutral-800" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}>
                    INVEST.
                  </span>
                </>
              )}
            </h1>

            <p className="text-md sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              {lang === 'es' ? (
                <>
                  Construye un físico fuerte y saludable a través de un <strong className="text-white font-semibold">sistema diseñado a tu medida</strong>. Sin planes extremos ni sacrificios absurdos; solo disciplina inteligente, hábitos sólidos y un método sostenible que disfrutas de principio a fin.
                </>
              ) : (
                <>
                  Build a strong, healthy body through a <strong className="text-white font-semibold">fully custom lifestyle system</strong>. No crash dieting or unrealistic metrics—just smart discipline, solid habits, and a sustainable roadmap you truly enjoy.
                </>
              )}
            </p>

            {/* Micro proof bars */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://forms.gle/tsTqytC5trs7GoPy7" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand hover:bg-neutral-100 hover:text-neutral-950 text-white font-display font-extrabold text-base tracking-widest uppercase rounded-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                {lang === 'es' ? 'Postular al Programa' : 'Apply for Intake'} <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#historia" 
                className="px-8 py-4 bg-neutral-900 hover:bg-neutral-850 hover:border-neutral-700 text-neutral-300 font-display font-bold text-base tracking-widest uppercase rounded-sm border border-neutral-800 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {lang === 'es' ? 'Ver Mi Cambio Físico y Trayectoria' : 'View My Transformation & Journey'}
              </a>
            </div>

            {/* Elite badge */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono pt-3">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <span>
                {lang === 'es' 
                  ? 'SOPORTE 1-ON-1 DIRECTO SIN INTERMEDIARIOS. METODOLOGÍA REGULADA POR METRICAS.' 
                  : 'DIRECT 1-ON-1 SINCERE COACHING. TRACKING CONTROLLED BY STRICT DATA.'}
              </span>
            </div>

          </div>

          {/* Right margin panel: Scarcity metric block */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-neutral-900 lg:pl-10">
            
            <div className="bg-[#111111]/80 border border-neutral-850 p-5 rounded-lg">
              <div className="text-xs text-neutral-500 font-mono tracking-widest uppercase mb-1">
                {lang === 'es' ? 'CAMBIO PERSONAL DE CONTROL' : 'PERSONAL RECOMP PARAMETER'}
              </div>
              <div className="font-display font-black text-4xl text-neutral-100 uppercase tracking-tight">
                190 <span className="text-neutral-500 text-2xl">a</span> 165 <span className="text-brand text-xl">LBS</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 leading-normal font-sans">
                {lang === 'es' 
                  ? 'El cambio físico que logré en mi fase de volumen a definición, midiendo mis macros al gramo y sumando sobrecarga.'
                  : 'The visual result I locked down in my bulk to definition phase by tracking macros to the gram.'}
              </p>
            </div>

            <div className="bg-[#111111]/80 border border-brand/25 p-5 rounded-lg relative overflow-hidden">
              {/* background red pill glow */}
              <div className="absolute top-0 right-0 w-2 h-full bg-brand" />
              <div className="text-xs text-brand font-mono tracking-widest uppercase mb-1 font-bold">
                {lang === 'es' ? 'CONSTRUYE DISCIPLINA REAL' : 'BUILD REAL DISCIPLINE'}
              </div>
              <div className="font-display font-black text-2xl text-neutral-100 uppercase tracking-tight">
                {lang === 'es' ? 'HÁBITOS > INTENSIDAD' : 'HABITS > INTENSITY'}
              </div>
              <p className="text-xs text-neutral-400 mt-1.5 leading-normal font-sans">
                {lang === 'es' 
                  ? 'El éxito no viene de matarte una semana. Viene de crear hábitos diarios, comer saludable y disfrutar el camino de forma sostenible.'
                  : 'Success is not about extreme short-term efforts. It is about locking down daily habits, eating healthy, and enjoying a sustainable path.'}
              </p>
            </div>

          </div>

        </div>

      </header>

      {/* SECTION: ¿PARA QUIÉN ES ESTO? (WHO IS THIS FOR?) */}
      <section id="avatares" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0c] border-b border-neutral-900 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="h-[1px] w-6 bg-brand" />
              <span className="text-xs font-mono tracking-widest text-brand uppercase font-bold">
                {lang === 'es' ? 'AUDITORÍA DE COMPROMISO' : 'AUDIENCE & INVESTMENT'}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none text-center md:text-left">
              {lang === 'es' ? (
                <>
                  ¿PARA QUIÉN ES <br />
                  <span className="text-neutral-500 font-normal">ESTA INVERSIÓN FÍSICA?</span>
                </>
              ) : (
                <>
                  WHO IS THIS <br />
                  <span className="text-neutral-500 font-normal">PHYSICAL INVESTMENT FOR?</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-sans text-center md:text-left leading-relaxed">
              {lang === 'es' 
                ? 'No diseñamos planes para todo el mundo. Este espacio es para personas altamente comprometidas, dispuestas a invertir recursos, tiempo y enfoque en reprogramar su cuerpo bajo un sistema realista, sustentable y sin adivinanzas.'
                : 'We do not build templates for the masses. This program is a mutual commitment designed for individuals ready to allocate capital, time, and focus to reconstruct their health parameters through a realistic, worry-free system.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* AVATAR 1: EL AFICIONADO CONSTANTE */}
            <div className="bg-[#111111]/40 border border-neutral-900/90 rounded-2xl p-8 flex flex-col justify-between hover:border-brand/20 hover:bg-[#111111]/80 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-6 text-left">
                <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs text-brand uppercase tracking-widest font-extrabold block">
                    {lang === 'es' ? 'AVATAR 01 · GIMNASIO CONSTANTE' : 'AVATAR 01 · CONSISTENT TRAINER'}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                    {lang === 'es' ? 'Entrenas duro, pero te falta la fórmula exacta' : 'You lift heavy, but lack the precise formula'}
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans font-light leading-relaxed">
                    {lang === 'es'
                      ? 'Vas al gimnasio varias veces por semana, comes sano a ojo, compras suplementos recomendados... pero al mirarte al espejo ves poco o ningún avance real. Te falta cuadrar la nutrición con rigor matemático y programar tus cargas de forma inteligente para forzar la adaptación de tus fibras.'
                      : 'You hit the weights weekly, eyeball your active diet, and take the usual supplements—yet you feel visually unchanged. What you lack is not will; it is exact macronutrient calibration and a programmatic loading sequence to force real fiber growth.'}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-900 flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                  {lang === 'es' ? 'SOLUCIÓN: HOJA DE RUTA CIENTÍFICA' : 'CURE: SCIENTIFIC TIMELINE'}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand" />
              </div>
            </div>

            {/* AVATAR 2: EL PRINCIPIANTE DECIDIDO */}
            <div className="bg-[#111111]/40 border border-neutral-900/90 rounded-2xl p-8 flex flex-col justify-between hover:border-red-500/20 hover:bg-[#111111]/80 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-6 text-left">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs text-brand uppercase tracking-widest font-extrabold block">
                    {lang === 'es' ? 'AVATAR 02 · PRINCIPIANTE DECIDIDO' : 'AVATAR 02 · READY BEGINNER'}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                    {lang === 'es' ? 'Quieres arrancar, de forma realista y para siempre' : 'First-time starter, aiming for real longevity'}
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans font-light leading-relaxed">
                    {lang === 'es'
                      ? 'Reconoces que necesitas priorizar tu salud física, mental y estética, pero huyes de los gurús extremos que te exigen comer arroz y pollo hervido. Quieres crear hábitos consistentes, entender tu propio metabolismo y lograr disciplina desde cero mediante un sistema disfrutable y guiado de cerca.'
                      : 'You understand that your health demands priority, but you deny standard fit-influencer plans demanding raw restrictions and zero taste. You want to construct deep long-term discipline from absolute scratch with a supportive, highly realistic method.'}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-900 flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                  {lang === 'es' ? 'SOLUCIÓN: PROTOCOLO DE HÁBITOS' : 'CURE: COMPOSURE SYSTEMS'}
                </span>
                <span className="w-2 h-2 rounded-full bg-red-500" />
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#111111]/30 border border-neutral-900 rounded-xl p-6 max-w-4xl mx-auto">
            <ShieldCheck className="w-5 h-5 text-brand shrink-0" />
            <p className="text-xs text-neutral-400 font-sans tracking-wide leading-relaxed text-center sm:text-left">
              {lang === 'es' 
                ? 'Ambos perfiles tienen algo en común: comprenden que su cuerpo es su activo físico más importante y están decididos a invertir en una asesoría de alto nivel para dejar de perder tiempo.'
                : 'Both vectors resolve to the same point: they acknowledge the physical body is their most valuable container, choosing to invest in elite mentorship instead of losing years to guesswork.'}
            </p>
          </div>

        </div>
      </section>

      {/* SECTION: EL SISTEMA / QUÉ INCLUYE (WHAT'S INCLUDED) */}
      <section id="sistema" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-b border-neutral-900/80 relative">
        <div className="absolute inset-0 subtle-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-6 bg-brand" />
              <span className="text-xs font-mono tracking-widest text-[#e63232] uppercase font-bold">
                {lang === 'es' ? 'HOJA DE RUTA Y ENTREGABLES' : 'CORE DELIVERABLES'}
              </span>
              <span className="h-[1px] w-6 bg-brand" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
              {lang === 'es' ? (
                <>
                  EL SISTEMA DE ENFOQUE <br />
                  <span className="text-neutral-500 font-normal">SANO, SEGURO Y SOSTENIBLE</span>
                </>
              ) : (
                <>
                  THE 3 CORE PIECES <br />
                  <span className="text-neutral-500 font-normal">FOR SUSTAINED MIND & BODY GROWTH</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto font-sans leading-relaxed">
              {lang === 'es'
                ? 'Olvídate de la adivinanza y de las dietas restrictivas que arruinan tu vida social. Nuestro método de acompañamiento premium se compone de tres pilares diseñados para tu vida:'
                : 'Say goodbye to extreme calorie limits and over-training splits. We deliver functional, habit-centric systems built to integrate cleanly into your real social and personal calendar:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARACTERÍSTICA 1: ENTRENAMIENTO PERSONALIZADO */}
            <div className="bg-[#0c0c0c] border border-neutral-850 p-8 rounded-2xl flex flex-col justify-between hover:border-brand/35 hover:bg-neutral-900/50 transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand">
                  <Dumbbell className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold block">
                    {lang === 'es' ? 'ENTREGABLE 01 · ENTRENAMIENTO' : 'DELIVERABLE 01 · EXERCISE'}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                    {lang === 'es' ? 'Rutinas de Fuerza Inteligentes' : 'Custom Exercise Programming'}
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {lang === 'es'
                      ? 'Rutinas adaptadas por completo a tu nivel y metas específicas, optimizando cada sesión para activar las fibras adecuadas. Aprenderás a dominar la sobrecarga progresiva y el estímulo mecánico de forma autónoma desde cualquier gimnasio.'
                      : 'Highly personalized workout splits tailored to your specific biomechanics and muscle needs. Learn how to leverage exact mechanical load to build dense power and lean mass independently.'}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>{lang === 'es' ? 'OPTIMIZADO 1-ON-1' : '100% PERSONALIZED'}</span>
                <span className="text-brand">01</span>
              </div>
            </div>

            {/* CARACTERÍSTICA 2: ALIMENTACIÓN SOSTENIBLE */}
            <div className="bg-[#0c0c0c] border border-neutral-850 p-8 rounded-2xl flex flex-col justify-between hover:border-brand/35 hover:bg-neutral-900/50 transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand">
                  <Utensils className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold block">
                    {lang === 'es' ? 'ENTREGABLE 02 · NUTRICIÓN' : 'DELIVERABLE 02 · DIET'}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                    {lang === 'es' ? 'Nutrición Rica y Sostenible' : 'Sustainable Lifestyle Nutrition'}
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {lang === 'es'
                      ? 'Planes de alimentación deliciosos que se adecúan a tu estilo de vida y entrenamientos diarios. Aprenderás a equilibrar tus proteínas y calorías sin torturas extremas, haciendo que el proceso sea disfrutable a largo plazo.'
                      : 'Delightful, simple macro-friendly setups designed around your real dining preferences and calendar. We eliminate nonsense food bans, showing you how to balance energy without stress.'}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>{lang === 'es' ? 'SIN RESTRICCIONES ABSURDAS' : 'NO CRAZY BANS'}</span>
                <span className="text-brand">02</span>
              </div>
            </div>

            {/* CARACTERÍSTICA 3: LLAMADAS 15 MIN */}
            <div className="bg-[#0c0c0c] border border-neutral-850 p-8 rounded-2xl flex flex-col justify-between hover:border-brand/35 hover:bg-neutral-900/50 transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand">
                  <Video className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold block">
                    {lang === 'es' ? 'ENTREGABLE 03 · SEGUIMIENTO' : 'DELIVERABLE 03 · ACCOUNTABILITY'}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                    {lang === 'es' ? 'Llamada de Enfoque Semanal' : '15-Min Weekly Progress Calls'}
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {lang === 'es'
                      ? 'Videollamadas semanales de 15 minutos directas con Juanjo para revisar avances, despejar dudas técnicas, ajustar parámetros y garantizar que tu constancia y hábitos se mantengan estables.'
                      : 'Express 1-on-1 video calls with Juanjo to audit weekly progress, answer core biomechanic doubts, adjust calorie profiles, and secure your long-term mental consistency.'}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>{lang === 'es' ? 'SOPORTE DIRECTO' : 'DIRECT ACCOUNTABILITY'}</span>
                <span className="text-brand">03</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: MI HISTORIA Y CREDENCIALES (JUANJO BIO) */}
      <section id="historia" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative border-b border-neutral-900/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual presentation block */}
            <div className="lg:col-span-5 relative">
              <div className="border border-neutral-800 p-2 rounded-xl bg-neutral-900/30 overflow-hidden text-center justify-center flex">
                <img 
                  src={juanjoPhoto} 
                  alt="Juanjo - Atleta e Ingeniero Biométrico" 
                  className="w-full aspect-[3/4] object-cover rounded-lg transition-all duration-300 hover:scale-[1.01] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating records container on left column */}
              <div className="absolute -bottom-6 -right-4 bg-brand border border-red-500/35 p-5 rounded-lg shadow-xl max-w-xs text-left">
                <span className="text-[9px] font-mono tracking-widest text-[#ffc8c8] uppercase block font-bold mb-1">
                  {lang === 'es' ? 'COACH EN LÍNEA (HOBBY / PASIÓN)' : 'ONLINE PRIVATE COACHING'}
                </span>
                <span className="font-display font-black text-white uppercase text-base block mb-2">
                  Juan José Mariño (juanjo)
                </span>
                <div className="h-[1px] bg-red-400/30 my-2" />
                <ul className="space-y-1.5 text-xs text-white/95 leading-tight font-sans">
                  <li className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-red-200 shrink-0" />
                    <span>{lang === 'es' ? 'Atleta Amateur & Maratonista' : 'Amateur Athlete & Marathoner'}</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-red-200 shrink-0" />
                    <span>{lang === 'es' ? 'Récord 21K: 1h45m (Abr 2026)' : '21K PB: 1h45m (April 2026)'}</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Dumbbell className="w-3.5 h-3.5 text-red-200 shrink-0" />
                    <span>{lang === 'es' ? '8+ Años Fuerza / Gimnasio' : '8+ Years Fitness & Lifting'}</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-red-200 shrink-0" />
                    <span>{lang === 'es' ? '4 Años Natación Competitiva' : '4 Years Competitive Swimming'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* BIO narrative text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-brand" />
                <span className="text-xs font-mono tracking-widest text-brand uppercase font-bold">
                  {lang === 'es' ? 'PROPÓSITO Y LOGROS' : 'COACH IDENTITY & INTEGRITY'}
                </span>
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white uppercase tracking-tight leading-none text-left">
                {lang === 'es' ? (
                  <>
                    SOY JUAN JOSÉ MARIÑO. <br />
                    APLICO METODOLOGÍAS DE INGENIERO <br />
                    <span className="text-neutral-500 font-normal">PARA MAXIMIZAR TUS PROCESOS.</span>
                  </>
                ) : (
                  <>
                    I AM JUAN JOSÉ MARIÑO (JUANJO). <br />
                    I APPLY ENGINEERING SYSTEM LOGIC <br />
                    <span className="text-neutral-500 font-normal font-sans">TO STREAMLINE YOUR BODY RECOMP.</span>
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-light text-left">
                {lang === 'es' ? (
                  <>
                    He sido atleta toda mi vida: competí en fútbol, atletismo y voleibol escolar, y nadé competitivamente por 4 años. Llevo más de 8 años de entrenamiento de fuerza en el gimnasio, corriendo distancias y empujando mis límites. En 2024, tras un periodo de volumen (bulk), llegué a pesar 190 libras y logré reducirlas a 165 libras totalmente definido, manteniendo el músculo e imprimiendo disciplina real. Completé mi primer maratón completo en mayo de 2025 y obtuve mi mejor récord en media maratón de 1h45m el 12 de abril de 2026. Al igual que el <strong>Dr. Andrew Huberman</strong> y el <strong>Dr. Andy Galpin</strong>, creo en metodologías de entrenamiento y nutrición respaldadas al 100% por la ciencia biológica, sin trampas ni rodeos.
                  </>
                ) : (
                  <>
                    I have been an athlete my entire life: competing in school soccer, track and field, and volleyball, alongside 4 years of competitive swimming. I have spent over 8 years in the weight room and on the running track. In 2024, after a bulk phase peaking at 190 lbs, I carved down to 165 lbs of visual muscle fiber. I completed my first marathon in May 2025 and locked in a 1h45m Half-Marathon personal record on April 12, 2026. Modeled on pioneering human-performance science from <strong>Dr. Andrew Huberman</strong> and <strong>Dr. Andy Galpin</strong>, I treat body recomposition as a precise biological optimization challenge.
                  </>
                )}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 text-left">
                <div className="p-4 bg-neutral-950 border border-neutral-850 rounded">
                  <span className="block text-[10px] text-brand font-mono uppercase tracking-widest font-bold">
                    {lang === 'es' ? 'METODOLOGÍA DE DATOS' : 'DATA-DRIVEN SYSTEMS'}
                  </span>
                  <p className="text-xs text-neutral-400 mt-1 leading-normal font-sans">
                    {lang === 'es' 
                      ? 'Logré bajar de 190 a 165 lbs conservando íntegra la fuerza corporal. Esto se logra calculando el presupuesto de nutrientes y controlando la sobrecarga con peso estricto.'
                      : 'I transitioned from 190 lbs down to 165 lbs of visual muscle fiber. No crash dieting — strictly maintaining positive nitrogen margins and adjusting weekly loads.'}
                  </p>
                </div>
                <div className="p-4 bg-neutral-950 border border-neutral-850 rounded">
                  <span className="block text-[10px] text-brand font-mono uppercase tracking-widest font-bold">
                    {lang === 'es' ? 'RENDIMIENTO HÍBRIDO' : 'HYBRID CAPACITY'}
                  </span>
                  <p className="text-xs text-neutral-400 mt-1 leading-normal font-sans">
                    {lang === 'es'
                      ? 'Con una marca de Media Maratón de 1h45m y maratonista completo, enseño a personas ocupadas y altamente comprometidas a quemar grasa y resistir sin fatiga corporal crónica.'
                      : 'Equipped with a 1h45m Half-Marathon record, I guide active runners and dedicated, busy individuals to lose fat and build athletic muscle simultaneously without chronic fatigue.'}
                  </p>
                </div>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed font-sans text-left">
                {lang === 'es' ? (
                  <>
                    Opero mis asesorías 1-on-1 <strong className="text-white">100% en línea</strong> atendiendo a personas comprometidas en todo el mundo de forma remota y con contacto cercano. Mi presencia digital a través de Instagram <a href="https://instagram.com/fitconjuanjo" target="_blank" rel="noreferrer" className="text-brand hover:underline">@fitconjuanjo</a> se enfoca en impulsar hábitos de control, fuerza y nutrición equilibrada desde cualquier lugar, con soporte remoto bilingüe directo.
                  </>
                ) : (
                  <>
                    I manage my 1-on-1 coaching consultations <strong className="text-white">100% online</strong>, servicing clients globally with close digital feedback loops and data checking. My digital presence <a href="https://instagram.com/fitconjuanjo" target="_blank" rel="noreferrer" className="text-brand hover:underline">@fitconjuanjo</a> focuses on building sustainable habits, strength progression, and balanced energy tracking directly via messaging channels in both English and Spanish.
                  </>
                )}
              </p>

              <div className="border-t border-neutral-900 pt-5 flex items-center gap-6 text-left">
                <div>
                  <div className="font-display font-bold text-base text-white">{lang === 'es' ? '100% En Línea' : '100% Online'}</div>
                  <div className="text-[10px] text-neutral-500 font-mono uppercase">
                    {lang === 'es' ? 'UBICACIÓN OPERATIVA' : 'OPERATIONAL LOCATION'}
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-neutral-850" />
                <div>
                  <div className="font-display font-bold text-base text-brand">{lang === 'es' ? 'Google Sheets & Tracker' : 'Google Sheets & Daily Tracking'}</div>
                  <div className="text-[10px] text-neutral-500 font-mono uppercase">
                    {lang === 'es' ? 'REGISTRO DE CONTROL' : 'DAILY METRICS TOOL'}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ COLLAPSIBLE SECTION */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-brand" />
              <span className="text-xs font-mono tracking-widest text-[#e63232] uppercase font-bold">
                {lang === 'es' ? 'MITOS AL DESCUBIERTO' : 'NO FITCOACH HYPOTHESES'}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
              {lang === 'es' ? 'PREGUNTAS FRECUENTES (RIGOR REAL)' : 'FREQUENTLY ASKED INQUIRIES'}
            </h2>
            <p className="text-xs text-neutral-400 max-w-md mx-auto leading-normal font-sans">
              {lang === 'es' 
                ? 'Respondemos abiertamente sin rodeos de venta tradicionales ni promesas baratas de internet.' 
                : 'Direct, honest structural responses far removed from low-cost supplement marketing.'}
            </p>
          </div>

          <FaqSection lang={lang} />

        </div>
      </section>

      {/* ADMISSION INTEGRATION (WIZARD SECTION) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0c] border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto">
          <ApplicationWizard lang={lang} />
        </div>
      </section>

      {/* FLOATING STATUS SCARCITY BANNER FOR PROFESSIONAL URGENCY */}
      <div className="fixed bottom-4 left-4 z-30 bg-neutral-950/95 border border-neutral-850 rounded px-3 py-2 flex items-center gap-2.5 shadow-2xl hidden md:flex font-mono text-[10px]">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 mr-1" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </div>
        <span className="text-neutral-400 uppercase">
          {lang === 'es' ? (
            <>SISTEMA EN VIVO: <strong className="text-white text-[10.5px]">100% EN LÍNEA GLOBAL</strong></>
          ) : (
            <>LIVE STATUS: <strong className="text-white text-[10.5px]">100% ONLINE WORLDWIDE</strong></>
          )}
        </span>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#060606] border-t border-neutral-900 py-16 px-4 sm:px-6 lg:px-8 text-xs font-mono text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div className="space-y-2 text-left">
            <a href="#" className="font-display font-black text-xl italic uppercase text-white tracking-wider">
              fitcon<span className="text-brand">juanjo</span>
            </a>
            <p className="text-xs leading-relaxed max-w-sm font-sans">
              {lang === 'es'
                ? 'Coaching premium 1-on-1 enfocado en hábitos sólidos, disciplina y nutrición sostenible para personas decididas a cambiar su físico de forma inteligente.'
                : 'Premium 1-on-1 coaching focusing on strong habits, unshakeable discipline, and sustainable nutrition for individuals ready to transform their physique intelligently.'}
            </p>
          </div>

          <div className="space-y-1 text-center md:text-right">
            <p>© {new Date().getFullYear()} FITCONJUANJO. All rights reserved.</p>
            <p className="text-[11px] text-neutral-600 font-sans">
              {lang === 'es' ? 'La excelencia biológica requiere consistencia. "No Data, No Progress".' : 'Physical changes require metric discipline. "No Data, No Progress".'}
            </p>
            <p className="text-[10px] text-[#444] pt-2">100% Online (Global) | Instagram: @fitconjuanjo</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
