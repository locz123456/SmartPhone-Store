import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThongTinSp from "./ThongTinSp";
interface listLoaiSpType {
  name: string;
  id: string;
  DanhMucId: string;
}
interface TypeID {
  id: any;
}

export default function LoaiSanPham(props: TypeID) {
  useEffect(() => {
    getLoaiSp();
  }, []);
  const [listLoaiSp, setListLoaiSp] = useState<listLoaiSpType[]>([]);
  const getLoaiSp = async () => {
    try {
      const res = await axios.get(
        `https://6285c338f0e8f0bb7c08fe54.mockapi.io/Loai`
      );
      setListLoaiSp(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const ShowLoaiSP = listLoaiSp.map((itemLoai, indexLoai) => {
    if(itemLoai.DanhMucId === props.id)
    {  
      return (
        <li
          key={indexLoai}
          className="m-1 p-2 list-none no-underline inline-block bg-slate-100 rounded-lg"
        >
          <Link to="#">{itemLoai.name}</Link>
        </li>
      );
    
    }
  });
  const ShowTTSP = listLoaiSp.map((itemLoai, indexLoai) => {
    if(itemLoai.DanhMucId === props.id){
       return (
      <div className="" key={indexLoai}>
        <ThongTinSp id={itemLoai.id} />
      </div>
    );
    }
   
  });
  return (
    <div className="">
      {ShowLoaiSP}
      <div className="inline w-[1200px]">{ShowTTSP}</div>
    </div>
  );
}
