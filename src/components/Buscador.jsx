import { useState } from "react";
import Card from 'react-bootstrap/Card';
import './Buscador.css'

//Se recibe imagenes como prop
function Buscador({ imagenes }) {
    const [buscar, setBuscar] = useState("");

    //Búsqueda de datos
    const handleSearch = (e) => {
        setBuscar(e.target.value);
        console.log(e.target.value);
    };

    //Filtrado de datos
    let results = [];
    if (!buscar) {
        results = imagenes;
    } else {
        results = imagenes.filter((imagen) =>
            imagen.author.toLowerCase().includes(buscar.toLowerCase())
        );
    }

    //Render a la vista
    return (
        <>

            <form action="" className="px-2">
                <label><strong>Búsqueda por autor</strong></label>
                <input
                    type="text"
                    placeholder="search"
                    className="form-control"
                    value={buscar}
                    onChange={handleSearch}
                />
            </form>

            {/* Se construye el formato de las cards */}
            <div className="buscador mx-4">
                {/* Se realiza el mapeo de cada imagen */}
                {results.map((imagen) => {
                    // Se asigna key={imagen.id} a cada uno de los elementos de la lista API 
                    return <Card className="mb-5" border="secondary" key={imagen.id} style={{ width: '18rem' }}>
                        {/* Se toma el url para cada imagen */}
                        <Card.Img variant="top" src={imagen.download_url} />
                        <Card.Body className="text-center">
                            <Card.Title className="text-center">{imagen.author}</Card.Title>
                            <Card.Text>
                                <br />
                                {/* Se muestra el id de cada imagen */}
                                <span >Imagen N°{`${imagen.id}`} de nuestro álbum.</span>
                                <span>Ver más detalles en los enlaces.</span>
                            </Card.Text>
                            <Card.Link href={imagen.download_url}>Picsum Link</Card.Link>
                            <Card.Link href={imagen.url}>Unsplash Link</Card.Link>
                        </Card.Body>
                    </Card>
                })}
            </div>
        </>
    );
}

export default Buscador