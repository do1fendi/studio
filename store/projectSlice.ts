import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
  value: { title: string; category: string; picUrl: string; link: string }[];
}

const initialState: ProjectState = {
  value: [
    { title: "", category: "WEB DEVELOPMENT", picUrl: "http", link: "url" },
    { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
    { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
    { title: "", category: "WEB DEVELOPMENT", picUrl: "http", link: "url" },
    { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
    { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
    { title: "", category: "WEB DEVELOPMENT", picUrl: "http", link: "url" },
    { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
    { title: "", category: "FILM EDITING", picUrl: "http", link: "" },
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
