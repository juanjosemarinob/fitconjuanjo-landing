import { Sparkles, ArrowRight, ShieldCheck, Mail, ClipboardList } from 'lucide-react';
import { LanguageProps } from '../types';

export default function ApplicationWizard({ lang }: LanguageProps) {
  const formUrl = "https://forms.gle/tsTqytC5trs7GoPy7";

  return (
    <div id="wizard" className="bg-[#121212] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="p-8 lg:p-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 border border-brand/20 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span className="font-mono text-[10px] tracking-widest text-brand font-bold uppercase">
                {lang === 'es' ? 'PROCESO DE ADMISIÓN DIRECTA' : 'DIRECT ADMISSION INTAKE'}
              </span>
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
              {lang === 'es' ? 'APLICA AL PROGRAMA INDIVIDUAL' : 'APPLY FOR THE 1-ON-1 COACHING'}
            </h2>
            
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
              {lang === 'es' 
                ? 'Las consultorías son de alto compromiso, contacto estrecho e individuales. Evaluamos tu compatibilidad para asegurar que el proceso funcione para ti.' 
                : 'Coaching is high-commitment, hyper-personalized, and limited. We evaluate candidate alignment to make sure the process actually works for you.'}
            </p>
          </div>

          {/* Three Steps Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-4">
            
            {/* Step 1 */}
            <div className="p-5 bg-neutral-900/60 border border-neutral-850 rounded-lg flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center font-mono text-xs font-bold text-brand mb-4">
                  01
                </div>
                <h3 className="font-display font-bold text-white text-base uppercase mb-1">
                  {lang === 'es' ? 'FORMULARIO INICIAL' : 'SUBMIT FORM'}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {lang === 'es' 
                    ? 'Completa tus datos biológicos básicos y objetivos reales en nuestro formulario en línea (toma 3 minutos).' 
                    : 'Provide your basic biological details and fitness goals through our streamlined online interview (takes 3 mins).'}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 bg-neutral-900/60 border border-neutral-850 rounded-lg flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center font-mono text-xs font-bold text-brand mb-4">
                  02
                </div>
                <h3 className="font-display font-bold text-white text-base uppercase mb-1">
                  {lang === 'es' ? 'DIAGNÓSTICO PERSONAL' : 'PERSONAL SCREENING'}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {lang === 'es' 
                    ? 'Juanjo analizará personalmente tus parámetros de entrenamiento y gasto calórico para comprobar viabilidad de resultados.' 
                    : 'Juanjo personally reviews your lifestyle variables and current performance level to evaluate objective safety and viability.'}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 bg-neutral-900/60 border border-neutral-850 rounded-lg flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center font-mono text-xs font-bold text-brand mb-4">
                  03
                </div>
                <h3 className="font-display font-bold text-white text-base uppercase mb-1">
                  {lang === 'es' ? 'ONBOARDING EN LÍNEA' : 'ONLINE ONBOARDING'}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {lang === 'es' 
                    ? 'Si hay compatibilidad, agendaremos una videollamada para configurar tu hoja de macros al gramo y calendario.' 
                    : 'If there is direct compatibility, we set a video onboarding call to detail your exact macro sheet and weekly targets.'}
                </p>
              </div>
            </div>

          </div>

          {/* Interactive CTA container */}
          <div className="pt-6">
            <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-850 max-w-xl mx-auto space-y-6">
              <div className="flex items-center justify-between text-left font-mono text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> 
                  {lang === 'es' ? 'SOPORTE EN LÍNEA ACTIVO' : 'ONLINE INTAKE ACTIVE'}
                </span>
                <span>{lang === 'es' ? 'TIEMPO REQUERIDO: ~3 MIN' : 'TIME REQUIRED: ~3 MIN'}</span>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-brand hover:bg-neutral-100 text-white hover:text-neutral-950 font-display font-extrabold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <ClipboardList className="w-4 h-4" />
                  {lang === 'es' ? 'Completar Formulario de Admisión' : 'Complete Admission Form'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-[10px] text-neutral-500 font-mono">
                  {lang === 'es'
                    ? 'Serás redirigido al formulario seguro de Google Forms de Juanjo'
                    : 'You will be redirected securely to Juanjo\'s official Google Forms page'}
                </p>
              </div>

              <div className="h-[1px] bg-neutral-900" />

              <div className="text-left space-y-1">
                <span className="text-[10px] text-brand font-mono font-bold uppercase tracking-wider block">
                  {lang === 'es' ? '¿Quieres agilizar tu evaluación?' : 'Want to fast-track your inquiry?'}
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {lang === 'es'
                    ? 'Una vez enviado, tómale una captura al envío del formulario y envíamelo directo por mensaje directo en Instagram a '
                    : 'After submitting, capture a quick screenshot of the completion screen and send it via direct message on Instagram to '}
                  <a href="https://instagram.com/fitconjuanjo" target="_blank" rel="noreferrer" className="text-white hover:text-brand font-bold underline">
                    @fitconjuanjo
                  </a>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
