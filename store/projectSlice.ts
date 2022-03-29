import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  value: {
    id: string;
    title: string;
    category: string;
    picUrl: string;
    link: string;
  }[];
}

const initialState: ProjectState = {
  value: [
    {
      id: "tbdamai",
      title: "TBDAMAI",
      category: "WEB DEVELOPMENT",
      picUrl: `${process.env.BASEURL}/images/project/tbdamai.webp`,
      link: "url",
    },
    {
      id: "cari-hp",
      title: "CARI-HP",
      category: "WEB DEVELOPMENT",
      picUrl: `${process.env.BASEURL}/images/project/cari-hp.webp`,
      link: "",
    },
    {
      id: "damarane",
      title: "DAMARANE",
      category: "FILM EDITING",
      picUrl: `${process.env.BASEURL}/images/project/damarane.png`,
      link: "",
    },
    {
      id: "nccu-web",
      title: "NCCU",
      category: "WEB DEVELOPMENT",
      picUrl: `${process.env.BASEURL}/images/project/nccu-mba.jpeg`,
      link: "url",
    },
    // { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
    // { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
    // { title: "", category: "WEB DEVELOPMENT", picUrl: "http", link: "url" },
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
