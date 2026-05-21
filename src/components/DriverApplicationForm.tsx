import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import { X, Truck } from 'lucide-react';

interface DriverApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  cdl_number?: string;
  cdl_state?: string;
  experience?: string;
  violations?: string;
}

const DriverApplicationForm = ({ isOpen, onClose }: DriverApplicationFormProps) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cdl_number: '',
    cdl_state: '',
    experience: '',
    violations: '',
    notes: '',
    endorsements: [] as string[]
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setStatus('idle');
    setErrors({});
    setFormData({
      name: '',
      phone: '',
      email: '',
      cdl_number: '',
      cdl_state: '',
      experience: '',
      violations: '',
      notes: '',
      endorsements: []
    });
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatPhoneNumber(value) }));
    } else if (name === 'cdl_state') {
      setFormData(prev => ({ ...prev, cdl_state: value.toUpperCase().slice(0, 2) }));
    } else if (name === 'cdl_number') {
      setFormData(prev => ({ ...prev, cdl_number: value.toUpperCase() }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      endorsements: checked 
        ? [...prev.endorsements, value]
        : prev.endorsements.filter(v => v !== value)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.cdl_number.trim() || formData.cdl_number.trim().length < 5) {
      newErrors.cdl_number = 'Please enter a valid CDL number';
    }

    const validStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC'];
    if (!validStates.includes(formData.cdl_state)) {
      newErrors.cdl_state = 'Please enter a valid 2-letter state code';
    }

    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    if (!formData.violations) {
      newErrors.violations = 'Please answer this question';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    const accessKey = import.meta.env.VITE_WEB3FORMS_DRIVER_KEY;

    if (!accessKey) {
      setStatus('error');
      return;
    }

    const submissionData = {
      access_key: accessKey,
      subject: `New Driver Application: ${formData.name}`,
      from_name: formData.name,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      cdl_number: formData.cdl_number,
      cdl_state: formData.cdl_state,
      experience: formData.experience,
      endorsements: formData.endorsements.length > 0 ? formData.endorsements.join(', ') : 'None',
      violations: formData.violations,
      notes: formData.notes || 'None provided',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          cdl_number: '',
          cdl_state: '',
          experience: '',
          violations: '',
          notes: '',
          endorsements: []
        });
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
      className="fixed inset-0 bg-brand-navy-dark/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="driver-form-title"
    >
      <div
        ref={modalRef}
        className="max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in rounded-2xl bg-brand-cream shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-white/10 bg-brand-navy p-6 sm:items-center">
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-orange">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-orange">
                Driver Interest
              </p>
              <h2 id="driver-form-title" className="mt-1 font-display text-lg font-extrabold text-white sm:text-2xl">
                Start the flatbed driver conversation.
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-md p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label="Close form"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-brand-navy">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-brand-charcoal mb-2">Driver details received.</h3>
              <p className="text-gray-600 mb-6">
                Riverway has your flatbed experience details and will use the contact information provided.
              </p>
              <button
                onClick={onClose}
                className="min-h-[48px] rounded-md bg-brand-navy px-8 py-3 font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-navy-light"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="driver-name" className="mb-1.5 block text-sm font-bold text-brand-charcoal">
                    Full Name *
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="driver-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-all focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    placeholder="Marcus Hill"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1 font-medium">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="driver-phone" className="mb-1.5 block text-sm font-bold text-brand-charcoal">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="driver-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-all focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    placeholder="Best callback number"
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="driver-email" className="mb-1.5 block text-sm font-bold text-brand-charcoal">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="driver-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-all focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  placeholder="marcus@yourmail.com"
                  autoComplete="email"
                />
                {errors.email && <p className="text-red-600 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="driver-cdl" className="mb-1.5 block text-sm font-bold text-brand-charcoal">
                    CDL Number *
                  </label>
                  <input
                    type="text"
                    id="driver-cdl"
                    name="cdl_number"
                    value={formData.cdl_number}
                    onChange={handleInputChange}
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-all focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.cdl_number ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    placeholder="CDL number as printed"
                  />
                  {errors.cdl_number && <p className="text-red-600 text-xs mt-1 font-medium">{errors.cdl_number}</p>}
                </div>
                <div>
                  <label htmlFor="driver-cdl-state" className="mb-1.5 block text-sm font-bold text-brand-charcoal">
                    CDL State *
                  </label>
                  <input
                    type="text"
                    id="driver-cdl-state"
                    name="cdl_state"
                    value={formData.cdl_state}
                    onChange={handleInputChange}
                    maxLength={2}
                    className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 uppercase outline-none transition-all focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.cdl_state ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    placeholder="TX"
                  />
                  {errors.cdl_state && <p className="text-red-600 text-xs mt-1 font-medium">{errors.cdl_state}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="driver-experience" className="mb-1.5 block text-sm font-bold text-brand-charcoal">
                  Years of Flatbed Experience *
                </label>
                <select
                  id="driver-experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-all focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.experience ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                >
                  <option value="">Choose flatbed experience</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
                {errors.experience && <p className="text-red-600 text-xs mt-1 font-medium">{errors.experience}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-brand-charcoal">
                  Endorsements (check all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-md border border-gray-200 bg-white p-3 transition-colors hover:border-brand-navy">
                    <input 
                      type="checkbox" 
                      name="endorsements" 
                      value="Hazmat" 
                      checked={formData.endorsements.includes('Hazmat')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 border-2 border-gray-300 text-brand-navy focus:ring-brand-navy accent-brand-navy" 
                    />
                    <span className="text-sm text-brand-charcoal font-medium">Hazmat (H)</span>
                  </label>
                  <label className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-md border border-gray-200 bg-white p-3 transition-colors hover:border-brand-navy">
                    <input 
                      type="checkbox" 
                      name="endorsements" 
                      value="Tanker" 
                      checked={formData.endorsements.includes('Tanker')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 border-2 border-gray-300 text-brand-navy focus:ring-brand-navy accent-brand-navy" 
                    />
                    <span className="text-sm text-brand-charcoal font-medium">Tanker (N)</span>
                  </label>
                  <label className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-md border border-gray-200 bg-white p-3 transition-colors hover:border-brand-navy">
                    <input 
                      type="checkbox" 
                      name="endorsements" 
                      value="Doubles/Triples" 
                      checked={formData.endorsements.includes('Doubles/Triples')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 border-2 border-gray-300 text-brand-navy focus:ring-brand-navy accent-brand-navy" 
                    />
                    <span className="text-sm text-brand-charcoal font-medium">Doubles/Triples (T)</span>
                  </label>
                  <label className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-md border border-gray-200 bg-white p-3 transition-colors hover:border-brand-navy">
                    <input 
                      type="checkbox" 
                      name="endorsements" 
                      value="TWIC" 
                      checked={formData.endorsements.includes('TWIC')}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 border-2 border-gray-300 text-brand-navy focus:ring-brand-navy accent-brand-navy" 
                    />
                    <span className="text-sm text-brand-charcoal font-medium">TWIC Card</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="driver-violations" className="mb-1.5 block text-sm font-bold text-brand-charcoal">
                  Any accidents or violations in the last 3 years? *
                </label>
                <select
                  id="driver-violations"
                  name="violations"
                  value={formData.violations}
                  onChange={handleInputChange}
                  className={`w-full min-h-[48px] rounded-md border bg-white px-4 py-3 outline-none transition-all focus:border-brand-navy focus:ring-2 focus:ring-brand-navy ${errors.violations ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                >
                  <option value="">Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes (explain below)</option>
                </select>
                {errors.violations && <p className="text-red-600 text-xs mt-1 font-medium">{errors.violations}</p>}
              </div>

              <div>
                <label htmlFor="driver-notes" className="mb-1.5 block text-sm font-bold text-brand-charcoal">
                  Additional Information
                </label>
                <textarea
                  id="driver-notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full resize-none rounded-md border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-brand-navy focus:ring-2 focus:ring-brand-navy"
                  placeholder="Flatbed lanes, securement experience, current location, or questions for dispatch..."
                />
              </div>

              <p className="text-xs text-gray-500">
                By submitting this application, you authorize Riverway Logistics to verify your driving record through FMCSA and state DMV databases.
              </p>

              {status === 'error' && (
                <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  The form did not send. Please email your driver details to{' '}
                  <a href="mailto:operations@riverwaylogistics.com" className="underline font-bold">
                    operations@riverwaylogistics.com
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-glow min-h-[52px] w-full rounded-md bg-brand-orange py-4 font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-orange-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending driver details...' : 'Send Driver Details'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverApplicationForm;
