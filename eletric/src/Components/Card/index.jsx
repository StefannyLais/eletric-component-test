import {useState} from 'react';
import {Container} from './styles'


export default function Card({created_at, description, image_url,regular_color}){
    const [sourcePath, setSourcePath] = useState(image_url)

    function handleChangeOnMouseEnterPath(){
        const path = regular_color ? regular_color : image_url
        setSourcePath(path)
    }
    function handleChangeOnMouseOutPath(){
        setSourcePath(image_url)
    }

    return (
        <Container 
            onMouseEnter={handleChangeOnMouseEnterPath}
            onMouseLeave={handleChangeOnMouseOutPath}
        >
            <img src={sourcePath}/>
            <div>
            <span>{created_at}</span>
            <p> {description}</p>
            <a href="#" >READ MORE</a></div>
        </Container>                        
    )
}


