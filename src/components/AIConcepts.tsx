import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GoogleGenAI } from '@google/genai';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const prompts = [
  "A luxury modern interior design under construction, architectural rendering, vibrant colors, premium aesthetic, highly detailed, structural elements visible, cinematic lighting.",
  "A high-end commercial building interior during construction phase, exposed elegant structural elements, vibrant lighting, modern architectural design, photorealistic."
];

export default function AIConcepts() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const tryGenerate = async () => {
    if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
      await window.aistudio.openSelectKey();
    }

    // @ts-ignore
    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;
    
    if (!apiKey) {
      throw new Error("API Key not found. Please ensure you have selected a valid key.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const promises = prompts.map(async (promptText) => {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: promptText }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
          }
        }
      });
      
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
      return null;
    });

    const results = await Promise.all(promises);
    const validImages = results.filter((img): img is string => img !== null);
    
    if (validImages.length === 0) {
      throw new Error("No images were generated.");
    }
    
    setImages(validImages);
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    try {
      await tryGenerate();
    } catch (err: any) {
      console.error("Generation error:", err);
      if (err.message?.includes("Requested entity was not found")) {
        try {
          if (window.aistudio) {
            await window.aistudio.openSelectKey();
            await tryGenerate();
          }
        } catch (retryErr: any) {
          setError(retryErr.message || "Failed to generate images after retry.");
        }
      } else {
        setError(err.message || "Failed to generate images.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-concepts" className="py-32 bg-brand-stone relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white text-brand-accent nav-link mb-6 shadow-sm">
              Live AI Concepts
            </div>
            <h3 className="text-5xl md:text-7xl font-medium text-brand-dark mb-6">Future Spaces</h3>
            <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-10">
              Experience our architectural concepts generated in real-time using Google's Nano-banana Pro AI. Watch as construction designs come to life.
            </p>
            
            {!images.length && !loading && (
              <button onClick={handleGenerate} className="btn-solid px-8 py-4">
                Generate Concepts
              </button>
            )}
            
            {loading && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-t-brand-accent border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin shadow-md"></div>
                <p className="text-brand-dark/70 font-medium animate-pulse">Generating high-resolution architectural designs...</p>
              </div>
            )}
            
            {error && (
              <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl max-w-2xl mx-auto border border-red-100">
                {error}
              </div>
            )}
          </motion.div>
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-1 gap-16">
            {images.map((img, index) => (
              <ImageReveal key={`concept-${index}`} src={img} index={index} />
            ))}
          </div>
        )}
        
        {images.length > 0 && !loading && (
          <div className="mt-16 text-center">
            <button onClick={handleGenerate} className="btn-outline px-8 py-4 bg-white">
              Regenerate Concepts
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ImageReveal({ src, index }: { src: string, index: number, key?: string | number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="relative w-full aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl bg-white"
    >
      <motion.img
        style={{ y }}
        src={src}
        alt={`Generated Concept ${index + 1}`}
        className="w-full h-full object-cover origin-center scale-[1.3]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
      <div className="absolute bottom-8 left-8 right-8">
        <div className="glass-card inline-block px-6 py-3 backdrop-blur-md bg-white/90">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Concept 0{index + 1} &mdash; Construction Phase
          </span>
        </div>
      </div>
    </motion.div>
  );
}
