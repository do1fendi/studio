import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  value: {
    id: string;
    title: string;
    category: string;
    imgList: string[];
    link: string;
    extLink: string;
  }[];
}

const initialState: ProjectState = {
  value: [
    {
      id: "tbdamai",
      title: "企業商品展示網站",
      category: "WEB DEVELOPMENT",
      imgList: [`${process.env.BASEURL}/images/project/tbdamai/tbdamai.webp`],
      link: `${process.env.BASEURL}/project/tbdamai`,
      extLink: "https://tbdamai.net",
    },
    {
      id: "cari-hp",
      title: "CARI-HP",
      category: "WEB DEVELOPMENT",
      imgList: [`${process.env.BASEURL}/images/project/cari-hp/cari-hp.webp`],
      link: `${process.env.BASEURL}/project/cari-hp`,
      extLink: "https://cari-hp.com",
    },
    {
      id: "damarane",
      title: "植物新藥產品介紹",
      category: "FILM EDITING",
      imgList: [`${process.env.BASEURL}/images/project/damarane/damarane.png`],
      link: `${process.env.BASEURL}/project/damarane`,
      extLink: "",
    },
    {
      id: "nccu-web",
      title: "學分登錄系統",
      category: "WEB DEVELOPMENT",
      imgList: [`${process.env.BASEURL}/images/project/nccu-mba/nccu-mba.jpeg`],
      link: `${process.env.BASEURL}/project/nccu-web`,
      extLink: "",
    },
    {
      id: "tjakudain",
      title: "MV 拍攝剪輯",
      category: "FILM EDITING",
      imgList: [`${process.env.BASEURL}/images/project/tjakudain/tjakudain.jpeg`],
      link: `${process.env.BASEURL}/project/tjakudain`,
      extLink: "",
    },
    {
      id: "nccu-graduate",
      title: "線上撥穗典禮",
      category: "WEB DEVEOPMENT",
      imgList: [`${process.env.BASEURL}/images/project/nccu-graduate/nccu-graduate.gif`],
      link: "",
      extLink: "",
    },
    {
      id: "smartwatch",
      title: "品牌官網設計",
      category: "UI DESIGN",
      imgList: [`${process.env.BASEURL}/images/project/smartwatch/smartwatch.gif`],
      link: `${process.env.BASEURL}/project/smartwatch`,
      extLink: "",
    },
    {
      id: "drift",
      title: "《漂》紀錄短片",
      category: "FILM EDITING",
      imgList: [`${process.env.BASEURL}/images/project/drift/drift.png`],
      link: `${process.env.BASEURL}/project/drift`,
      extLink: "",
    },
    {
      id: "interface",
      title: "介面/課程內容設計",
      category: "UI DESIGN",
      imgList: [`${process.env.BASEURL}/images/project/interface/interface.webp`],
      link: `${process.env.BASEURL}/project/interface`,
      extLink: "",
    },
    // { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
    // { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
  ],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = projectSlice.actions;
export const allProject = initialState;
export default projectSlice.reducer;
