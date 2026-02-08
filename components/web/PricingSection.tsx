


// 'use client'

// import { Check } from 'lucide-react'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '../ui/button'

// interface PricingPlan {
//   id: string
//   name: string
//   price: number
//   period: string
//   description: string
//   isPopular?: boolean
//   features: string[]
//   disclaimer: string
//   type: 'agent' | 'brokerage'
// }

// /* ---------------- AGENT PLANS ---------------- */

// const agentPlans: PricingPlan[] = [
//   {
//     id: 'lite',
//     name: 'Lite',
//     price: 0,
//     period: 'Free',
//     description: 'Agent profile creation',
//     features: [
//       'Agent profile creation',
//       'Limited listings',
//       'No access to buyer or target requirements',
//       'No verified status',
//     ],
//     disclaimer: 'No Payment Upfront',
//     type: 'agent',
//   },
//   {
//     id: 'basic',
//     name: 'Basic',
//     price: 149,
//     period: '/mo',
//     description: 'Active agents building pipeline',
//     features: [
//       'Verified agent status',
//       'Increased listing visibility',
//       'Access to buyer & target requirements',
//       'Messaging and CRM tools',
//     ],
//     disclaimer: 'No Payment Upfront',
//     type: 'agent',
//   },
//   {
//     id: 'premium',
//     name: 'Premium',
//     price: 299,
//     period: '/mo',
//     description: 'Premium',
//     isPopular: true,
//     features: [
//       'Priority listing placement',
//       'Enhanced profile visibility',
//       'Full demand access',
//       'Priority support',
//     ],
//     disclaimer: 'No Payment Upfront',
//     type: 'agent',
//   },
//   {
//     id: 'elite',
//     name: 'Elite',
//     price: 499,
//     period: '/mo',
//     description: 'Add some lorem',
//     features: [
//       'Maximum visibility and prominence',
//       'Maximum visibility and prominence',
//       'Multi-level team visibility and management',
//       'Priority feature rollouts',
//     ],
//     disclaimer: 'No Payment Upfront',
//     type: 'agent',
//   },
// ]

// /* ---------------- BROKERAGE PLANS ---------------- */

// const brokeragePlans: PricingPlan[] = [
//   {
//     id: 'core',
//     name: 'Core',
//     price: 599,
//     period: '/mo',
//     description: 'Add some lorem',
//     features: [
//       'Brokerage profile and branding',
//       'Agent management',
//       'Inventory management',
//       'Standard platform visibility',
//     ],
//     disclaimer: 'No Payment Upfront',
//     type: 'brokerage',
//   },
//   {
//     id: 'premium-broker',
//     name: 'Premium',
//     price: 1499,
//     period: '/mo',
//     description: 'Prioritized exposure',
//     isPopular: true,
//     features: [
//       'Enhanced brokerage visibility',
//       'Priority listings and agents',
//       'Team performance tools (as released)',
//       'Early access to new features',
//     ],
//     disclaimer: 'No Payment Upfront',
//     type: 'brokerage',
//   },
//   {
//     id: 'enterprise',
//     name: 'Enterprise',
//     price: 2999,
//     period: '/mo',
//     description: 'Complete enterprise',
//     features: [
//       'Multi-branch and enterprise management',
//       'Enterprise-level visibility',
//       'Custom onboarding pathways',
//       'Strategic feature access',
//     ],
//     disclaimer: 'No Payment Upfront',
//     type: 'brokerage',
//   },
// ]

// /* ---------------- SECTION ---------------- */

// export function PricingSection() {
//   return (
//     <section className="py-12 md:py-20 px-4 md:px-8">

//       {/* Agent Plans */}
//       <div className="container mx-auto bg-white rounded-3xl p-6 md:px-12 pt-12 pb-7 shadow-xl">
//         <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
//           Agent Plans
//         </h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//           {agentPlans.map((plan) => (
//             <PricingCard key={plan.id} plan={plan} />
//           ))}
//         </div>
//       </div>

//       {/* Brokerage Plans */}
//       <div className="container mx-auto bg-white rounded-3xl p-6 md:px-12 pt-12 pb-7 shadow-xl mt-10">
//         <h3 className="text-xl md:text-2xl font-semibold text-[#4B4B4B] mb-8">
//           Brokerage Plans
//         </h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {brokeragePlans.map((plan) => (
//             <PricingCard key={plan.id} plan={plan} />
//           ))}
//         </div>
//       </div>

//     </section>
//   )
// }

// /* ---------------- CARD ---------------- */

// function PricingCard({ plan }: { plan: PricingPlan }) {
//   const isPopular = !!plan.isPopular

//   const bgColor = isPopular
//     ? 'bg-[linear-gradient(180deg,#E3FFF6_0%,#C8FFEC_100%)]'
//     : 'bg-[linear-gradient(180deg,#FFE9E9_0%,#FFFDFD_100%)]'

//   return (
//     <div className={`relative p-6 md:p-8 rounded-2xl ${bgColor} border border-pink-100 flex flex-col h-full`}>

//       {/* ✅ Gradient Border Badge */}
//       {isPopular && (
//         <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//           <div
//             className="rounded-full p-[4px]"
//             style={{
//               background:
//                 "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
//             }}
//           >
//             <Badge className="rounded-full px-4 py-2 text-xs md:text-sm font-medium text-[#4B4B4B] bg-[linear-gradient(90deg,#E2FFF5_0%,#FFE6E4_100%)] border-0">
//               ◆ Most Popular
//             </Badge>
//           </div>
//         </div>
//       )}

//       <div className="mt-4 md:mt-6">
//         <h4 className="text-lg md:text-2xl font-semibold text-[#4B4B4B] mb-2">
//           {plan.name}
//         </h4>

//         <p className="text-xs md:text-sm text-[#4B4B4B] mt-1">
//           {plan.description}
//         </p>

//         <div className="mb-6 md:mb-8">
//           <div className="flex mt-6 items-baseline gap-1">
//             <span className="text-2xl md:text-3xl font-medium text-[#4B4B4B]">
//               AED {plan.price}
//             </span>
//             <span className="text-gray-600 text-sm">{plan.period}</span>
//           </div>
//         </div>

//         <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
//           {plan.features.map((feature, idx) => (
//             <div key={idx} className="flex items-start gap-3">
//               <Check className="w-4 h-4 md:w-5 md:h-5 text-teal-600 mt-0.5" />
//               <span className="text-xs md:text-base text-[#4B4B4B]">
//                 {feature}
//               </span>
//             </div>
//           ))}
//         </div>

//         <p className="text-[#4B4B4B] font-normal text-sm pb-6">
//           Agent Lite is not eligible for early-access pricing, incentives, or referrals.
//         </p>

//         <Button className="bg-[linear-gradient(90deg,rgba(255,246,245,0.93)_0%,rgba(251,255,237,0.93)_50%,rgba(240,255,250,0.93)_100%)] hover:bg-[linear-gradient(90deg,rgba(255,246,245,0.93)_0%,rgba(251,255,237,0.93)_50%,rgba(240,255,250,0.93)_100%)] text-xl text-[#F88379] font-medium px-4 py-2 rounded-full">
//           No Payment upfront
//         </Button>
//       </div>
//     </div>
//   )
// }

'use client'

import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'

interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  description: string
  isPopular?: boolean
  features: string[]
  disclaimer: string
  type: 'agent' | 'brokerage'
}

/* ---------------- AGENT PLANS ---------------- */

const agentPlans: PricingPlan[] = [
  {
    id: 'lite',
    name: 'Lite',
    price: 0,
    period: 'Free',
    description: 'Agent profile creation',
    features: [
      'Agent profile creation',
      'Limited listings',
      'No access to buyer or target requirements',
      'No verified status',
    ],
    disclaimer: 'No Payment Upfront',
    type: 'agent',
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 149,
    period: '/mo',
    description: 'Active agents building pipeline',
    features: [
      'Verified agent status',
      'Increased listing visibility',
      'Access to buyer & target requirements',
      'Messaging and CRM tools',
    ],
    disclaimer: 'No Payment Upfront',
    type: 'agent',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 299,
    period: '/mo',
    description: 'Premium',
    isPopular: true,
    features: [
      'Priority listing placement',
      'Enhanced profile visibility',
      'Full demand access',
      'Priority support',
    ],
    disclaimer: 'No Payment Upfront',
    type: 'agent',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 499,
    period: '/mo',
    description: 'Add some lorem',
    features: [
      'Maximum visibility and prominence',
      'Maximum visibility and prominence',
      'Multi-level team visibility and management',
      'Priority feature rollouts',
    ],
    disclaimer: 'No Payment Upfront',
    type: 'agent',
  },
]

/* ---------------- BROKERAGE PLANS ---------------- */

const brokeragePlans: PricingPlan[] = [
  {
    id: 'core',
    name: 'Core',
    price: 599,
    period: '/mo',
    description: 'Add some lorem',
    features: [
      'Brokerage profile and branding',
      'Agent management',
      'Inventory management',
      'Standard platform visibility',
    ],
    disclaimer: 'No Payment Upfront',
    type: 'brokerage',
  },
  {
    id: 'premium-broker',
    name: 'Premium',
    price: 1499,
    period: '/mo',
    description: 'Prioritized exposure',
    isPopular: true,
    features: [
      'Enhanced brokerage visibility',
      'Priority listings and agents',
      'Team performance tools (as released)',
      'Early access to new features',
    ],
    disclaimer: 'No Payment Upfront',
    type: 'brokerage',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 2999,
    period: '/mo',
    description: 'Complete enterprise',
    features: [
      'Multi-branch and enterprise management',
      'Enterprise-level visibility',
      'Custom onboarding pathways',
      'Strategic feature access',
    ],
    disclaimer: 'No Payment Upfront',
    type: 'brokerage',
  },
]

/* ---------------- SECTION ---------------- */

export function PricingSection() {
  return (
    <section className="py-12 md:py-20 px-2 md:px-8 ">

      {/* Agent Plans */}
      <div className="container mx-auto bg-white dark:bg-white/5 rounded-3xl p-6 md:px-12 pt-12 pb-7 shadow-xl dark:shadow-none border border-transparent dark:border-white/10">
        <h3 className="text-xl md:text-2xl font-semibold text-[#4B4B4B] dark:text-[#4B4B4B] mb-8">
          Agent Plans
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {agentPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>

      {/* Brokerage Plans */}
      <div className="container mx-auto bg-white dark:bg-white/5 rounded-3xl p-6 md:px-12 pt-12 pb-7 shadow-xl dark:shadow-none border border-transparent dark:border-white/10 mt-10">
        <h3 className="text-xl md:text-2xl font-semibold text-[#4B4B4B] dark:text-[#4B4B4B] mb-8">
          Brokerage Plans
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {brokeragePlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>

    </section>
  )
}

/* ---------------- CARD ---------------- */

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isPopular = !!plan.isPopular

  const bgColor = isPopular
    ? 'bg-[linear-gradient(180deg,#E3FFF6_0%,#C8FFEC_100%)]'
    : 'bg-[linear-gradient(180deg,#FFE9E9_0%,#FFFDFD_100%)]'

  return (
    <div className={`relative p-6 md:p-8 rounded-2xl ${bgColor} border border-pink-100 flex flex-col h-full`}>

      {/* Gradient Border Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div
            className="rounded-full p-[4px]"
            style={{
              background: "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
            }}
          >
            <Badge className="rounded-full px-4 py-2 text-xs md:text-sm font-medium text-[#4B4B4B] bg-[linear-gradient(90deg,#E2FFF5_0%,#FFE6E4_100%)] border-0">
              ◆ Most Popular
            </Badge>
          </div>
        </div>
      )}

      <div className="mt-4 md:mt-6">
        <h4 className="text-lg md:text-2xl font-semibold text-[#4B4B4B] dark:text-[#4B4B4B] mb-2">
          {plan.name}
        </h4>

        <p className="text-xs md:text-sm text-[#4B4B4B] dark:text-[#4B4B4B] mt-1">
          {plan.description}
        </p>

        <div className="mb-6 md:mb-8">
          <div className="flex mt-6 items-baseline gap-1">
            <span className="text-2xl md:text-3xl font-medium text-[#4B4B4B] dark:text-[#4B4B4B]">
              AED {plan.price}
            </span>
            <span className="text-[#4B4B4B] dark:text-[#4B4B4B] text-sm">
              {plan.period}
            </span>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-teal-600 mt-0.5" />
              <span className="text-xs md:text-base text-[#4B4B4B] dark:text-[#4B4B4B]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[#4B4B4B] dark:text-[#4B4B4B] font-normal text-sm pb-6">
          Agent Lite is not eligible for early-access pricing, incentives, or referrals.
        </p>

        <Button className="w-full sm:w-auto bg-[linear-gradient(90deg,rgba(255,246,245,0.93)_0%,rgba(251,255,237,0.93)_50%,rgba(240,255,250,0.93)_100%)] hover:bg-[linear-gradient(90deg,rgba(255,246,245,0.93)_0%,rgba(251,255,237,0.93)_50%,rgba(240,255,250,0.93)_100%)] text-xl text-[#F88379] font-medium px-4 py-2 rounded-full">
          No Payment upfront
        </Button>
      </div>
    </div>
  )
}
