export type Article = {
  author: {
    name: string;
    role: string;
  };
  category: {
    name: string;
  };
  id: string;
  slug: string;
  teaserDesciption: string;
  teaserHeadline: string;
  teaserImage: {
    height: number;
    src: string;
    title: string;
    width: number;
  };
};