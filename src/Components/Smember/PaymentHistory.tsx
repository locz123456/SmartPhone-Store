import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../Recoil/RecoilState';
import { BillType } from '../../TypeState/BillType';
import { HoaDonType2 } from '../../TypeState/HoaDonType2';

type Props = {}

function PaymentHistory({ }: Props) {

  const [billList, setBillList] = useState<HoaDonType2[]>([]);
  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    getBillList();
  }, [])

  const getBillList = async () => {
    const listBill: HoaDonType2[] = [];
    await axios.get('https://6285c338f0e8f0bb7c08fe54.mockapi.io/HoaDon')
      .then(res => {
        res.data.map((value: any) => {
          if (value.uid == userInfo.uid) {
            listBill.push(value);
            console.log(value);
          }
        })
        setBillList(listBill);
      })
      .catch(error => console.log(error));
  }
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
  }

  return (
    <div className="col-start-2 col-span-3 bg-[#eee] rounded-3xl py-3 px-2 md:mt-[0px] mt-[15px]">
      <h2 className="text-red-600 text-center font-semibold  text-[20px] md:text-[24px]">QUẢN LÝ ĐƠN HÀNG</h2>
      <p className="text-red-600 font-semibold lg:text-lg md:text-md border-b-[3px] border-red-600 w-max text-sm">Tất cả</p>
      <table className="table-fixed w-full mx-auto mt-2">
        <thead>
          <tr className='text-red-600 lg:text-lg md:text-md text-sm'>
            <th>Mã đơn hàng</th>
            <th>Ngày đặt</th>
            <th>Người nhận</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody className='font-semibold'>
          {
            billList.map((bill, key) => {
              return (
                <tr key={key}>
                  <td>{bill.subId}</td>
                  <td>{bill.date}</td>
                  <td>{bill.customerName}</td>
                  <td>{formatPrice(parseInt(bill.totalPrice))}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PaymentHistory