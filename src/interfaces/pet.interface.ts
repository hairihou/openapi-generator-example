interface Category {
  id?: number;
  name?: string;
}

interface Tag {
  id?: number;
  name?: string;
}

const PetStatus = {
  Available: 'available',
  Pending: 'pending',
  Sold: 'sold',
} as const;
export type PetStatus = (typeof PetStatus)[keyof typeof PetStatus];

export interface UIPet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}
