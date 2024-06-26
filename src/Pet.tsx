import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { type Pet as PetType } from 'petstore-models';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getPetByPetId, postPet } from './api/pet';

interface Props {
  petId: number;
}

export const Pet: React.FC<Props> = ({ petId }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({ queryKey: ['pet', petId], queryFn: () => getPetByPetId(petId) });

  const { mutate } = useMutation({
    mutationFn: (variables: PetType) => postPet(variables),
    onSuccess: (data) => {
      queryClient.setQueryData(['pet', data.id], data);
    },
  });

  const handleAddButtonClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    mutate({
      id: petId,
      name: uuidv4(),
      photoUrls: [],
    });
  }, [mutate, petId]);

  return (
    <div>
      {data !== undefined && (
        <>
          <p>{data.id}</p>
          <p>{data.name}</p>
          {data.photoUrls.length > 0 && (
            <ul>
              {data.photoUrls.map((photoUrl, i) => (
                <li key={i}>
                  <a href={photoUrl}></a>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <button onClick={handleAddButtonClick}>Add Pet</button>
    </div>
  );
};
