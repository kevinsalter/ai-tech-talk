import { notFound } from 'next/navigation';
import SlideLayout from '@/components/SlideLayout';
import SlideNavigation from '@/components/SlideNavigation';
import SlideContent from '@/components/SlideContent';
import { getSlideById, slides } from '@/lib/slides';

interface SlidePageProps {
  params: {
    id: string;
  };
}

export default function SlidePage({ params }: SlidePageProps) {
  const slideId = parseInt(params.id, 10);
  const slide = getSlideById(slideId);

  if (!slide || isNaN(slideId)) {
    notFound();
  }

  return (
    <>
      <SlideNavigation currentSlide={slideId} totalSlides={slides.length} />
      <SlideLayout slideNumber={slideId} totalSlides={slides.length}>
        <SlideContent slide={slide} slideId={slideId} />
      </SlideLayout>
    </>
  );
}

// Generate static params for all slides
export async function generateStaticParams() {
  return slides.map((slide) => ({
    id: slide.id.toString(),
  }));
}

// Metadata generation
export async function generateMetadata({ params }: SlidePageProps) {
  const slideId = parseInt(params.id, 10);
  const slide = getSlideById(slideId);

  if (!slide) {
    return {
      title: 'Slide Not Found',
    };
  }

  return {
    title: `Slide ${slideId}: ${slide.title}`,
    description: slide.subtitle || slide.content || 'AI Tech Talk Presentation',
  };
}