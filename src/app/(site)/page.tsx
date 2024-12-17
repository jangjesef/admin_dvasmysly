'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <h1 className="text-7xl md:text-9xl font-bold text-center mb-16">
          DVA
          <br />
          SMYSLY
        </h1>
        
        <div className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed font-serif">
          <p>
            Zcela jedinečná <span className="inline-flex items-center">(
              <span className="px-2 py-1 text-xs uppercase tracking-wider bg-black text-white mx-1">one-off</span>
            )</span> přírodní vína vyráběná s kreativními vinaři, uváděná každé jaro a podzim — Představujeme nové
            <span className="inline-flex items-center">[
              <span className="px-2 py-1 text-xs uppercase tracking-wider bg-black text-white mx-1">limitované</span>
            ]</span> spolupráce v každé edici.
            <Link href="/about" className="block mt-4 text-lg underline">
              Číst více →
            </Link>
          </p>
        </div>
      </section>

      {/* Wine Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
        <div className="relative aspect-square">
          <Image
            src="/images/wine-1.jpg"
            alt="Orange Wine"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/images/wine-2.jpg"
            alt="Red Wine"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/images/wine-3.jpg"
            alt="Rose Wine"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Club Section */}
      <section className="relative h-screen">
        <Image
          src="/images/wine-tasting.jpg"
          alt="Wine Tasting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl mb-8">
              EXPAND YOUR
              <br />
              PALATE
            </h2>
            <Link 
              href="/club"
              className="border-2 border-white px-8 py-4 text-xl hover:bg-white hover:text-black transition-colors inline-block"
            >
              JOIN THE CLUB
            </Link>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-32 px-8 text-center">
        <div className="inline-block px-4 py-1 bg-pink-500 text-white rounded-full text-sm mb-8">
          LOW ALCOHOL
        </div>
        <h2 className="text-5xl md:text-7xl text-pink-500 font-bold mb-4">
          DRY ROSÉ
          <br />
          SPRITZER
        </h2>
        <div className="text-3xl text-pink-500 mt-16">
          5.3% ABV
          <br />
          <span className="text-2xl">(12OZ)</span>
        </div>
        <p className="mt-8 text-sm text-pink-500">
          WILD FERMENTED, WITH NO SUGARS OR SH** ADDED
        </p>
      </section>

      {/* Values Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-sm uppercase tracking-wide mb-8">Always</p>
          <p className="text-4xl font-sans">Sustainable</p>
          <p className="text-4xl font-serif">Experimental</p>
          <p className="text-4xl font-sans">Collaborative</p>
          <p className="text-4xl font-serif">Natural</p>
          <p className="text-4xl font-sans">Low Sulfites</p>
          <p className="text-4xl font-serif">Limited</p>
          <p className="text-4xl font-sans">New</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
        <div className="bg-white p-16">
          <p className="text-sm tracking-wide mb-4">FIND US</p>
          <h3 className="text-4xl mb-4">TASTING EXPERIENCES</h3>
          <p className="text-sm mb-8">RETAIL • BAR • DINING</p>
          <Link href="/experiences" className="underline">Explore</Link>
        </div>
        <div className="bg-white p-16">
          <p className="text-sm tracking-wide mb-4">NEXT DROP</p>
          <h3 className="text-4xl mb-4">WINE RELEASE PARTY</h3>
          <p className="text-sm mb-8">(15D:04H:16M:26S)</p>
          <Link href="/notify" className="underline">Get notified</Link>
        </div>
      </section>
    </div>
  )
}
