'use client'

import { Badge } from '@/components/ui/badge'

export function IncentivesSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="mx-auto mb-4 rounded-full px-4 py-2 text-orange-600 border-orange-200 bg-orange-50 text-sm md:text-base"
          >
            • Incentives
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Rewards for early{' '}
            <span className="text-orange-500">adopters</span>.
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Be among the first to experience a verification-first property
            platform in the UAE. Early access is invite-only and limited.
          </p>
        </div>

        {/* Incentive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Early Inventory Incentive */}
          <div className="bg-teal-50 rounded-2xl p-6 md:p-8 border border-teal-100 flex flex-col">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl md:text-4xl">🏢</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">
              Early Inventory Incentive
            </h3>

            <p className="text-gray-700 text-base md:text-lg text-center mb-8 flex-grow leading-relaxed">
              Upload your verified listings during early access and receive 1
              complimentary month of your chosen plan after launch.
            </p>

            <div className="border border-teal-300 rounded-full px-4 md:px-6 py-2 md:py-3 text-center">
              <span className="text-yellow-500 text-lg md:text-xl">💰</span>
              <span className="text-gray-900 font-bold ml-2 text-sm md:text-base">
                1 month free for verified listings
              </span>
            </div>
          </div>

          {/* Referral Program */}
          <div className="bg-pink-50 rounded-2xl p-6 md:p-8 border border-pink-100 flex flex-col">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl md:text-4xl">😊</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">
              Referral Program
            </h3>

            <p className="text-gray-700 text-base md:text-lg text-center mb-8 flex-grow leading-relaxed">
              Coming post-launch: Refer other professionals to Deal360 and earn
              platform credits. Build your network, get rewarded.
            </p>

            <div className="border border-pink-300 rounded-full px-4 md:px-6 py-2 md:py-3 text-center">
              <span className="text-yellow-500 text-lg md:text-xl">💳</span>
              <span className="text-gray-900 font-bold ml-2 text-sm md:text-base">
                Credit-based rewards • No cash payouts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
