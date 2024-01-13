export type SingleCruiseType = {
  title: string;
  place: string;
  date: string;
  cost: string;
  descriptionNode: {
    childMarkdownRemark: {
      html: string;
    };
  };
  gallery: {
    url: string;
  }[];
};
