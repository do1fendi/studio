import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  value: {
    id: string;
    title: string;
    category: string;
    picUrl: string;
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
      picUrl: `${process.env.BASEURL}/images/project/tbdamai.webp`,
      link: "url",
      extLink: "https://tbdamai.net",
    },
    {
      id: "cari-hp",
      title: "CARI-HP",
      category: "WEB DEVELOPMENT",
      picUrl: `${process.env.BASEURL}/images/project/cari-hp.webp`,
      link: "",
      extLink: "https://cari-hp.com",
    },
    {
      id: "damarane",
      title: "植物新藥產品介紹",
      category: "FILM EDITING",
      picUrl: `${process.env.BASEURL}/images/project/damarane.png`,
      link: "",
      extLink: "",
    },
    {
      id: "nccu-web",
      title: "學分登錄系統",
      category: "WEB DEVELOPMENT",
      picUrl: `${process.env.BASEURL}/images/project/nccu-mba.jpeg`,
      link: "url",
      extLink: "",
    },
    {
      id: "",
      title: "MV 拍攝剪輯",
      category: "FILM EDITING",
      picUrl: `${process.env.BASEURL}/images/project/tjakudain.jpeg`,
      link: "",
      extLink: "",
    },
    {
      id: "nccu-graduate",
      title: "線上撥穗典禮",
      category: "WEB DEVEOPMENT",
      picUrl: `${process.env.BASEURL}/images/project/nccu-graduate.gif`,
      link: "",
      extLink: "",
    },
    {
      id: "smartwatch",
      title: "品牌官網設計",
      category: "UI DESIGN",
      picUrl: `${process.env.BASEURL}/images/project/smartwatch.gif`,
      link: "url",
      extLink: "",
    },
    {
      id: "drift",
      title: "《漂》紀錄短片",
      category: "FILM EDITING",
      picUrl: `${process.env.BASEURL}/images/project/drift.png`,
      link: "url",
      extLink: "",
    },
    {
      id: "interface",
      title: "介面/課程內容設計",
      category: "UI DESIGN",
      picUrl: `${process.env.BASEURL}/images/project/interface.webp`,
      link: "url",
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

export default projectSlice.reducer;
