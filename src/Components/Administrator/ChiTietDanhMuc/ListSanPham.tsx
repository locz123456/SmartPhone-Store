import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SanPhamType } from "../../../TypeState/SanPhamType";

export default function ListSanPham() {
    useEffect(() => {
        getListCata();
      }, []);
      const [listProd, setListProd] = useState<SanPhamType[]>([]);
      const params = useParams();
      const getListCata = async () => {
        try {
          const resProd = await axios.get(
            `https://6285c338f0e8f0bb7c08fe54.mockapi.io/Loai/${params.idDM}/Loai/${params.idLoai}/SanPham`
          );
          setListProd(resProd.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getListSanPham = listProd.map((item, index) => {
        return (
          <tr key={index}>
            <td className="border border-slate-400 text-center">{item.id}</td>
            <td className="border border-slate-400">{item.name}</td>
            <td className="border border-slate-400"><img alt="" className="w-[100px]" src={item.avatar}></img></td>
            <td className="border border-slate-400">{item.cost}</td>
            <td className="border border-slate-400">{item.capacity}</td>
            <td className="border border-slate-400">{item.description}</td>
            <td className="border border-slate-400">{item.color}</td>
            <td className="border border-slate-400">{item.promotion}</td>
            
            <td className="border border-slate-400  w-[70px] text-center">
              <Link to={`/Admin/Update/${params.idDM}/Loai/${params.idLoai}/SanPham/${item.id}`}>
                <button type="button" className="btn btn-info">
                  Update
                </button>
              </Link>
            </td>
            <td className="border border-slate-400 w-[70px] text-center">
            <Link to={`/Admin/Delete/${params.idDM}/Loai/${params.idLoai}/SanPham/${item.id}`}>
            <button type="button" className="btn btn-warning">
                Delete
              </button>
              </Link>
            </td>
            <td className="border border-slate-400  w-[70px] text-center">
              <Link to={`/Admin/QuanLyDanhMuc/${params.idDM}/QuanLyLoaiSP/${params.idLoai}/ListSanPham/${params.idSanPham}/QLThongTinSp`} >
              <button className="btn btn-outline-dark">Chi Ti???t</button>
              </Link>
            </td>
          </tr>
        );
      });
      return (
        <div className="w-full">
          <h1 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
            QU???N L?? S???N PH???M
          </h1>
          <Link to={`/Admin/AddProd/${params.idDM}/Loai/${params.idLoai}`}>
              <button className="btn btn-outline-success mx-[20px] my-4">
               Th??m S???n Ph???m m???i
           </button>
         </Link>
          <table className="table table-hover leading-[40px]">
            <thead>
              <tr className="text-center">
                <th className="border border-slate-400">M?? ID</th>
                <th className="border border-slate-400">T??n S???n Ph???m</th>
                <th className="border border-slate-400">H??nh ???nh</th>
                <th className="border border-slate-400">G??a</th>
                <th className="border border-slate-400">Dung l?????ng</th>
                <th className="border border-slate-400">M?? t???</th>
                <th className="border border-slate-400">M??u s???c</th>
                <th className="border border-slate-400">Gi???m gi??(%)</th>
                <th className="border border-slate-400">S???a</th>
                <th className="border border-slate-400">X??a</th>
                <th className="border border-slate-400">Chi ti???t</th>
              </tr>
            </thead>
            <tbody className="font-Roboto font-[500px]">{getListSanPham}</tbody>
          </table>
        </div>
      );
}
