import { useGetAnios } from "../hook/useGetAnios";
import { Select } from "../../../components/select";
import AnioSelectListWrapper from "../containers/AnioSelectListWrapper";
import { useGlobalStore } from "../../../store/store";
import { useShallow } from "zustand/react/shallow";

export default function AnioSelectList() {
  const setAnio = useGlobalStore((state) => state.setAnio);
  const anio = useGlobalStore(useShallow((state) => state.anio));
  const { data: anioList, isLoading, isError } = useGetAnios();
  console.log(isError);

  return (
    <AnioSelectListWrapper>
      <Select
        name="anio"
        onChange={setAnio}
        // @ts-expect-error anioList is not assignable to type 'never[]'
        options={anioList}
        isLoading={isLoading}
        hasError={isError}
        selectedOption={anio}
      />
    </AnioSelectListWrapper>
  );
}
