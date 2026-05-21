import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { X } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  freightType?: string;
  origin?: string;
  destination?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    freightType: '',
    origin: '',
    destination: '',
    notes: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setStatus('idle');
    setErrors({});
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      freightType: '',
      origin: '',
      destination: '',
      notes: ''
    });
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
      setTimeout(() => firstInputRef.current?.focus(), 50);
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

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatPhoneNumber(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.freightType) {
      newErrors.freightType = 'Please select a freight type';
    }

    if (!formData.origin.trim()) {
      newErrors.origin = 'Please enter the origin city/state';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Please enter the destination city/state';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    const accessKey = import.meta.env.VITE_WEB3FORMS_QUOTE_KEY;
    
    if (!accessKey) {
      setStatus('error');
      return;
    }

    const freightLabels: Record<string, string> = {
      steel: 'Steel Products',
      pipe: 'Pipe & Tubing',
      construction: 'Construction Materials',
      industrial: 'General Industrial',
      other: 'Other Flatbed'
    };

    const submissionData = {
      access_key: accessKey,
      subject: `New Quote Request: ${formData.company} - ${formData.origin} to ${formData.destination}`,
      from_name: formData.name,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      freight_type: freightLabels[formData.freightType] || formData.freightType,
      origin: formData.origin,
      destination: formData.destination,
      notes: formData.notes || 'None provided'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy-dark/80 backdrop-blur-sm p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-form-title"
    >
      <div 
        ref={modalRef}
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-in rounded-2xl bg-brand-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-brand-navy p-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-orange">
              Capacity Request
            </p>
            <h2 id="quote-form-title" className="mt-2 font-display text-2xl font-extrabold text-white">
              Send Riverway the lane details.
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Origin, destination, freight type, and timing help operations route the request cleanly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-brand-navy">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-brand-charcoal mb-2">Quote request received.</h3>
              <p className="text-gray-600 mb-6">
                Operations has the lane details and will follow up using the contact information provided.
              </p>
              <button
                onClick={onClose}
                className="min-h-[48px] rounded-md bg-brand-navy px-8 py-3 font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-navy-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-brand-charcoal">Your name *</label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Morgan Reyes"
                    autoComplete="name"
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-colors focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1 font-medium">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-bold text-brand-charcoal">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Gulf Coast Pipe Supply"
                    autoComplete="organization"
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-colors focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.company ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.company && <p className="text-red-600 text-xs mt-1 font-medium">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-brand-charcoal">Work email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="dispatch@yourcompany.com"
                    autoComplete="email"
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-colors focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-brand-charcoal">Best callback number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Direct line or mobile"
                    autoComplete="tel"
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-colors focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="freightType" className="mb-1.5 block text-sm font-bold text-brand-charcoal">Freight type *</label>
                <select
                  id="freightType"
                  name="freightType"
                  value={formData.freightType}
                  onChange={handleChange}
                  className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-colors focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.freightType ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                >
                  <option value="">Choose flatbed freight type</option>
                  <option value="steel">Steel Products</option>
                  <option value="pipe">Pipe & Tubing</option>
                  <option value="construction">Construction Materials</option>
                  <option value="industrial">General Industrial</option>
                  <option value="other">Other Flatbed</option>
                </select>
                {errors.freightType && <p className="text-red-600 text-xs mt-1 font-medium">{errors.freightType}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="origin" className="mb-1.5 block text-sm font-bold text-brand-charcoal">Origin *</label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="Houston, TX"
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-colors focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.origin ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.origin && <p className="text-red-600 text-xs mt-1 font-medium">{errors.origin}</p>}
                </div>
                <div>
                  <label htmlFor="destination" className="mb-1.5 block text-sm font-bold text-brand-charcoal">Destination *</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Birmingham, AL"
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-colors focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.destination ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  />
                  {errors.destination && <p className="text-red-600 text-xs mt-1 font-medium">{errors.destination}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="mb-1.5 block text-sm font-bold text-brand-charcoal">Load details</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="48k lbs pipe, 40 ft length, pickup window, tarp/chain/strap notes..."
                  className="w-full resize-none rounded-md border border-gray-200 bg-white px-4 py-3 outline-none transition-colors focus:border-brand-navy focus:ring-2 focus:ring-brand-navy"
                />
              </div>

              {status === 'error' && (
                <div className="rounded-md border border-red-200 bg-red-50 p-4">
                  <p className="text-red-700 text-sm mb-2 font-medium">
                    The form did not send. Email operations directly with the lane and freight details.
                  </p>
                  <a 
                    href="mailto:operations@riverwaylogistics.com?subject=Quote Request"
                    className="text-red-700 underline text-sm font-bold hover:text-red-800"
                  >
                    Click here to email us directly
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-glow min-h-[52px] w-full rounded-md bg-brand-orange py-4 font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-orange-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending lane details...' : 'Send Lane Details'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
