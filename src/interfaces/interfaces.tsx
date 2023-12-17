

export interface iNav {
  text: string;
}


export interface iIcon {
  icon: React.ReactNode;
  bg?: string;
  bg2?: string;
  onClick?: () => void;
}

export interface iSideNav {
  text: string | any[];
  content?: string;
  drop?: string;
  Genre?: string;
  line?: string;
  icon?: React.ReactNode;
  onClick?: () => void | undefined | boolean;
}
export interface dropDown {
  text: string;
}