import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getPetByPetId_easyToFix, postPet_easyToFix } from './api/pet';
import { type UIPet } from './interfaces/pet.interface';

interface Props {
  petId: number;
}

export const PetEasyToFix: React.FC<Props> = ({ petId }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({ queryKey: ['pet', petId], queryFn: () => getPetByPetId_easyToFix(petId) });

  const { mutate } = useMutation({
    mutationFn: (variables: UIPet) => postPet_easyToFix(variables),
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
          <p>{data?.id}</p>
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
