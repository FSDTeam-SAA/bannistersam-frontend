'use client';


import { useMemo, useState } from 'react';
import { ChevronLeft, Info } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

type PropertyType = 'residential' | 'commercial';
type TransactionType = 'rent' | 'sale';

type DealSignal = 'distressed' | 'below-market' | 'quick-sale' | 'motivated-seller';
type IdealFor = 'end-use' | 'investment' | 'both';

type PropertyStatus = {
  occupancy?: 'all' | 'vacant' | 'tenanted';
  completion?: 'all' | 'ready' | 'off-plan';
  ownership?: 'all' | 'freehold' | 'leasehold';
};

type FormData = {
  // Top fields
  location: string;

  expectedPrice: string;
  negotiable: boolean;

  // SALE only (Image 1/2)
  idealFor: IdealFor;
  dealSignals: DealSignal[];
  dldCalculated: string;

  // RENT only (Image 3/4)
  depositAmount: string;
  priceType: 'monthly' | 'annually';
  serviceCharges: string;

  // Types
  configuration: string;
  selectedSubType: string;
  positionType: string; // residential only

  // Status
  propertyStatus: PropertyStatus;
  availableFrom: string; // rent only
  occupancyRent: 'vacant' | 'tenanted'; // rent only

  // Residential only (both sale & rent on images)
  bedrooms: string;
  bathrooms: string;

  // Additional details
  bua: string;
  buaUnit: 'sqft' | 'sqm';
  plotSize: string;
  parkingSpaces: string;
  parkingType: string;
  features: string;
  propertyCondition: string;
  furnishing: string;
  chequePreference: string; // rent only
  amenities: string;
  viewingOption: string;

  // Buyer profile (sale)
  financeMethod: string[]; // cash/mortgage/payment-plan
  targetClosingDate: string;
  urgencyLevelSale: string;

  // Tenant info (rent)
  keyMoney: 'yes' | 'no';
  keyMoneyType: string;
  tenantPreference: string;
  preferredLeaseLength: string;
  moveInDate: string;
  urgencyLevelRent: string;

  // Keywords
  keywords: string;

  // Private listing
  privateListingOffMarket: boolean;

  // Contact
  name: string;
  email: string;
  phone: string;
  notes: string;

  // Listing intent
  agentsCount: string;

  // Seller commission stance (sale)
  sellerCommissionStance: string;
};

const residentialSubTypes = [
  { id: 'apartment', label: 'Apartment', icon: '🏢' },
  { id: 'villa', label: 'Villa', icon: '🏡' },
  { id: 'townhouse', label: 'Townhouse', icon: '🏘️' },
  { id: 'land', label: 'Land', icon: '🌳' },
];

const commercialSubTypes = [
  { id: 'office', label: 'Office', icon: '🏢' },
  { id: 'retail', label: 'Retail / Shop', icon: '🛍️' },
  { id: 'warehouse', label: 'Warehouse', icon: '📦' },
  { id: 'showroom', label: 'Showroom', icon: '🎪' },
  { id: 'restaurant', label: 'Restaurant / Cafe', icon: '🍽️' },
  { id: 'industrial', label: 'Industrial', icon: '🏭' },
  { id: 'mixed', label: 'Mixed Use', icon: '🔄' },
  { id: 'commercial-land', label: 'Commercial Land', icon: '🌍' },
];

const positionTypes = ['Standard Apartment', 'Penthouse', 'Duplex', 'Serviced Apartment'];

export default function PropertyListingForm() {
  const [propertyType, setPropertyType] = useState<PropertyType>('residential');
  const [transactionType, setTransactionType] = useState<TransactionType>('sale');

  const isResidential = propertyType === 'residential';
  const isCommercial = propertyType === 'commercial';
  const isSale = transactionType === 'sale';
  const isRent = transactionType === 'rent';

  const subTypes = useMemo(() => (isResidential ? residentialSubTypes : commercialSubTypes), [isResidential]);

  const [formData, setFormData] = useState<FormData>({
    location: '',

    expectedPrice: '',
    negotiable: true,

    idealFor: 'end-use',
    dealSignals: ['distressed', 'below-market', 'quick-sale', 'motivated-seller'],
    dldCalculated: '100,000',

    depositAmount: '',
    priceType: 'monthly',
    serviceCharges: '',

    configuration: '',
    selectedSubType: 'apartment',
    positionType: 'Standard Apartment',

    propertyStatus: { occupancy: 'all', completion: 'all', ownership: 'all' },
    availableFrom: 'q1-2026',
    occupancyRent: 'vacant',

    bedrooms: 'any',
    bathrooms: 'any',

    bua: '',
    buaUnit: 'sqft',
    plotSize: '',
    parkingSpaces: 'any',
    parkingType: 'any',
    features: 'type-here',
    propertyCondition: 'all',
    furnishing: 'any',
    chequePreference: 'any',
    amenities: 'multi-select',
    viewingOption: 'multi-select',

    financeMethod: ['cash'],
    targetClosingDate: 'q1-2026',
    urgencyLevelSale: 'quick-sale',

    keyMoney: 'no',
    keyMoneyType: '',
    tenantPreference: '',
    preferredLeaseLength: '1 year',
    moveInDate: 'march-1-2026',
    urgencyLevelRent: 'ready-to-move',

    keywords: '',
    privateListingOffMarket: true,

    name: '',
    email: '',
    phone: '',
    notes: '',

    agentsCount: '1-agent',
    sellerCommissionStance: 'yes',
  });

  const selectedAccent = 'bg-[#f58d86] text-white border border-[#f58d86] rounded-[8px]';
  const ghost = 'bg-white text-[#4B4B4B] border border-[#CAD5E2] rounded-[8px]';
  const labelClass = 'mb-2 block text-sm font-medium text-[#535965]';
  const controlClass = 'h-11 border border-[#CAD5E2] bg-white text-[14px] font-medium text-[#4B4B4B] rounded-[8px]';

  const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((p) => ({ ...p, [key]: value }));
  };

  const resetForTabs = (nextProperty: PropertyType, nextTxn: TransactionType) => {
    const nextIsRes = nextProperty === 'residential';
    const nextIsSale = nextTxn === 'sale';

    setFormData((p) => ({
      ...p,
      selectedSubType: nextIsRes ? 'apartment' : 'office',
      positionType: 'Standard Apartment',
      configuration: '',
      // keep shared values, but clear non-applicable fields for less “jump”
      depositAmount: nextIsSale ? '' : p.depositAmount,
      serviceCharges: nextIsSale ? '' : p.serviceCharges,
      dldCalculated: nextIsSale ? p.dldCalculated : p.dldCalculated,
      tenantPreference: nextIsSale ? '' : p.tenantPreference,
      financeMethod: nextIsSale ? p.financeMethod : p.financeMethod,
      propertyStatus: { occupancy: 'all', completion: 'all', ownership: 'all' },
    }));
  };

  const onPropertyTypeChange = (type: PropertyType) => {
    setPropertyType(type);
    resetForTabs(type, transactionType);
  };

  const onTransactionTypeChange = (type: TransactionType) => {
    setTransactionType(type);
    resetForTabs(propertyType, type);
  };

  const toggleDealSignal = (s: DealSignal) => {
    setFormData((p) => {
      const exists = p.dealSignals.includes(s);
      return { ...p, dealSignals: exists ? p.dealSignals.filter((x) => x !== s) : [...p.dealSignals, s] };
    });
  };

  return (
    <div className="bg-[#F8F9FA]">
      {/* Top tabs */}
      <div className="pt-4 pb-14">
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <div className="grid w-full max-w-[380px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-md">
            <button
              type="button"
              onClick={() => onPropertyTypeChange('residential')}
              className={`h-10 rounded-[8px] text-[14px] font-medium transition ${
                isResidential ? 'bg-[#f58d86] text-white' : 'text-[#30343a]'
              }`}
            >
              Residential
            </button>
            <button
              type="button"
              onClick={() => onPropertyTypeChange('commercial')}
              className={`h-10 rounded-[8px] text-[14px] font-medium transition ${
                isCommercial ? 'bg-[#f58d86] text-white' : 'text-[#30343a]'
              }`}
            >
              Commercial
            </button>
          </div>

          <div className="grid w-full max-w-[260px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => onTransactionTypeChange('sale')}
              className={`h-9 rounded-[8px] text-[14px] font-medium transition ${
                isSale ? 'bg-[#f58d86] text-white' : 'text-[#30343a]'
              }`}
            >
              Sale
            </button>
            <button
              type="button"
              onClick={() => onTransactionTypeChange('rent')}
              className={`h-9 rounded-[8px] text-[14px] font-medium transition ${
                isRent ? 'bg-[#f58d86] text-white' : 'text-[#30343a]'
              }`}
            >
              Rent
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto overflow-hidden rounded-[8px]">
        {/* Header */}
        <div className="rounded-tl-[8px] rounded-tr-[8px] bg-[#F88379] px-5 py-6 text-white">
          <button
            type="button"
            className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-white/90 underline-offset-2 hover:underline"
          >
            <ChevronLeft className="h-4 w-4" />
            Go Back
          </button>
          <h1 className="text-4xl font-semibold leading-tight">
            {`List Your Property for ${isRent ? 'Rent' : 'Sale'}`}
          </h1>
          <p className="mt-1 text-sm text-white/90">
            Share your property details to connect with {isRent ? 'verified tenants' : 'serious buyers'}
          </p>
        </div>

        <form className="space-y-7 bg-white px-5 py-6 text-[#3d4350]">
          {/* Top fields (exact like images) */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label className={labelClass}>{isRent ? 'Preferred Locations *' : 'Location *'}</Label>
              <Select value={formData.location} onValueChange={(v) => setField('location', v)}>
                <SelectTrigger className={controlClass}>
                  <SelectValue placeholder={isRent ? 'Area, community, cluster or building' : 'Area, community, cluster or building'} />
                </SelectTrigger>
                <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white ">
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="suburbs">Suburbs</SelectItem>
                  <SelectItem value="marina">Marina</SelectItem>
                </SelectContent>
              </Select>

              {isRent && <p className="mt-2 text-xs text-[#6f7783]">You can select multiple locations</p>}

              {/* SALE: Ideal for row (left) */}
              {isSale && (
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#6f7783]">Ideal for *</span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 rounded-[8px] border border-[#CAD5E2] bg-[#F1F5F9] p-1">
                    {[
                      { k: 'end-use', t: 'End-Use' },
                      { k: 'investment', t: 'Investment' },
                      { k: 'both', t: 'Both' },
                    ].map((x) => (
                      <button
                        key={x.k}
                        type="button"
                        onClick={() => setField('idealFor', x.k as IdealFor)}
                        className={`rounded-[8px] px-3 py-2 text-xs font-medium ${
                          formData.idealFor === x.k ? 'bg-white' : ''
                        }`}
                      >
                        {x.t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
             <div className=' relative '>
               <Label className={labelClass}>{isSale ? 'Expected Price (AED) *' : 'Expected Price (AED) *'}</Label>
              <Input
                className={controlClass}
                placeholder={isRent ? 'e.g. 70,000' : 'e.g. 2,500,000'}
                value={formData.expectedPrice}
                onChange={(e) => setField('expectedPrice', e.target.value)}
              />
              {/* Negotiable */}
              <div className="mt-2 flex items-center justify-end gap-2 text-xs text-[#6f7783] absolute top-[50%] translate-y-[-30%] right-2">
                <span>Negotiable</span>
                <button
                  type="button"
                  onClick={() => setField('negotiable', true)}
                  className={`px-3 py-1 text-xs font-semibold ${formData.negotiable ? selectedAccent : ghost}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setField('negotiable', false)}
                  className={`px-3 py-1 text-xs font-semibold ${!formData.negotiable ? selectedAccent : ghost}`}
                >
                  No
                </button>
              </div>
             </div>


              {/* RENT: Monthly/Annually + Service charges (same row like image) */}
              {isRent && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="inline-flex overflow-hidden rounded-[8px] border border-[#CAD5E2]">
                    <button
                      type="button"
                      onClick={() => setField('priceType', 'monthly')}
                      className={`px-4 py-1 text-sm font-medium ${
                        formData.priceType === 'monthly' ? 'bg-[#f58d86] text-white' : 'bg-white text-[#3d4350]'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => setField('priceType', 'annually')}
                      className={`px-4 py-1 text-sm font-medium ${
                        formData.priceType === 'annually' ? 'bg-[#f58d86] text-white' : 'bg-white text-[#3d4350]'
                      }`}
                    >
                      Annually
                    </button>
                  </div>

                  <div>
                    <Label className="mb-2 block text-xs font-medium text-[#6f7783]">Service charges</Label>
                    <Input
                      className={controlClass}
                      placeholder="22.50 p/sqft"
                      value={formData.serviceCharges}
                      onChange={(e) => setField('serviceCharges', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* SALE: Deal signals + DLD calculated (right side like image) */}
              {isSale && (
                <div className="mt-3 space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#6f7783]">
                    <span>Deals signals*</span>

                    {[
                      { k: 'distressed', t: 'Distressed' },
                      { k: 'below-market', t: 'Below Market' },
                      { k: 'quick-sale', t: 'Quick Sale' },
                      { k: 'motivated-seller', t: 'Motivated Seller' },
                    ].map((x) => (
                      <label key={x.k} className="inline-flex items-center gap-1">
                        <input
                          type="checkbox"
                          checked={formData.dealSignals.includes(x.k as DealSignal)}
                          onChange={() => toggleDealSignal(x.k as DealSignal)}
                          
                        />
                        {x.t}
                      </label>
                    ))}
                  </div>

                  <div>
                    <Label className={labelClass}>4% DLD calculated*</Label>
                    <Input
                      className={controlClass}
                      placeholder="100,000"
                      value={formData.dldCalculated}
                      onChange={(e) => setField('dldCalculated', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RENT: Security deposit (left row like image) */}
          {isRent && (
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className={labelClass}>Security Deposit amount</Label>
                <Input
                  className={controlClass}
                  placeholder="e.g. 10,000"
                  value={formData.depositAmount}
                  onChange={(e) => setField('depositAmount', e.target.value)}
                />
              </div>
              <div />
            </div>
          )}

          {/* Property Type */}
          <section className="space-y-4">
            <h2 className="text-[31px] font-semibold leading-none text-[#434853]">
              Property Type* ( {isResidential ? 'Residential' : 'Commercial'} )
            </h2>

            <div className={`grid gap-3 ${isResidential ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-5'}`}>
              {subTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setField('selectedSubType', type.id)}
                  className={`rounded-[8px] border border-[#CAD5E2] px-4 py-4 text-center text-sm font-medium transition ${
                    formData.selectedSubType === type.id ? 'bg-[#fde7e5] text-[#3b3b3b]' : 'bg-white text-[#3b3b3b]'
                  }`}
                >
                  <span className="mb-1 block text-base">{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>

            {/* Residential: Position type (both sale & rent) */}
            {isResidential && (
              <div>
                <Label className={labelClass}>Position type</Label>
                <div className="grid gap-3 md:grid-cols-4">
                  {positionTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setField('positionType', item)}
                      className={`rounded-[8px] border border-[#CAD5E2] px-4 py-2 text-sm font-medium ${
                        formData.positionType === item ? 'bg-[#fde7e5]' : 'bg-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[8px] border border-[#CAD5E2] bg-[#fde7e5] px-3 py-2 text-xs text-[#e0776f]">
              Select configuration : {formData.selectedSubType} - {isResidential ? formData.positionType : 'Full Floor'}
            </div>

            <div>
              <Label className={labelClass}>Configuration</Label>
              <Input
                className={controlClass}
                placeholder="Type Configuration"
                value={formData.configuration}
                onChange={(e) => setField('configuration', e.target.value)}
              />
            </div>
          </section>

          {/* Property Status */}
          <section className="space-y-4">
            <h3 className="text-[31px] font-semibold leading-none text-[#434853]">Property Status*</h3>

            {/* RENT status (image 3/4) */}
            {isRent ? (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>Occupancy Status *</Label>
                  <div className="grid grid-cols-2 rounded-[8px] border border-[#CAD5E2] bg-[#F1F5F9] p-1">
                    <button
                      type="button"
                      onClick={() => setField('occupancyRent', 'vacant')}
                      className={`rounded-[8px] px-4 py-2 text-sm font-medium ${
                        formData.occupancyRent === 'vacant' ? 'bg-white' : ''
                      }`}
                    >
                      Vacant
                    </button>
                    <button
                      type="button"
                      onClick={() => setField('occupancyRent', 'tenanted')}
                      className={`rounded-[8px] px-4 py-2 text-sm font-medium ${
                        formData.occupancyRent === 'tenanted' ? 'bg-white' : ''
                      }`}
                    >
                      Tenanted
                    </button>
                  </div>
                </div>

                <div>
                  <Label className={labelClass}>Available From*</Label>
                  <Select value={formData.availableFrom} onValueChange={(v) => setField('availableFrom', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                      <SelectItem value="q1-2026">Q1 2026</SelectItem>
                      <SelectItem value="q2-2026">Q2 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              /* SALE status (image 1/2) */
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: 'Occupancy Status',
                    key: 'occupancy',
                    values: [
                      { v: 'all', t: 'All' },
                      { v: 'vacant', t: 'Vacant' },
                      { v: 'tenanted', t: 'Tenanted' },
                    ],
                  },
                  {
                    title: 'Completion Status',
                    key: 'completion',
                    values: [
                      { v: 'all', t: 'All' },
                      { v: 'ready', t: 'Ready' },
                      { v: 'off-plan', t: 'Off- plan' },
                    ],
                  },
                  {
                    title: 'Ownership Tenure',
                    key: 'ownership',
                    values: [
                      { v: 'all', t: 'All' },
                      { v: 'freehold', t: 'Freehold' },
                      { v: 'leasehold', t: 'Leasehold' },
                    ],
                  },
                ].map((group) => (
                  <div key={group.title}>
                    <Label className={labelClass}>{group.title}</Label>
                    <div className="grid grid-cols-3 rounded-[8px] border border-[#CAD5E2] bg-[#F1F5F9] p-1">
                      {group.values.map((item) => (
                        <button
                          key={item.v}
                          type="button"
                          onClick={() =>
                            setField('propertyStatus', {
                              ...formData.propertyStatus,
                              [group.key]: item.v,
                            } as PropertyStatus)
                          }
                          className={`rounded-[8px] px-2 py-2 text-xs font-medium ${
                            (formData.propertyStatus as any)[group.key] === item.v ? 'bg-white' : ''
                          }`}
                        >
                          {item.t}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bedrooms/Bathrooms (Residential on BOTH sale & rent images) */}
            {isResidential && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>Bedrooms *</Label>
                  <Select value={formData.bedrooms} onValueChange={(v) => setField('bedrooms', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={labelClass}>Bathrooms *</Label>
                  <Select value={formData.bathrooms} onValueChange={(v) => setField('bathrooms', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </section>

          {/* Additional Details (same across) */}
          <section className="space-y-4">
            <h3 className="text-[31px] font-semibold leading-none text-[#434853]">Additional Details</h3>

            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <Label className={labelClass}>Built-Up Area(BUA)</Label>
                <Input
                  className={controlClass}
                  placeholder="Enter area"
                  value={formData.bua}
                  onChange={(e) => setField('bua', e.target.value)}
                />
                <div className="mt-2 inline-flex overflow-hidden rounded-[8px] border border-[#CAD5E2]">
                  <button
                    type="button"
                    onClick={() => setField('buaUnit', 'sqft')}
                    className={`px-3 py-1 text-xs font-semibold ${formData.buaUnit === 'sqft' ? 'bg-[#f58d86] text-white' : 'bg-white text-[#3d4350]'}`}
                  >
                    Sq. Ft
                  </button>
                  <button
                    type="button"
                    onClick={() => setField('buaUnit', 'sqm')}
                    className={`px-3 py-1 text-xs font-semibold ${formData.buaUnit === 'sqm' ? 'bg-[#f58d86] text-white' : 'bg-white text-[#3d4350]'}`}
                  >
                    Sq. M
                  </button>
                </div>
              </div>

              <div>
                <Label className={labelClass}>Plot Size</Label>
                <Input
                  className={controlClass}
                  placeholder="Enter size"
                  value={formData.plotSize}
                  onChange={(e) => setField('plotSize', e.target.value)}
                />
              </div>

              <div>
                <Label className={labelClass}>Parking Spaces (Min)</Label>
                <Select value={formData.parkingSpaces} onValueChange={(v) => setField('parkingSpaces', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className={labelClass}>Parking Type*</Label>
                <Select value={formData.parkingType} onValueChange={(v) => setField('parkingType', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="covered">Covered</SelectItem>
                    <SelectItem value="uncovered">Uncovered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <Label className={labelClass}>Features</Label>
                <Select value={formData.features} onValueChange={(v) => setField('features', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                    <SelectItem value="type-here">Type here</SelectItem>
                    <SelectItem value="pool">Pool</SelectItem>
                    <SelectItem value="balcony">Balcony</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className={labelClass}>Property condition</Label>
                <Select value={formData.propertyCondition} onValueChange={(v) => setField('propertyCondition', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className={labelClass}>Furnishing</Label>
                <Select value={formData.furnishing} onValueChange={(v) => setField('furnishing', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="furnished">Furnished</SelectItem>
                    <SelectItem value="unfurnished">Unfurnished</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className={labelClass}>
                  {isRent ? 'Cheque Preference (Min Acceptable)*' : 'Viewing option'}
                </Label>
                <Select
                  value={isRent ? formData.chequePreference : formData.viewingOption}
                  onValueChange={(v) => setField(isRent ? 'chequePreference' : 'viewingOption', v)}
                >
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1 Cheque</SelectItem>
                    <SelectItem value="2">2 Cheques</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className={labelClass}>Choose Amenities</Label>
                <Select value={formData.amenities} onValueChange={(v) => setField('amenities', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                    <SelectItem value="multi-select">Multi select</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className={labelClass}>Viewing option</Label>
                <Select value={formData.viewingOption} onValueChange={(v) => setField('viewingOption', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                    <SelectItem value="multi-select">Multi select</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* RENT: Preferred Tenant Information (image 3/4) */}
          {isRent && (
            <section className="space-y-4">
              <h3 className="text-[31px] font-semibold leading-none text-[#434853]">Preferred Tenant Information*</h3>

              {/* Commercial rent Key Money (image 4) */}
              {isCommercial && (
                <div>
                  <Label className={labelClass}>Key Money*</Label>
                  <div className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="key-money-rent"
                        checked={formData.keyMoney === 'yes'}
                        onChange={() => setField('keyMoney', 'yes')}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="key-money-rent"
                        checked={formData.keyMoney === 'no'}
                        onChange={() => setField('keyMoney', 'no')}
                      />
                      No
                    </label>
                    <Input
                      className="h-9 rounded-[8px] border border-[#CAD5E2]"
                      placeholder="Type"
                      value={formData.keyMoneyType}
                      onChange={(e) => setField('keyMoneyType', e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>Tenant Preference*</Label>
                  <Input
                    className={controlClass}
                    placeholder="e.g. British couple, family of 4"
                    value={formData.tenantPreference}
                    onChange={(e) => setField('tenantPreference', e.target.value)}
                  />
                </div>

                <div>
                  <Label className={labelClass}>Preferred Lease Length*</Label>
                  <Select value={formData.preferredLeaseLength} onValueChange={(v) => setField('preferredLeaseLength', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                      <SelectItem value="1 year">1 year ( Standard )</SelectItem>
                      <SelectItem value="2 years">2 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>Move in Date*</Label>
                  <Select value={formData.moveInDate} onValueChange={(v) => setField('moveInDate', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                      <SelectItem value="march-1-2026">March 1st 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={labelClass}>Urgency Level*</Label>
                  <Select value={formData.urgencyLevelRent} onValueChange={(v) => setField('urgencyLevelRent', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                      <SelectItem value="ready-to-move">Ready to move in Immediately</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>
          )}

          {/* SALE: Buyer Profile (image 1/2) */}
          {isSale && (
            <section className="space-y-4">
              <h3 className="text-[31px] font-semibold leading-none text-[#434853]">Buyer Profile*</h3>

              <div>
                <Label className={labelClass}>Finance Method *</Label>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    { k: 'cash', t: 'Cash Buyer' },
                    { k: 'mortgage', t: 'Mortgage Buyer' },
                    { k: 'payment-plan', t: 'Payment Plan ( Off-plan )' },
                  ].map((x) => (
                    <label
                      key={x.k}
                      className="flex items-center gap-2 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={formData.financeMethod.includes(x.k)}
                        onChange={() =>
                          setField(
                            'financeMethod',
                            formData.financeMethod.includes(x.k)
                              ? formData.financeMethod.filter((v) => v !== x.k)
                              : [...formData.financeMethod, x.k]
                          )
                        }
                      />
                      {x.t}
                    </label>
                  ))}
                </div>
              </div>

              {/* Commercial sale Key Money (image 2) */}
              {isCommercial && (
                <div>
                  <Label className={labelClass}>Key Money*</Label>
                  <div className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="key-money-sale"
                        checked={formData.keyMoney === 'yes'}
                        onChange={() => setField('keyMoney', 'yes')}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="key-money-sale"
                        checked={formData.keyMoney === 'no'}
                        onChange={() => setField('keyMoney', 'no')}
                      />
                      No
                    </label>
                    <Input
                      className="h-9 rounded-[8px] border border-[#CAD5E2]"
                      placeholder="Type"
                      value={formData.keyMoneyType}
                      onChange={(e) => setField('keyMoneyType', e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>Target Closing Date*</Label>
                  <Select value={formData.targetClosingDate} onValueChange={(v) => setField('targetClosingDate', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                      <SelectItem value="q1-2026">Q1 2026</SelectItem>
                      <SelectItem value="q2-2026">Q2 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={labelClass}>Urgency Level*</Label>
                  <Select value={formData.urgencyLevelSale} onValueChange={(v) => setField('urgencyLevelSale', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2]">
                      <SelectItem value="quick-sale">Quick Sale</SelectItem>
                      <SelectItem value="actively-looking">Actively Looking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>
          )}

          {/* Keywords */}
          <section>
            <Label className={labelClass}>Additional Keywords or Requirements*</Label>
            <Input
              className={controlClass}
              placeholder={isSale ? 'e.g. High floor apartment, sea view, near metro' : 'e.g. near metro'}
              value={formData.keywords}
              onChange={(e) => setField('keywords', e.target.value)}
            />
          </section>

          {/* Private listing — show on ALL 4 forms (you asked) */}
          <section className="flex items-center justify-between">
            <h3 className="text-[20px] font-semibold text-[#434853]">Private listing (off Market)</h3>
            <Switch checked={formData.privateListingOffMarket} onCheckedChange={(v) => setField('privateListingOffMarket', v)} />
          </section>

          {/* Contact Details */}
          <section className="space-y-3">
            <h3 className="text-[20px] font-semibold text-[#434853]">Contact Details</h3>

            <Input className={controlClass} placeholder="Your Full Name" value={formData.name} onChange={(e) => setField('name', e.target.value)} />
            <Input className={controlClass} placeholder="Your Email" type="email" value={formData.email} onChange={(e) => setField('email', e.target.value)} />
            <Input className={controlClass} placeholder="Your Number" value={formData.phone} onChange={(e) => setField('phone', e.target.value)} />

            <Textarea
              placeholder="Enter your notes here"
              value={formData.notes}
              onChange={(e) => setField('notes', e.target.value)}
              className="min-h-28 rounded-[8px] border border-[#CAD5E2] bg-white"
            />
          </section>

          {/* Listing Intent Notice */}
          <section className="space-y-4">
            <div className="rounded-[8px] border border-[#CAD5E2] bg-[#fff7df] p-4">
              <div className="mb-2 flex items-start gap-2 text-[#b7801f]">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold">Listing Intent Notice</h3>
                  <p className="text-sm">
                    A property can only be marketed under a limited number of valid DLD listing permits. You may appoint up to a maximum of three agents, each holding a valid permit.
                  </p>
                </div>
              </div>

              <Label className="mb-1 block text-xs font-semibold text-[#71674f]">How many agents will represent this property? *</Label>

              <Select value={formData.agentsCount} onValueChange={(v) => setField('agentsCount', v)}>
                <SelectTrigger className={controlClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                  <SelectItem value="1-agent">1 Agent ( Exclusive Recommended )</SelectItem>
                  <SelectItem value="2-agents">2 Agents</SelectItem>
                  <SelectItem value="3-agents">3 Agents</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sale only: Seller Commission Stance */}
            {isSale && (
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-[#434853]">Seller Commission Stance *</h4>
                  <p className="text-xs text-[#6f7783]">Are you offering a seller-paid commission or fee? (Visible to agents)</p>
                </div>

                {[
                  { v: 'yes', t: 'Yes - Happy to pay a seller commission or a fixed fee' },
                  { v: 'no', t: 'No - agent will need to be covered by buyer commission only' },
                  { v: 'negotiable', t: 'Negotiable - open to discussion' },
                ].map((x) => (
                  <label key={x.v} className="flex items-center gap-2 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-sm">
                    <input
                      type="radio"
                      name="seller-commission"
                      checked={formData.sellerCommissionStance === x.v}
                      onChange={() => setField('sellerCommissionStance', x.v)}
                    />
                    {x.t}
                  </label>
                ))}
              </div>
            )}

            <div className="rounded-[8px] border border-[#CAD5E2] bg-[#fff7df] p-4">
              <div className="flex items-start gap-2 text-[#b7801f]">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-sm">
                  <span className="font-semibold">Commission Notice:</span> As a {isRent ? 'landlord' : 'seller'}, you may choose to offer a {isRent ? 'landlord-paid' : 'seller-paid'} commission or incentive to support the {isRent ? 'leasing' : 'sale'} of your property.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom buttons */}
          <div className="grid gap-4 pb-2 md:grid-cols-2">
            <button
              type="button"
              className="h-11 rounded-[8px] border border-[#CAD5E2] bg-[#d7d9dd] text-sm font-medium text-[#2e3239]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-11 rounded-[8px] bg-[#F88379] text-sm font-medium text-white hover:bg-[#ef746b]"
            >
              Post Listing Intent and Find Agents
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
