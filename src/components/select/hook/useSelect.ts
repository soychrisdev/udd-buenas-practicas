import { ChangeEvent, useCallback } from "react";

export type UseSelectParams<Option> = {
  selectedOption: Option;
  options: readonly Option[];
  onChange: (option: Option) => void;
  isLoading: boolean;
  hasError: boolean;
};

type UseSelect = {
  value: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export function useSelect<Option>({
  selectedOption,
  options,
  onChange,
  isLoading,
  hasError,
}: UseSelectParams<Option>): UseSelect {
  const onChangeCallback = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextOption = options[event.currentTarget.selectedIndex];
      if (nextOption !== undefined) {
        onChange(nextOption);
      }
    },
    [options, onChange]
  );

  let value = -1;

  if (isLoading) {
    value = -2; // Valor especial para indicar que está cargando
  } else if (hasError) {
    value = -3; // Valor especial para indicar que hay un error
  } else if (selectedOption !== undefined) {
    value = options.indexOf(selectedOption);
  }

  return { value, onChange: onChangeCallback };
}
