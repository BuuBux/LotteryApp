import { Ref } from '@vue/composition-api';

export interface VisibleErrors {
  idents: string[];
  messages: string[];
  types: string[];
}

export interface ErrorHandling {
  backendError: string;
  success: boolean;
  visibleErrors: VisibleErrors;
}

export interface ModelDrawDates {
  date: string;
  time: string;
}

export default interface DrawsDate extends ErrorHandling {
  drawDates: {
    draws: ModelDrawDates[];
  }
};

export interface ModelOdd {
  link: string;
  numberOfWinners: number;
  numbers: string[];
  odd: number;
  winningClass: number;
  withOptions: string[];
}

export interface ModelSeoText {
  content: string;
  headline: string;
}

export interface ModelSeo {
  description: string;
  texts: ModelSeoText[];
  title: string;
}

export interface ModelDraw {
  additionalNumbers: string[];
  date: string;
  gameAmount: number;
  jackpot: number;
  megaPlier: string;
  numbers: string[];
  odds: ModelOdd[];
  powerPlay: string;
  seo: ModelSeo;
  shares: string[];
  time: string;
  video: string;
}

export interface DrawsResults extends ErrorHandling {
  draw: {
    draws: ModelDraw[];
  }
}

export interface DrawsDateVariables {
  limit: Ref<number>;
  type: string;
}

export interface DrawsResultsVariables {
  limit: number;
  date: string;
  type: string;
}
