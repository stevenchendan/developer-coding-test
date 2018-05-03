export class Pathway {
  userId: number;
  fullname?: string;
  questPaths: Questpath[];
}

export class Questpath {
  order: number;
  quest: Quest;
  mark: Mark;

  constructor(d) {
    this.order = d.order;
    this.quest = d.quest;
    this.mark = d.mark;
  }
}

export interface Mark {
  submitted: boolean;
  completion: number;
  mark?: (null | number)[];
}

export interface Quest {
  id: number;
  name: string;
  is_active?: boolean;
}
