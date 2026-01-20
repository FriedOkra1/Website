import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function ResumePreview() {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeUrl = "/Resume.pdf";
  const [isClient, setIsClient] = useState(false);

  // Dynamic imports for react-pdf
  const [DocumentComponent, setDocumentComponent] = useState<any>(null);
  const [PageComponent, setPageComponent] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);

    // Dynamically import react-pdf to avoid SSR issues
    import('react-pdf').then((module) => {
      const { pdfjs, Document, Page } = module;
      // Set worker
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      
      setDocumentComponent(() => Document);
      setPageComponent(() => Page);
    });

    // Handle container sizing
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (!isClient || !DocumentComponent || !PageComponent) {
    return (
      <div className="border-2 border-foreground bg-white h-[600px] flex items-center justify-center relative bg-gray-100">
        <div className="text-muted-foreground">Loading Resume Preview...</div>
      </div>
    );
  }

  return (
    <div className="border-2 border-foreground bg-white relative group flex flex-col bg-gray-100">
      
      {/* Container for PDF */}
      <div 
        className="w-full flex justify-center items-start bg-white"
        ref={containerRef}
      >
        <DocumentComponent
          file={resumeUrl}
          className="flex justify-center shadow-none"
          loading={
            <div className="flex items-center justify-center h-[600px] text-muted-foreground">
              Loading...
            </div>
          }
          error={
            <div className="flex items-center justify-center h-[600px] text-red-500">
              Failed to load PDF.
            </div>
          }
        >
          <PageComponent 
            pageNumber={1} 
            // Fit width minus border (4px = 2px border * 2 sides)
            width={containerWidth > 0 ? containerWidth - 4 : 600}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="border-2 border-black"
          />
        </DocumentComponent>
      </div>

      {/* Top Right: External Link */}
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 right-0 p-3 bg-white text-black hover:bg-blue-600 hover:text-white transition-colors duration-200 z-20 flex items-center justify-center shadow-md border-b-2 border-l-2 border-black"
        aria-label="Open Resume in new tab"
      >
        <ExternalLink size={24} />
      </a>
    </div>
  );
}
