import { Check, CheckCircle, Clock, Shield } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const Joindeal = () => {
  return (
   <section className="w-full bg-gradient-to-b  px-2 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto ">
          {/* Header */}
          <div className="mb-12 text-center">
              <div
              className="inline-block rounded-full p-[4px]"
              style={{
                background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <Button
                className="rounded-full px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B] 5555bg-transparent"
                style={{
                  background:
                    'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                }}
              >
                <span className='w-2 h-2 rounded-full bg-[#00C274]'></span>
                Early Access Program
              </Button>
            </div>
            <h2 className="mb-4 text-4xl md:text-[64px] text-[#4B4B4B] dark:text-white font-medium leading-tight">
              Join <span className="text-[#F88379]">Deal360</span> early.
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Be among the first to experience a verification-first property platform in the UAE. Early access is invite-only and limited.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="mb-12 grid gap-4 sm:grid-cols-3 lg:gap-6">
            {[
              {
                icon: Clock,
                title: 'No payment upfront',
                description: 'Early access is free. Billing only starts after launch and activation.',
                bgColor: 'bg-[#E6FFF7]',
              },
              {
                icon: Shield,
                title: 'Limited & verified',
                description: 'We\'re onboarding a select group of verified professionals first.',
                bgColor: 'bg-[#FFEFEE]',
              },
              {
                icon: CheckCircle,
                title: 'Shape the platform',
                description: 'Your feedback directly influences features and improvements.',
                bgColor: 'bg-[#E6FFF7]',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`rounded-2xl ${feature.bgColor} p-8 text-center flex flex-col items-center`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <feature.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="mb-2 text-2xl font-medium text-[#4B4B4B]">{feature.title}</h3>
                <p className="text-sm text-[#4B4B4B]">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Info Sections */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#FFEFEE] p-6 md:p-8">
              <h3 className="mb-4 text-xl font-semibold text-[#4B4B4B]">What Early Access Means</h3>
              <ul className="space-y-3">
                {[
                  'Priority onboarding before public launch',
                  'Direct access to the product team',
                  'Exclusive early-adopter pricing',
                  'First to access new features',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-[#68706A]">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#3D3D3D] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#EEFFF9] p-6 md:p-8">
              <h3 className="mb-4 text-xl font-medium text-[#4B4B4B]">Why It Matters</h3>
              <ul className="space-y-3">
                {[
                  'Help shape a platform built for UAE property',
                  'Establish your presence before competitors',
                  'Lock in founder-level pricing',
                  'Build relationships with verified professionals',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-[#68706A]">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#3D3D3D] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Joindeal
