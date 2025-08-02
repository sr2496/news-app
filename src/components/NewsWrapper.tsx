import { useParams } from "react-router-dom";
import News from "./News";

const NewsWrapper = (props) => {
    const { category } = useParams()


    
    return <News setProgress={props.setProgress} key={category || 'general'} {...props} category={category || 'general'} />
}

export default NewsWrapper;