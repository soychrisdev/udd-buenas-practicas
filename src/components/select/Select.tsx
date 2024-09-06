import { SelectHTMLAttributes } from "react";
import { useSelect, UseSelectParams } from "./hook/useSelect";
import { useSelectOptions, UseSelectOptionsParams } from "./useSelectOptions";

type SelectProps = Pick<SelectHTMLAttributes<HTMLSelectElement>, "name">;

export function Select<Option>({
  selectedOption,
  options,
  onChange,
  isLoading,
  hasError,
  ...props
}: UseSelectParams<Option> & UseSelectOptionsParams<Option> & SelectProps) {
  const selectProps = useSelect({
    selectedOption,
    options,
    onChange,
    isLoading,
    hasError,
  });
  const selectOptions = useSelectOptions({
    options,
    isLoading,
    hasError,
  });

  return (
    <select {...props} {...selectProps}>
      {isLoading ? (
        <option value="loading">Cargando...</option>
      ) : hasError ? (
        <option value="error">Error al cargar los datos</option>
      ) : options.length === 0 ? (
        <option value="no-data">No hay datos disponibles</option>
      ) : (
        selectOptions
      )}
    </select>
  );
}
