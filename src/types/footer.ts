type Link = {
  text: string;
  url: string;
  img?: string;
};

export type Section = {
  title: string;
  links: Link[];
};
