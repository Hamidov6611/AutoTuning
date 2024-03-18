import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_API = createApi({
  reducerPath: "goodsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://185.225.34.216:3001/api/" }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => `category?page=1&limit=4`,
    }),
    getCatalog: build.query({
      query: () => `catalog/?page=1&limit=10`,
    }),
    getNews: build.query({
      query: () => `news?page=1&limit=3`
    }),
    getWorks: build.query({
      query: () => `work?page=1&limit=3`
    }),
    getVideos: build.query({
      query: (limit="") => `auto-catalog/?page=1&limit=${limit}`
    }),
    getOneNews: build.query({
      query: (newsId = "") => `news/${newsId}`
    })
  }),
});

export const { useGetCategoryQuery, useGetCatalogQuery, useGetNewsQuery, useGetWorksQuery, useGetVideosQuery } = BASE_API;
