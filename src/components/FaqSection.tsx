import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { LanguageProps } from '../types';

interface FAQItem {
  q: string;
  a: string;
}

export default function FaqSection({ lang }: LanguageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: Record<'es' | 'en', FAQItem[]> = {
    es: [
      {
        q: '¿Cuánto tiempo al día necesito para entrenar?',
        a: 'Nos adaptamos a tu agenda real. La eficiencia del sistema está por encima de pasar horas muertas en el gimnasio. Si dispones de 45 minutos cuatro veces a la semana, estructuramos el volumen exacto para que rindan más que 2 horas de sobrecarga aleatoria. Este programa está diseñado específicamente para profesionales ocupados.'
      },
      {
        q: '¿Tengo que dejar de comer lo que me gusta?',
        a: 'No. Nos enfocamos en macronutrientes precisos y balance de nitrógeno. Aprenderás a pesar, registrar y rotar tus alimentos favoritos respetando tus macros semanales. No hay alimentos prohibidos; solo hay proporciones ineficientes. La meta es la autonomía física definitiva.'
      },
      {
        q: '¿Qué pasa si una semana no lleno mis datos de peso y macros?',
        a: 'Tu inversión vale únicamente si ejecutas el plan de control. Al aplicar la regla "No Data, No Call", protegemos la integridad del proceso. Juanjo no toma decisiones a ciegas ni basadas en "cómo te sientes con el espejo". Si no hay números de peso promedio semanal y registros de cargas para analizar, suspendemos la llamada para forzar la honestidad con tus propios datos.'
      },
      {
        q: '¿Necesito equipo especial o ir a un gimnasio específico?',
        a: 'No. El plan se diseña en base a la infraestructura que tengas disponible: gimnasio comercial clásico, gimnasio en casa (home-gym) o incluso equipo básico. El único requisito innegociable es el registro diario de tus entrenamientos (usando una aplicación gratuita facilitada o recomendada en el plan) para llevar una trazabilidad exacta del peso levantado y las repeticiones.'
      },
      {
        q: '¿Cómo sé si este programa realmente es para mí?',
        a: 'Este sistema es para ti si eres una persona que valora la verdad científica, tiene poco tiempo y quiere enfocar su transformación física como un proceso de optimización real. No es para ti si buscas dietas "mágicas" de tres días o si no estás dispuesto a tomarte 5 minutos diarios en registrar tu peso o tus comidas.'
      }
    ],
    en: [
      {
        q: 'How much time do I need to train every day?',
        a: 'We adapt to your actual schedule. System efficiency is prioritized over spending empty hours in the gym. If you only have 45 minutes four times a week, we structure the exact required volume so it yields more results than 2 hours of random overtraining. This program is engineered specifically for busy individuals.'
      },
      {
        q: 'Do I have to stop eating the foods I love?',
        a: 'No. We focus on precise macronutrients and energy balance. You will learn how to weigh, track, and rotate your favorite foods within your weekly macro budget. There are no forbidden foods; there are only inefficient proportions. The ultimate goal is your lifetime physical autonomy.'
      },
      {
        q: 'What happens if I forget to log my weight and macros?',
        a: 'Your investment only yields results if you execute the tracking framework. By applying our "No Data, No Call" rule, we protect the process integrity. Juanjo does not make adjustments blindly or based on subjective mirror feelings. If there are no weekly average weight figures and workout logs to analyze, we pause the call to enforce maximum clarity and accountability.'
      },
      {
        q: 'Do I need special equipment or a specific gym?',
        a: 'No. Your training routine is tailored to the physical infrastructure you have available: commercial gym, home-gym, or basic gear. The only non-negotiable tool is consistent logging of your workouts (using a recommended free logging app of your choice) to carry an exact trace of your loaded sets, weights, and repetitions.'
      },
      {
        q: 'How do I know if this coaching program is a match for me?',
        a: 'This system is for you if you value scientific truth, are short on time, and want to treat your health as an optimization process. It is not a fit if you are looking for generic 3-day detox diets or are unwilling to dedicate 5 minutes daily to weighing foods and tracking key metrics.'
      }
    ]
  };

  const currentItems = items[lang];

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {currentItems.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/10 transition-colors duration-200"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 hover:bg-neutral-900/30 transition-colors focus:outline-none"
            >
              <span className="font-display font-extrabold text-[#e1e1e1] text-lg lg:text-xl uppercase tracking-wider flex items-center gap-2">
                <span className={`text-xs font-mono font-normal mr-2 ${isOpen ? 'text-brand' : 'text-neutral-500'}`}>0{idx + 1} //</span>
                {item.q}
              </span>
              <span className={`p-1.5 rounded bg-neutral-900 border border-neutral-800 text-brand transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand bg-brand/5 border-brand/20' : ''}`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-sm text-neutral-400 leading-relaxed font-sans border-t border-neutral-900/50">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
