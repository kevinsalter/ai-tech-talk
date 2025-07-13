'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '@/lib/types';
import { useSlideKeyboardShortcuts } from '@/lib/hooks';

interface SlideContentProps {
  slide: Slide;
  slideId: number;
}

export default function SlideContent({ slide, slideId }: SlideContentProps) {
  useSlideKeyboardShortcuts();

  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      }
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideId}
        className="max-w-6xl mx-auto"
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Render slide content based on type */}
        {slide.type === 'title' && (
          <motion.div 
            className="text-center"
            variants={contentVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-presentation-title font-black mb-8"
              variants={itemVariants}
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2 
                className="text-presentation-subtitle text-muted mb-12"
                variants={itemVariants}
              >
                {slide.subtitle}
              </motion.h2>
            )}
            {slide.footer && (
              <motion.p 
                className="text-presentation-body text-muted mt-16"
                variants={itemVariants}
              >
                {slide.footer}
              </motion.p>
            )}
            {slide.links && slide.links.length > 0 && (
              <motion.div className="mt-8" variants={itemVariants}>
                {slide.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-presentation-body text-primary hover:text-primary/80 
                             transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {slide.type === 'content' && (
          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-presentation-heading font-bold mb-12"
              variants={itemVariants}
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2 
                className="text-presentation-body font-semibold mb-8 text-muted"
                variants={itemVariants}
              >
                {slide.subtitle}
              </motion.h2>
            )}
            {slide.bullets && (
              <motion.ul className="space-y-6 mb-12">
                {slide.bullets.map((bullet, index) => (
                  <motion.li 
                    key={index} 
                    className="text-presentation-body flex items-start"
                    variants={itemVariants}
                  >
                    <span className="text-primary mr-4">•</span>
                    <span className="whitespace-pre-line">{bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
            {slide.content && (
              <motion.div 
                className="text-presentation-body whitespace-pre-line mb-12"
                variants={itemVariants}
              >
                {slide.content}
              </motion.div>
            )}
          {slide.specialComponent && (
            <div className="my-12">
              {/* Special components will be rendered here */}
              <div className="text-center text-muted italic">
                [{slide.specialComponent} component]
              </div>
            </div>
          )}
          {slide.footer && (
            <p className="text-presentation-body text-muted mt-16">
              {slide.footer}
            </p>
          )}
          {slide.links && slide.links.length > 0 && (
            <div className="mt-8 space-y-2">
              {slide.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block text-presentation-small text-primary hover:text-primary/80 
                           transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
          </motion.div>
        )}

      {slide.type === 'split' && (
        <div>
          <h1 className="text-presentation-heading font-bold mb-12">
            {slide.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {slide.leftContent && (
              <div>
                <h3 className="text-presentation-body font-semibold mb-6 text-primary">
                  {slide.leftContent.title}
                </h3>
                <ul className="space-y-4">
                  {slide.leftContent.items.map((item, index) => (
                    <li key={index} className="text-presentation-body">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {slide.rightContent && (
              <div>
                <h3 className="text-presentation-body font-semibold mb-6 text-primary">
                  {slide.rightContent.title}
                </h3>
                <ul className="space-y-4">
                  {slide.rightContent.items.map((item, index) => (
                    <li key={index} className="text-presentation-body">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {slide.content && (
            <div className="text-presentation-body whitespace-pre-line mt-12">
              {slide.content}
            </div>
          )}
          {slide.links && slide.links.length > 0 && (
            <div className="mt-8">
              {slide.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-presentation-body text-primary hover:text-primary/80 
                           transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {slide.type === 'emoji-list' && (
        <div>
          <h1 className="text-presentation-heading font-bold mb-12">
            {slide.title}
          </h1>
          <div className="space-y-8">
            {slide.emojiItems?.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <span className="text-5xl">{item.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-presentation-body font-semibold mb-2">
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-primary hover:text-primary/80 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-presentation-small text-muted whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}