import React from 'react'

export default function Section1() {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          {/* <img src={experienceIcon} alt="Experience" className="w-20 h-20 mb-4" /> */}
          <h3 className="text-yellow-500 text-3xl font-bold">10+ YEARS</h3>
          <p className="text-gray-700">เราคือผู้เชี่ยวชาญที่มีประสบการณ์</p>
        </div>

        <div className="flex flex-col items-center">
          {/* <img src={clientsIcon} alt="Clients" className="w-20 h-20 mb-4" /> */}
          <h3 className="text-yellow-500 text-3xl font-bold">150+</h3>
          <p className="text-gray-700">บริษัทที่เราเป็นผู้ดูแล</p>
        </div>

        <div className="flex flex-col items-center">
          {/* <img src={setupIcon} alt="Setup" className="w-20 h-20 mb-4" /> */}
          <h3 className="text-yellow-500 text-3xl font-bold">150+</h3>
          <p className="text-gray-700">บริษัทที่เราช่วยจัดตั้ง</p>
        </div>
      </div>
      <div className="mt-2 w-16 h-1 bg-yellow-500 mx-auto"></div>
    </div>
  )
}
