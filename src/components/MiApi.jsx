import { useState, useEffect } from "react";

function MiApi({ setImagenes, imagenes }) {


    // Llamammos a la función consultarApi al momento de montar el componente
    useEffect(() => {
        consultarApi();
    }, []);

    // Función que consulta la API
    const consultarApi = async () => {
        const url = "https://picsum.photos/v2/list?page=1&limit=100";
        
        try {
            const response = await fetch(url);
            const data = await response.json();

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
            <ul>
                {imagenes.map((imagen) => {
                    return <li key={imagen.id}>{imagen.author}</li>
                })}
            </ul>
        </>
    )
}

export default MiApi