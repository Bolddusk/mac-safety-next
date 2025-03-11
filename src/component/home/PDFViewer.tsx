import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { HUDOverlay } from "@/components/ui/hud-overlay";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    setError(error.message);
    setLoading(false);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => {
      const newPage = prevPageNumber + offset;
      if (numPages === null) return prevPageNumber;
      return Math.min(Math.max(1, newPage), numPages);
    });
  }

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setPdfFile(file);
      setLoading(true);
      setError(null);
    }
  }

  return (
    <section className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-[#64FFDA]">Document</span> Viewer
        </h2>

        <div className="max-w-4xl mx-auto">
          <HUDOverlay>
            <div className="p-6 space-y-6">
              {!pdfFile ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={onFileChange}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center gap-4">
                      <Upload className="w-12 h-12 text-[#eba200] animate-pulse" />
                      <span className="text-white text-lg">Upload PDF Document</span>
                      <p className="text-gray-400 text-sm">Click to browse or drag & drop</p>
                    </div>
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-white">
                      Page {pageNumber} of {numPages}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => changePage(-1)}
                        disabled={pageNumber <= 1}
                        className="bg-[#eba200] text-black hover:bg-[#eba200]/80 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => changePage(1)}
                        disabled={numPages !== null && pageNumber >= numPages}
                        className="bg-[#eba200] text-black hover:bg-[#eba200]/80 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-center border border-white/20 rounded-lg overflow-hidden bg-black/50">
                    {loading && (
                      <div className="text-white p-8 text-center">
                        <div className="animate-pulse">Loading PDF...</div>
                      </div>
                    )}
                    {error && (
                      <div className="text-red-500 p-8 text-center">
                        Error loading PDF. Please try again later.
                      </div>
                    )}
                    <Document
                      file={pdfFile}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      className="max-w-full"
                    >
                      <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="max-w-full"
                        loading={
                          <div className="text-white p-8 text-center">
                            <div className="animate-pulse">Loading page...</div>
                          </div>
                        }
                        error={
                          <div className="text-red-500 p-8 text-center">
                            Error loading page. Please try again.
                          </div>
                        }
                      />
                    </Document>
                  </div>

                  <Button
                    onClick={() => {
                      setPdfFile(null);
                      setPageNumber(1);
                      setNumPages(null);
                      setLoading(true);
                      setError(null);
                    }}
                    variant="outline"
                    className="w-full mt-4 border-white text-white hover:bg-[#eba200] hover:text-black hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]"
                  >
                    Upload Different File
                  </Button>
                </div>
              )}
            </div>
          </HUDOverlay>
        </div>
      </div>
    </section>
  );
}