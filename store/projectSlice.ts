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
      imgList: [
        `${process.env.BASEURL}/images/project/cari-hp/cari-hp-3.webp`,
        `${process.env.BASEURL}/images/project/cari-hp/cari-hp-1.webp`,
        `${process.env.BASEURL}/images/project/cari-hp/cari-hp-2.webp`,
        `${process.env.BASEURL}/images/project/cari-hp/cari-hp-4.webp`,
      ],
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
      video: [
        {
          imgUrl: `${process.env.BASEURL}/images/project/damarane/damarane-1.jpg`,
          vidUrl: "https://www.youtube.com/embed/TYy58vSlGxE",
        },
        {
          imgUrl: `${process.env.BASEURL}/images/project/damarane/damarane.png`,
          vidUrl: "https://www.youtube.com/embed/VEZNEoibNqc",
        },
        {
          imgUrl: `${process.env.BASEURL}/images/project/damarane/damarane-2.jpg`,
          vidUrl: "https://www.youtube.com/embed/v55eM61lMwA",
        },
      ],
    },
    {
      id: "nccu-web",
      title: "學分登錄系統",
      category: "WEB DEVELOPMENT",
      imgList: [
        `${process.env.BASEURL}/images/project/nccu-mba/nccu-mba.jpeg`,
        `${process.env.BASEURL}/images/project/nccu-mba/nccu-mba-1.webp`,
        `${process.env.BASEURL}/images/project/nccu-mba/nccu-mba-2.webp`,
        `${process.env.BASEURL}/images/project/nccu-mba/nccu-mba-3.webp`,
      ],
      link: `${process.env.BASEURL}/project/nccu-web`,
      extLink: "https://www.mbastudent.nccu.edu.tw",
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
        {
          imgUrl: `${process.env.BASEURL}/images/project/tjakudain/tjakudain-1.jpg`,
          vidUrl: "https://www.youtube.com/embed/1MaHTsxKgmg",
        },
        {
          imgUrl: `${process.env.BASEURL}/images/project/tjakudain/tjakudain-2.jpg`,
          vidUrl: "https://www.youtube.com/embed/DDimvWs4vXI",
        },
      ],
    },
    {
      id: "nccu-graduate",
      title: "線上撥穗典禮",
      category: "WEB DEVEOPMENT",
      imgList: [
        `${process.env.BASEURL}/images/project/nccu-graduate/nccu-graduate.gif`,
        `${process.env.BASEURL}/images/project/nccu-graduate/nccu-graduate-1.png`,
        `${process.env.BASEURL}/images/project/nccu-graduate/nccu-graduate-2.webp`,
        `${process.env.BASEURL}/images/project/nccu-graduate/nccu-graduate-3.png`,
        `${process.env.BASEURL}/images/project/nccu-graduate/nccu-graduate-4.png`,
        `${process.env.BASEURL}/images/project/nccu-graduate/nccu-graduate-5.webp`,
      ],
      link: `${process.env.BASEURL}/project/nccu-graduate`,
      extLink: "https://commerce.graduation.nccu.edu.tw",
      tech: "",
    },
    {
      id: "smartwatch",
      title: "品牌官網設計",
      category: "UI DESIGN",
      imgList: [
        `${process.env.BASEURL}/images/project/smartwatch/smartwatch.gif`,
        `${process.env.BASEURL}/images/project/smartwatch/smartwatch-1.webp`,
        `${process.env.BASEURL}/images/project/smartwatch/smartwatch-2.png`,
        `${process.env.BASEURL}/images/project/smartwatch/smartwatch-3.png`,
        `${process.env.BASEURL}/images/project/smartwatch/smartwatch-4.png`,
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
      video: [
        {
          imgUrl: `${process.env.BASEURL}/images/project/drift/drift-3.jpg`,
          vidUrl: "https://www.youtube.com/embed/Eojy9PEMvzI",
        },
        {
          imgUrl: `${process.env.BASEURL}/images/project/drift/drift-2.jpg`,
          vidUrl: "https://www.youtube.com/embed/xetIM8m5GtE",
        },
        {
          imgUrl: `${process.env.BASEURL}/images/project/drift/drift-1.jpg`,
          vidUrl: "https://www.youtube.com/embed/o1YX4w9mjVI",
        },
      ],
    },
    {
      id: "interface",
      title: "介面/課程內容設計",
      category: "UI DESIGN",
      imgList: [
        `${process.env.BASEURL}/images/project/interface/interface.webp`,
        `${process.env.BASEURL}/images/project/interface/interface-1.png`,
        `${process.env.BASEURL}/images/project/interface/interface-2.png`,
        `${process.env.BASEURL}/images/project/interface/interface-3.png`,
        `${process.env.BASEURL}/images/project/interface/interface-4.png`,
        `${process.env.BASEURL}/images/project/interface/interface-5.webp`,
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
