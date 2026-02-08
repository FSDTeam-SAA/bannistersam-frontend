'use client'

import { Button } from '../ui/button'
import { Gift, Star } from 'lucide-react'
import Image from 'next/image'

export function IncentivesSection() {
  return (
    <section className="py-12 md:py-20 px-2 md:px-8 bg-white dark:bg-[#0B0F0E]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div
            className="inline-block rounded-full p-[4px] mb-5 md:mb-6"
            style={{
              background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
            }}
          >
            <Button
              className="rounded-full px-5 md:px-8 h-[44px] md:h-[48px] text-sm md:text-base text-[#4B4B4B] "
              style={{
                background:
                  'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00C274]" />
              Incentives
            </Button>
          </div>

          {/* NOTE: lg device unchanged (kept md:text-[64px]) */}
          <h2 className="text-3xl md:text-[64px] font-midium text-[#4B4B4B] dark:text-white mb-3 leading-tight">
            Rewards for early <br />
            <span className="text-[#F88379]">adopters</span>.
          </h2>

          <p className="text-[#686868] dark:text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            Be among the first to experience a verification-first property
            platform in the UAE. Early access is invite-only and limited.
          </p>
        </div>

        {/* Incentive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-6xl mx-auto">
          {/* Early Inventory Incentive */}
          <div className="bg-[#EEFFF9] dark:bg-white/5 rounded-2xl p-5 sm:p-6 md:p-8 border border-[#DBDBDB] dark:border-white/10 flex flex-col">
            <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] mb-6 mx-auto">
              <Image
                src="/icon1.png"
                alt="Incentive 1"
                width={1000}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#4B4B4B] dark:text-white text-center mb-3 md:mb-4">
              Early Inventory Incentive
            </h3>

            <p className="text-[#4B4B4B] dark:text-white/85 text-sm md:text-sm text-center flex-grow leading-relaxed">
              Upload your verified listings during early access and receive 1
              complimentary month of your chosen plan after launch.
            </p>

            <div className="flex justify-center mt-7 sm:mt-8 md:mt-10">
              <div
                className="inline-block rounded-full p-[4px]"
                style={{
                  background:
                    'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
                }}
              >
                <Button
                  className="rounded-full px-4 sm:px-6 md:px-8 h-[44px] md:h-[48px] text-xs sm:text-sm md:text-base text-[#4B4B4B]  whitespace-normal"
                  style={{
                    background:
                      'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                  }}
                >
                  <Gift className="!w-5 !h-5 text-[#FFA11D]" />
                  <span className="ml-2">1 month free for verified listings</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Referral Program */}
          <div className="bg-[#FFEFEE] dark:bg-white/5 rounded-2xl p-5 sm:p-6 md:p-8 border border-[#DBDBDB] dark:border-white/10 flex flex-col">
            <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] mb-6 mx-auto">
              <Image
                src="/icon2.png"
                alt="Incentive 2"
                width={1000}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#4B4B4B] dark:text-white text-center mb-3 md:mb-4">
              Referral Program
            </h3>

            <p className="text-[#4B4B4B] dark:text-white/85 text-sm md:text-sm text-center flex-grow leading-relaxed">
              Coming post-launch: Refer other professionals to Deal360 and earn
              platform credits. Build your network, get rewarded.
            </p>

            <div className="flex justify-center mt-7 sm:mt-8 md:mt-10">
              <div
                className="inline-block rounded-full p-[4px]"
                style={{
                  background:
                    'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
                }}
              >
                <Button
                  className="rounded-full px-4 sm:px-6 md:px-8 h-[44px] md:h-[48px] text-xs sm:text-sm md:text-base text-[#4B4B4B]  whitespace-normal"
                  style={{
                    background:
                      'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                  }}
                >
                  <Star className="!w-5 !h-5 text-[#FFA11D] fill-[#FFA11D]" />
                  <span className="ml-2">
                    Credit-based rewards • No cash payouts
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
