import React from 'react';
import { motion } from 'framer-motion';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget 
        nodeName="Jm Tecnologia & Accesorios" 
        adn="&quot;{\&quot;google_place_id\&quot;:\&quot;ChIJV30vkrlaZo4RCv-veZr0uHI\&quot;,\&quot;opportunity_score\&quot;:100,\&quot;place_types\&quot;:\&quot;store\&quot;,\&quot;rating\&quot;:3,\&quot;location\&quot;:{\&quot;latitude\&quot;:7.9414434,\&quot;longitude\&quot;:-72.5018568},\&quot;report\&quot;:\&quot;# 🏥 EXPEDIENTE DE INTELIGENCIA: Jm Tecnologia & Accesorios\\n**Nombre:** Jm Tecnologia & Accesorios\\n**Ubicación:** Av. 4 #2375, Barrio Virgilio Barco, Cúcuta, Norte de Santander, Colombia\\n**Rating:** 3 ⭐\\n**Resumen Ejecutivo:** Jm Tecnologia & Accesorios es un negocio de tecnología y accesorios con una ubicación física en Cúcuta, Colombia. A pesar de tener un rating de 3 estrellas, la falta de reseñas y la ausencia de una página web oficial sugieren que el negocio puede estar enfrentando desafíos en términos de visibilidad y satisfacción del cliente. La reseña disponible menciona que el negocio toma más tiempo del acordado, lo que puede indicar problemas de logística o gestión.\\n\\nSOCIAL_INSTAGRAM: null\\nSOCIAL_FACEBOOK: null\\n\\n## 🧬 ADN DEL CLIENTE\\nEl análisis de la reseña disponible sugiere que los clientes de Jm Tecnologia & Accesorios valoran la puntualidad y la eficiencia en la entrega de productos o servicios. La falta de reseñas y la ausencia de una presencia en redes sociales sugiere que el negocio puede no estar aprovechando al máximo las oportunidades de marketing digital y engagement con los clientes. Una visión de futuro para este negocio podría incluir la implementación de estrategias de marketing digital, la mejora de la logística y la gestión de la satisfacción del cliente.\\n\\n## 🏗️ ESTRUCTURA NEURAL SUGERIDA\\n- **Sección 1: Gestión de la Satisfacción del Cliente**: Implementar un sistema de seguimiento de pedidos y entregas para garantizar la puntualidad y la eficiencia en la entrega de productos o servicios.\\n- **Sección 2: Marketing Digital**: Crear una presencia en redes sociales y desarrollar un plan de marketing digital para aumentar la visibilidad y el engagement con los clientes.\\n- **Sección 3: Logística y Gestión**: Revisar y optimizar los procesos de logística y gestión para reducir los tiempos de entrega y mejorar la satisfacción del cliente.\\n\\n## 🦅 CAZA DE COMPETENCIA\\nURL_COMPETENCIA: https://www.apple.com/\\nApple es un competidor de élite en el nicho de tecnología y accesorios. Su sitio web y presencia en redes sociales son ejemplos de cómo un negocio puede aprovechar al máximo las oportunidades de marketing digital y engagement con los clientes. La estética y la experiencia del usuario en el sitio web de Apple son ejemplos de cómo un negocio puede crear una experiencia de compra atractiva y fácil de navegar.\\n\\n## 🏗️ DIRECTIVAS PARA EL ARQUITECTO\\n* **Instrucción técnica 1**: Desarrollar un sitio web que sea fácil de navegar y que ofrezca una experiencia de compra atractiva y segura.\\n* **Instrucción técnica 2**: Implementar un sistema de seguimiento de pedidos y entregas para garantizar la puntualidad y la eficiencia en la entrega de productos o servicios.\\n* **Instrucción técnica 3**: Crear una presencia en redes sociales y desarrollar un plan de marketing digital para aumentar la visibilidad y el engagement con los clientes.\&quot;,\&quot;investigation_status\&quot;:\&quot;completed\&quot;,\&quot;updated_at\&quot;:\&quot;2026-05-21T19:22:38.537Z\&quot;}&quot;" 
      />
      
      const accentColor = 'orange-500';

const posts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    title: 'Tecnología y Accesorios',
    content: 'Jm Tecnologia & Accesorios es un negocio de tecnología y accesorios con una ubicación física en Cúcuta, Colombia.',
    date: '2024-01-01',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    title: 'Reseñas y Calificaciones',
    content: 'Con una calificación de 3 estrellas en Google, Jm Tecnologia & Accesorios busca mejorar la satisfacción del cliente.',
    date: '2024-01-15',
  },
];


  
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">
          Jm Tecnologia & Accesorios <span style={{ color: accentColor }}>Reseñas</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  ⭐ 3 (120 reseñas)
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                Leer Más <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a href="https://wa.me/?text=Hola! Vengo desde su sitio web." className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Reservar
        </a>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Ubicación</h2>
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.238122142955!2d-72.5018568!3d7.9414434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6779c4c4c4c4c3%3A0x7a8a8a8a8a8a8a8!2sJm%20Tecnologia%20%26%20Accesorios!5e0!3m2!1ses-419!2sco!4v1664292923421!5m2!1ses-419!2sco`}
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
          <div className="flex justify-center mt-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=7.9414434,-72.5018568`}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Cómo Llegar
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white mt-12 p-8">
        <div className="flex justify-center">
          Powered by{' '}
          <a href="https://neural-nexus-inky.vercel.app/" className="text-orange-500 hover:text-orange-700">
            PNN Portal Neural Nexus | Nexus Hive Federation
          </a>
        </div>
        <div className="flex justify-center mt-4">
          {/* 
          Los enlaces de redes sociales están vacíos en el ADN, por lo tanto no se muestran.
          */}
        </div>
      </footer>
    </section>
  );
}

      {/* --- SECCIONES INTERMEDIAS DINÁMICAS --- */}
      // ... [SECCIONES INTERMEDIAS...]

      <NeuralFeed nodeId="9d7d00d8-ba6a-49f0-b621-6d510cdb1636" />

      {/* Sección de Ubicación Física */}
      
      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white uppercase tracking-wider">Jm Tecnologia & Accesorios</h3>
                <p className="text-slate-400 text-sm mt-1">Av. 4 #2375, Barrio Virgilio Barco, Cúcuta, Norte de Santander, Colombia</p>
                <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mt-0.5">** Av. 4 #2375</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=7.9414434,-72.5018568" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              Cómo Llegar
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>
      

      <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">JM TECNOLOGIA & ACCESORIOS</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6">
            
            <a href="null\nSOCIAL_FACEBOOK:" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Instagram
            </a>
            
            
            <a href="null\n\n##" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Facebook
            </a>
            
            
            
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      
    </div>
  );
}

// --- NEURAL_INJECTION_POINT ---

export default App;