



import { FileCheck, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Brokerage = () => {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">

        {/* Badge */}
         <div
              className="inline-block rounded-full p-[4px] mb-6"
              style={{
                background:
                  "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
              }}
            >
              <Button
                className="rounded-full px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                style={{
                  background:
                    "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                }}
              >
                <span className='w-2 h-2 rounded-full bg-[#00C274]'></span>
                For Brokerages 
              </Button>
            </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
               <h1 className="mb-6 text-3xl md:text-[64px] text-[#4B4B4B] font-medium leading-tight dark:text-white">
                            Run your <span className="text-[#F88379]">brokerage</span>,
                            <br />
                            not just <span className="text-[#F88379]">ads</span>.
                        </h1>

            <p className="mb-8 text-[#686868] dark:text-white/80 font-normal text-base sm:text-lg md:text-xl leading-relaxed">
              Get complete visibility into your team&apos;s performance. Manage agents,
              track listings, and optimize your operations—all from one dashboard.
            </p>

            {/* Feature Cards */}
            <div className="space-y-5">
              {[
                {
                  icon: Users,
                  title: 'Team Management',
                  description: 'Track of agents in one place',
                },
                {
                  icon: TrendingUp,
                  title: 'Performance Analytics',
                  description: 'Data-driven decisions',
                },
                {
                  icon: FileCheck,
                  title: 'Listing Oversight',
                  description: 'Quality control at scale',
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start text-left">
                  <div className="flex-shrink-0 w-10 h-10 mt-1 bg-[#FFEFEE] dark:bg-white/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#4B4B4B] dark:text-white" />
                  </div>

                  <div>
                    <h3 className="font-medium text-xl md:text-[24px] text-[#4B4B4B] dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#565656] dark:text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="w-full mt-10 md:mt-0 h-full lg:h-[371px]">
              <Image
                src="/laptop1.png"
                alt="Property"
                width={1000}
                height={1000}
                className="w-full h-full object-cover  drop-shadow-[0_0_85px_#FFADA6]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Brokerage
