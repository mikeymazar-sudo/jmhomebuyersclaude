import { useState, useEffect } from 'react';

const propertyTypes = [
  'Single Family Home',
  'Townhouse',
  'Condo/Apartment',
  'Multi-Family (2-4 units)',
  'Mobile/Manufactured Home',
  'Vacant Land',
  'Other'
];

const bedroomOptions = ['1', '2', '3', '4', '5', '6+'];
const bathroomOptions = ['1', '1.5', '2', '2.5', '3', '3.5', '4+'];
const timeframeOptions = [
  'Less than 1 year ago',
  '1-3 years ago',
  '3-5 years ago',
  '5-10 years ago',
  'Over 10 years ago',
  'Never / Original',
  "I don't know"
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    acReplaced: '',
    roofReplaced: '',
    additionalInfo: '',
    hasMedia: false
  });

  const totalSteps = 4;

  useEffect(() => {
    setAnimateIn(true);
  }, [step]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }, 150);
  };

  const prevStep = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setStep(prev => Math.max(prev - 1, 1));
    }, 150);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch(step) {
      case 1:
        return formData.address && formData.city && formData.zipCode;
      case 2:
        return formData.propertyType && formData.bedrooms && formData.bathrooms;
      case 3:
        return true;
      case 4:
        return formData.name && formData.phone && formData.email;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-5">
        <div className="max-w-sm w-full text-center">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            You're All Set!
          </h2>
          <p className="text-lg text-slate-300 mb-2">
            Our AI is analyzing your property now.
          </p>
          <p className="text-slate-400 text-sm">
            Expect your <span className="text-amber-400 font-semibold">cash offer estimate</span> within 24 hours.
          </p>
          <div className="mt-8 p-5 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">What's Next?</span>
            </div>
            <p className="text-slate-300 text-sm">
              A JM Homebuyers specialist will contact you with your personalized cash offer.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-x-hidden">
      {/* Simplified background for mobile performance */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-4 py-6 pb-8">
        {/* Compact Header */}
        <header className="text-center mb-5">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              JM Homebuyers
            </h1>
          </div>
          <p className="text-amber-400/80 text-xs font-medium tracking-widest uppercase">
            South Florida Cash Home Buyers
          </p>
        </header>

        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white leading-tight mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get a <span className="text-amber-400">Cash Offer</span>
            <br />for Your Home
          </h2>
          <p className="text-slate-300 text-sm mb-4">
            Skip the hassle. No repairs, no fees, no waiting.
            <br />Close in as little as <span className="text-amber-400 font-semibold">7 days</span>.
          </p>

          {/* Mobile-friendly value props */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[
              { icon: '💰', label: 'Cash Offer' },
              { icon: '⚡', label: 'Quick Close' },
              { icon: '✓', label: 'As-Is Sale' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl py-3 px-2 border border-white/10">
                <div className="text-xl mb-1">{item.icon}</div>
                <div className="text-xs text-slate-300 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 shadow-xl">
          {/* Progress bar - simplified for mobile */}
          <div className="mb-5">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Compact step indicators */}
          <div className="flex justify-between mb-6 px-2">
            {['Location', 'Property', 'Details', 'Contact'].map((label, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                  i + 1 < step 
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white' 
                    : i + 1 === step 
                      ? 'bg-amber-400 text-slate-900' 
                      : 'bg-slate-700 text-slate-500'
                }`}>
                  {i + 1 < step ? '✓' : i + 1}
                </div>
                <span className={`text-[10px] mt-1 ${i + 1 === step ? 'text-amber-400' : 'text-slate-600'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Form steps */}
          <div className={`transition-all duration-150 ${animateIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Property Location
                </h3>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Street Address *</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="123 Main Street"
                    autoComplete="street-address"
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                  />
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <div className="col-span-3">
                    <label className="block text-xs text-slate-400 mb-1.5">City *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Miami"
                      autoComplete="address-level2"
                      className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs text-slate-400 mb-1.5">ZIP *</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      placeholder="33101"
                      autoComplete="postal-code"
                      className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Property Details
                </h3>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Property Type *</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                  >
                    <option value="" className="bg-slate-800">Select type</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type} className="bg-slate-800">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Bedrooms *</label>
                  <div className="flex flex-wrap gap-2">
                    {bedroomOptions.map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleInputChange('bedrooms', num)}
                        className={`flex-1 min-w-[48px] py-3 rounded-xl text-sm font-semibold transition-all active:scale-95 ${
                          formData.bedrooms === num
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20'
                            : 'bg-slate-800/50 text-slate-300 border border-slate-600/50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Bathrooms *</label>
                  <div className="flex flex-wrap gap-2">
                    {bathroomOptions.map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleInputChange('bathrooms', num)}
                        className={`flex-1 min-w-[48px] py-3 rounded-xl text-sm font-semibold transition-all active:scale-95 ${
                          formData.bathrooms === num
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20'
                            : 'bg-slate-800/50 text-slate-300 border border-slate-600/50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Condition <span className="text-slate-500 text-sm font-normal">(optional)</span>
                </h3>
                <p className="text-xs text-slate-400 -mt-2">Helps us make a better offer. Sell as-is—no repairs needed!</p>
                
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">AC/HVAC last serviced?</label>
                  <select
                    value={formData.acReplaced}
                    onChange={(e) => handleInputChange('acReplaced', e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                  >
                    <option value="" className="bg-slate-800">Select</option>
                    {timeframeOptions.map(time => (
                      <option key={time} value={time} className="bg-slate-800">{time}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Roof last serviced?</label>
                  <select
                    value={formData.roofReplaced}
                    onChange={(e) => handleInputChange('roofReplaced', e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                  >
                    <option value="" className="bg-slate-800">Select</option>
                    {timeframeOptions.map(time => (
                      <option key={time} value={time} className="bg-slate-800">{time}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Anything else we should know?</label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Pool, updates, repairs needed..."
                    rows={2}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 resize-none"
                  />
                </div>
                
                {/* Mobile-friendly file upload */}
                <button 
                  type="button"
                  onClick={() => handleInputChange('hasMedia', !formData.hasMedia)}
                  className={`w-full p-4 rounded-xl border border-dashed transition-all flex items-center justify-center gap-3 ${
                    formData.hasMedia 
                      ? 'border-amber-400/50 bg-amber-400/10' 
                      : 'border-slate-600/50 bg-slate-800/30'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.hasMedia ? 'bg-amber-400' : 'bg-slate-700/50'}`}>
                    {formData.hasMedia ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-left">
                    <p className={`text-sm font-medium ${formData.hasMedia ? 'text-amber-400' : 'text-slate-300'}`}>
                      {formData.hasMedia ? 'Photos Added ✓' : 'Add Photos/Videos'}
                    </p>
                    <p className="text-xs text-slate-500">Optional - tap to upload</p>
                  </div>
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Get Your Cash Offer
                </h3>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="John Smith"
                    autoComplete="name"
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Email *</label>
                  <input
                    type="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@example.com"
                    autoComplete="email"
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                  />
                </div>
                
                {/* Trust message */}
                <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-xs text-slate-300">
                    <span className="text-green-400 font-semibold">No obligation.</span> Get your cash offer and decide on your timeline.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation buttons - larger touch targets */}
          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-4 bg-slate-700/50 text-slate-300 rounded-xl font-medium active:scale-95 transition-all"
              >
                Back
              </button>
            )}
            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold text-base transition-all active:scale-[0.98] ${
                  canProceed()
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold text-base transition-all active:scale-[0.98] ${
                  canProceed()
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                Get My Cash Offer 💰
              </button>
            )}
          </div>
        </div>

        {/* Bottom trust badges - mobile */}
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secure & Confidential</span>
          </div>
          
          {/* Quick selling points */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <span>✓ No Repairs</span>
            <span>✓ No Fees</span>
            <span>✓ Close Fast</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-slate-600 text-xs">
          <p>© 2025 JM Homebuyers</p>
          <p className="mt-1">South Florida's Trusted Cash Home Buyers</p>
        </footer>
      </div>
    </div>
  );
}
