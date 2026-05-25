import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, AlertTriangle, XCircle, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import { LanguageProps } from '../types';

export default function AccountabilitySimulator({ lang }: LanguageProps) {
  const [skipDays, setSkipDays] = useState<number>(1);

  const getSimulationResult = (days: number) => {
    if (days === 0) {
      return {
        title: lang === 'es' ? 'Precisión Científica Absoluta' : 'Maximum Scientific Precision',
        icon: Sparkles,
        color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
        desc: lang === 'es'
          ? 'Registras tu peso en ayunas a diario, anotas tus progresos de cargas en tu registro personal de entrenamiento y cuadras tus macros sin excepciones. Tu cuerpo responde como un sistema termodinámico exacto.'
          : 'You log raw weight at dawn, document loaded sets in your training logs, and meet macronutrients to the gram. Your physiological change is mathematical and guaranteed.',
        weightOutlook: lang === 'es' ? '-1.5 a -2.0 lbs/semana reales' : '-1.5 to -2.0 lbs of real weekly loss',
        systemStatus: lang === 'es' ? 'SISTEMA CONTROLADO BAJO MÉTRICAS' : 'SYSTEM UNDER OPTIMAL SCIENTIFIC CONTROL',
        actionNeed: lang === 'es' ? '¡Excelente! Mantén el ritmo en WhatsApp. Nos vemos en la videollamada de la semana.' : 'Ideal! Keep up the pace in WhatsApp. See you on this week\'s video call.'
      };
    } else if (days === 1) {
      return {
        title: lang === 'es' ? 'Regla de Adherencia del 90%' : 'The 90% Adherence Standard',
        icon: Check,
        color: 'text-neutral-200 border-neutral-800 bg-neutral-900/30',
        desc: lang === 'es'
          ? 'Solo un día con pequeñas desviaciones (p.ej. no registrar un snack o entrenar un poco menos pesado). Sigue estando dentro de la ventana de amortiguamiento permitida para profesionales ocupados.'
          : 'Only a single day with minor deviation (e.g. forgot to weight raw snack or slight loss of intensity). Still remains within our engineered buffer zone for busy schedules.',
        weightOutlook: lang === 'es' ? '-1.0 a -1.5 lbs/semana' : '-1.0 to -1.5 lbs/week',
        systemStatus: lang === 'es' ? 'ZONA CIENTÍFICA SEGURA DE ALTO NIVEL' : 'HIGH PERFORMANCE SCIENTIFIC SAFE ZONE',
        actionNeed: lang === 'es' ? 'Sigue registrando. Estás en la franja ideal para ver resultados brutales.' : 'Keep logging. You are in the optimal zone to build a spectacular physique.'
      };
    } else if (days === 2) {
      return {
        title: lang === 'es' ? 'Línea de Inestabilidad Metabólica' : 'Metabolic Instability Threshold',
        icon: AlertTriangle,
        color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
        desc: lang === 'es'
          ? 'Dos días de registro a ciegas o comer por intuición creados por almuerzos de negocios imprevistos. Has recortado tu ventana de déficit a la mitad. Tu ritmo metabólico se ralentiza debido a la falta de trazabilidad.'
          : 'Two days of blind eating or guessing at social business dinners. You have wiped out half of your weekly caloric deficit. Tracking is now unstable.',
        weightOutlook: lang === 'es' ? 'Fluctuación impredecible de grasa' : 'Unstable weight and fluid fluctuations',
        systemStatus: lang === 'es' ? 'ADVERTENCIA: SESIÓN DE LLAMADA DE 15 MIN REQUERIDA' : 'WARNING: 15-MIN VIDEO ASSESSMENT CRITICAL',
        actionNeed: lang === 'es' ? 'Abre WhatsApp y envíame un mensaje inmediatamente. Reajustaremos el plan de la semana.' : 'Open WhatsApp and message me immediately. We must re-calibrate the weekly plan.'
      };
    } else {
      return {
        title: lang === 'es' ? 'Ruptura Sostenida del Déficit' : 'Sustained Deficit Collapse',
        icon: XCircle,
        color: 'text-red-400 border-red-500/20 bg-red-500/5',
        desc: lang === 'es'
          ? 'Tres o más días sin registro de cargas ni control de peso. Has borrado por completo el déficit semanal promedio. Tu cuerpo entra en mantenimiento o ganancia de grasa silenciosa.'
          : 'Three or more days without logging sets or raw weights. You have wiped out your entire calorie deficit. Your body is now in silent maintenance or fat accumulation.',
        weightOutlook: lang === 'es' ? 'Estancamiento absoluto (Estás igual)' : 'Complete plateau (No visual progress)',
        systemStatus: lang === 'es' ? 'NO DATA, NO CALL: LLAMADA SUSPENDIDA' : 'NO DATA, NO CALL: VIDEO CALL PAUSED',
        actionNeed: lang === 'es' ? 'Llamada semanal pospuesta. Se requiere completar 5 días de datos limpios para reactivar tutoría.' : 'Weekly video feedback paused. Must provide 5 days of clean records to resume.'
      };
    }
  };

  const result = getSimulationResult(skipDays);

  return (
    <div className="bg-[#111] border border-neutral-850 p-6 lg:p-8 rounded-xl shadow-xl relative overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Interactive Control */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1 rounded bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-bold">SIMULADOR</span>
              <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white">
                {lang === 'es' ? 'Desviación en el Proceso' : 'Process Deviation Simulator'}
              </h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-sans">
              {lang === 'es'
                ? 'El fitness científico no se basa en el perfeccionismo irreal, sino en la tasa de consistencia. Utiliza este simulador para estimar el impacto fisiológico de los días que dejas tus datos al azar en la semana de 7 días.'
                : 'Scientific fitness isn\'t about unrealistic perfectionism, but consistency threshold. Use this slider to simulate the physiological impact when you leave metrics untracked during a 7-day period.'}
            </p>

            {/* Slider control */}
            <div className="bg-neutral-950 p-5 border border-neutral-900 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-neutral-500 font-mono tracking-wider">
                  {lang === 'es' ? 'DÍAS AL AZAR (SIN REGISTRAR DATOS)' : 'RANDOM DAYS (UNTRACKED METRICS)'}
                </span>
                <span className="text-xl font-mono text-brand font-black">
                  {skipDays} {lang === 'es' ? (skipDays === 1 ? 'DÍA' : 'DÍAS') : (skipDays === 1 ? 'DAY' : 'DAYS')}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                value={skipDays}
                onChange={(e) => setSkipDays(parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded appearance-none cursor-pointer accent-brand"
              />
              <div className="flex justify-between text-[9px] text-neutral-500 font-mono mt-2 uppercase">
                <span>{lang === 'es' ? 'Precisión (100%)' : 'Precision (100%)'}</span>
                <span>{lang === 'es' ? 'Límite Seguro (90%)' : 'Safe Window (90%)'}</span>
                <span>{lang === 'es' ? 'Inestable (80%)' : 'Unstable (80%)'}</span>
                <span>{lang === 'es' ? 'Estancamiento (<75%)' : 'Plateau (<75%)'}</span>
              </div>
            </div>
          </div>

          {/* Core Science block */}
          <div className="bg-neutral-950 p-4 rounded border border-neutral-900/60 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="block text-[10px] text-neutral-400 font-mono font-bold uppercase tracking-wider">
                {lang === 'es' ? 'METODOLOGÍA CIENTÍFICA DE ENFOQUE HÍBRIDO' : 'HYBRID TRAINING SCIENCE INSPIRATION'}
              </span>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-sans">
                {lang === 'es'
                  ? 'Nos guiamos por los principios biológicos de fatiga, neurología y sobrecarga progresiva divulgados por autoridades científicas como el Dr. Andrew Huberman y el Dr. Andy Galpin. Sin dogmas, solo fisiología aplicada.'
                  : 'We base our neurological and loading strategies on peer-reviewed guidelines presented by world experts like Dr. Andrew Huberman and Dr. Andy Galpin. Pure scientific application over fitness hype.'}
              </p>
            </div>
          </div>
        </div>

        {/* Right Dynamic Simulation Feedback Pane */}
        <div className="lg:col-span-6 flex items-stretch">
          <div className={`w-full p-5 lg:p-6 border rounded-lg flex flex-col justify-between transition-all duration-300 ${result.color}`}>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-500 block">
                    {lang === 'es' ? 'IMPACTO ESTIMADO' : 'SIMULATED VALUE OUTCOME'}
                  </span>
                  <h4 className="font-display font-extrabold text-xl text-white uppercase tracking-wider mt-1">
                    {result.title}
                  </h4>
                </div>
                <result.icon className="w-6 h-6 text-brand" />
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                {result.desc}
              </p>

              <div className="pt-3 border-t border-neutral-9dd0/20 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[9px] text-[#888] font-mono uppercase tracking-wider">
                    {lang === 'es' ? 'PROYECCIÓN DE PÉRDIDA' : 'ESTIMATED LOSS'}
                  </span>
                  <span className="text-sm font-display font-bold text-white uppercase block">
                    {result.weightOutlook}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] text-[#888] font-mono uppercase tracking-wider">
                    {lang === 'es' ? 'ESTADO OPERATIVO' : 'OPERATIONAL STATUS'}
                  </span>
                  <span className="text-xs font-mono font-bold text-brand block uppercase">
                    {result.systemStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900/60 text-xs text-neutral-300 font-sans italic flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
              {result.actionNeed}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
