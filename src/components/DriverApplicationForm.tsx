import { useState, useEffect, useRef, FormEvent } from 'react';
import { X, Truck } from 'lucide-react';

interface DriverApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const DriverApplicationForm = ({ isOpen, onClose }: DriverApplicationFormProps) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const endpoint = import.meta.env.VITE_DRIVER_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="driver-form-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <Truck className="h-5 w-5 text-amber-600" />
            </div>
            <h2 id="driver-form-title" className="text-xl font-bold text-gray-900">
              Driver Application
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close form"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for your interest. Our recruiting team will review your application and contact you shortly.
              </p>
              <button
                onClick={onClose}
                className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="driver-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="driver-name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="driver-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="driver-phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="driver-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="driver-email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="driver-cdl" className="block text-sm font-medium text-gray-700 mb-1">
                    CDL Number *
                  </label>
                  <input
                    type="text"
                    id="driver-cdl"
                    name="cdl_number"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="CDL Number"
                  />
                </div>
                <div>
                  <label htmlFor="driver-cdl-state" className="block text-sm font-medium text-gray-700 mb-1">
                    CDL State *
                  </label>
                  <input
                    type="text"
                    id="driver-cdl-state"
                    name="cdl_state"
                    required
                    maxLength={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="TX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="driver-experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Flatbed Experience *
                </label>
                <select
                  id="driver-experience"
                  name="experience"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                >
                  <option value="">Select experience</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="driver-endorsements" className="block text-sm font-medium text-gray-700 mb-1">
                  Endorsements (check all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="endorsements" value="Hazmat" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                    <span className="text-sm text-gray-700">Hazmat (H)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="endorsements" value="Tanker" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                    <span className="text-sm text-gray-700">Tanker (N)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="endorsements" value="Doubles/Triples" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                    <span className="text-sm text-gray-700">Doubles/Triples (T)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="endorsements" value="TWIC" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                    <span className="text-sm text-gray-700">TWIC Card</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="driver-violations" className="block text-sm font-medium text-gray-700 mb-1">
                  Any accidents or violations in the last 3 years? *
                </label>
                <select
                  id="driver-violations"
                  name="violations"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                >
                  <option value="">Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes (explain below)</option>
                </select>
              </div>

              <div>
                <label htmlFor="driver-notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="driver-notes"
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                  placeholder="Tell us about your experience, any violations/accidents to explain, or questions..."
                />
              </div>

              <p className="text-xs text-gray-500">
                By submitting this application, you authorize Riverway Logistics to verify your driving record through FMCSA and state DMV databases.
              </p>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  Something went wrong. Please try again or email us at{' '}
                  <a href="mailto:recruiting@riverwaylogistics.com" className="underline">
                    recruiting@riverwaylogistics.com
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverApplicationForm;
