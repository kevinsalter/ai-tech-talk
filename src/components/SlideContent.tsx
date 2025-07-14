'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '@/lib/types';
import { useSlideKeyboardShortcuts } from '@/lib/hooks';
import TierCard from './TierCard';
import CodeBlock from './CodeBlock';

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
        {/* GitHub Link for first slide */}
        {slide.githubLink && (
          <motion.a
            href={slide.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-8 left-8 flex items-center gap-2 text-muted hover:text-primary transition-colors duration-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">View on GitHub</span>
          </motion.a>
        )}

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
            {(slide.subtitle || slide.subtitleImage) && (
              <motion.h2 
                className="text-5xl text-muted mb-12 max-w-4xl mx-auto leading-tight font-light flex items-center justify-center gap-4"
                variants={itemVariants}
              >
                {slide.subtitle}
                {slide.subtitleImage && (
                  <img 
                    src={slide.subtitleImage} 
                    alt="Token count" 
                    className="h-20 inline-block"
                  />
                )}
                {slide.subtitleAfter}
              </motion.h2>
            )}
            {slide.footer && (
              <motion.p 
                className="text-xl text-muted absolute bottom-12 left-1/2 transform -translate-x-1/2"
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
                className="text-presentation-body mb-12"
                variants={itemVariants}
              >
                {typeof slide.content === 'string' && slide.content.includes('```') ? (
                  <div>
                    {slide.content.split('```').map((part: string, index: number) => {
                      if (index % 2 === 0) {
                        return <div key={index} className="whitespace-pre-line">{part}</div>;
                      } else {
                        const [, ...codeLines] = part.split('\n');
                        const code = codeLines.join('\n');
                        return (
                          <pre key={index} className="bg-gray-900 p-4 rounded-lg my-4 overflow-x-auto">
                            <code className="text-sm text-gray-300">{code}</code>
                          </pre>
                        );
                      }
                    })}
                  </div>
                ) : (
                  <div className="whitespace-pre-line">
                    {Array.isArray(slide.content) ? slide.content.join('\n') : slide.content}
                  </div>
                )}
              </motion.div>
            )}
          {slide.specialComponent && (
            <motion.div className="my-12" variants={itemVariants}>
              {slide.specialComponent === 'tier-cards' && (
                <div className="space-y-6">
                  <TierCard
                    tier={1}
                    emoji="🚀"
                    title="Things I Know Well"
                    description="Blazing speed execution"
                    delay={0.2}
                  />
                  <TierCard
                    tier={2}
                    emoji="📚"
                    title="Things I Kinda Know"
                    description="Skip the documentation diving"
                    delay={0.4}
                  />
                  <TierCard
                    tier={3}
                    emoji="⚠️"
                    title="Things I Don't Know"
                    description="Confidently wrong answers + I can't guide it = Danger"
                    delay={0.6}
                  />
                </div>
              )}
              {slide.specialComponent === 'code-commands' && (
                <CodeBlock
                  commands={[
                    {
                      command: '/sanity-check',
                      description: 'Instant code review',
                      gistUrl: 'https://gist.github.com/kevinsalter/fa5ed13e068189869f4dfede91599c82'
                    },
                    {
                      command: '/prime',
                      description: 'Load context efficiently',
                      gistUrl: 'https://gist.github.com/kevinsalter/c68e6bc51c434501605195aab24279a5'
                    },
                    {
                      command: '/commit',
                      description: 'Meaningful commit messages',
                      gistUrl: 'https://gist.github.com/kevinsalter/1cd212bd5a4a8bd244cdcd7b384acc92'
                    }
                  ]}
                />
              )}
              {slide.specialComponent === 'git-sidebar-image' && (
                <img 
                  src="/images/git-sidebar.png" 
                  alt="Git sidebar in editor" 
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl mt-8"
                />
              )}
            </motion.div>
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