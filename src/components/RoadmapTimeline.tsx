import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ChevronRight, Utensils, Award, Dumbbell, BarChart3 } from 'lucide-react';
import { LanguageProps, RoadmapPhase } from '../types';

export default function RoadmapTimeline({ lang }: LanguageProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const phases: Record<'es' | 'en', RoadmapPhase[]> = {
    es: [
      {
        weeks: 'Semanas 1 - 4',
        title: 'Establecimiento de Línea de Base y Biomecánica',
        subtitle: 'Diagnóstico funcional y adaptación inicial',
        focus: 'Identificar tu gasto de energía real en el día a día y dominar el registro diario de tus cargas físicas.',
        nutrition: 'Macros base sin deficit agresivo para adaptar tu digestión. Pesaje estricto de alimentos de lunes a domingo.',
        training: 'Evaluación técnica por videollamadas. Aprenderás a registrar todas tus series, repeticiones y pesos en tu registro personal de entrenamiento facilitado.',
        metrics: 'Registro diario de tu peso al levantarte. Envío de tus fotos biométricas horizontales de partida.'
      },
      {
        weeks: 'Semanas 5 - 8',
        title: 'Fase de Optimización de Composición Corporal',
        subtitle: 'Recomposición o pérdida adiposa real controlada',
        focus: 'Inducir los primeros cambios visuales significativos reduciendo el porcentaje graso o ganando fuerza limpia.',
        nutrition: 'Reajuste a la baja/alza basado en tus números de peso promedio de las semanas previas. Macros personalizados.',
        training: 'Incremento programado de la intensidad en tu registro de cargas, buscando batir tus marcas históricas semana tras semana.',
        metrics: 'Peso promedio semanal y fotos comparativas cada 15 días. Control de circunferencia con cinta una vez al mes.'
      },
      {
        weeks: 'Semanas 9 - 12',
        title: 'Consolidación Física y Autonomía',
        subtitle: 'Sostenibilidad del cambio y madurez en el gimnasio',
        focus: 'Fijar el nuevo peso corporal, consolidar el tono muscular y asegurar que sabes comandar tu fitness de por vida.',
        nutrition: 'Transición a macros reversas para restablecer el ritmo de tu tiroides y metabolismo. Aprender a comer sin pesar de por vida.',
        training: 'Test de fuerza máxima en tus levantamientos de base (sentadilla, presses). Logro de tu mejor relación fuerza-peso.',
        metrics: 'Última toma de fotos de transformación y medidas del mes. Calibración para tu fase posterior offline'
      }
    ],
    en: [
      {
        weeks: 'Weeks 1 - 4',
        title: 'Biomechanical & Metabolic Baseline Setup',
        subtitle: 'Functional diagnostics & initial metric adaptation',
        focus: 'Uncover your actual energy expenditure through daily metrics and master recording your weight lifts.',
        nutrition: 'Establish baseline macros with gentle targets to adjust digestion. Raw food weighing from Monday to Sunday.',
        training: 'Form video review via feedback calls. You will start registering all loaded sets, reps, and loads inside our recommended tracking tools.',
        metrics: 'Dawn weight logging on daily sheets. Submission of baseline biometric checklist photos.'
      },
      {
        weeks: 'Weeks 5 - 8',
        title: 'Fat-Loss & Recomposition Phase',
        subtitle: 'Targeted fat reduction and functional adaptation',
        focus: 'Force major physical changes by lowering adipose tissue while increasing total dense muscle mass tissue.',
        nutrition: 'Caloric re-allocations calculated from your exact weekly weight averages. Customized macro adjustments.',
        training: 'Systematic progression inside your workout logs, targeting personal weight lifting milestones week after week.',
        metrics: 'Weekly average tracking and check-in photos bi-weekly. Girth tape measurements once a month.'
      },
      {
        weeks: 'Weeks 9 - 12',
        title: 'Metabolic Consolidation & Lifetime Autonomy',
        subtitle: 'Sustaining results and training independence',
        focus: 'Anchor physical weight changes, solidify muscle density, and secure autonomous process skills.',
        nutrition: 'Transition to a reverse-macro protocol to restore thyroid speed and optimize thyroid output. Life after weighing scale.',
        training: 'Max physical load reviews in baseline training lifts. Reach your absolute peak strength-to-weight ratio.',
        metrics: 'Final transformation media updates and tape measurement cards. Blueprint design for your independent path.'
      }
    ]
  };

  const currentPhases = phases[lang];

  return (
    <div className="space-y-8">
      {/* Phases tabs selector */}
      <div className="grid grid-cols-3 gap-2 bg-[#121212] p-1.5 rounded-lg border border-neutral-850">
        {currentPhases.map((p, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`py-3.5 px-2 rounded font-display text-xs lg:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                isActive 
                  ? 'bg-brand text-white shadow-lg' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
              }`}
            >
              <span className="block text-[10px] font-mono font-normal opacity-80 mb-0.5">{p.weeks}</span>
              {lang === 'es' ? `FASE 0${idx + 1}` : `PHASE 0${idx + 1}`}
            </button>
          );
        })}
      </div>

      {/* Visual Active Phase Content Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#141414] border border-neutral-800 rounded-xl p-6 lg:p-10 relative overflow-hidden"
        >
          {/* Background glowing watermark */}
          <div className="absolute -top-16 -right-16 text-[180px] font-display font-black text-neutral-900/20 italic select-none pointer-events-none">
            0{activeIndex + 1}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Phase info text */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[11px] font-mono text-brand font-bold tracking-widest uppercase block mb-1">
                  {currentPhases[activeIndex].weeks} // {lang === 'es' ? 'CRONOGRAMA DE TRABAJO' : 'OPERATIONAL MILESTONE'}
                </span>
                <h3 className="font-display font-extrabold text-3xl text-white uppercase tracking-tight leading-none">
                  {currentPhases[activeIndex].title}
                </h3>
                <p className="text-sm text-neutral-400 font-sans italic mt-1 pb-3 border-b border-neutral-900">
                  {currentPhases[activeIndex].subtitle}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-xs text-neutral-300 font-mono tracking-wider block uppercase">
                  🎯 {lang === 'es' ? 'ENFOQUE PRIMORDIAL:' : 'MAIN METRIC FOCUS:'}
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans font-light">
                  {currentPhases[activeIndex].focus}
                </p>
              </div>

              {/* Weekly support reminder */}
              <div className="p-3 bg-[#0d0d0d] border border-neutral-850 rounded flex items-center gap-3">
                <Shield className="w-5 h-5 text-brand flex-shrink-0" />
                <span className="text-[11.5px] font-mono text-neutral-400 uppercase leading-relaxed">
                  {lang === 'es' 
                    ? 'REGISTRO EXIGENTE SINCERO EN EXCEL Y CHATS DIARIOS DE AVANCES VÍA WHATSAPP.'
                    : 'MANDATORY CLIENT LOGS SPREADSHEET AND WHATSAPP PROGRESS CHECK-INS.'}
                </span>
              </div>
            </div>

            {/* Pillar outputs checklist */}
            <div className="lg:col-span-5 bg-neutral-950 p-5 rounded-lg border border-neutral-900 space-y-4">
              <span className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase block pb-2 border-b border-neutral-900">
                {lang === 'es' ? 'REQUERIMIENTO OPERATIVO DIARIO' : 'DAILY OPERATIONAL PARAMETERS'}
              </span>

              {/* Nutrition item */}
              <div className="flex gap-3 hover:translate-x-1 transition-transform">
                <Utensils className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono text-white uppercase font-bold">
                    {lang === 'es' ? 'SOPORTE NUTRICIONAL' : 'NUTRITIONAL LOGS'}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">
                    {currentPhases[activeIndex].nutrition}
                  </p>
                </div>
              </div>

              {/* Training item */}
              <div className="flex gap-3 hover:translate-x-1 transition-transform">
                <Dumbbell className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono text-white uppercase font-bold">
                    {lang === 'es' ? 'REGISTRO DE CARGAS' : 'WORKOUT LOGS'}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">
                    {currentPhases[activeIndex].training}
                  </p>
                </div>
              </div>

              {/* Metrics item */}
              <div className="flex gap-3 hover:translate-x-1 transition-transform">
                <BarChart3 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono text-white uppercase font-bold">
                    {lang === 'es' ? 'AUDITORÍAS PERIÓDICAS' : 'PERIODIC AUDITING'}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">
                    {currentPhases[activeIndex].metrics}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
