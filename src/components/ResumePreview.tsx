import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink } from 'lucide-react';

export default function ResumePreview() {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [resumeUrl] = useState("/Resume.pdf");
  
  // Dynamic imports for react-pdf
  const [Modules, setModules] = useState<{
    Document: any;
    Page: any;
  } | null>(null);

  useEffect(() => {
    // Dynamically import react-pdf to avoid SSR issues
    import('react-pdf').then((module) => {
      const { pdfjs, Document, Page } = module;
      // Set worker
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      
      setModules({ Document, Page });
    });
  }, []);

  // Use a callback ref to measure the container as soon as it mounts or resizes
  const onRefChange = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setContainerWidth(node.clientWidth);
      
      // Setup resize observer to handle window resizes or layout changes
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
             // Using clientWidth from the element is often more reliable for this specific case
             // than contentBoxSize because of scrollbars/padding nuances
             setContainerWidth(node.clientWidth);
          }
        }
      });
      
      resizeObserver.observe(node);
      
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  if (!Modules) {
    return (
      <div className="border-2 border-foreground bg-white h-[600px] flex items-center justify-center relative bg-gray-100">
        <div className="text-muted-foreground">Loading Resume Preview...</div>
      </div>
    );
  }

  const { Document, Page } = Modules;

  return (
    <div className="border-2 border-foreground bg-white relative group flex flex-col bg-gray-100">
      
      {/* Container for PDF - Ref is attached here to track available width */}
      <div 
        className="w-full flex justify-center items-start bg-white min-h-[600px]"
        ref={onRefChange}
      >
        {/* Only render Document if we have a valid width to prevent overflow flash */}
        {containerWidth > 0 && (
          <Document
            file={resumeUrl}
            className="flex justify-center shadow-none w-full"
            loading={
              <div className="flex items-center justify-center h-[600px] w-full text-muted-foreground">
                Loading...
              </div>
            }
            error={
              <div className="flex items-center justify-center h-[600px] w-full text-red-500">
                Failed to load PDF.
              </div>
            }
          >
            <Page 
              pageNumber={1} 
              // Fit width minus border (4px)
              // Ensure we don't pass 0 or negative
              width={Math.max(containerWidth - 4, 100)}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="border-2 border-black"
            />
          </Document>
        )}
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
