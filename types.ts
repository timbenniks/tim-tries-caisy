export type Article = {
  author: {
    name: String;
    role: String;
  };
  category: {
    name: String;
  };
  slug: String;
  teaserDesciption: String;
  teaserHeadline: String;
  teaserImage: {
    height: Number;
    src: String;
    title: String;
    width: Number;
  };
};