'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 md:py-16 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">⊙</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">Deal 360</h3>
            </div>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6">
              A verification-first property platform for the UAE. Launching in
              Dubai with verified agents, real listings, and genuine intent.
            </p>

            {/* App Store Badges */}
            <div className="flex gap-3 flex-wrap">
              <button className="bg-black rounded-lg px-3 md:px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition">
                <span className="text-lg">🍎</span>
                <div className="text-xs md:text-sm text-white">
                  <div className="font-semibold">Get it on</div>
                  <div>App Store</div>
                </div>
              </button>
              <button className="bg-black rounded-lg px-3 md:px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition">
                <span className="text-lg">▶</span>
                <div className="text-xs md:text-sm text-white">
                  <div className="font-semibold">Get it on</div>
                  <div>Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-base font-bold text-white mb-4 md:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs md:text-sm text-gray-400 hover:text-teal-400 transition"
                >
                  Early Access
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs md:text-sm text-gray-400 hover:text-teal-400 transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs md:text-sm text-gray-400 hover:text-teal-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm md:text-base font-bold text-white mb-4 md:mb-6">
              Legal
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs md:text-sm text-gray-400 hover:text-teal-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs md:text-sm text-gray-400 hover:text-teal-400 transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm md:text-base font-bold text-white mb-4 md:mb-6">
              Contact us
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <a
                  href="mailto:info@deal360.com"
                  className="text-xs md:text-sm text-gray-400 hover:text-teal-400 transition"
                >
                  info@deal360.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <a
                  href="tel:+971904007285"
                  className="text-xs md:text-sm text-gray-400 hover:text-teal-400 transition"
                >
                  +971 90 400 7285
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Building A1, Dubai Digital Park, Silicone Oasis, Dubai, United
                  Arab Emirates. Put this also
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs md:text-sm text-gray-500">
          © 2026 Deal 360. All rights reserved.
        </p>
        <p className="text-xs md:text-sm text-gray-500">
          Made for Dubai UAE →
        </p>
      </div>
    </footer>
  )
}
