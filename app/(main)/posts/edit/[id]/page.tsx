import BackButton from "@/components/BackButton";
import * as z from 'zod';
import { useForm } from "react-hook-form";

const PostEditPage = () => {
    return ( 
        <>
            <BackButton text='Back To Posts' link='/posts' />
        </>
     );
}
 
export default PostEditPage;