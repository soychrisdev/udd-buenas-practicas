export type UseSelectOptionsParams<Option> = {
  options: readonly Option[];
  isLoading: boolean;
  hasError: boolean;
};

export function useSelectOptions<Option>({
  options,
  isLoading,
  hasError,
}: UseSelectOptionsParams<Option>) {
  if (isLoading) {
    return (
      <option value="loading" disabled>
        Cargando...
      </option>
    );
  }

  if (hasError) {
    return (
      <option value="error" disabled>
        Error al cargar los datos
      </option>
    );
  }

  if (options.length === 0) {
    return (
      <option value="no-data" disabled>
        No hay datos disponibles
      </option>
    );
  }

  return (
    <>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option?.label as unknown as string}
        </option>
      ))}
    </>
  );
}
