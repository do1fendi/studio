import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  value: {
    id: string;
    title: string;
    category: string;
    imgList?: string[];
    link: string;
    extLink: string;
    tech: string;
    video?: { imgUrl: string; vidUrl: string }[];
  }[];
}

const initialState: ProjectState = {
  value: [
    {
      id: "tbdamai",
      title: "企業商品展示網站",
      category: "WEB DEVELOPMENT",
      imgList: [
        `${process.env.BASEURL}/images/project/tbdamai/tbdamai.webp`,
        `${process.env.BASEURL}/images/project/tbdamai/tbdamai-1.webp`,
        `${process.env.BASEURL}/images/project/tbdamai/tbdamai-2.webp`,
        `${process.env.BASEURL}/images/project/tbdamai/tbdamai-3.webp`,
        `${process.env.BASEURL}/images/project/tbdamai/tbdamai-4.webp`,
      ],
      link: `${process.env.BASEURL}/project/tbdamai`,
      extLink: "https://tbdamai.net",
      tech: "#next.js #nodejs #express #mysql #conversion api",
    },
    {
      id: "cari-hp",
      title: "CARI-HP",
      category: "WEB DEVELOPMENT",
      imgList: [`${process.env.BASEURL}/images/project/cari-hp/cari-hp.webp`],
      link: `${process.env.BASEURL}/project/cari-hp`,
      extLink: "https://cari-hp.com",
      tech: "",
    },
    {
      id: "damarane",
      title: "植物新藥產品介紹",
      category: "FILM EDITING",
      imgList: [`${process.env.BASEURL}/images/project/damarane/damarane.png`],
      link: `${process.env.BASEURL}/project/damarane`,
      extLink: "",
      tech: "",
    },
    {
      id: "nccu-web",
      title: "學分登錄系統",
      category: "WEB DEVELOPMENT",
      imgList: [`${process.env.BASEURL}/images/project/nccu-mba/nccu-mba.jpeg`],
      link: `${process.env.BASEURL}/project/nccu-web`,
      extLink: "",
      tech: "",
    },
    {
      id: "tjakudain",
      title: "MV 拍攝剪輯",
      category: "FILM EDITING",
      imgList: [
        `${process.env.BASEURL}/images/project/tjakudain/tjakudain.jpeg`,
      ],
      link: `${process.env.BASEURL}/project/tjakudain`,
      extLink: "",
      tech: "",
      video: [
        {
          imgUrl: `${process.env.BASEURL}/images/project/tjakudain/tjakudain.jpeg`,
          vidUrl: "https://www.youtube.com/embed/ZHpHg1kPBCs",
        },
      ],
    },
    {
      id: "nccu-graduate",
      title: "線上撥穗典禮",
      category: "WEB DEVEOPMENT",
      imgList: [
        `${process.env.BASEURL}/images/project/nccu-graduate/nccu-graduate.gif`,
      ],
      link: "",
      extLink: "",
      tech: "",
    },
    {
      id: "smartwatch",
      title: "品牌官網設計",
      category: "UI DESIGN",
      imgList: [
        `${process.env.BASEURL}/images/project/smartwatch/smartwatch.gif`,
      ],
      link: `${process.env.BASEURL}/project/smartwatch`,
      extLink: "",
      tech: "",
    },
    {
      id: "drift",
      title: "《漂》紀錄短片",
      category: "FILM EDITING",
      imgList: [`${process.env.BASEURL}/images/project/drift/drift.png`],
      link: `${process.env.BASEURL}/project/drift`,
      extLink: "",
      tech: "",
    },
    {
      id: "interface",
      title: "介面/課程內容設計",
      category: "UI DESIGN",
      imgList: [
        `${process.env.BASEURL}/images/project/interface/interface.webp`,
      ],
      link: `${process.env.BASEURL}/project/interface`,
      extLink: "",
      tech: "",
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
