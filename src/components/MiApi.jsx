//Se importa useEffect
import { useEffect } from "react";


//Se recibe setImagenes como prop
function MiApi({ setImagenes}) {


    // Se llama a la función consultarApi sólo al momento del montaje de acuerdo a pág. 7 de la guía
    useEffect(() => {
        consultarApi();
    }, []);

    // Función que consulta la API, es declarada async para poder utilizar await que a su vez espera el resultado de los métodos fetch y json()
    const consultarApi = async () => {
        const url = "https://picsum.photos/v2/list?page=1&limit=100";

// Se utiliza try catch para mostrar en consola algun error en caso de que el bloque de código dentro de try falle
        try {
            const response = await fetch(url);
            const data = await response.json();

            //Se ordena el array alfabéticamente por autor 
            if (Array.isArray(data)) {
                const dataOrdenada = data.sort((a, b) =>
                    a.author.localeCompare(b.author)
                );
                setImagenes(dataOrdenada);
            }
        } catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <>
        
        </>
    )
}

export default MiApi