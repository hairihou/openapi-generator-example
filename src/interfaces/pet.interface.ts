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
type PetStatus = (typeof PetStatus)[keyof typeof PetStatus];

/**
 * OpenAPI Generatorではなく自分で定義したPetのinterface
 */
export interface MyPet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}
