/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeriesData
// ====================================================

export interface SeriesData_getAllSeries {
  __typename: "Series";
  id: string;
  title: string;
  description: string;
  imageURL: string;
  rating: number;
}

export interface SeriesData {
  getAllSeries: SeriesData_getAllSeries[] | null;
}
