// 'use client'

// import { AgentsSection } from "@/components/web/AgentsSection"
// import Brokerage from "@/components/web/Brokerage"
// import Footer from "@/components/web/Footer"
// import { HeroSection } from "@/components/web/HeroSection"
// import { IncentivesSection } from "@/components/web/IncentivesSection"
// import PropertyIntent from "@/components/web/IntentSection"
// import Joindeal from "@/components/web/Joindeal"
// import { Navigation } from "@/components/web/Navigation"
// import { PortalSection } from "@/components/web/PortalSection"
// import { PortfolioSection } from "@/components/web/Portfolio"
// import { PricingSection } from "@/components/web/PricingSection"
// import { VerificationSection } from "@/components/web/VerificationSection"



// export default function Home() {
//   return (
//     <div className="">
//       <Navigation />
//       <HeroSection/>
//       <PortalSection/>
//       <PropertyIntent/>
//       <VerificationSection/>
//       <AgentsSection/>
//       <Brokerage/>
//       <PortfolioSection/>
//       <Joindeal/>
//       <PricingSection/>
//       <IncentivesSection/>
//       <Footer/>
//     </div>
//   )
// }
 



'use client'

import { AgentsSection } from '@/components/web/AgentsSection'
import Brokerage from '@/components/web/Brokerage'
import Footer from '@/components/web/Footer'
import { HeroSection } from '@/components/web/HeroSection'
import { IncentivesSection } from '@/components/web/IncentivesSection'
import PropertyIntent from '@/components/web/IntentSection'
import Joindeal from '@/components/web/Joindeal'
import { Navigation } from '@/components/web/Navigation'
import { PortalSection } from '@/components/web/PortalSection'
import { PortfolioSection } from '@/components/web/Portfolio'
import { PricingSection } from '@/components/web/PricingSection'
import { VerificationSection } from '@/components/web/VerificationSection'

export default function Home() {
  return (
    <div className="">
      <Navigation />

      {/* Requirements */}
      <section id="requirements">
        <HeroSection />
      </section>

      <PortalSection />

      {/* Buying Intent */}
      <section id="buying-intent">
        <PropertyIntent />
      </section>

      <VerificationSection />

      {/* Agent */}
      <section id="agent">
        <AgentsSection />
      </section>

      {/* Brokerages */}
      <section id="brokerages">
        <Brokerage />
      </section>

      {/* Investor */}
      <section id="investor">
        <PortfolioSection />
      </section>

      <Joindeal />
      <PricingSection />
      <IncentivesSection />
      <Footer />
    </div>
  )
}
