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
  X
} from 'lucide-react';

// Modular Components
import Biocalculator from './components/Biocalculator';
import RoadmapTimeline from './components/RoadmapTimeline';
import ApplicationWizard from './components/ApplicationWizard';
import FaqSection from './components/FaqSection';

import { ClientCase } from './types';

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
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 text-[10px] xl:text-xs text-neutral-400 font-mono uppercase tracking-wider flex-shrink">
            <a href="#problema" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'El Problema' : 'The Pain'}
            </a>
            <a href="#historia" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'Mi Historia' : 'My Background'}
            </a>
            <a href="#calculator" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'Calculadora' : 'Calculator'}
            </a>
            <a href="#simulador" className="hover:text-white transition-colors font-bold text-brand whitespace-nowrap">
              {lang === 'es' ? 'Regla 90%' : '90% Rule'}
            </a>
            <a href="#metodo" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'Los 4 Pilares' : 'The 4 Pillars'}
            </a>
            <a href="#roadmap" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'Tu Planificación' : 'Physio Timeline'}
            </a>
            <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'es' ? 'Preguntas' : 'FAQs'}
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
                {lang === 'es' ? 'PROGRAMA DE 12 SEMANAS PARA PROFESIONALES EXIGENTES' : '12-WEEK METHODOLOGY FOR HIGH-DEMAND INDIVIDUALS'}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-[54px] sm:text-[72px] lg:text-[88px] leading-[0.92] uppercase italic text-white tracking-tighter">
              {lang === 'es' ? (
                <>
                  DEJA DE <br />
                  ENTRENAR A <br />
                  <span className="text-transparent border-t border-b border-neutral-800" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}>
                    CIEGAS.
                  </span>
                </>
              ) : (
                <>
                  STOP <br />
                  TRAINING IN <br />
                  <span className="text-transparent border-t border-b border-neutral-800" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}>
                    THE DARK.
                  </span>
                </>
              )}
            </h1>

            <p className="text-md sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              {lang === 'es' ? (
                <>
                  Construye el físico y la energía que tu nivel de disciplina laboral merece. Un sistema híbrido de <strong className="text-white font-semibold">ingeniería corporal pura</strong> — fuerza calculada, rendimiento biomecánico y macros cuadradas al gramo.
                </>
              ) : (
                <>
                  Build the elite physique and unshakeable health that your work ethic deserves. A hybrid system of <strong className="text-white font-semibold">pure physical engineering</strong> — structured loading curves, biomechanics, and macro parameters met to the gram.
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
                href="#calculator" 
                className="px-8 py-4 bg-neutral-900 hover:bg-neutral-850 hover:border-neutral-700 text-neutral-300 font-display font-bold text-base tracking-widest uppercase rounded-sm border border-neutral-800 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {lang === 'es' ? 'Calcular Mis Macros Iniciales' : 'Calculate Initial Macros'}
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
                {lang === 'es' ? 'ESTÁNDAR DE COMPROMISO' : 'EXPECTED COMPLIANCE RULE'}
              </div>
              <div className="font-display font-black text-3xl text-neutral-100 uppercase tracking-tight">
                "NO DATA, NO CALL"
              </div>
              <p className="text-xs text-neutral-400 mt-1 leading-normal font-sans">
                {lang === 'es' 
                  ? 'Si dejas de ingresar tus mediciones de peso y progresos en la App, reprogramamos la asesoría semanal. Rigor mutuo.'
                  : 'If you fail to record raw morning weight averages and gym lifts, our weekly video-check is locked.'}
              </p>
            </div>

          </div>

        </div>

      </header>

      {/* SECTION: THE PAIN (EL ESTANCAMIENTO DEL PROFESIONAL) */}
      <section id="problema" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0c] border-b border-neutral-900 relative">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-6 bg-brand" />
            <span className="text-xs font-mono tracking-widest text-[#e63232] uppercase font-bold">
              {lang === 'es' ? 'EL DIAGNÓSTICO RETROSPECTIVO' : 'THE HISTORICAL ERROR'}
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
            {lang === 'es' ? (
              <>
                ¿LLEVAS AÑOS <br />
                ENTRENANDO "A TU MANERA"<br />
                <span className="text-neutral-500 font-normal">Y SIGUES EN EL MISMO SITIO?</span>
              </>
            ) : (
              <>
                SPENDING YEARS <br />
                TRAINING "ON VIBES"<br />
                <span className="text-neutral-500 font-normal">AND LOOKING THE SAME?</span>
              </>
            )}
          </h2>

          <div className="border-l-2 border-brand pl-6 my-8 space-y-4">
            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed italic font-sans text-left">
              {lang === 'es' 
                ? '"Vas al gimnasio con regularidad, intentas comer sano, compras suplementos recomendados, sacrificas comidas familiares... y, sin embargo, sigues luciendo exactamente igual ante el espejo. Tu problema no es la falta de voluntad. Es tu falta de un sistema exacto de datos."'
                : '"You hit the weight room regularly, try to eat clean, buy dynamic supplements, and sacrifice family dinners... yet you look exactly the same. Your primary issue is not lack of drive or discipline. It is a absolute failure to manage metrics."'}
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl font-sans text-left">
            {lang === 'es' ? (
              <>
                Un profesional de alto nivel mide sus ingresos, tasas de conversión y balance contable mensual con absoluta precisión. Pero cuando se trata de su cuerpo físico, entrena por instinto y come por estimaciones visuales. Tu fisiología responde a balances termodinámicos, biomecánicos y biológicos exactos. No requieres más sufrimiento inútil — necesitas aplicar lógica de ingeniería.
              </>
            ) : (
              <>
                Leading executive professionals track business revenues, acquisition margins, and balance sheets quarterly. Yet with their health, they lift on subjective feelings and eat on random guesses. Free-will is not the answer; the human metabolism works entirely on energy formulas and mechanical overload. Stop hoping; start measuring.
              </>
            )}
          </p>

          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand/10 border border-brand/20 text-brand text-xs font-mono uppercase rounded-sm">
            <ShieldCheck className="w-4 h-4 text-brand" /> 
            {lang === 'es' 
              ? 'No trabajamos con suposiciones. Dirigimos tu adaptación metabólica mediante tus propios números.' 
              : 'Zero guesswork. We drive physical adaptations strictly through baseline figures.'}
          </div>

        </div>
      </section>

      {/* BIOCALCULATOR (BIOLOGICAL BUDGET WRAPPER) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center md:text-left mb-12 space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="h-[1px] w-6 bg-brand" />
              <span className="text-xs font-mono tracking-widest text-brand uppercase font-bold">
                {lang === 'es' ? 'PILARES BIOLÓGICOS' : 'BIOLOGICAL BASELINES'}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
              {lang === 'es' ? 'MEDIDOR BIOMÉTRICO DE INICIO' : 'INITIAL PARAMETERS ESTIMATOR'}
            </h2>
            <p className="text-xs text-neutral-400 max-w-lg leading-relaxed font-sans">
              {lang === 'es' 
                ? 'Calcula tus macronutrientes de base según tu peso real de entrenamiento. Utiliza el medidor de adherencia para comprobar los riesgos de la inconsitencia.'
                : 'Formulate your estimated starting caloric budget. Slide our adherence tracker to observe how deviations block progress.'}
            </p>
          </div>

          <Biocalculator lang={lang} />

        </div>
      </section>

      {/* ACCOUNTABILITY SECTION (THE "NO DATA, NO CALL" GUARANTEE ACCESIBILTY) */}
      <section id="simulador" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] border-t border-b border-neutral-900/85 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-brand" />
                <span className="text-xs font-mono tracking-widest text-brand uppercase font-bold">
                  {lang === 'es' ? 'REGLAS RIGUROSAS, RESULTADOS DE INGENIERÍA' : 'STRICT LAWS, CALCULATED GAINS'}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
                {lang === 'es' ? 'EL COMPROMISO DE SEGUIMIENTO' : 'OUR SYSTEM OF HIGH METRIC ACCOUNTABILITY'}
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed font-sans text-left">
                {lang === 'es' ? (
                  <>
                    Este programa no ofrece PDFs genéricos automatizados. Estructuramos una asesoría premium, de altísimo contacto personal y exigencia que funciona únicamente si tú cumples las bases de medición diarias. No queremos tu dinero para que termines en la misma condición de partida. Queremos tu éxito físico absoluto.
                  </>
                ) : (
                  <>
                    This coaching framework avoids generic automated PDFs or hands-off bots. We structure an elite, high-touch personal program that works solely if you supply clean daily metrics. We are completely committed to your body transformation, which is why we hold your records to the highest standard.
                  </>
                )}
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#141414] border border-neutral-800 p-5 rounded-lg flex items-center gap-4">
              <Lock className="w-10 h-10 text-brand flex-shrink-0" />
              <div>
                <span className="block font-display text-white font-bold text-lg uppercase tracking-wide">
                  {lang === 'es' ? 'PROMESA DE ADHERENCIA' : 'COMPLIANCE ASSURANCE'}
                </span>
                <p className="text-xs text-neutral-400 mt-1 leading-normal font-sans text-left">
                  {lang === 'es' 
                    ? 'Si aplicas una adherencia de más del 95% promedio en tu hoja de datos personal durante el primer mes y no experimentas un cambio visual objetivo, te devolvemos tu inversión. Garantía absoluta.'
                    : 'If you complete a 95% average compliance on your tracking fields during the first month and do not see visual physical progress, we complete a full refund.'}
                </p>
              </div>
            </div>
          </div>

          <AccountabilitySimulator lang={lang} />

        </div>
      </section>

      {/* SECTION: MI HISTORIA Y CREDENCIALES (JUANJO BIO) */}
      <section id="historia" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual presentation block */}
            <div className="lg:col-span-5 relative">
              <div className="border border-neutral-800 p-2 rounded-xl bg-neutral-900/30 overflow-hidden text-center justify-center flex">
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800" 
                  alt="Juanjo - Atleta e Ingeniero Biométrico" 
                  className="w-full aspect-[4/5] object-cover rounded-lg filter grayscale opacity-90 contrast-110 hover:grayscale-0 transition-all duration-300"
                />
              </div>
              {/* Floating micro credentials card */}
              <div className="absolute -bottom-6 -right-4 bg-brand border border-red-500/35 p-4 rounded shadow-xl max-w-xs text-left">
                <span className="text-[9px] font-mono tracking-widest text-[#ffc8c8] uppercase block font-bold">COACH EN LÍNEA (HOBBY / PASIÓN)</span>
                <span className="font-display font-extrabold text-[#fff] uppercase text-base">Juan José Mariño (juanjo)</span>
                <div className="h-[1px] bg-red-400/30 my-1.5" />
                <span className="text-[10px] text-white/90 leading-tight block font-sans">
                  {lang === 'es' 
                    ? 'Atleta Amateur, Maratonista, entreno y ayudo a otros como mi pasión para verlos progresar.'
                    : 'Amateur Athlete, Marathon Runner, coaching as a hobby because I love helping people progress.'}
                </span>
              </div>
            </div>

            {/* BIO narrative text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-brand" />
                <span className="text-xs font-mono tracking-widest text-brand uppercase font-bold">
                  {lang === 'es' ? 'PROPÓSITO Y LOGREBLES' : 'COACH IDENTITY & INTEGRITY'}
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

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-light text-left font-sans">
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
                  <span className="block text-[10px] text-brand font-mono uppercase tracking-widest font-bold font-sans">
                    {lang === 'es' ? 'RENDIMIENTO HÍBRIDO' : 'HYBRID CAPACITY'}
                  </span>
                  <p className="text-xs text-neutral-400 mt-1 leading-normal font-sans">
                    {lang === 'es'
                      ? 'Con una marca de Media Maratón de 1h45m y maratonista completo, enseño a profesionales ocupados a quemar grasa y resistir sin fatiga corporal crónica.'
                      : 'Equipped with a 1h45m Half-Marathon record, I guide active runners to preserve power capacity and gain athletic muscle simultaneously.'}
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

      {/* THE 4 PILLARS (LOS 4 PILARES DEL MÉTODO) */}
      <section id="metodo" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0c] border-t border-b border-neutral-900/80 relative">
        <div className="max-w-7xl mx-auto font-sans">
          
          <div className="text-center md:text-left mb-16 space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="h-[1px] w-6 bg-brand" />
              <span className="text-xs font-mono tracking-widest text-[#e63232] uppercase font-bold">
                {lang === 'es' ? 'NUESTRO ARMAZÓN OPERATIVO' : 'OPERATIONAL PRINCIPLES'}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none text-center md:text-left">
              {lang === 'es' ? 'LOS 4 PILARES DE LA INGENIERÍA CORPORAL' : 'THE 4 PILLARS OF BODY RECONSTRUCTION'}
            </h2>
            <p className="text-xs text-neutral-400 max-w-lg leading-relaxed text-center md:text-left">
              {lang === 'es' 
                ? 'No vendemos un recetario en PDF automatizado. Te capacitamos de forma personal con un sistema diario de control.' 
                : 'We avoid generic static PDF plans or automatic advice. We build real metrics discipline.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            
            {/* Pillar 1 */}
            <div className="p-6 bg-[#141414] border border-neutral-800 rounded-lg space-y-4 hover:border-neutral-700 hover:bg-[#1a1a1a]/50 transition-all group duration-300">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <span className="text-xs font-mono text-brand font-bold">01 // {lang === 'es' ? 'SOBRECARGA DIARIA REGISTRADA' : 'MEASURED DAILY PROGRESSION'}</span>
                <Dumbbell className="w-5 h-5 text-neutral-400 group-hover:text-brand transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                {lang === 'es' ? 'Entrenamiento Basado en Cargas' : 'Precision Gym Loading'}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                {lang === 'es' 
                  ? 'Tu rutina de series y repeticiones se calcula para tu gimnasio y tiempo de forma matemática. El registro diario de tus cargas (usando nuestra app de seguimiento recomendada) es obligatorio. Si entrenas de cabeza o de memoria, es imposible saber si progresas.'
                  : 'Your training volumes are calculated to match your actual equipment variables. Daily logging of your sets and reps inside our recommended tracking tools is mandatory. Gaining muscle relies on tracking load variables, not winging it.'}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-[#141414] border border-neutral-800 rounded-lg space-y-4 hover:border-neutral-700 hover:bg-[#1a1a1a]/50 transition-all group duration-300">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <span className="text-xs font-mono text-brand font-bold">02 // {lang === 'es' ? 'INGENIERÍA DIETÉTICA Y COMODIDAD' : 'DIETARY FLEXIBLE PARAMETERS'}</span>
                <Utensils className="w-5 h-5 text-neutral-400 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                {lang === 'es' ? 'Nutrición por Macros Flexibles' : 'Macro allocations over generic plans'}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                {lang === 'es' 
                  ? 'No hay listas estúpidas de "pollo rancio y brócoli". Te adiestramos en pesar comida, cuadrar tus platos favoritos respetando tu presupuesto y mantener la sostenibilidad social sin restricciones irracionales.'
                  : 'Forget crash diets or boiled poultry. We instruct you on how raw foods are weighed, portioned, and logged to match your weekly targets. Maintain corporate dining and travel with zero progress compromise.'}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-[#141414] border border-neutral-800 rounded-lg space-y-4 hover:border-neutral-700 hover:bg-[#1a1a1a]/50 transition-all group duration-300">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <span className="text-xs font-mono text-brand font-bold">03 // {lang === 'es' ? 'BIOMÉTRICOS Y PROMEDIOS EN EXCEL' : 'Excel morning weight averages'}</span>
                <Workflow className="w-5 h-5 text-neutral-400 group-hover:text-teal-400 transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                {lang === 'es' ? 'Check-In Sheets Rigurosos' : 'Rigorous Progress Sheet'}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                {lang === 'es' 
                  ? 'Registramos tu peso en ayunas en nuestra hoja de Excel dedicada. Esta plantilla calcula promedios semanales mitigando los efectos de la retención de líquidos para tomar decisiones con bases matemáticas.'
                  : 'We record raw morning weight parameters on our analytical spreadsheet. By calculating seven-day rolling averages, we screen out sodium retention spikes to make biomechanical adjustments objectively.'}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 bg-[#141414] border border-neutral-800 rounded-lg space-y-4 hover:border-neutral-700 hover:bg-[#1a1a1a]/50 transition-all group duration-300">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <span className="text-xs font-mono text-brand font-bold">04 // {lang === 'es' ? 'COMUNICACIÓN WHATSAPP Y VIDEOLLAMADA' : 'WHATSAPP SUPPORT + 15MIN CALLS'}</span>
                <MessageSquare className="w-5 h-5 text-neutral-400 group-hover:text-brand transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                {lang === 'es' ? 'Soporte Directo Semanal' : 'Direct 1-on-1 Communication'}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                {lang === 'es' 
                  ? 'Tienes contacto de soporte directo conmigo vía WhatsApp para resolver dudas y pulir técnica con videos en el gimnasio. Cada semana, cerramos filas con una llamada de enfoque de 15 minutos de videollamada.'
                  : 'Enjoy direct access to Juanjo on WhatsApp to clarify nutritional queries and analyze lift postures. Every single week, we hold a fast-paced 15-minute video call to lock down adjustments and goals.'}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ROADMAP / 12-WEEK TIMELINE VISUAL */}
      <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center md:text-left mb-12 space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="h-[1px] w-6 bg-brand" />
              <span className="text-xs font-mono tracking-widest text-[#e63232] uppercase font-bold">
                {lang === 'es' ? 'EL CRONOGRAMA INTERACTIVO' : 'THE BIOMETRIC TIMELINE'}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none text-center md:text-left">
              {lang === 'es' ? 'FASES DE EVALUACIÓN Y ACCIÓN' : 'YOUR 12-WEEK TRANSFORMATION ANATOMY'}
            </h2>
            <p className="text-xs text-neutral-400 max-w-lg leading-relaxed mx-auto md:mx-0 text-center md:text-left font-sans">
              {lang === 'es' 
                ? 'Conoce exactamente lo que ocurre con tu metabolismo mes a mes. Haz clic en las pestañas para auditar cada fase.' 
                : 'Understand how your metabolic curves are programmed over three specific cycles. Toggle tabs to review directions.'}
            </p>
          </div>

          <RoadmapTimeline lang={lang} />

        </div>
      </section>

      {/* TESTIMONIALS / CLIENT CASES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0c] border-t border-b border-neutral-900/80 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="text-left space-y-3 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-brand" />
                <span className="text-xs font-mono tracking-widest text-brand uppercase font-bold">
                  {lang === 'es' ? 'CASOS DE ÉXITO' : 'PROOF HISTORIES'}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
                {lang === 'es' ? 'RESULTADOS DE NUESTROS ASESORADOS' : 'REAL OUTCOMES FROM HIGH-PERFORMANCE CLIENTS'}
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                {lang === 'es' 
                  ? 'Métricas tangibles reales logradas por personas de alta exigencia aplicando nuestra estructuración de datos.' 
                  : 'Tangible physical gains documented by busy corporate leaders who implemented our data systems.'}
              </p>
            </div>
          </div>

          {/* Bento grid representation of case studies */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
            {clientCases.map((client) => (
              <div 
                key={client.id}
                className="bg-[#141414] border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700/80 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Visual Image / Top panel with Unsplash */}
                <div className="relative">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full aspect-[4/3] object-cover filter grayscale contrast-110"
                  />
                  {/* Dynamic absolute badges */}
                  <div className="absolute top-4 left-4 bg-brand text-white font-mono font-bold text-[9px] tracking-widest uppercase px-2.5 py-1 rounded">
                    {client.pillarFocus}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-neutral-950/90 text-white font-display font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-sm border border-neutral-850/80">
                    {client.duration}
                  </div>
                </div>

                {/* Narrative content of metrics and quotes */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-display font-black text-xl text-white uppercase leading-tight">{client.name}</h4>
                        <span className="text-[10px] text-neutral-500 font-mono block mt-0.5">{client.role}, {client.age} {lang === 'es' ? 'años' : 'years old'}</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#0e0e0e]/90 border-l border-brand p-3 rounded text-neutral-300 text-xs italic font-sans leading-relaxed">
                      "{client.quote}"
                    </div>
                  </div>

                  {/* Quantitative results banner */}
                  <div className="pt-4 border-t border-neutral-900 grid grid-cols-2 gap-2 text-center font-mono">
                    <div className="p-2 bg-[#0d0d0d] border border-neutral-850 rounded">
                      <span className="block text-[9px] text-neutral-500 tracking-wider uppercase">
                        {lang === 'es' ? 'GRASA REDUCIDA' : 'VISUAL FAT LOSS'}
                      </span>
                      <span className="text-sm font-display text-brand font-bold uppercase">{client.metricDelta}</span>
                    </div>
                    <div className="p-2 bg-[#0d0d0d] border border-neutral-850 rounded">
                      <span className="block text-[9px] text-neutral-500 tracking-wider uppercase">
                        {lang === 'es' ? 'RENDIMIENTO FÍSICO' : 'gym overload'}
                      </span>
                      <span className="text-sm font-display text-white font-bold uppercase">{client.secondaryMetric}</span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
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
                ? 'Ingeniería física y estructural para profesionales con responsabilidades. Construido íntegramente sobre análisis metabólicos y datos termodinámicos.'
                : 'Physique structural engineering for high-demand individuals. Derived entirely from raw thermodynamic tracking and physical metrics.'}
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
