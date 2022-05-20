import React from 'react'

type Props = {}

function Support({ }: Props) {
  return (
    <div className="col-start-2 col-span-3 md:mt-[0px] mt-[15px]">
      <div className="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2 ">
        <div className="inline-flex bg-[#eee] shadow-[0_4px_4px_rgb(0,0,0,25%)] rounded-2xl p-3">
          <img className="w-16 h-16 my-auto mr-2" src="https://cellphones.com.vn/smember/_nuxt/img/headphones1.aa8d3ef.png" alt="" />
          <div className="text-[#686868] text-xl my-auto">
            <p className="">Tư vấn mua hàng (8h00 - 20h00)</p>
            <p>Miền Nam: <b className="text-red-600">1800.2097</b></p>
            <p>Miền Bắc: <b className="text-red-600">1800.2044</b></p>
          </div>
        </div>
        <div className="inline-flex bg-[#eee] shadow-[0_4px_4px_rgb(0,0,0,25%)] rounded-2xl p-3">
          <img className="w-16 h-16 my-auto mr-2" src="https://cellphones.com.vn/smember/_nuxt/img/waranty1.0738a44.png" alt="" />
          <div className="text-[#686868] text-xl my-auto">
            <p className="">Bảo hành (8h00 - 21h00)</p>
            <b className="text-red-600">1800.2064</b>
          </div>
        </div>
        <div className="inline-flex bg-[#eee] shadow-[0_4px_4px_rgb(0,0,0,25%)] rounded-2xl p-3">
          <img className="w-16 h-16 my-auto mr-2" src="https://cellphones.com.vn/smember/_nuxt/img/bad-review1.c5f81ab.png" alt="" />
          <div className="text-[#686868] text-xl my-auto">
            <p className="">Khiếu nại (8h00 - 21h30)</p>
            <b className="text-red-600">1800.2063</b>
          </div>
        </div>
        <div className="inline-flex bg-[#eee] shadow-[0_4px_4px_rgb(0,0,0,25%)] rounded-2xl p-3">
          <img className="w-16 h-16 my-auto mr-2" src="https://cellphones.com.vn/smember/_nuxt/img/message1.62a328e.png" alt="" />
          <div className="text-[#686868] text-xl my-auto">
            <p className="">Email</p>
            <b className="text-red-600">cskh@cellphones.vn</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support