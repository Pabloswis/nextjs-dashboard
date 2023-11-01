'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // usando useDebouncedCallback, solo ejecutará el código después de un tiempo específico una vez que el usuario haya dejado de escribir(300ms).
  const handleSearch = useDebouncedCallback((term: string) => {
    /**
     1- Captura la entrada del usuario.
     2- Actualice la URL con los parámetros de búsqueda.
     3- Mantenga la URL sincronizada con el campo de entrada.
     4- Actualice la tabla para reflejar la consulta de búsqueda.
    */
    const params = new URLSearchParams(searchParams)
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);

    //! se realizan busquedas con cada pulsacion 
    console.log(`Searching... ${term}`);
    //* implementar deboucing...
    /*
    Cómo funciona el debouncing:
      - Evento desencadenante: cuando se produce un evento que debe ser debotado (como una pulsación de tecla en el cuadro de búsqueda), se inicia un temporizador.
      - Esperar: Si se produce un nuevo evento antes de que expire el temporizador, el temporizador se reinicia.
      - Ejecución: Si el temporizador llega al final de su cuenta regresiva, se ejecuta la función debounced.
    */
  }, 300)

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}//utilizaria value si manejo con estados
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
