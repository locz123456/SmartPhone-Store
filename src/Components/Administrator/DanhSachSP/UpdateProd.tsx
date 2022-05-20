/** @format */

import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { detailSP, UpdateSP } from "../../../Features/SanPhamSlice";
import { DanhMucType } from "../../../TypeState/DanhMucType";
import { SanPhamType } from "../../../TypeState/SanPhamType";


export default function UpdateProd() {
  const [sanPham, setDataSP] = useState<SanPhamType>()
  const [ListLoai, setLoai] = useState<DanhMucType[]>([]);
  const [data, setData] = useState<any>({});
  const navigate = useNavigate();
  const params = useParams();

  // const dispatch = useAppDispatch()
  // const dataSP = useAppSelector(state => state.listSanPham)
  // const sanPham:any = dataSP.detailSP
  // const [data, setData] = useState<any>({});

  useEffect(() => {
    // dispatch(detailSP(params.idSanPham))
    getData()
    getLoai()

  }, []);

  const getData = async ()=>{
    try {
      const res = await axios.get(
        `https://6285c338f0e8f0bb7c08fe54.mockapi.io/SanPham/${params.idSanPham}`
      );
      setDataSP(res.data);
        const initState = {
          id: res.data.id,
          name: res.data.name,
          avatar: res.data.avatar,
          cost: res.data.cost,
          capacity: res.data.capacity,
          description: res.data.description,
          color: res.data.color,
          promotion: res.data.promotion,
          oldCost: res.data.oldCost,
          endow: res.data.endow,
          kichThuoc: res.data.kichThuoc,
          doPhangiai: res.data.doPhangiai,
          congNghemanhinh: res.data.congNghemanhinh,
          chatLieu: res.data.chatLieu,
          thoiLuongpin: res.data.thoiLuongpin,
          thoiGiansac: res.data.thoiGiansac,
          loaiCpu: res.data.loaiCpu,
          tinhNangnoibat: res.data.tinhNangnoibat,
          cameraSau: res.data.cameraSau,
          cameraTruoc: res.data.cameraTruoc,
          RAM: res.data.RAM,
          ROM: res.data.ROM,
          SIM: res.data.SIM,
          heDieuHanh: res.data.heDieuHanh,
          img1: res.data.img1,
          img2: res.data.img2,
          img3: res.data.img3,
          img4: res.data.img4,
          img5: res.data.img5,
          LoaiId: res.data.LoaiId,
        };
        setData(initState);
    } catch (error) {
      console.log(error);
    }
  }

  const getLoai = async () => {
    try {
      const res = await axios.get(
        `https://6285c338f0e8f0bb7c08fe54.mockapi.io/Loai`
      );
      setLoai(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  const {
    id,
    name,
    avatar,
    cost,
    capacity,
    description,
    color,
    promotion,
    oldCost,
    endow,
    kichThuoc,
    doPhangiai,
    congNghemanhinh,
    chatLieu,
    thoiLuongpin,
    thoiGiansac,
    loaiCpu,
    tinhNangnoibat,
    cameraSau,
    cameraTruoc,
    RAM,
    ROM,
    SIM,
    heDieuHanh,
    img1,
    img2,
    img3,
    img4,
    img5,
    LoaiId,
  } = data;
console.log('data', data);

  const onChangeText = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (data.name === "" || data.avatar === "" || data.cost === "" || data.capacity === "" || data.description === "" || data.color === "" || data.promotion === ""
      || data.oldCost === "" || data.endow === "" || data.kichThuoc === "" || data.doPhangiai === "" || data.congNghemanhinh === "" || data.chatLieu === "" ||
data.thoiLuongpin === "" || data.thoiGiansac === "" || data.loaiCpu === "" || data.tinhNangnoibat === "" || data.cameraSau === "" 
|| data.cameraTruoc === "" || data.RAM === "" || data.ROM === "" ||  data.SIM === "" ||  data.heDieuHanh === "" || data.img1 === "" ||
data.img2 === "" || data.img3 === "" || data.img4 === "" || data.img5 === "" || data.LoaiId === "" 
      ) 
      {
        alert("Vui lòng nhập đủ thông tin")
      }else {
        const res = await axios.put(
          `https://6285c338f0e8f0bb7c08fe54.mockapi.io/SanPham/${params.idSanPham}`, data
        );
        setDataSP(res.data);
        alert("Thay đổi thành công");
        navigate(`/Admin/QuanLySanPham`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#f73d3d] text-[40px] w-full text-center bg-[#e2e2e2] p-[15px] rounded-xl">
          Update Sản Phẩm
        </h2>
        <Link to="/Admin/QuanLySanPham" className="">
          <button className="my-[10px] ml-[10px] p-[10px] border-2 btn btn-outline-danger rounded-xl font-Roboto font-[500] text-[20px]">
            <i className="fa-solid fa-arrow-rotate-left"></i>Trở Lại
          </button>
        </Link>
		<div className="w-full p-[20px]">
			<table className="p-[20px] mt-[20px] w-full">
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="id"
                placeholder={sanPham?.id}
                value={id}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Name</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="name"
                placeholder={sanPham?.name}
                value={name}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Avatar</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="avatar"
                placeholder={sanPham?.avatar}
                value={avatar}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">cost</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="cost"
                value={cost}
                placeholder={sanPham?.cost}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Capacity</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="capacity"
                value={capacity}
                placeholder={sanPham?.capacity}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">description</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="description"
                value={description}
                placeholder={sanPham?.description}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              {" "}
              <label htmlFor="">Color</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="color"
                value={color}
                placeholder={sanPham?.color}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              {" "}
              <label htmlFor="">Promotion</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="promotion"
                value={promotion}
                placeholder={sanPham?.promotion}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Old Cost</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="oldCost"
                placeholder={sanPham?.oldCost}
                value={oldCost}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Endow</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="endow"
                placeholder={sanPham?.endow}
                value={endow}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Kích thước</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="kichThuoc"
                placeholder={sanPham?.kichThuoc}
                value={kichThuoc}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Độ phân giải</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="doPhangiai"
                placeholder={sanPham?.doPhangiai}
                value={doPhangiai}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Công nghệ màn hình</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="congNghemanhinh"
                placeholder={sanPham?.congNghemanhinh}
                value={congNghemanhinh}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Chất liệu</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="chatLieu"
                placeholder={sanPham?.chatLieu}
                value={chatLieu}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Thời lượng pin</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="thoiLuongpin"
                placeholder={sanPham?.thoiLuongpin}
                value={thoiLuongpin}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Thời lượng sạc</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="thoiGiansac"
                placeholder={sanPham?.thoiGiansac}
                value={thoiGiansac}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Loại CPU</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="loaiCpu"
                placeholder={sanPham?.loaiCpu}
                value={loaiCpu}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Tính năng nổi bật</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="tinhNangnoibat"
                placeholder={sanPham?.tinhNangnoibat}
                value={tinhNangnoibat}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Camera sau</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="cameraSau"
                placeholder={sanPham?.cameraSau}
                value={cameraSau}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Camara trước</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="cameraTruoc"
                placeholder={sanPham?.cameraTruoc}
                value={cameraTruoc}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">RAM</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="RAM"
                placeholder={sanPham?.RAM}
                value={RAM}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ROM</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="ROM"
                placeholder={sanPham?.ROM}
                value={ROM}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">SIM</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="SIM"
                placeholder={sanPham?.SIM}
                value={SIM}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Hệ điều hành</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="heDieuHanh"
                placeholder={sanPham?.heDieuHanh}
                value={heDieuHanh}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 1</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img1"
                placeholder={sanPham?.img1}
                value={img1}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 2</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img2"
                placeholder={sanPham?.img2}
                value={img2}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 3</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img3"
                placeholder={sanPham?.img3}
                value={img3}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 4</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img4"
                placeholder={sanPham?.img4}
                value={img4}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">Ảnh 5</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <input
                type="text"
                name="img5"
                placeholder={sanPham?.img5}
                value={img5}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              />
            </td>
          </tr>
          <tr>
            <th className="border pl-[10px] border-slate-300">
              <label htmlFor="">ID Loại</label>
            </th>
            <td className="w-5/6 border border-slate-300">
              <select
                name="LoaiId"
                value={LoaiId}
                className="border p-[10px] mr-[20px] outline-none w-full"
                onChange={onChangeText}
              >
                {ListLoai.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
        </table>
		</div>
        
        <button
          type="button"
          className="btn btn-outline-info text-center m-[10px] align-middle"
          onClick={onSubmit}
        >
          Update
        </button>
      </div>
    </div>
  );
}
