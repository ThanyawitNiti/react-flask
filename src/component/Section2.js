import React from 'react'
import photo from '../pics/istockphoto-457983783-1024x1024.jpg'
export default function Section2() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-gray-50">
    <h2 className="text-3xl font-medium text-center mb-4">ทำไมต้องใช้บริการกับทางเรา</h2>
    
    {/* Yellow Underline */}
    <div className="h-1 w-64 bg-yellow-400 mx-auto mb-12"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Column - Service Points */}
      <div className="space-y-12">
        {/* Professional Service */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-yellow-50 border-2 border-yellow-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-yellow-500 mb-2">ทำงานแบบมืออาชีพ</h3>
            <p className="text-gray-700">
              เราเป็นผู้ให้บริการด้านบัญชีการทำบัญชีและการตรวจสอบบัญชี การให้คำปรึกษาด้านภาษีครบวงจร โดยทีมงานมืออาชีพ เต็มใจให้บริการเหมือนมีที่ปรึกษาส่วนตัวในทุกเรื่องด้านบัญชีในราคายุติธรรม
            </p>
          </div>
        </div>
        
        {/* Reduce Complexity - Design 1 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-yellow-50 border-2 border-yellow-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-yellow-500 mb-2">ลดความยุ่งยาก</h3>
            <p className="text-gray-700">
              เนื่องจากการทำบัญชีมีเอกสารที่เยอะประเมินขั้นตอนที่ซับซ้อนยุ่งยากซับซ้อน เราขอเสนองานบริการด้านบัญชีและการตรวจสอบบัญชี การให้คำปรึกษาด้านภาษีครบวงจร ทั่วประเทศ เพียงแค่ท่านแจ้งข้อมูลและจัดส่งเอกสารให้เรา เราจะช่วยให้การทำบัญชีของท่านเป็นไปอย่างราบรื่น
            </p>
          </div>
        </div>
        
        {/* Third point - Only visible in Design 2 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-yellow-50 border-2 border-yellow-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-yellow-500 mb-2">ลูกค้าเป็นหัวใจหลัก</h3>
            <p className="text-gray-700">
              การให้บริการของเรา โดยเรายึดหลัก Customer Centric ในการทำงาน เราพยายามทำความเข้าใจลูกค้าและส่งมอบประโยชน์ให้แก่ลูกค้า เราเข้าใจว่าลูกค้าแต่ละท่านมีความต้องการแตกต่างกันไปเราจึงพยายามจัดระบบการทำงานให้มีความยืนหยุ่นและคล่องตัว Agile เพื่อให้สามารถสนองความต้องการของลูกค้าแต่ละท่านได้
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Column - Alternative Layout for Design 1 */}
      <div className="space-y-8">
        {/* For Design 1 - Two columns in second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
          <div>
            <h3 className="text-xl font-medium text-yellow-500 mb-2">ลดความยุ่งยาก</h3>
            <p className="text-gray-700 text-sm">
              เนื่องจากการทำบัญชีมีเอกสารที่เยอะประเมินขั้นตอนที่ซับซ้อนยุ่งยากซับซ้อน เราขอเสนองานบริการด้านบัญชีและการตรวจสอบบัญชี การให้คำปรึกษาด้านภาษีครบวงจร ทั่วประเทศ เพียงแค่ท่านแจ้งข้อมูล และจัดส่งเอกสารให้เราเราจะช่วยให้การทำบัญชีของท่านเป็นไป อย่างราบรื่น
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-yellow-500 mb-2">ลดความยุ่งยาก</h3>
            <p className="text-gray-700 text-sm">
              การให้บริการของเรา โดยเรายึดหลัก Customer Centric ในการทำงาน เราพยายามทำความเข้าใจลูกค้าและส่งมอบประโยชน์ให้แก่ลูกค้า เราเข้าใจว่าลูกค้าแต่ละท่านมีความต้องการแตกต่างกันไปเราจึงพยายามจัดระบบการทำงานให้มีความยืนหยุ่นและคล่องตัว Agile เพื่อให้สามารถสนองความต้องการของลูกค้าแต่ละท่านได้
            </p>
          </div>
        </div>
        
        {/* Image - For both designs */}
        <img 
          src={photo} 
          alt="บริการด้านบัญชี" 
          className="rounded-lg shadow-lg w-full h-auto mt-6"
        />

      </div>
    </div>
  </div>
  )
}
