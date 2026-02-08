



'use client'

import { TrendingUp, Users, FileCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PropertyItem {
  name: string
  location: string
  value: string
  yield: string
  endDate: string
}

export function PortfolioSection() {
  const properties: PropertyItem[] = [
    {
      name: 'Studio - Marina',
      location: 'AED 650,000/yr',
      value: '8.2%',
      yield: 'Ends Mar 2025',
      endDate: '',
    },
    {
      name: 'IBR - Downtown',
      location: 'AED 160,000/yr',
      value: '5.8%',
      yield: 'Ends Jul 2025',
      endDate: '',
    },
    {
      name: '2BR - Palm',
      location: 'AED 140,000/yr',
      value: '5.4%',
      yield: 'Ends Sep 2025',
      endDate: '',
    },
    {
      name: '3BR - JBR',
      location: 'AED 280,000/yr',
      value: '6.8%',
      yield: 'Ends Jan 2025',
      endDate: '',
    },
  ]

  return (
    <section className="py-12 md:py-20 px-2 sm:px-6 lg:px-2 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[140px] items-center">

          {/* Left Side - Portfolio Card */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-6 md:p-8 shadow-sm dark:shadow-none border border-gray-100 dark:border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#F88379]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFAB25]"></div>
                <div className="w-3 h-3 rounded-full bg-[#7FFFD4]"></div>
              </div>
              <span className="text-xs md:text-base text-[#4B4B4B] dark:text-white font-medium">
                Investment Portfolio
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
              <div className="bg-[#E4F4EE] dark:bg-white/10 rounded-[12px] p-6">
                <p className="text-sm text-[#8C8C8C] dark:text-white/60 mb-1">Total Value</p>
                <p className="text-lg md:text-2xl font-medium text-[#4B4B4B] dark:text-white">
                  AED 5.3M
                </p>
                <p className="text-xs text-[#0DAE78] font-medium">+12% This Year</p>
              </div>

              <div className="bg-orange-50 dark:bg-white/10 rounded-[12px] p-6">
                <p className="text-sm text-[#8C8C8C] dark:text-white/60 mb-1">Annual Income</p>
                <p className="text-lg md:text-2xl font-medium text-[#4B4B4B] dark:text-white">
                  AED 300k
                </p>
                <p className="text-xs text-[#FFA11D] font-medium">-2% this year</p>
              </div>
            </div>

            {/* Properties List */}
            <div>
              <p className="text-xs md:text-base font-normal text-[#4B4B4B] dark:text-white mb-4">
                Your Properties
              </p>

              <div className="space-y-3">
                {properties.map((property, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-[#FFFFFF] dark:bg-white/5 rounded-[12px] shadow-md dark:shadow-none border border-transparent dark:border-white/10"
                  >
                    <div className="flex-1">
                      <p className="text-xs md:text-base font-medium text-[#4B4B4B] dark:text-white">
                        {property.name}
                      </p>
                      <p className="text-xs text-[#8C8C8C] dark:text-white/60">
                        {property.location}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs md:text-base font-semibold text-[#0DAE78]">
                        {property.value}
                      </p>
                      <p className="text-xs text-[#8C8C8C] dark:text-white/60">
                        {property.yield}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 w-full max-w-[643px] mx-auto lg:mx-0 text-center lg:text-left">
            
            {/* Badge Button */}
            <div
              className="inline-block rounded-full p-[4px]"
              style={{
                background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <Button
                className="rounded-full px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B] gap-2 bg-transparent"
                style={{
                  background:
                    'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00C274]" />
                For Investor
              </Button>
            </div>

              <div>
              <h2 className="text-3xl md:text-[64px] dark:text-white leading-tight font-medium text-[#4B4B4B] mb-2">
                See your{' '}
                <span className="text-[#F88379]">portfolio</span> <br />
                clearly.
              </h2>

            </div>

            <p className="text-[#686868] dark:text-white/70 text-base md:text-lg leading-relaxed">
              Track your UAE property investments in one place. Monitor rental
              income, tenancy dates, and portfolio performance with real-time
              insights.
            </p>

            {/* Feature Cards */}
            <div className="space-y-5">
              {[
                { icon: Users, title: 'Rental income tracking' },
                { icon: TrendingUp, title: 'Tenancy expiry alerts' },
                { icon: FileCheck, title: 'Portfolio performance metrics' },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-center justify-start lg:justify-start">
                  <div className="flex-shrink-0 w-10 h-10 mt-1 bg-[#FFEFEE] dark:bg-white/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#4B4B4B] dark:text-white" />
                  </div>

                  <div>
                    <h3 className="font-medium text-base md:text-[24px] text-[#4B4B4B] dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
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
                Investor Early Access →
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
